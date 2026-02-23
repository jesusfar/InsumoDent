import Link from 'next/link';
import { api } from '@/lib/api';
import TiltCard from '@/components/TiltCard';

export const revalidate = 600;

interface ProductData {
    id: string;
    name: string;
    slug: string;
    brand: string;
    currentPrice: number;
    storesCount: number;
    // otros campos si existen ...
}

interface PaginatedResponse {
    data: ProductData[];
    meta: {
        total: number;
        page: number;
        lastPage: number;
    };
}

export default async function CategoriaPage({ params }: { params: { slug: string } }) {
    const categoryName = params.slug.replace(/-/g, ' ');
    const categoryTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    // Obtener productos reales de esta categoría
    let products: ProductData[] = [];
    let totalResults = 0;
    try {
        const res = await api.get<PaginatedResponse>(`/products`, {
            params: {
                category: params.slug,
                limit: 50
            }
        });
        products = res.data.data || [];
        totalResults = res.data.meta?.total || products.length;
    } catch (error) {
        console.error("Error fetching category products", error);
    }

    return (
        <div className="flex flex-col flex-1 w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">

            {/* Category Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 text-sm text-slate-500 font-medium">
                            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-slate-900 dark:text-white">{categoryTitle}</span>
                        </div>

                        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                            {categoryTitle}
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                            Explora nuestra amplia selección de insumos odontológicos en la categoría {categoryTitle}. Compara precios entre múltiples distribuidores para encontrar la mejor oferta.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area (Similar to Search Results) */}
            <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar / Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                        <div className="space-y-8">
                            {/* Sub-categories */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    Subcategorías
                                </h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Restauración</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Prevención</span>
                                    </label>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800"></div>

                            {/* Brands */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                    Marcas Comunes
                                </h3>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">3M ESPE</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                                        <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Dentsply</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                                Mostrando <span className="font-medium text-slate-900 dark:text-white">{totalResults}</span> resultados
                            </span>
                            <div className="flex gap-2">
                                <select className="bg-slate-50 dark:bg-slate-800 border-none text-sm text-slate-700 dark:text-slate-300 rounded focus:ring-0 cursor-pointer">
                                    <option>Relevancia</option>
                                    <option>Menor precio</option>
                                    <option>Mayor precio</option>
                                </select>
                            </div>
                        </div>

                        {products.length === 0 ? (
                            <div className="text-center py-20">
                                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4 block">inventory_2</span>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">No hay productos en esta categoría</h3>
                                <p className="text-slate-500">Intenta navegar por otra sección o buscar por nombre.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {products.map(product => (
                                    <TiltCard key={product.id} className="flex flex-col h-full bg-white dark:bg-slate-800" glowColor="rgba(56, 189, 248, 0.15)">
                                        <div className="relative w-full pt-[100%] bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 group-hover:bg-blue-50/50 dark:group-hover:bg-slate-900 transition-colors">
                                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center mix-blend-multiply dark:mix-blend-normal opacity-90 group-hover:scale-105 transition-transform duration-300">
                                                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 group-hover:text-primary/50 transition-colors">
                                                    {params.slug.includes('material') ? 'dentistry' : 'inventory_2'}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex flex-col flex-1 bg-white dark:bg-slate-800 rounded-b-xl">
                                            <div className="mb-2">
                                                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                                                    {product.brand || 'Varias Marcas'}
                                                </span>
                                            </div>
                                            <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
                                                {product.name}
                                            </h3>
                                            <div className="mt-auto">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-lg font-bold text-primary">
                                                        Desde ${product.currentPrice.toLocaleString('es-AR')}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1 mb-4 text-xs text-slate-500 dark:text-slate-400">
                                                    <span className="material-symbols-outlined text-[14px]">storefront</span>
                                                    <span>Disponible en {product.storesCount || 1} tienda{product.storesCount === 1 ? '' : 's'}</span>
                                                </div>
                                                <Link href={`/producto/${product.slug}`} className="flex w-full justify-center py-2 px-4 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary text-slate-700 dark:text-slate-300 text-sm font-semibold transition-colors pointer-events-auto">
                                                    Comparar precios
                                                </Link>
                                            </div>
                                        </div>
                                    </TiltCard>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
