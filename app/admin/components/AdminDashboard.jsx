'use client';

import { useEffect, useMemo, useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import ArticleList from './ArticleList';
import NewArticleForm from './NewArticleForm';
import AdminLogin from './AdminLogin';
import { formatArticleDate } from '../data/articles';

function PlaceholderPanel({ title, description }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">{description}</p>
    </div>
  );
}

function DashboardPanel({ articles, onGoArticles, onNewArticle }) {
  const published = articles.filter((a) => a.status === 'published').length;
  const drafts = articles.filter((a) => a.status === 'draft').length;
  const featured = articles.filter((a) => a.featured).length;
  const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);

  const cards = [
    { label: 'Total Articles', value: articles.length },
    { label: 'Published', value: published },
    { label: 'Drafts', value: drafts },
    { label: 'Featured', value: featured },
    { label: 'Total Views', value: totalViews.toLocaleString() },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={onGoArticles}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          View Articles
        </button>
        <button
          type="button"
          onClick={onNewArticle}
          className="rounded-lg bg-[#00B894] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#00a383]"
        >
          Create Article
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboard({ initialArticles = [] }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('articles');
  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingArticle, setEditingArticle] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    fetch('/api/admin/session')
      .then((response) => response.json())
      .then((data) => setIsAuthenticated(Boolean(data.authenticated)))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setAuthChecked(true));
  }, []);

  const sidebarSection = useMemo(() => {
    if (activeSection === 'new-article') return 'articles';
    return activeSection;
  }, [activeSection]);

  const handleLogout = async () => {
    await fetch('/api/admin/session', { method: 'DELETE' }).catch(() => {});
    setIsAuthenticated(false);
    setActiveSection('articles');
    setEditingArticle(null);
    setSearchTerm('');
  };

  const handleNavigate = (sectionId) => {
    setEditingArticle(null);
    setActiveSection(sectionId);
  };

  const handleNewArticle = () => {
    setEditingArticle(null);
    setActiveSection('new-article');
  };

  const handleEdit = (article) => {
    setEditingArticle(article);
    setActiveSection('new-article');
  };

  const handleDelete = async (id) => {
    const response = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      window.alert(data.error || 'Failed to delete the article.');
      return;
    }
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };

  const handleSubmitArticle = async (payload) => {
    setSaving(true);
    setSaveError('');

    const publishedAt = new Date(payload.date);
    if (Number.isNaN(publishedAt.getTime())) {
      setSaveError('Publish date is invalid.');
      setSaving(false);
      return;
    }

    const body = {
      title: payload.title,
      slug: payload.slug,
      excerpt: payload.excerpt,
      content: payload.content,
      image_url: payload.coverImage,
      image_public_id: payload.imagePublicId,
      image_width: Number(payload.imageWidth),
      image_height: Number(payload.imageHeight),
      image_format: payload.imageFormat,
      author: payload.author,
      author_role: payload.authorRole,
      category: payload.category,
      tags: payload.tags,
      featured: payload.featured,
      status: payload.status,
      views: payload.views,
      meta_description: payload.metaDescription,
      published_at: publishedAt.toISOString(),
    };

    try {
      const response = await fetch(payload.id ? `/api/blogs/${payload.id}` : '/api/blogs', {
        method: payload.id ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(body),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || `Failed to save the article (${response.status}).`);
      }
      if (!data.blog?.id) {
        throw new Error('Save succeeded but no blog record was returned.');
      }

      const article = {
        ...payload,
        id: data.blog.id,
        coverImage: data.blog.image_url,
        imagePublicId: data.blog.image_public_id,
        imageWidth: data.blog.image_width,
        imageHeight: data.blog.image_height,
        imageFormat: data.blog.image_format,
        date: formatArticleDate(data.blog.published_at || payload.date),
        status: data.blog.status,
      };

      setArticles((prev) =>
        payload.id
          ? prev.map((item) => (item.id === payload.id ? article : item))
          : [article, ...prev]
      );
      if (data.warning) window.alert(data.warning);
      setEditingArticle(null);
      setActiveSection('articles');
    } catch (error) {
      setSaveError(error.message || 'Failed to save the article.');
      throw error;
    } finally {
      setSaving(false);
    }
  };

  if (!authChecked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B0A1C]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-[#00B894]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <AdminSidebar
        activeSection={sidebarSection}
        onNavigate={handleNavigate}
        onLogout={handleLogout}
      />

      <div className="ml-64 flex min-h-screen flex-col">
        {activeSection !== 'new-article' && (
          <AdminHeader
            activeSection={activeSection}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onNewArticle={handleNewArticle}
            showSearch={activeSection === 'articles'}
          />
        )}

        <main
          className={
            activeSection === 'new-article'
              ? 'flex-1'
              : 'flex-1 p-5 sm:p-6'
          }
        >
          {activeSection === 'dashboard' && (
            <DashboardPanel
              articles={articles}
              onGoArticles={() => setActiveSection('articles')}
              onNewArticle={handleNewArticle}
            />
          )}

          {activeSection === 'articles' && (
            <ArticleList
              articles={articles}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onNewArticle={handleNewArticle}
            />
          )}

          {activeSection === 'new-article' && (
            <NewArticleForm
              initialArticle={editingArticle}
              onCancel={() => {
                setEditingArticle(null);
                setActiveSection('articles');
              }}
              onSubmit={handleSubmitArticle}
              submitting={saving}
              submitError={saveError}
            />
          )}

          {activeSection === 'users' && (
            <PlaceholderPanel
              title="Users"
              description="User management will appear here. For now, focus on articles and publishing workflow."
            />
          )}

          {activeSection === 'comments' && (
            <PlaceholderPanel
              title="Comments"
              description="Comment moderation tools will be available in a later update."
            />
          )}

          {activeSection === 'settings' && (
            <PlaceholderPanel
              title="Settings"
              description="Admin preferences and site settings will live here."
            />
          )}
        </main>
      </div>
    </div>
  );
}
