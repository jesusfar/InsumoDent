import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]"></div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Encuentra el mejor precio en{' '}
            <span className="text-primary">insumos odontológicos</span>
          </h1>
          <p className="mb-10 text-lg text-slate-600 dark:text-slate-400">
            Compara precios entre cientos de proveedores verificados y ahorra en tu clínica dental.
          </p>

          {/* Search Box */}
          <div className="mx-auto max-w-2xl transform transition-all hover:-translate-y-1">
            <div className="relative flex items-center w-full h-14 md:h-16 rounded-2xl shadow-xl shadow-primary/5 bg-white ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700 overflow-hidden">
              <div className="flex h-full w-14 items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="text"
                placeholder="Buscar productos, marcas, SKU..."
                className="h-full flex-1 border-0 bg-transparent px-2 text-base md:text-lg text-slate-900 placeholder:text-slate-400 focus:ring-0 dark:text-white"
              />
              <div className="pr-2">
                <button className="h-10 md:h-12 rounded-xl bg-primary px-6 text-sm md:text-base font-bold text-white transition-colors hover:bg-primary-dark">
                  Buscar
                </button>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">verified_user</span>
              <span className="text-sm font-semibold text-slate-500">Proveedores Verificados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">savings</span>
              <span className="text-sm font-semibold text-slate-500">Mejores Ofertas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-slate-400">local_shipping</span>
              <span className="text-sm font-semibold text-slate-500">Envíos a todo el país</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-background-light dark:bg-background-dark py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Categorías Populares
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Category Card 1 */}
            <Link
              href="/categoria/materiales"
              className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-700 dark:text-blue-400">
                <span className="material-symbols-outlined text-4xl">dentistry</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Materiales</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Resinas, cementos y adhesivos
              </p>
            </Link>

            {/* Category Card 2 */}
            <Link
              href="/categoria/equipamiento"
              className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-700 dark:text-blue-400">
                <span className="material-symbols-outlined text-4xl">chair</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Equipamiento</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Sillones, lámparas y rayos X
              </p>
            </Link>

            {/* Category Card 3 */}
            <Link
              href="/categoria/instrumental"
              className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-700 dark:text-blue-400">
                <span className="material-symbols-outlined text-4xl">medical_services</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Instrumental</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Forceps, espejos y exploradores
              </p>
            </Link>

            {/* Category Card 4 */}
            <Link
              href="/categoria/tecnologia"
              className="group relative flex flex-col items-center gap-4 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/50"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-700 dark:text-blue-400">
                <span className="material-symbols-outlined text-4xl">monitor_heart</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tecnología</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Software, scanners y 3D
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Deals Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Ofertas Destacadas
            </h2>
            <Link
              href="/ofertas"
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
            >
              Ver todas <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Card 1 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                -20% OFF
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="h-full w-full flex items-center justify-center bg-neutral-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
                    medication_liquid
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  3M ESPE
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary dark:text-white">
                  Resina Filtek Z350 XT Jeringa 4g - A2
                </h3>
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 line-through">$45.990</span>
                  <span className="text-lg font-bold text-primary">$36.790</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                  Ver Oferta
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                -15% OFF
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="h-full w-full flex items-center justify-center bg-neutral-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
                    vaccines
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Septodont
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary dark:text-white">
                  Anestesia Lidocaína 2% con Epinefrina - Caja 50 u.
                </h3>
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 line-through">$28.500</span>
                  <span className="text-lg font-bold text-primary">$24.225</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                  Ver Oferta
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                -30% OFF
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="h-full w-full flex items-center justify-center bg-neutral-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
                    content_cut
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Hu-Friedy
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary dark:text-white">
                  Kit de Diagnóstico Básico - Espejo, Explorador, Pinza
                </h3>
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 line-through">$65.000</span>
                  <span className="text-lg font-bold text-primary">$45.500</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                  Ver Oferta
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
              <div className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                -10% OFF
              </div>
              <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-900">
                <div className="h-full w-full flex items-center justify-center bg-neutral-100 dark:bg-slate-800">
                  <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">
                    sanitizer
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Vantal
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-primary dark:text-white">
                  Desinfectante de Superficies Alto Nivel - 5 Litros
                </h3>
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 line-through">$32.000</span>
                  <span className="text-lg font-bold text-primary">$28.800</span>
                </div>
                <button className="mt-4 w-full rounded-lg bg-slate-100 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                  Ver Oferta
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
