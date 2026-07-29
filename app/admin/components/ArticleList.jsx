'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { CalendarDays, Clock, ExternalLink, Pencil, Trash2 } from 'lucide-react';
import {
  CATEGORIES,
  coverPlaceholder,
  displayArticleDate,
  estimateReadTime,
} from '../data/articles';

function ArticleCover({ src, alt, priority = false }) {
  const [failed, setFailed] = useState(false);
  const imageSrc = !failed && src ? src : coverPlaceholder;

  return (
    <Image
      src={imageSrc}
      alt={alt || 'Article cover'}
      fill
      sizes="(min-width: 640px) 176px, 100vw"
      className="object-cover transition duration-300 group-hover:scale-[1.03]"
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}

const PAGE_SIZE = 6;

const statusStyles = {
  published: 'bg-green-100 text-green-800',
  draft: 'bg-amber-100 text-amber-800',
};

export default function ArticleList({
  articles = [],
  searchTerm = '',
  onSearchChange,
  onDelete,
  onEdit,
  onNewArticle,
}) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [featuredFilter, setFeaturedFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [page, setPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesSearch =
        !query ||
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.slug.toLowerCase().includes(query) ||
        (article.category || '').toLowerCase().includes(query) ||
        (article.author || '').toLowerCase().includes(query) ||
        (article.tags || []).some((tag) => tag.toLowerCase().includes(query));

      const matchesStatus =
        statusFilter === 'all' || article.status === statusFilter;

      const matchesFeatured =
        featuredFilter === 'all' ||
        (featuredFilter === 'featured' && article.featured) ||
        (featuredFilter === 'regular' && !article.featured);

      const matchesCategory =
        categoryFilter === 'all' || article.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesFeatured && matchesCategory;
    });
  }, [articles, searchTerm, statusFilter, featuredFilter, categoryFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [searchTerm, statusFilter, featuredFilter, categoryFilter, articles.length]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const paginatedArticles = filteredArticles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const from = filteredArticles.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, filteredArticles.length);

  const clearFilters = () => {
    onSearchChange?.('');
    setStatusFilter('all');
    setFeaturedFilter('all');
    setCategoryFilter('all');
  };

  const hasActiveFilters =
    searchTerm.trim() ||
    statusFilter !== 'all' ||
    featuredFilter !== 'all' ||
    categoryFilter !== 'all';

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              Blog Articles
            </h2>
            <p className="mt-0.5 text-sm text-gray-500">
              {filteredArticles.length}{' '}
              {filteredArticles.length === 1 ? 'result' : 'results'} · {articles.length}{' '}
              total · same posts as <span className="font-medium text-gray-700">/blog</span>
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search title, slug, category, author, tags..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20"
            />
            <svg
              className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All' },
              { id: 'featured', label: 'Featured' },
              { id: 'regular', label: 'Regular' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFeaturedFilter(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  featuredFilter === item.id
                    ? 'bg-[#00B894] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}

            {[
              { id: 'all', label: 'Any status' },
              { id: 'published', label: 'Published' },
              { id: 'draft', label: 'Drafts' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStatusFilter(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  statusFilter === item.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20"
            >
              <option value="all">All categories</option>
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {paginatedArticles.length > 0 && (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {paginatedArticles.map((article, index) => {
            const cover = (article.coverImage || '').trim();
            const readTime = estimateReadTime(article.content, article.excerpt);

            return (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-[#00B894]/35 hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-40 w-full shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:min-h-[180px] sm:w-44">
                    <ArticleCover
                      src={cover}
                      alt={article.title}
                      priority={index < 4}
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {article.featured && (
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                          Featured
                        </span>
                      )}
                      <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-700">
                        {article.category || 'Technology'}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${
                          statusStyles[article.status] || statusStyles.draft
                        }`}
                      >
                        {article.status}
                      </span>
                    </div>

                    <h3 className="line-clamp-2 text-base font-bold leading-snug text-gray-900">
                      {article.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
                      {article.excerpt}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                      <span className="font-medium text-gray-700">
                        {article.author || 'SyncOps'}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5 text-gray-400" />
                        {displayArticleDate(article.date)}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gray-400" />
                        {readTime} min
                      </span>
                    </div>

                    <p className="mt-2 truncate text-xs text-gray-400">
                      /blog/{article.slug}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3">
                      <a
                        href={`/blog/${article.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View post
                      </a>
                      <button
                        type="button"
                        onClick={() => onEdit?.(article)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#00B894]/10 px-3 py-1.5 text-xs font-medium text-[#008f73] transition hover:bg-[#00B894]/15"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (window.confirm(`Delete “${article.title}”?`)) {
                            onDelete?.(article.id);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {filteredArticles.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
          <h3 className="text-base font-semibold text-gray-900">No articles found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {hasActiveFilters
              ? 'Try adjusting your search or filters.'
              : 'Create your first article to get started.'}
          </p>
          <div className="mt-5 flex justify-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Clear filters
              </button>
            )}
            <button
              type="button"
              onClick={onNewArticle}
              className="rounded-lg bg-[#00B894] px-4 py-2 text-sm font-medium text-white hover:bg-[#00a383]"
            >
              New Article
            </button>
          </div>
        </div>
      )}

      {filteredArticles.length > 0 && (
        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Showing {from}–{to} of {filteredArticles.length}
            {hasActiveFilters ? ' filtered' : ''} articles
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setPage(pageNumber)}
                className={`min-w-8 rounded-md border px-3 py-1.5 text-sm ${
                  page === pageNumber
                    ? 'border-[#00B894] bg-[#00B894]/10 text-[#00B894]'
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button
              type="button"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
