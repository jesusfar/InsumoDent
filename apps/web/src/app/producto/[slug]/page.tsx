import Link from 'next/link';

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

                {/* Product Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                    {/* Left: Image Gallery */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        <div className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-square flex items-center justify-center p-8 group">
                            <span className="material-symbols-outlined text-9xl text-slate-300 dark:text-slate-600 transition-transform duration-300 group-hover:scale-105">
                                medication_liquid
                            </span>
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200 dark:border-slate-700 shadow-sm">
                                Zoom <span className="material-symbols-outlined align-middle text-[14px] ml-1">zoom_in</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="aspect-square rounded-lg border-2 border-primary bg-white dark:bg-slate-800 p-2 cursor-pointer flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-400 text-4xl">medication_liquid</span>
                            </div>
                            <div className="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 cursor-pointer hover:border-slate-400 transition-colors opacity-60 hover:opacity-100">
                                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400">image</span>
                                </div>
                            </div>
                            <div className="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 cursor-pointer hover:border-slate-400 transition-colors opacity-60 hover:opacity-100">
                                <div className="w-full h-full bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-400">image</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <div className="flex justify-between items-start gap-4">
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                                Resina Compuesta Filtek Z350 XT
                            </h1>
                            {/* Brand Logo Placeholder */}
                            <div className="shrink-0 flex items-center justify-center w-16 h-16 bg-red-600 text-white font-black text-2xl tracking-tighter rounded-lg shadow-sm">
                                3M
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex text-yellow-400">
                                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                <span className="material-symbols-outlined text-[20px] fill-current">star_half</span>
                            </div>
                            <span className="text-slate-500 text-sm font-medium">(24 reseñas)</span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-[90%]">
                            Restaurador universal de nanotecnología para restauraciones anteriores y posteriores. Ofrece una excelente retención de pulido y un manejo excepcional gracias a su tecnología de nanorrelleno exclusiva de 3M. Ideal para estética dental de alta exigencia.
                        </p>

                        <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                            <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Jeringa 4g</span>
                            <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Color A2</span>
                            <span className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">Nanohíbrida</span>
                        </div>

                        <div className="mt-4 p-6 bg-blue-50 dark:bg-slate-800/50 rounded-xl border border-blue-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-wide mb-1">
                                    Mejor Precio Actual
                                </p>
                                <div className="text-5xl font-black text-primary tracking-tight">$45.000</div>
                                <p className="text-slate-500 text-xs mt-2">
                                    En Concepto Dental • <span className="text-success-500 font-medium">Ahorras $3.200</span>
                                </p>
                            </div>
                            <button className="w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2 group">
                                <span className="material-symbols-outlined group-hover:animate-swing">notifications_active</span>
                                Añadir Alerta de Precio
                            </button>
                        </div>
                    </div>
                </div>

                {/* Comparison Table Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">compare_arrows</span>
                        Comparar Precios
                    </h2>
                    <div className="overflow-hidden bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px] border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 text-left">
                                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Tienda</th>
                                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Precio</th>
                                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Disponibilidad</th>
                                        <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {/* Best Price Row */}
                                    <tr className="bg-blue-50/50 dark:bg-blue-900/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-600">
                                                    <span className="material-symbols-outlined text-blue-600">storefront</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-900 dark:text-white">Concepto Dental</p>
                                                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-1 border border-green-200">
                                                        <span className="material-symbols-outlined text-[12px]">verified</span> MEJOR PRECIO
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-xl font-bold text-slate-900 dark:text-white">$45.000</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                En Stock
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none min-w-[120px]">
                                                Ir a la Tienda
                                                <span className="material-symbols-outlined text-[16px] ml-1">open_in_new</span>
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Comparison Row 1 */}
                                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-600">
                                                    <span className="material-symbols-outlined text-slate-400">store</span>
                                                </div>
                                                <p className="font-medium text-slate-900 dark:text-white">AX Dental</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">$47.500</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                En Stock
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors min-w-[120px]">
                                                Ir a la Tienda
                                            </button>
                                        </td>
                                    </tr>

                                    {/* Comparison Row 2 */}
                                    <tr className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center border border-slate-100 dark:border-slate-600">
                                                    <span className="material-symbols-outlined text-slate-400">medical_services</span>
                                                </div>
                                                <p className="font-medium text-slate-900 dark:text-white">Mega Dental</p>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">$48.200</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                En Stock
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            <button className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white text-sm font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors min-w-[120px]">
                                                Ir a la Tienda
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Price History Chart Section */}
                <div className="grid grid-cols-1 mb-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">ssid_chart</span>
                            Evolución del Precio
                        </h2>
                        <select className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none">
                            <option>Últimos 30 días</option>
                            <option defaultValue="Últimos 90 días">Últimos 90 días</option>
                            <option>Último año</option>
                        </select>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                        <div className="flex items-end justify-between h-[240px] w-full gap-2 px-4 pb-8 relative z-10">
                            {/* Chart Grid Lines (Visual Decoration) */}
                            <div className="absolute inset-0 top-0 bottom-8 px-4 flex flex-col justify-between pointer-events-none z-0">
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50"></div>
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50"></div>
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50"></div>
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50"></div>
                                <div className="w-full h-px bg-slate-100 dark:bg-slate-700/50"></div>
                            </div>

                            {/* Pseudo Chart Data Points */}
                            <div className="relative w-full h-full flex items-end justify-between z-10 pl-8">
                                {/* Y-Axis Labels */}
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400 font-medium pb-8 h-full">
                                    <span>$50k</span>
                                    <span>$48k</span>
                                    <span>$46k</span>
                                    <span>$44k</span>
                                    <span>$42k</span>
                                </div>

                                {/* Graph Line Container */}
                                <div className="w-full h-full flex items-end ml-4 relative">
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                                <stop offset="0%" style={{ stopColor: "#137fec", stopOpacity: 0.2 }}></stop>
                                                <stop offset="100%" style={{ stopColor: "#137fec", stopOpacity: 0 }}></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,60 L10,55 L20,58 L30,50 L40,45 L50,48 L60,40 L70,35 L80,38 L90,30 L100,25" fill="none" stroke="#137fec" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                        <path d="M0,60 L10,55 L20,58 L30,50 L40,45 L50,48 L60,40 L70,35 L80,38 L90,30 L100,25 V100 H0 Z" fill="url(#chartGradient)" stroke="none"></path>
                                        {/* Dots */}
                                        <circle className="fill-primary" cx="0" cy="60" r="1.5" vectorEffect="non-scaling-stroke"></circle>
                                        <circle className="fill-primary" cx="20" cy="58" r="1.5" vectorEffect="non-scaling-stroke"></circle>
                                        <circle className="fill-primary" cx="40" cy="45" r="1.5" vectorEffect="non-scaling-stroke"></circle>
                                        <circle className="fill-primary" cx="60" cy="40" r="1.5" vectorEffect="non-scaling-stroke"></circle>
                                        <circle className="fill-primary" cx="80" cy="38" r="1.5" vectorEffect="non-scaling-stroke"></circle>
                                        <circle className="fill-white stroke-primary stroke-2" cx="100" cy="25" r="2.5" vectorEffect="non-scaling-stroke"></circle>
                                    </svg>

                                    {/* Tooltip for current price */}
                                    <div className="absolute right-0 top-[15%] -translate-y-full translate-x-1/2 flex flex-col items-center">
                                        <div className="bg-slate-900 text-white text-xs py-1 px-2 rounded mb-1 font-bold shadow-lg">$45.000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* X-Axis Labels */}
                        <div className="flex justify-between px-12 text-xs text-slate-400 font-medium mt-2">
                            <span>Hace 90 días</span>
                            <span>Hace 60 días</span>
                            <span>Hace 30 días</span>
                            <span>Hoy</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
