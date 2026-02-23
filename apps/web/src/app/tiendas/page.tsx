import Link from 'next/link';
import { getStores } from '@/lib/api';
import TiltCard from '@/components/TiltCard';

export const revalidate = 3600; // Refrescar las tiendas cada hora

export default async function TiendasPage() {
    const stores = await getStores();

    // Iconos temáticos según el nombre (Fallback visual)
    const getStoreIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes('concepto')) return { icon: 'dentistry', color: 'text-primary' };
        if (n.includes('ax')) return { icon: 'health_and_safety', color: 'text-teal-500' };
        if (n.includes('mega')) return { icon: 'medical_services', color: 'text-indigo-500' };
        return { icon: 'storefront', color: 'text-slate-400' };
    };

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
                {stores.length === 0 ? (
                    <div className="text-center py-12">
                        <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4 block">store_off</span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">No se pudieron cargar las tiendas</h3>
                        <p className="text-slate-500">Por favor, inténtalo de nuevo en unos minutos o verifica tu conexión.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {stores.map((store) => {
                            const visual = getStoreIcon(store.name);
                            return (
                                <TiltCard key={store.id} className="flex flex-col h-full bg-white dark:bg-slate-900" glowColor="rgba(56, 189, 248, 0.2)">
                                    <div className="aspect-[2/1] bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 relative rounded-t-xl group-hover:bg-blue-50/50 dark:group-hover:bg-slate-800 transition-colors">
                                        <span className="material-symbols-outlined absolute top-4 right-4 text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors" title="Verificada">
                                            verified
                                        </span>
                                        <div className="text-2xl font-black text-slate-400 dark:text-slate-500 tracking-tight flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                                            {store.logo ? (
                                                <img src={store.logo} alt={store.name} className="h-10 object-contain mix-blend-multiply dark:mix-blend-normal" />
                                            ) : (
                                                <>
                                                    <span className={`material-symbols-outlined text-4xl ${visual.color}`}>{visual.icon}</span>
                                                    {store.name.split(' ')[0]}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 p-5 gap-4 bg-white dark:bg-slate-900 rounded-b-xl">
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                                {store.name}
                                            </h3>
                                            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                                                Envío: {store.shipping === 0 ? 'Gratis' : `$${store.shipping.toLocaleString('es-AR')}`}
                                            </p>

                                            {/* Rating Mock */}
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
                                                {store.productsCount ? `${store.productsCount} productos` : 'Catálogo Activo'}
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-2">
                                            <a href={store.url} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 px-4 bg-primary hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 group/btn pointer-events-auto relative z-20">
                                                Visitar Tienda
                                                <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-0.5 transition-transform">
                                                    open_in_new
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </TiltCard>
                            );
                        })}
                    </div>
                )}
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
