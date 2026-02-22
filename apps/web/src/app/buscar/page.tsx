import Link from 'next/link';

export default function BuscarPage() {
    return (
        <div className="flex flex-col flex-1 w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Sub-header / Search Area */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="w-full md:max-w-xl relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm shadow-sm"
                                placeholder="Buscar productos, marcas o categorías..."
                                type="text"
                                defaultValue="resina 3m"
                            />
                        </div>
                        <div className="w-full md:w-auto text-sm text-slate-500 dark:text-slate-400 font-medium">
                            Mostrando 45 resultados para <span className="text-slate-900 dark:text-white font-semibold">&quot;resina 3m&quot;</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-4">
                            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium shadow-sm">
                                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                                Filtrar resultados
                            </button>
                        </div>
                        <div className="hidden lg:block space-y-8">
                            {/* Categories */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    Categorías
                                </h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Resinas Compuestas</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">12</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Adhesivos</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">8</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Cementos</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">5</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Accesorios</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">3</span>
                                    </label>
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
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">3M</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">45</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Ivoclar</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">10</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Tokuyama</span>
                                        <span className="ml-auto text-xs text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">5</span>
                                    </label>
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
                                        <input className="block w-full pl-5 pr-2 py-1.5 border border-slate-300 dark:border-slate-700 rounded text-sm bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Min" type="number" />
                                    </div>
                                    <span className="text-slate-400">-</span>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                            <span className="text-slate-400 text-xs">$</span>
                                        </div>
                                        <input className="block w-full pl-5 pr-2 py-1.5 border border-slate-300 dark:border-slate-700 rounded text-sm bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Max" type="number" />
                                    </div>
                                </div>
                                <button className="w-full py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase rounded transition-colors">
                                    Aplicar
                                </button>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        {/* Sorting Bar */}
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                Ordenado por: <span className="font-medium text-slate-900 dark:text-white cursor-pointer">Relevancia</span>
                            </span>
                            <div className="flex gap-2">
                                <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-primary">
                                    <span className="material-symbols-outlined text-[24px]">grid_view</span>
                                </button>
                                <button className="p-1.5 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400">
                                    <span className="material-symbols-outlined text-[24px]">view_list</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Product Card 1 */}
                            <div className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden">
                                <div className="relative w-full pt-[100%] bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">medication_liquid</span>
                                    </div>
                                    <div className="absolute top-3 left-3 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs font-bold px-2.5 py-0.5 rounded-full">
                                        Oferta
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">3M</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                                        Resina Filtek Z250 Universal Restauradora - A2
                                    </h3>
                                    <div className="mt-auto">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-lg font-bold text-primary">Desde $45.000</span>
                                        </div>
                                        <div className="flex items-center gap-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[14px]">storefront</span>
                                            <span>Disponible en 3 tiendas</span>
                                        </div>
                                        <Link href="/producto/resina-filtek-z250" className="flex w-full justify-center py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors">
                                            Comparar precios
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 2 */}
                            <div className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden">
                                <div className="relative w-full pt-[100%] bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">medication_liquid</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">3M</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                                        Resina Filtek Supreme XTE Body - A3
                                    </h3>
                                    <div className="mt-auto">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-lg font-bold text-primary">Desde $52.900</span>
                                        </div>
                                        <div className="flex items-center gap-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[14px]">storefront</span>
                                            <span>Disponible en 5 tiendas</span>
                                        </div>
                                        <button className="flex justify-center w-full py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors">
                                            Comparar precios
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 3 */}
                            <div className="group bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full overflow-hidden">
                                <div className="relative w-full pt-[100%] bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700">
                                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">sanitizer</span>
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">3M</span>
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                                        Adhesivo Single Bond Universal (5ml)
                                    </h3>
                                    <div className="mt-auto">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="text-lg font-bold text-primary">Desde $38.500</span>
                                        </div>
                                        <div className="flex items-center gap-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-[14px]">storefront</span>
                                            <span>Disponible en 8 tiendas</span>
                                        </div>
                                        <button className="flex w-full justify-center py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors">
                                            Comparar precios
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-1">
                                <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium text-sm">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm">3</button>
                                <span className="w-10 h-10 flex items-center justify-center text-slate-400">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm">5</button>
                                <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
