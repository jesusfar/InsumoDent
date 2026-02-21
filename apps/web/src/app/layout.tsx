import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InsumoDent — Metabuscador de Insumos Odontológicos',
  description:
    'Compará precios de insumos odontológicos en múltiples tiendas de Argentina e internacional. Encontrá el mejor precio para materiales, equipamiento e instrumental dental.',
  keywords: [
    'insumos odontológicos',
    'materiales dentales',
    'equipamiento dental',
    'precios dental',
    'comparador precios',
    'Argentina',
  ],
  openGraph: {
    title: 'InsumoDent — Metabuscador de Insumos Odontológicos',
    description:
      'Compará precios de insumos odontológicos en múltiples tiendas de Argentina e internacional.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'InsumoDent',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
