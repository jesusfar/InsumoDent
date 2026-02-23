import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import TextGlare from '@/components/TextGlare';

export default function Home() {
  return (
    <>
      {/* Promotional Banner (replaces abstract hero) */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-black overflow-hidden flex items-center justify-center border-b border-primary/20">
        {/* Background elements to maintain "Midnight Galaxy" feel */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 blur-[80px] rounded-full mix-blend-screen mix-blend-lighten pointer-events-none" />

        {/* Dynamic Content Simulation */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest mb-4">
            <TextGlare text="INSUMODENT" gradientColors={["#3b82f6", "#2dd4bf", "#3b82f6"]} />
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-8">
            LA PLATAFORMA DE BÚSQUEDA DE PRECIOS PREFERIDA POR LOS ODONTÓLOGOS
          </p>

          {/* Simulated Carousel Dots */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <div className="w-8 h-1 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
            <div className="w-8 h-1 bg-white/20 rounded-full hover:bg-white/40 transition-colors cursor-pointer"></div>
          </div>
        </div>

        {/* Simulated Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-4xl">chevron_left</span>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-4xl">chevron_right</span>
        </button>
      </section>

      {/* Categories Section (Store logos similar to HG) */}
      <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-6 animate-in-stagger delay-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <CategoryCard
              href="/categoria/materiales"
              iconName="dentistry"
              title="Materiales"
              description="Resinas, cementos y adhesivos"
            />
            <CategoryCard
              href="/categoria/equipamiento"
              iconName="chair"
              title="Equipamiento"
              description="Sillones, lámparas y rayos X"
            />
            <CategoryCard
              href="/categoria/instrumental"
              iconName="medical_services"
              title="Instrumental"
              description="Forceps, espejos y exploradores"
            />
            <CategoryCard
              href="/categoria/tecnologia"
              iconName="monitor_heart"
              title="Tecnología"
              description="Software, scanners y 3D"
            />
          </div>
        </div>
      </section>

      {/* Featured Deals Section */}
      < section className="bg-slate-100 dark:bg-[#0f172a] py-12 animate-in-stagger delay-200" >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between mb-6 bg-slate-800 dark:bg-slate-800 p-4 rounded-t-xl border-b-4 border-primary">
            <h2 className="text-xl md:text-2xl font-black tracking-wider text-white uppercase flex items-center gap-3">
              OFERTAS DESTACADAS
            </h2>
            <Link
              href="/ofertas"
              className="text-sm font-bold text-primary hover:text-white transition-colors uppercase"
            >
              Ver todas
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 bg-white dark:bg-slate-900 p-6 rounded-b-xl shadow-sm border border-t-0 border-slate-200 dark:border-slate-800">
            <ProductCard
              id="1"
              slug="resina-filtek-z350"
              brand="3M ESPE"
              name="Resina Filtek Z350 XT Jeringa 4g - A2"
              oldPrice={45990}
              currentPrice={36790}
              discountPercentage={20}
              iconName="medication_liquid"
            />
            <ProductCard
              id="2"
              slug="anestesia-lidocaina"
              brand="Septodont"
              name="Anestesia Lidocaína 2% con Epinefrina - Caja 50 u."
              oldPrice={28500}
              currentPrice={24225}
              discountPercentage={15}
              iconName="vaccines"
            />
            <ProductCard
              id="3"
              slug="kit-diagnostico"
              brand="Hu-Friedy"
              name="Kit de Diagnóstico Básico - Espejo, Explorador, Pinza"
              oldPrice={65000}
              currentPrice={45500}
              discountPercentage={30}
              iconName="content_cut"
            />
            <ProductCard
              id="4"
              slug="desinfectante-superficies"
              brand="Vantal"
              name="Desinfectante de Superficies Alto Nivel - 5 Litros"
              oldPrice={32000}
              currentPrice={28800}
              discountPercentage={10}
              iconName="sanitizer"
            />
          </div>
        </div>
      </section >
    </>
  );
}
