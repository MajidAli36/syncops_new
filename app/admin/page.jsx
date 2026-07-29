import { getAdminArticlesFromPosts } from './lib/getAdminArticles';
import AdminDashboard from './components/AdminDashboard';
import { isAdminRequest } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Admin | SyncOps',
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const initialArticles = (await isAdminRequest())
    ? await getAdminArticlesFromPosts()
    : [];

  return <AdminDashboard initialArticles={initialArticles} />;
}
