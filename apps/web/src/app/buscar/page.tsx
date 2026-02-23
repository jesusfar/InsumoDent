import Link from 'next/link';
import SearchFilters from '@/components/SearchFilters';
import ProductCard from '@/components/ProductCard';

export default function BuscarPage() {
    return (
        <div className="flex flex-col flex-1 w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Results Banner (Inspired by HG but matching Midnight Galaxy) */}
            <div className="w-full bg-slate-100 dark:bg-[#0f172a] border-y border-slate-200 dark:border-slate-800 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl md:text-3xl font-black tracking-widest text-slate-900 dark:text-white uppercase">
                        RESULTADOS DE BÚSQUEDA
                    </h1>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar / Filters */}
                    <SearchFilters />

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
                            <ProductCard
                                id="1"
                                slug="resina-filtek-z250"
                                brand="3M"
                                name="Resina Filtek Z250 Universal Restauradora - A2"
                                currentPrice={45000}
                                discountPercentage={20}
                                storesCount={3}
                                iconName="medication_liquid"
                            />
                            <ProductCard
                                id="2"
                                slug="resina-filtek-supreme-xte"
                                brand="3M"
                                name="Resina Filtek Supreme XTE Body - A3"
                                currentPrice={52900}
                                storesCount={5}
                                iconName="medication_liquid"
                            />
                            <ProductCard
                                id="3"
                                slug="adhesivo-single-bond"
                                brand="3M"
                                name="Adhesivo Single Bond Universal (5ml)"
                                currentPrice={38500}
                                storesCount={8}
                                iconName="sanitizer"
                            />
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
