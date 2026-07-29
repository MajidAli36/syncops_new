'use client';

import Image from 'next/image';
import {
  LayoutDashboard,
  FileText,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react';

const sections = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'articles', name: 'Articles', icon: FileText },
  // { id: 'users', name: 'Users', icon: Users },
  // { id: 'comments', name: 'Comments', icon: MessageSquare },
  // { id: 'settings', name: 'Settings', icon: Settings },
];

export default function AdminSidebar({
  activeSection = 'articles',
  onNavigate,
  onLogout,
}) {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-white/10 bg-[#0B0A1C] text-white">
      <div className="border-b border-white/10 px-5 py-5">
        <a
          href="/"
          className="inline-flex items-center gap-3 transition opacity-95 hover:opacity-100"
          title="Go to homepage"
        >
          <div className="relative h-10 w-[132px] shrink-0">
            <Image
              src="/images/logo-footer.png"
              alt="SyncOps"
              fill
              sizes="132px"
              className="object-contain object-left"
              priority
            />
          </div>
        </a>
        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-white/40">
          Menu
        </p>
        <ul className="space-y-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            const Icon = section.icon;
            return (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onNavigate?.(section.id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#00B894] text-white shadow-sm'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4 shrink-0" aria-hidden />
                  {section.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="space-y-3 border-t border-white/10 p-4">
        <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white/10">
            <Image
              src="/favicon.ico"
              alt="Admin"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">Admin User</p>
            <p className="truncate text-xs text-white/45">info@syncops.tech</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  );
}
