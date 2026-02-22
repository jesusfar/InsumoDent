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

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/20 selection:text-primary`}>
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
