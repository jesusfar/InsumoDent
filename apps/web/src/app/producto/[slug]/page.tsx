import Link from 'next/link';
import PriceTable from '@/components/PriceTable';
import PriceChart from '@/components/PriceChart';

export default function ProductoPage({ params }: { params: { slug: string } }) {
    return (
        <div className="flex flex-col flex-1 items-center w-full pb-10 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <div className="flex flex-wrap gap-2 py-6 items-center">
                    <Link href="/" className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors">
                        Inicio
                    </Link>
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    <Link href="/categoria/materiales" className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors">
                        Materiales
                    </Link>
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    <Link href="/categoria/materiales/resinas" className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors">
                        Resinas
                    </Link>
                    <span className="material-symbols-outlined text-slate-400 text-[16px]">chevron_right</span>
                    <span className="text-slate-900 dark:text-white text-sm font-semibold leading-normal">
                        3M
                    </span>
                </div>

                {/* Product Info Section (Stitch Design Adaptation) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
                    {/* Left: Image Hero */}
                    <div className="w-full lg:w-5/12 flex flex-col gap-4">
                        <div className="relative bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 aspect-square flex items-center justify-center p-8 group shadow-lg shadow-black/5">
                            {/* Subtle Glow Effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <span className="material-symbols-outlined text-9xl text-slate-300 dark:text-slate-500 transition-transform duration-500 group-hover:scale-110 drop-shadow-md">
                                medication_liquid
                            </span>
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                Zoom <span className="material-symbols-outlined text-[14px]">zoom_in</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details & Callouts */}
                    <div className="w-full lg:w-7/12 flex flex-col pt-2 lg:pt-6">
                        <div className="inline-flex items-center w-max px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 border border-slate-200 dark:border-slate-700">
                            3M ESPE
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                            Resina Filtek Z350 XT <br className="hidden md:block" /> Jeringa 4g - A2
                        </h1>

                        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                            Restaurador universal de nanotecnología para restauraciones estéticas en piezas anteriores y posteriores. Ofrece excelente pulido y retención de brillo superior gracias a su formulación reforzada.
                        </p>

                        {/* Best Price Callout (Vibrant Blue Box) */}
                        <div className="p-6 md:p-8 bg-blue-600 dark:bg-primary rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20 dark:shadow-primary/20 border-blue-500 dark:border-primary/50 relative overflow-hidden group transition-colors">
                            {/* Decorative background glassmorphism layer */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/20 dark:group-hover:bg-black/15 transition-colors duration-500 pointer-events-none"></div>

                            <div className="relative z-10 text-center sm:text-left">
                                <p className="text-blue-100 dark:text-slate-800 font-bold uppercase tracking-wider text-sm mb-1 flex items-center justify-center sm:justify-start gap-1">
                                    <span className="material-symbols-outlined text-[16px]">stars</span>
                                    Mejor Precio del Mercado
                                </p>
                                <div className="text-5xl md:text-6xl font-black text-white dark:text-slate-900 tracking-tighter drop-shadow-sm">$45.000</div>
                                <p className="text-blue-100 dark:text-slate-800 text-sm mt-2 font-medium">
                                    En <span className="text-white dark:text-slate-900 font-bold">Concepto Dental</span> • Actualizado hoy
                                </p>
                            </div>
                            <div className="relative z-10 w-full sm:w-auto">
                                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-blue-700 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-800 font-black text-base transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-2 transform active:scale-95">
                                    <span className="material-symbols-outlined">notifications_active</span>
                                    Seguir Oferta
                                </button>
                            </div>
                        </div>

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">Consistencia</p>
                                <p className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-slate-400">water_drop</span> Pasta densa</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">Fotocurado</p>
                                <p className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-slate-400">wb_incandescent</span> Halógena / LED</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider mb-1">Presentación</p>
                                <p className="text-sm font-medium text-slate-900 dark:text-white flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-slate-400">inventory_2</span> Jeringa 4g</p>
                            </div>
                        </div>
                    </div>
                </div>

                <PriceTable />

                <PriceChart />

            </div>
        </div>
    );
}
