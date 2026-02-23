'use client';
import { useState } from 'react';

export default function SearchFilters() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium shadow-sm active:scale-95 transition-transform"
                >
                    <span className="material-symbols-outlined text-[20px]">{isOpen ? 'close' : 'filter_list'}</span>
                    {isOpen ? 'Ocultar filtros' : 'Filtrar resultados'}
                </button>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} lg:block space-y-8 animate-in slide-in-from-top-2 lg:animate-none`}>

                {/* Search Context Info */}
                <div className="pb-6 border-b border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-1">
                        resina 3m
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        45 resultados
                    </p>
                </div>
                {/* Categories */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Categorías
                    </h3>
                    <div className="space-y-2">
                        {[
                            { name: 'Resinas Compuestas', count: 12, checked: true },
                            { name: 'Adhesivos', count: 8 },
                            { name: 'Cementos', count: 5 },
                            { name: 'Accesorios', count: 3 },
                        ].map((cat) => (
                            <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                                <input defaultChecked={cat.checked} className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 transition-colors cursor-pointer" type="checkbox" />
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{cat.name}</span>
                                <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{cat.count}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 dark:border-slate-800"></div>

                {/* Brands */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Marcas
                    </h3>
                    <div className="space-y-2">
                        {[
                            { name: '3M', count: 45, checked: true },
                            { name: 'Ivoclar', count: 10 },
                            { name: 'Tokuyama', count: 5 },
                        ].map((brand) => (
                            <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                                <input defaultChecked={brand.checked} className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4 transition-colors cursor-pointer" type="checkbox" />
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">{brand.name}</span>
                                <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">{brand.count}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 dark:border-slate-800"></div>

                {/* Price Range */}
                <div className="space-y-3">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                        Rango de Precio
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <span className="text-slate-400 text-xs">$</span>
                            </div>
                            <input className="block w-full pl-5 pr-2 py-1.5 border border-slate-300 dark:border-slate-700 rounded text-sm bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Min" type="number" />
                        </div>
                        <span className="text-slate-400">-</span>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <span className="text-slate-400 text-xs">$</span>
                            </div>
                            <input className="block w-full pl-5 pr-2 py-1.5 border border-slate-300 dark:border-slate-700 rounded text-sm bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Max" type="number" />
                        </div>
                    </div>
                    <button className="w-full py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase rounded transition-colors active:scale-95">
                        Aplicar
                    </button>
                </div>
            </div>
        </aside>
    );
}
