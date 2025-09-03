import type { NextConfig } from 'next';

// Permite export estático compatible con GitHub Pages
// y soporta basePath dinámico vía NEXT_PUBLIC_BASE_PATH.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
  ...(basePath ? { assetPrefix: basePath } : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // GitHub Pages no soporta el optimizador de imágenes de Next.
    unoptimized: true,
  },
};

export default nextConfig;
