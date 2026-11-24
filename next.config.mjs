/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for production Docker (copies a minimal runnable server into .next/standalone)
  output: 'standalone',
  // Target modern browsers to reduce bundle size
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'xsgames.co', pathname: '/**' },
      { protocol: 'https', hostname: 'pub-6381ddf08d4a4ba18125866a4932b87e.r2.dev', pathname: '/**' },
      { protocol: 'https', hostname: 'pub-e82cc9e80e5b41f0822b99235bdacd0b.r2.dev', pathname: '/**' },
      { protocol: 'https', hostname: 'pub-4ca13fa6704140af87fc061dad41881c.r2.dev', pathname: '/**' },
      { protocol: 'https', hostname: 'avatar.iran.liara.run', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'plus.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'i.pravatar.cc', pathname: '/**' },
      { protocol: 'https', hostname: 'randomuser.me', pathname: '/**' },
      { protocol: 'https', hostname: 'ui-avatars.com', pathname: '/**' },
      // Common image hosting services
      { protocol: 'https', hostname: 'cdn.jsdelivr.net', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.cloudflare.com', pathname: '/**' },
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.imgur.com', pathname: '/**' },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for better caching
    qualities: [75, 85, 90, 95, 100],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // swcMinify is deprecated in Next.js 15 - minification is automatic
  experimental: {
    optimizeCss: true, // Optimize CSS
    optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'], // Tree-shake unused exports
  },
  // Ensure all JavaScript is minified, including webpack runtime chunks
  webpack: (config, { dev, isServer }) => {
    // Only apply in production builds for client-side
    if (!dev && !isServer) {
      // Ensure minification is enabled and all chunks are processed
      if (config.optimization) {
        config.optimization.minimize = true;
        // Ensure runtime chunks are also minified
        if (config.optimization.runtimeChunk) {
          // Runtime chunks should be minified by default, but ensure it's enabled
        }
      }
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Security Headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Content Security Policy - Secure by default, allows eval only for trusted sources
          // Note: 'unsafe-eval' is required for some third-party scripts (reCAPTCHA, webpack runtime)
          // This is a security trade-off but necessary for functionality
          // In development, Next.js webpack uses eval() for hot module replacement
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // script-src includes 'unsafe-eval' to allow eval() for reCAPTCHA and webpack runtime (dev mode HMR)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://www.gstatic.com/recaptcha/",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.gstatic.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "media-src 'self' https://res.cloudinary.com https: blob:",
              "connect-src 'self' https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://challenges.cloudflare.com",
              "frame-src 'self' https://www.google.com https://www.recaptcha.net",
              "worker-src 'self' blob: https://www.gstatic.com",
              "child-src 'self' https://www.google.com https://www.recaptcha.net",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Performance Headers - Reduce server response time
          {
            key: 'Connection',
            value: 'keep-alive',
          },
          {
            key: 'Keep-Alive',
            value: 'timeout=5, max=1000',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/:path*\\.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache CSS and JS for 1 year
        source: '/:path*\\.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML for 1 hour
        source: '/:path*\\.(html)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
