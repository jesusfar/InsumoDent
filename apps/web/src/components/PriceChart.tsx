'use client';

export default function PriceChart() {
    return (
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
            <div className="bg-slate-800/80 rounded-2xl p-6 md:p-8 border border-slate-700/60 shadow-lg relative overflow-hidden">
                <div className="flex items-end justify-between h-[280px] w-full gap-2 px-2 md:px-6 pb-8 relative z-10">
                    {/* Chart Grid Lines (Visual Decoration) */}
                    <div className="absolute inset-0 top-0 bottom-8 px-2 md:px-6 flex flex-col justify-between pointer-events-none z-0">
                        <div className="w-full h-px bg-slate-700/50"></div>
                        <div className="w-full h-px bg-slate-700/50"></div>
                        <div className="w-full h-px bg-slate-700/50"></div>
                        <div className="w-full h-px bg-slate-700/50"></div>
                        <div className="w-full h-px bg-slate-700/50"></div>
                    </div>

                    {/* Pseudo Chart Data Points */}
                    <div className="relative w-full h-full flex items-end justify-between z-10 pl-10 md:pl-12">
                        {/* Y-Axis Labels */}
                        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 font-bold pb-8 h-full">
                            <span>$50k</span>
                            <span>$48k</span>
                            <span>$46k</span>
                            <span>$44k</span>
                            <span>$42k</span>
                        </div>

                        {/* Graph Line Container */}
                        <div className="w-full h-full flex items-end ml-2 relative">
                            <svg className="w-full h-full overflow-visible absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.35 }}></stop>
                                        <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0 }}></stop>
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="2" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>
                                <path d="M0,60 L10,55 L20,58 L30,50 L40,45 L50,48 L60,40 L70,35 L80,38 L90,30 L100,25" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke"></path>
                                <path d="M0,60 L10,55 L20,58 L30,50 L40,45 L50,48 L60,40 L70,35 L80,38 L90,30 L100,25 V100 H0 Z" fill="url(#chartGradient)" stroke="none"></path>
                            </svg>

                            {/* HTML Dots for perfect non-distorted circles */}
                            <div className="absolute inset-0 z-20 pointer-events-none">
                                <div className="absolute w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-800 -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ left: "0%", top: "60%" }}></div>
                                <div className="absolute w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-800 -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ left: "20%", top: "58%" }}></div>
                                <div className="absolute w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-800 -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ left: "40%", top: "45%" }}></div>
                                <div className="absolute w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-800 -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ left: "60%", top: "40%" }}></div>
                                <div className="absolute w-2 h-2 rounded-full bg-blue-500 ring-2 ring-slate-800 -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ left: "80%", top: "38%" }}></div>
                                {/* Current Price Point Indicator */}
                                <div className="absolute w-3 h-3 rounded-full bg-white ring-[3px] ring-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto cursor-pointer hover:scale-125 transition-transform" style={{ left: "100%", top: "25%" }}></div>
                            </div>

                            {/* Tooltip for current price */}
                            <div className="absolute right-0 top-[25%] -translate-y-[180%] translate-x-1/2 flex flex-col items-center pointer-events-none z-40">
                                <div className="bg-blue-600 text-white text-sm py-1.5 px-3 rounded border border-blue-500 font-bold shadow-lg shadow-blue-500/30 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-solid after:border-[5px] after:border-transparent after:border-t-blue-600">
                                    $45.000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between pl-10 md:pl-[4.5rem] pr-2 text-xs text-slate-500 font-bold mt-4">
                    <span>Hace 90 días</span>
                    <span className="hidden sm:inline">Hace 60 días</span>
                    <span className="hidden sm:inline">Hace 30 días</span>
                    <span className="text-white">Hoy</span>
                </div>
            </div>
        </div>
    );
}
