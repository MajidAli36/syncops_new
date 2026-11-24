export default function BlogLayout({ children }) {
  // Root layout already wraps pages in <main>; avoid nested mains for valid HTML/SEO.
  return <>{children}</>;
}
