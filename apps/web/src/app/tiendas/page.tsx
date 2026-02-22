import Link from 'next/link';

export default function TiendasPage() {
    return (
        <div className="flex-grow w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Hero Section */}
            <div className="relative w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
                {/* Abstract Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#137fec 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                ></div>
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
                    <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl max-w-3xl mb-4">
                        Tiendas Adheridas
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
                        Compara precios y compra con confianza en las mejores tiendas de insumos odontológicos del país.
                    </p>

                    {/* Search Bar Optional */}
                    <div className="mt-8 w-full max-w-lg relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            search
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar tienda..."
                            className="w-full h-12 pl-12 pr-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Stores Grid Section */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-white dark:bg-background-dark">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Store Card 1 */}
                    <div className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="aspect-[2/1] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 relative">
                            <span className="material-symbols-outlined absolute top-4 right-4 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                                verified
                            </span>
                            <div className="text-2xl font-black text-slate-400 dark:text-slate-500 tracking-tight flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl text-primary">dentistry</span>
                                Concepto
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    Concepto Dental
                                </h3>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                                    Distribuidor Oficial
                                </p>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star_half</span>
                                    <span className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-200">4.8</span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">(120 reseñas)</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold">
                                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                                    1,500+ productos
                                </div>
                            </div>
                            <div className="mt-auto pt-2">
                                <button className="w-full py-2.5 px-4 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 group/btn">
                                    Ver Catálogo
                                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Store Card 2 */}
                    <div className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="aspect-[2/1] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 relative">
                            <span className="material-symbols-outlined absolute top-4 right-4 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                                verified
                            </span>
                            <div className="text-2xl font-black text-slate-400 dark:text-slate-500 tracking-tight flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl text-teal-500">health_and_safety</span>
                                AX Dental
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    AX Dental
                                </h3>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                                    Importador Directo
                                </p>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-200">4.9</span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">(85 reseñas)</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold">
                                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                                    2,300+ productos
                                </div>
                            </div>
                            <div className="mt-auto pt-2">
                                <button className="w-full py-2.5 px-4 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 group/btn">
                                    Ver Catálogo
                                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Store Card 3 */}
                    <div className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="aspect-[2/1] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 relative">
                            <span className="material-symbols-outlined absolute top-4 right-4 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                                verified
                            </span>
                            <div className="text-2xl font-black text-slate-400 dark:text-slate-500 tracking-tight flex items-center gap-2">
                                <span className="material-symbols-outlined text-4xl text-indigo-500">medical_services</span>
                                Mega
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 p-5 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    Mega Dental
                                </h3>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                                    Mayorista Nacional
                                </p>
                                <div className="flex items-center gap-1 mb-2">
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star</span>
                                    <span className="material-symbols-outlined text-amber-400 text-sm">star_half</span>
                                    <span className="ml-1 text-sm font-bold text-slate-700 dark:text-slate-200">4.5</span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">(310 reseñas)</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-semibold">
                                    <span className="material-symbols-outlined text-[14px]">inventory_2</span>
                                    500+ productos
                                </div>
                            </div>
                            <div className="mt-auto pt-2">
                                <button className="w-full py-2.5 px-4 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 group/btn">
                                    Ver Catálogo
                                    <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Trust Section */}
            <div className="w-full bg-blue-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight mb-2">
                                Nuestras tiendas están verificadas
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-base">
                                Trabajamos solo con proveedores certificados para garantizar tu seguridad y la calidad de tus insumos.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex-1 lg:flex-none lg:min-w-[240px]">
                                <div className="flex items-center justify-center size-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                                    <span className="material-symbols-outlined">lock</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Pagos Seguros</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Encriptación 256-bit</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 flex-1 lg:flex-none lg:min-w-[240px]">
                                <div className="flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Proveedores Certificados</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Validación fiscal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
