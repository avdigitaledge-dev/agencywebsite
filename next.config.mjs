/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // CSP is in Report-Only mode initially so it cannot break the site.
    // Watch the browser console for violations, then tighten + switch to
    // "Content-Security-Policy" header to enforce.
    key: "Content-Security-Policy-Report-Only",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com https://*.google-analytics.com https://*.googleapis.com https://*.gstatic.com https://static.mailerlite.com https://assets.mailerlite.com https://va.vercel-scripts.com https://vercel.live",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://*.google-analytics.com https://*.googletagmanager.com https://*.googleapis.com https://*.mailerlite.com https://api.mailerlite.com https://va.vercel-scripts.com https://vercel.live https://vitals.vercel-insights.com",
      "frame-src 'self' https://www.google.com https://*.google.com https://www.youtube.com https://*.youtube.com https://calendly.com https://*.calendly.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://*.mailerlite.com",
      "frame-ancestors 'self'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
