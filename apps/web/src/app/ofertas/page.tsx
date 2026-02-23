import Link from 'next/link';
import TiltCard from '@/components/TiltCard';

// Temporary mock data for offers
const mockOffers = [
    {
        id: '1',
        title: 'Resina Filtek Z350 XT - 3M',
        price: 45000,
        originalPrice: 58000,
        discount: 22,
        image: 'medication_liquid',
        store: 'Concepto Dental',
        category: 'Resinas'
    },
    {
        id: '2',
        title: 'Adhesivo Single Bond Universal',
        price: 32500,
        originalPrice: 41000,
        discount: 20,
        image: 'water_drop',
        store: 'Mega Dental',
        category: 'Adhesivos'
    },
    {
        id: '3',
        title: 'Cemento RelyX U200 Automix',
        price: 89000,
        originalPrice: 115000,
        discount: 23,
        image: 'vaccines',
        store: 'DentalMed',
        category: 'Cementos'
    },
    {
        id: '4',
        title: 'Turbina Pana Max Plus - NSK',
        price: 125000,
        originalPrice: 160000,
        discount: 21,
        image: 'dentistry',
        store: 'OdontoStore',
        category: 'Equipamiento'
    }
];

export const metadata = {
    title: 'Ofertas Flash | InsumoDent',
    description: 'Descubrí las mejores ofertas y descuentos en insumos odontológicos por tiempo limitado.',
};

export default function OfertasPage() {
    return (
        <div className="flex flex-col flex-1 items-center w-full pb-10 bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
            {/* Header / Hero Section */}
            <div className="w-full bg-slate-900 border-b border-slate-800 pt-12 pb-16 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15)_0%,transparent_50%)]"></div>
                <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold uppercase tracking-widest mb-4">
                        <span className="material-symbols-outlined text-[16px] animate-pulse">local_fire_department</span>
                        Descuentos por tiempo limitado
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Ofertas <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Flash</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl">
                        Encontrá los mejores precios en materiales y equipamiento de las tiendas oficiales, actualizados en tiempo real.
                    </p>
                </div>
            </div>

            {/* Grid de Ofertas */}
            <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockOffers.map((offer) => (
                        <TiltCard key={offer.id} className="flex flex-col h-full bg-white dark:bg-slate-900" glowColor="rgba(239, 68, 68, 0.2)">
                            <div className="aspect-square bg-slate-50 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800 relative rounded-t-xl overflow-hidden group">
                                {/* Badge de Descuento */}
                                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-lg z-10">
                                    -{offer.discount}%
                                </div>
                                <span className="material-symbols-outlined absolute top-3 right-3 text-slate-300 dark:text-slate-600 group-hover:text-red-400 transition-colors z-10" title="Oferta Verificada">
                                    verified
                                </span>
                                <span className="material-symbols-outlined text-7xl text-slate-300 dark:text-slate-600 transition-transform duration-500 group-hover:scale-110 relative z-0">
                                    {offer.image}
                                </span>
                            </div>
                            <div className="flex flex-col flex-1 p-5 gap-3 bg-white dark:bg-slate-900 rounded-b-xl">
                                <div>
                                    <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                                        {offer.category}
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 leading-snug hover:text-red-500 transition-colors cursor-pointer">
                                        {offer.title}
                                    </h3>
                                    <div className="flex items-end gap-2 mb-3">
                                        <div className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
                                            ${offer.price.toLocaleString('es-AR')}
                                        </div>
                                        <div className="text-sm font-semibold text-slate-400 line-through mb-1">
                                            ${offer.originalPrice.toLocaleString('es-AR')}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">storefront</span>
                                        {offer.store}
                                    </span>
                                    <Link href="/producto/resina-filtek-z350" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition-all">
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    );
}
