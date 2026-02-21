/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nota: habilitar output: 'standalone' en Dockerfile para deploy (Phase 6)
  // No se usa en desarrollo para evitar errores de symlinks en Windows

  // Configurar dominios permitidos para imágenes externas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
