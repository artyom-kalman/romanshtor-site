import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit each route as <route>/index.html (e.g. out/privacy/index.html) so
  // static hosts (Timeweb) resolve /privacy and /contacts without needing
  // an .html-rewrite rule. Without this, export produces flat privacy.html
  // files that the host serves only at /privacy.html, 404-ing on /privacy.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
