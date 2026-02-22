import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      // Legacy WordPress sitemap endpoint
      {
        source: "/wp-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },

      // Elementor library query URLs should not be indexable; redirect to home.
      {
        source: "/:path*",
        has: [{ type: "query", key: "elementor_library" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
