'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';

export default function SearchBar() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter();

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const handleSelect = (value: string) => {
        setOpen(false);
        if (value.startsWith('/')) {
            router.push(value);
        } else {
            router.push(`/buscar?q=${encodeURIComponent(value)}`);
        }
    };

    const handleSearchSubmit = () => {
        if (query.trim()) {
            setOpen(false);
            router.push(`/buscar?q=${encodeURIComponent(query)}`);
            setQuery('');
        }
    };

    return (
        <>
            {/* Fake Search Bar Button */}
            <button
                onClick={() => setOpen(true)}
                className="group relative flex items-center w-full h-11 rounded-lg bg-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden transition-all border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            >
                <div className="flex w-10 h-full items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <span className="text-sm text-slate-400 dark:text-slate-500 w-full text-left">
                    Buscar productos, marcas, tiendas...
                </span>
                <div className="hidden sm:flex items-center gap-1 mr-3">
                    <kbd className="inline-flex items-center justify-center rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 text-xs font-medium text-slate-400 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)] dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]">
                        ⌘
                    </kbd>
                    <kbd className="inline-flex items-center justify-center rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 text-xs font-medium text-slate-400 shadow-[0px_2px_0px_0px_rgba(0,0,0,0.04)] dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.04)]">
                        K
                    </kbd>
                </div>
            </button>

            {/* CMD K Dialog */}
            {open && (
                <div className="fixed inset-0 z-[100] flex pt-20 justify-center bg-slate-900/40 dark:bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <div className="absolute inset-0" onClick={() => setOpen(false)} />
                    <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in zoom-in-95 duration-200">
                        <Command
                            className="flex flex-col h-full w-full"
                            shouldFilter={false} // Disable default filter to allow custom routing/search logic easily if needed
                            loop
                        >
                            <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4 h-14">
                                <span className="material-symbols-outlined text-slate-400 mr-3">search</span>
                                <Command.Input
                                    autoFocus
                                    placeholder="¿Qué necesitas buscar?"
                                    className="flex-1 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-lg outline-none"
                                    value={query}
                                    onValueChange={setQuery}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleSearchSubmit();
                                        if (e.key === 'Escape') setOpen(false);
                                    }}
                                />
                                <kbd className="hidden sm:inline-flex items-center justify-center rounded bg-slate-100 dark:bg-slate-800 border-none px-2 py-1 text-xs font-medium text-slate-400">
                                    ESC
                                </kbd>
                            </div>

                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                                <Command.Empty className="py-6 text-center text-sm text-slate-500">
                                    Presiona <span className="font-bold">Enter</span> para buscar &quot;{query}&quot; en todo el catálogo
                                </Command.Empty>

                                {!query && (
                                    <>
                                        <Command.Group heading={<span className="text-xs font-bold text-slate-400 px-2 py-1 block uppercase tracking-wider">Enlaces Rápidos</span>}>
                                            <Command.Item
                                                onSelect={() => handleSelect('/ofertas')}
                                                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-primary transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-red-500">local_fire_department</span>
                                                Ofertas Destacadas
                                            </Command.Item>
                                            <Command.Item
                                                onSelect={() => handleSelect('/tiendas')}
                                                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-primary transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-blue-500">storefront</span>
                                                Directorio de Tiendas
                                            </Command.Item>
                                            <Command.Item
                                                onSelect={() => handleSelect('/mi-cuenta')}
                                                className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 aria-selected:text-primary transition-colors"
                                            >
                                                <span className="material-symbols-outlined text-[18px] text-green-500">notifications_active</span>
                                                Mis Alertas de Precios
                                            </Command.Item>
                                        </Command.Group>

                                        <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

                                        <Command.Group heading={<span className="text-xs font-bold text-slate-400 px-2 py-1 block uppercase tracking-wider">Búsquedas Frecuentes</span>}>
                                            <Command.Item onSelect={() => handleSelect('resina 3m')} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 transition-colors">
                                                <span className="material-symbols-outlined text-[16px] text-slate-400">history</span>
                                                Resina 3M
                                            </Command.Item>
                                            <Command.Item onSelect={() => handleSelect('adhesivo universal')} className="flex items-center gap-3 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800 transition-colors">
                                                <span className="material-symbols-outlined text-[16px] text-slate-400">history</span>
                                                Adhesivo Universal
                                            </Command.Item>
                                        </Command.Group>
                                    </>
                                )}
                            </Command.List>
                        </Command>
                    </div>
                </div>
            )}
        </>
    );
}
