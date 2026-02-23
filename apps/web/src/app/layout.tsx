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
import { Providers } from '@/components/Providers';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      {/* Las fuentes (Syne y Manrope) están definidas ahora en el globals.css */}
      <body className={`font-sans bg-[hsl(var(--background-light))] dark:bg-[hsl(var(--background-dark))] text-slate-900 dark:text-slate-200 antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col overflow-x-hidden`}>
        <Providers attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Header />
          <main className="flex-1 w-full relative z-10 animate-in-stagger">
            {children}
          </main>
          <Footer />
          <Toaster richColors position="bottom-right" theme="dark" />
        </Providers>
      </body>
    </html>
  );
}
