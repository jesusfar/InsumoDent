import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-2xl">dentistry</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Insumodent
                    </span>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
                    <div className="flex items-center gap-6">
                        <Link
                            href="/tiendas"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary"
                        >
                            Tiendas
                        </Link>
                        <Link
                            href="/ofertas"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary"
                        >
                            Ofertas
                        </Link>
                        <Link
                            href="/mi-cuenta"
                            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary"
                        >
                            Mi Cuenta
                        </Link>
                    </div>
                    <button className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                        Ingresar
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-slate-600 hover:text-primary dark:text-slate-300">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
