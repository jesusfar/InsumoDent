import Link from 'next/link';

interface ProductCardProps {
    id: string;
    slug: string;
    brand: string;
    name: string;
    oldPrice?: number;
    currentPrice: number;
    discountPercentage?: number;
    iconName: string;
    storesCount?: number;
}

export default function ProductCard({
    slug,
    brand,
    name,
    oldPrice,
    currentPrice,
    discountPercentage,
    iconName,
    storesCount,
}: ProductCardProps) {
    return (
        <Link
            href={`/producto/${slug}`}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
            {discountPercentage && (
                <div className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                    -{discountPercentage}% OFF
                </div>
            )}

            <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="h-full w-full flex items-center justify-center bg-neutral-100 dark:bg-slate-800 transition-transform duration-500 group-hover:scale-110">
                    <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 transition-colors group-hover:text-primary/40">
                        {iconName}
                    </span>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    {brand}
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary dark:text-white transition-colors">
                    {name}
                </h3>

                <div className="mt-auto pt-4 flex flex-col gap-1">
                    {oldPrice && (
                        <span className="text-xs text-slate-400 line-through">
                            ${oldPrice.toLocaleString('es-AR')}
                        </span>
                    )}
                    <span className="text-lg font-black text-primary">
                        ${currentPrice.toLocaleString('es-AR')}
                    </span>
                </div>

                {storesCount && storesCount > 0 && (
                    <div className="flex items-center gap-1 mt-2 mb-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="material-symbols-outlined text-[14px]">storefront</span>
                        <span>Disponible en {storesCount} tienda{storesCount !== 1 ? 's' : ''}</span>
                    </div>
                )}

                <button className="mt-4 w-full rounded-lg bg-slate-100 py-2.5 text-sm font-bold text-slate-900 transition-all hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-primary">
                    {storesCount ? 'Comparar precios' : 'Ver Oferta'}
                </button>
            </div>
        </Link>
    );
}
