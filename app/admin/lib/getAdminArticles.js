import { getAllPosts } from '../../utils/blogUtils';
import { CATEGORIES } from '../data/articles';

function inferCategory(post) {
  if (post.category && CATEGORIES.includes(post.category)) {
    return post.category;
  }

  const title = (post.title || '').toLowerCase();
  const slug = (post.slug || '').toLowerCase();
  const combined = `${title} ${slug}`;

  if (
    combined.includes('ai') ||
    combined.includes('artificial intelligence') ||
    combined.includes('machine learning')
  ) {
    return 'AI';
  }
  if (
    combined.includes('devops') ||
    combined.includes('ci/cd') ||
    combined.includes('kubernetes') ||
    combined.includes('docker')
  ) {
    return 'DevOps';
  }
  if (
    combined.includes('cloud') ||
    combined.includes('aws') ||
    combined.includes('azure') ||
    combined.includes('serverless')
  ) {
    return 'Cloud';
  }
  if (
    combined.includes('tutorial') ||
    combined.includes('guide') ||
    combined.includes('mastering') ||
    combined.includes('learn')
  ) {
    return 'Tutorials';
  }
  if (
    combined.includes('development') ||
    combined.includes('software') ||
    combined.includes('nextjs') ||
    combined.includes('blockchain') ||
    combined.includes('cybersecurity') ||
    combined.includes('ui/ux') ||
    combined.includes('data')
  ) {
    return 'Development';
  }

  return 'Technology';
}

/**
 * Builds admin article rows from the same markdown posts the blog uses,
 * so coverImage / title / excerpt stay in sync with /blog and /blog/[slug].
 */
export async function getAdminArticlesFromPosts() {
  const posts = await getAllPosts({ includeDrafts: true });

  return posts.map((post) => {
    const content = post.content || '';
    const coverImage =
      typeof post.image_url === 'string' && post.image_url.trim()
        ? post.image_url.trim()
        : typeof post.coverImage === 'string'
          ? post.coverImage.trim()
          : '';

    return {
      id: post.id,
      title: post.title || 'Untitled',
      slug: post.slug,
      date: post.date || post.published_at || '',
      excerpt: post.excerpt || '',
      coverImage,
      author: post.author || 'SyncOps',
      authorRole: post.authorRole || post.author_role || 'Tech Innovators',
      category: inferCategory(post),
      tags: Array.isArray(post.tags) ? post.tags : [],
      featured: Boolean(post.featured),
      status: post.status || 'published',
      views: typeof post.views === 'number' ? post.views : 0,
      content,
      metaDescription:
        post.metaDescription || post.meta_description || post.excerpt || '',
      imagePublicId: post.image_public_id || '',
      imageWidth: post.image_width || 0,
      imageHeight: post.image_height || 0,
      imageFormat: post.image_format || '',
    };
  });
}
