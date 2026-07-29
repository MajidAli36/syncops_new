'use client';

const titles = {
  dashboard: 'Dashboard Overview',
  articles: 'Manage Articles',
  'new-article': 'Create Article',
  users: 'Users',
  comments: 'Comments',
  settings: 'Settings',
};

export default function AdminHeader({
  activeSection = 'articles',
  searchTerm = '',
  onSearchChange,
  onNewArticle,
  showSearch = false,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            {titles[activeSection] || 'Admin Dashboard'}
          </h1>
          <p className="mt-0.5 text-sm text-gray-500">
            Content matches your public blog listing and post detail pages
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {showSearch && (
            <div className="relative min-w-[220px] flex-1 sm:flex-none">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#00B894] focus:ring-2 focus:ring-[#00B894]/20"
              />
              <svg
                className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-gray-400"
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
          )}

          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-[#00B894] hover:text-[#00B894]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Blog Page
          </a>

          <button
            type="button"
            onClick={onNewArticle}
            className="inline-flex items-center gap-2 rounded-lg bg-[#00B894] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#00a383]"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            New Article
          </button>
        </div>
      </div>
    </header>
  );
}
