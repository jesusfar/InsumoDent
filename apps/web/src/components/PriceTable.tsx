'use client';

import { toast } from 'sonner';

export default function PriceTable() {
    const handleAction = (tienda: string) => {
        toast.success('Redirigiendo a la oferta...', {
            description: `Abriendo el sitio web oficial de ${tienda}.`
        });
    };

    return (
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
                        <tbody className="divide-y divide-slate-800">
                            {/* Best Price Row */}
                            <tr className="bg-slate-800/80 hover:bg-slate-800 transition-colors border-l-4 border-l-blue-500 relative">
                                <td className="py-4 px-6 relative">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-900 shadow-sm flex items-center justify-center border border-slate-700">
                                            <span className="material-symbols-outlined text-blue-400">storefront</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-base">Concepto Dental</p>
                                            <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-green-500/20 text-green-400 px-2.5 py-0.5 rounded-full mt-1 border border-green-500/30">
                                                <span className="material-symbols-outlined text-[12px]">verified</span> MEJOR PRECIO
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-2xl font-black text-white tracking-tight">$45.000</span>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                        En Stock
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button
                                        onClick={() => handleAction('Concepto Dental')}
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20 min-w-[140px] group active:scale-95"
                                    >
                                        Ver Oferta
                                        <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </td>
                            </tr>

                            {/* Comparison Row 1 */}
                            <tr className="bg-slate-900/50 hover:bg-slate-800 transition-colors">
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 shadow-sm flex items-center justify-center border border-slate-700">
                                            <span className="material-symbols-outlined text-slate-400">store</span>
                                        </div>
                                        <p className="font-semibold text-slate-200">AX Dental</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-xl font-bold text-slate-300">$47.500</span>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                        En Stock
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button
                                        onClick={() => handleAction('AX Dental')}
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-800 text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700 min-w-[140px] group"
                                    >
                                        Ver Oferta
                                        <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </td>
                            </tr>

                            {/* Comparison Row 2 */}
                            <tr className="bg-slate-900/50 hover:bg-slate-800 transition-colors">
                                <td className="py-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-slate-800 shadow-sm flex items-center justify-center border border-slate-700">
                                            <span className="material-symbols-outlined text-slate-400">medical_services</span>
                                        </div>
                                        <p className="font-semibold text-slate-200">Mega Dental</p>
                                    </div>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="text-xl font-bold text-slate-300">$48.200</span>
                                </td>
                                <td className="py-4 px-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold bg-emerald-900/40 text-emerald-400 border border-emerald-800/50">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                        En Stock
                                    </span>
                                </td>
                                <td className="py-4 px-6 text-right">
                                    <button
                                        onClick={() => handleAction('Mega Dental')}
                                        className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-800 text-slate-300 text-sm font-bold rounded-xl hover:bg-slate-700 hover:text-white transition-colors border border-slate-700 min-w-[140px] group"
                                    >
                                        Ver Oferta
                                        <span className="material-symbols-outlined text-[16px] ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
