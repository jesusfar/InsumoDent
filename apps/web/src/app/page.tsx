export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Hero principal */}
      <div className="text-center max-w-3xl mx-auto">
        {/* Logo y título */}
        <h1 className="text-5xl font-bold text-primary-500 mb-4">
          🦷 InsumoDent
        </h1>
        <p className="text-xl text-slate-600 mb-12">
          El metabuscador de insumos odontológicos para Argentina e
          internacional. Compará precios en múltiples tiendas y encontrá las
          mejores ofertas.
        </p>

        {/* Barra de búsqueda */}
        <div className="relative w-full max-w-2xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Buscar insumos: resina, composite, fresa..."
            className="w-full px-6 py-4 text-lg border-2 border-primary-200 rounded-full 
                       focus:outline-none focus:ring-4 focus:ring-primary-100 focus:border-primary-500 
                       shadow-lg transition-all"
          />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-500 text-white 
                          px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
          >
            Buscar
          </button>
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'Materiales', icon: '🧪', color: 'bg-blue-50' },
            { name: 'Equipamiento', icon: '⚙️', color: 'bg-green-50' },
            { name: 'Instrumental', icon: '🔧', color: 'bg-purple-50' },
            { name: 'Tecnología', icon: '💻', color: 'bg-orange-50' },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`${cat.color} rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer`}
            >
              <span className="text-3xl mb-2 block">{cat.icon}</span>
              <span className="font-medium text-slate-700">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Estadísticas */}
        <div className="flex justify-center gap-8 text-slate-500">
          <div>
            <span className="text-2xl font-bold text-primary-500 block">0</span>
            <span className="text-sm">Productos indexados</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-primary-500 block">0</span>
            <span className="text-sm">Tiendas activas</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-success-500 block">0</span>
            <span className="text-sm">Bajadas de precio hoy</span>
          </div>
        </div>
      </div>
    </main>
  );
}
