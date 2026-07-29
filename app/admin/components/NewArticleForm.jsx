'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ImagePlus,
  Loader2,
  Trash2,
  Upload,
} from 'lucide-react';
import {
  CATEGORIES,
  coverPlaceholder,
  estimateReadTime,
  formatArticleDate,
  slugify,
} from '../data/articles';
import RichTextEditor from './RichTextEditor';

function stripHtml(html = '') {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function publicIdFromUrl(imageUrl = '') {
  try {
    const marker = '/image/upload/';
    const uploadPath = new URL(imageUrl).pathname.split(marker)[1];
    if (!uploadPath) return '';
    return decodeURIComponent(uploadPath)
      .replace(/^v\d+\//, '')
      .replace(/\.[a-z0-9]+$/i, '')
      .split('/')
      .filter((segment) => !segment.includes(',') && !/^(?:f_|q_|c_|w_|h_|g_|e_|fl_)/.test(segment))
      .join('/');
  } catch {
    return '';
  }
}

function withImageDefaults(article) {
  const coverImage = (article?.coverImage || '').trim();
  return {
    imagePublicId: article?.imagePublicId || publicIdFromUrl(coverImage),
    imageWidth: Number(article?.imageWidth) || 1600,
    imageHeight: Number(article?.imageHeight) || 900,
    imageFormat: article?.imageFormat || 'jpg',
  };
}

const emptyForm = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  coverImage: '',
  imagePublicId: '',
  imageWidth: 0,
  imageHeight: 0,
  imageFormat: '',
  author: 'SyncOps',
  authorRole: 'Tech Innovators',
  category: CATEGORIES[0],
  featured: false,
  status: 'draft',
  tags: [],
  metaDescription: '',
  date: formatArticleDate(),
};

const fieldClass =
  'w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/15';

export default function NewArticleForm({
  initialArticle = null,
  onCancel,
  onSubmit,
  submitting = false,
  submitError = '',
}) {
  const [form, setForm] = useState(emptyForm);
  const [tagInput, setTagInput] = useState('');
  const [slugManual, setSlugManual] = useState(false);
  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [pendingPublicId, setPendingPublicId] = useState('');
  const fileInputRef = useRef(null);

  const isEditing = Boolean(initialArticle?.id);

  useEffect(() => {
    if (initialArticle) {
      const imageDefaults = withImageDefaults(initialArticle);
      setForm({
        title: initialArticle.title || '',
        slug: initialArticle.slug || '',
        excerpt: initialArticle.excerpt || '',
        content: initialArticle.content || '',
        coverImage: initialArticle.coverImage || '',
        imagePublicId: imageDefaults.imagePublicId,
        imageWidth: imageDefaults.imageWidth,
        imageHeight: imageDefaults.imageHeight,
        imageFormat: imageDefaults.imageFormat,
        author: initialArticle.author || 'SyncOps',
        authorRole: initialArticle.authorRole || 'Tech Innovators',
        category: initialArticle.category || CATEGORIES[0],
        featured: Boolean(initialArticle.featured),
        status: initialArticle.status || 'draft',
        tags: initialArticle.tags || [],
        metaDescription: initialArticle.metaDescription || '',
        date: formatArticleDate(initialArticle.date),
      });
      setSlugManual(true);
      setErrors({});
      setUploadError('');
      setPendingPublicId('');
      return;
    }

    setForm({ ...emptyForm, date: formatArticleDate() });
    setSlugManual(false);
    setTagInput('');
    setErrors({});
    setUploadError('');
    setPendingPublicId('');
  }, [initialArticle]);

  const metaCount = form.metaDescription.length;
  const coverPreview = form.coverImage.trim() || coverPlaceholder;
  const readTime = estimateReadTime(form.content, form.excerpt);
  const hasCustomCover = Boolean(form.coverImage.trim());
  const subtitleRef = useRef(null);

  const previewSlug = useMemo(
    () => (form.slug ? `/blog/${form.slug}` : '/blog/your-article-title'),
    [form.slug]
  );

  useEffect(() => {
    const el = subtitleRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.max(el.scrollHeight, 40)}px`;
  }, [form.excerpt]);

  const updateField = (field, value) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'title' && !slugManual) {
        next.slug = slugify(value);
      }
      return next;
    });
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const uploadFile = async (file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please choose an image file (JPG, PNG, WEBP, or GIF).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image must be 5MB or smaller.');
      return;
    }

    setUploading(true);
    setUploadError('');

    try {
      const body = new FormData();
      body.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body,
        credentials: 'same-origin',
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `Upload failed (${res.status})`);
      }

      if (!data.secure_url || !data.public_id) {
        throw new Error('Upload succeeded but image metadata was incomplete.');
      }

      if (pendingPublicId) {
        await fetch('/api/upload', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ public_id: pendingPublicId }),
        }).catch(() => {});
      }
      setPendingPublicId(data.public_id);
      setForm((prev) => ({
        ...prev,
        coverImage: data.secure_url,
        imagePublicId: data.public_id,
        imageWidth: data.width,
        imageHeight: data.height,
        imageFormat: data.format,
      }));
    } catch (err) {
      setUploadError(err.message || 'Upload failed. Try again.');
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) uploadFile(file);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) uploadFile(file);
  };

  const cancelForm = async () => {
    if (pendingPublicId) {
      await fetch('/api/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id: pendingPublicId }),
      }).catch(() => {});
    }
    onCancel?.();
  };

  const addTag = () => {
    const parts = tagInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    if (!parts.length) return;
    setForm((prev) => {
      const existing = new Set(prev.tags.map((t) => t.toLowerCase()));
      const next = [...prev.tags];
      for (const tag of parts) {
        if (!existing.has(tag.toLowerCase())) {
          next.push(tag);
          existing.add(tag.toLowerCase());
        }
      }
      return { ...prev, tags: next };
    });
    setTagInput('');
  };

  const removeTag = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((item) => item !== tag),
    }));
  };

  const validate = () => {
    const nextErrors = {};
    const imagePublicId = form.imagePublicId || publicIdFromUrl(form.coverImage);

    if (!form.title.trim()) nextErrors.title = 'Title is required';
    if (!form.slug.trim()) nextErrors.slug = 'Slug is required';
    if (!form.excerpt.trim()) nextErrors.excerpt = 'Excerpt is required';
    if (!stripHtml(form.content)) nextErrors.content = 'Content is required';
    if (
      !form.coverImage.trim() ||
      !imagePublicId ||
      !Number(form.imageWidth) ||
      !Number(form.imageHeight) ||
      !form.imageFormat
    ) {
      nextErrors.coverImage = 'Please upload a Cloudinary cover image before publishing';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (statusOverride) => {
    if (!validate()) {
      window.requestAnimationFrame(() => {
        const firstError = document.querySelector('[data-field-error="true"]');
        firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      return;
    }

    try {
      await onSubmit?.({
        ...form,
        status: statusOverride || form.status,
        title: form.title.trim(),
        slug: slugify(form.slug),
        excerpt: form.excerpt.trim(),
        content: form.content.trim(),
        coverImage: form.coverImage.trim(),
        imagePublicId: form.imagePublicId || publicIdFromUrl(form.coverImage),
        imageWidth: Number(form.imageWidth) || 1600,
        imageHeight: Number(form.imageHeight) || 900,
        imageFormat: form.imageFormat || 'jpg',
        author: form.author.trim() || 'SyncOps',
        authorRole: form.authorRole.trim() || 'Tech Innovators',
        metaDescription:
          form.metaDescription.trim() || form.excerpt.trim().slice(0, 160),
        date: formatArticleDate(form.date),
        views: initialArticle?.views ?? 0,
        id: initialArticle?.id,
      });
      setPendingPublicId('');
    } catch {
      // Parent surfaces submitError
    }
  };

  const clearCoverImage = () => {
    setForm((prev) => ({
      ...prev,
      coverImage: '',
      imagePublicId: '',
      imageWidth: 0,
      imageHeight: 0,
      imageFormat: '',
    }));
    setErrors((prev) => ({ ...prev, coverImage: undefined }));
  };

  const validationMessages = Object.values(errors).filter(Boolean);
  const tagsDisplay = form.tags.join(', ');

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Status bar — matches reference */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={cancelForm}
              disabled={submitting}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-800 transition hover:text-gray-600 disabled:opacity-60"
            >
              <ArrowLeft className="h-4 w-4" />
              Publish
            </button>
            <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
              <Clock className="h-3.5 w-3.5" />
              {form.status === 'published' ? 'Published' : 'Draft ready'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-[#00B894] hover:text-[#00B894]"
            >
              Blog Page
            </a>
            <span className="text-sm text-gray-400">{readTime} min read</span>
          </div>
        </div>
      </div>

      <form
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 pt-8 sm:px-6 xl:grid-cols-[minmax(0,1fr)_360px]"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="min-w-0">
        {/* Title */}
        <div>
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Article title"
            className="w-full border-0 bg-transparent text-3xl font-bold tracking-tight text-gray-900 outline-none placeholder:font-semibold placeholder:text-gray-300 sm:text-4xl"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600" data-field-error="true">
              {errors.title}
            </p>
          )}
        </div>

        {/* Subtitle / excerpt — wraps fully when long */}
        <div className="mt-2">
          <textarea
            ref={subtitleRef}
            rows={1}
            value={form.excerpt}
            onChange={(e) => updateField('excerpt', e.target.value)}
            placeholder="Add a subtitle…"
            className="block w-full resize-none overflow-hidden border-0 bg-transparent text-lg leading-relaxed text-gray-600 outline-none placeholder:text-gray-300 sm:text-xl sm:leading-relaxed"
          />
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-600" data-field-error="true">
              {errors.excerpt}
            </p>
          )}
        </div>

        {/* Rich text body */}
        <div className="mt-8">
          <RichTextEditor
            key={initialArticle?.id || 'new-article'}
            value={form.content}
            onChange={(html) => updateField('content', html)}
            placeholder="Start writing, type / for blocks, or paste images…"
          />
          {errors.content && (
            <p className="mt-2 text-sm text-red-600" data-field-error="true">
              {errors.content}
            </p>
          )}
        </div>

        {/* SEO & topics */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-base font-bold text-gray-900">SEO & topics</h3>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                SEO URL slug
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-sm text-gray-400">
                  /blog/
                </span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => {
                    setSlugManual(true);
                    updateField('slug', slugify(e.target.value));
                  }}
                  placeholder="untitled-draft"
                  className={`${fieldClass} pl-[3.75rem]`}
                />
              </div>
              {errors.slug && (
                <p className="mt-1 text-sm text-red-600" data-field-error="true">
                  {errors.slug}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Meta title
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Untitled draft"
                className={fieldClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Meta description
              </label>
              <textarea
                rows={2}
                value={form.metaDescription}
                onChange={(e) => updateField('metaDescription', e.target.value)}
                placeholder="SEO description (defaults to excerpt)"
                className={fieldClass}
              />
              <p
                className={`mt-1 text-xs ${
                  metaCount > 160 ? 'text-amber-600' : 'text-gray-500'
                }`}
              >
                {metaCount}/160
                {metaCount > 160 ? ' · longer than recommended for SEO' : ''}
              </p>
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Cover / OG image
              </label>
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={onDrop}
                className={`relative overflow-hidden rounded-xl border-2 border-dashed transition ${
                  dragOver
                    ? 'border-[#00B894] bg-[#00B894]/5'
                    : errors.coverImage
                      ? 'border-red-300 bg-red-50/40'
                      : 'border-gray-200 bg-gray-50'
                }`}
              >
                {hasCustomCover ? (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={coverPreview}
                      alt="Cover preview"
                      className="h-40 w-full object-cover sm:h-48"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="truncate text-xs text-white/90">
                        Hero & social share image
                      </p>
                      <div className="flex shrink-0 gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploading}
                          className="rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-medium text-gray-800 hover:bg-white"
                        >
                          Replace
                        </button>
                        <button
                          type="button"
                          onClick={clearCoverImage}
                          className="inline-flex items-center gap-1 rounded-md bg-red-500/90 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-red-500"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex w-full flex-col items-center justify-center gap-2 px-4 py-8 text-center"
                  >
                    {uploading ? (
                      <Loader2 className="h-8 w-8 animate-spin text-[#00B894]" />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                        <ImagePlus className="h-5 w-5 text-[#00B894]" />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {uploading ? 'Uploading…' : 'Upload cover image'}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Drag & drop or click · JPG, PNG, WEBP · max 5MB
                      </p>
                    </div>
                  </button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={onFileChange}
                />
              </div>
              {(uploadError || errors.coverImage) && (
                <p className="mt-1.5 text-sm text-red-600" data-field-error="true">
                  {uploadError || errors.coverImage}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                onBlur={addTag}
                placeholder={tagsDisplay || 'Add tags…'}
                className={fieldClass}
              />
              {form.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {form.tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800 hover:bg-teal-100"
                    >
                      {tag}
                      <span aria-hidden>×</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) => updateField('category', e.target.value)}
                className={fieldClass}
              >
                {CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Publish date
              </label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3.5 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => updateField('date', e.target.value)}
                  className={`${fieldClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) => updateField('status', e.target.value)}
                className={fieldClass}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => updateField('author', e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Author role
              </label>
              <input
                type="text"
                value={form.authorRole}
                onChange={(e) => updateField('authorRole', e.target.value)}
                className={fieldClass}
              />
            </div>

            <div className="flex items-end sm:col-span-2">
              <label className="flex w-full cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => updateField('featured', e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#00B894] focus:ring-[#00B894]"
                />
                <span className="text-sm text-gray-700">Featured article</span>
              </label>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={cancelForm}
            disabled={submitting}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('draft')}
            disabled={uploading || submitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-60"
          >
            {submitting ? 'Saving…' : 'Save Draft'}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit('published')}
            disabled={uploading || submitting}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B894] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#00a383] disabled:opacity-60"
          >
            <Upload className="h-4 w-4" />
            {submitting
              ? 'Saving…'
              : isEditing
                ? 'Update & Publish'
                : 'Publish'}
          </button>
        </div>

        {(validationMessages.length > 0 || submitError) && (
          <div
            className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            role="alert"
            data-field-error="true"
          >
            {validationMessages.length > 0 ? (
              <ul className="list-disc space-y-1 pl-4">
                {validationMessages.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            ) : null}
            {submitError ? <p className="mt-1 font-medium">{submitError}</p> : null}
          </div>
        )}
        </div>

        {/* Live preview — cover, title, subtitle only */}
        <aside className="xl:sticky xl:top-[3.25rem] xl:self-start">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Detail page preview
              </p>
              <p className="mt-0.5 truncate text-xs text-gray-500">{previewSlug}</p>
            </div>

            <div className="p-4 sm:p-5">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverPreview}
                  alt=""
                  className="h-40 w-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-gray-900">
                {form.title.trim() || 'Your article title'}
              </h3>

              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-600">
                {form.excerpt.trim() ||
                  'Your excerpt will appear on blog cards and as the post description.'}
              </p>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}
