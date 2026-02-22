import Link from 'next/link';

export default function MiCuentaPage() {
    return (
        <div className="flex-grow w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <div className="h-16 w-16 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary/20">
                                <span className="material-symbols-outlined text-[32px]">person</span>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Hola, Especialista
                            </h1>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                usuario@ejemplo.com
                            </p>
                        </div>
                        <div className="ml-auto">
                            <button className="hidden sm:flex text-sm font-semibold text-slate-500 hover:text-red-500 transition-colors items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">logout</span>
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Account Area */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Menu */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <nav className="space-y-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-2 shadow-sm">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary">
                                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                                Panel General
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[20px] text-slate-400">notifications_active</span>
                                Alertas de Precio
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[20px] text-slate-400">favorite</span>
                                Favoritos
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="material-symbols-outlined text-[20px] text-slate-400">settings</span>
                                Configuración
                            </a>
                            <a href="#" className="sm:hidden flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-4">
                                <span className="material-symbols-outlined text-[20px]">logout</span>
                                Cerrar Sesión
                            </a>
                        </nav>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1 space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Active Alerts Widget */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-amber-500">notifications_active</span>
                                        Mis Alertas Activas
                                    </h3>
                                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                                        2
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Resina 3M Filtek</h4>
                                            <p className="text-xs text-slate-500">Notificar por debajo de $42.000</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Sillón Odontológico Premium</h4>
                                            <p className="text-xs text-slate-500">Notificar rebajas de 10%</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                                            <span className="material-symbols-outlined text-[18px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                                <button className="w-full mt-4 py-2 text-sm font-semibold text-primary bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 rounded-lg transition-colors">
                                    Ver todas mis alertas
                                </button>
                            </div>

                            {/* Recent Comparisons Widget */}
                            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">history</span>
                                        Últimas Búsquedas
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    <Link href="/buscar?q=cementos" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                        <div className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">search</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Cementos de resina</p>
                                        </div>
                                    </Link>
                                    <Link href="/buscar?q=anestesia" className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                                        <div className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-[16px]">search</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900 dark:text-white">Anestesia tópica</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
