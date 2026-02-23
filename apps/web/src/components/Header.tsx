'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
            {/* Top Row: Logo, Search, User/Login */}
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-2xl">dentistry</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hidden sm:block">
                        Insumodent
                    </span>
                </Link>

                {/* Main Search Bar (Centrada) */}
                <div className="flex-1 max-w-2xl px-2">
                    <SearchBar />
                </div>

                {/* Login Button Desktop */}
                <div className="hidden md:flex items-center flex-shrink-0">
                    <Link href="/auth/login" className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-slate-900 transition-all hover:bg-primary-dark shadow-sm">
                        <span className="material-symbols-outlined text-[18px] mr-2">person</span>
                        Ingresar
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-primary dark:text-slate-300 transition-colors flex-shrink-0"
                >
                    <span className="material-symbols-outlined">
                        {isMobileMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </div>

            {/* Bottom Row Navigation (Category Links - Desktop) */}
            <div className="hidden md:block bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800">
                <nav className="mx-auto flex h-11 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-wider">Inicio</Link>
                    <Link href="/tiendas" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-wider">Tiendas Oficiales</Link>
                    <Link href="/ofertas" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors uppercase tracking-wider flex items-center gap-1">
                        Ofertas <span className="material-symbols-outlined text-[16px] text-red-500">local_fire_department</span>
                    </Link>
                    <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                    <Link href="/buscar?q=resina" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Resinas</Link>
                    <Link href="/buscar?q=adhesivo" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Adhesivos</Link>
                    <Link href="/buscar?q=cemento" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">Cementos</Link>
                </nav>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
                    <Link
                        href="/tiendas"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-slate-600 dark:text-slate-300"
                    >
                        Tiendas
                    </Link>
                    <Link
                        href="/ofertas"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-slate-600 dark:text-slate-300"
                    >
                        Ofertas
                    </Link>
                    <Link
                        href="/mi-cuenta"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-base font-medium text-slate-600 dark:text-slate-300"
                    >
                        Mi Cuenta
                    </Link>

                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    </div>

                    <Link
                        href="/auth/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 flex w-full h-12 items-center justify-center rounded-lg bg-primary text-base font-bold text-slate-900 transition-all hover:bg-primary-dark"
                    >
                        Ingresar
                    </Link>
                </div>
            )}
        </header>
    );
}
