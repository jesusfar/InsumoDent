import { PrismaClient, Category, Currency, Country } from '@prisma/client';

const prisma = new PrismaClient();

/** Generar slug a partir de un nombre */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Generar precio aleatorio dentro de un rango */
function randomPrice(min: number, max: number): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

/** Generar fecha aleatoria en los últimos N días */
function randomDate(daysAgo: number): Date {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date;
}

async function main(): Promise<void> {
  console.log('🌱 Iniciando seed de la base de datos...');

  // --- Limpiar datos existentes ---
  await prisma.priceHistory.deleteMany();
  await prisma.priceAlert.deleteMany();
  await prisma.storeProduct.deleteMany();
  await prisma.product.deleteMany();
  await prisma.store.deleteMany();
  await prisma.user.deleteMany();

  // ============================================
  // TIENDAS
  // ============================================
  console.log('🏪 Creando tiendas...');

  const stores = await Promise.all([
    prisma.store.create({
      data: {
        name: 'Concepto Dental',
        url: 'https://www.conceptodental.com.ar',
        logoUrl: 'https://www.conceptodental.com.ar/logo.png',
        country: Country.AR,
        isActive: true,
        lastScrapedAt: new Date(),
      },
    }),
    prisma.store.create({
      data: {
        name: 'AX Dental',
        url: 'https://www.axdental.com.ar',
        logoUrl: 'https://www.axdental.com.ar/logo.png',
        country: Country.AR,
        isActive: true,
        lastScrapedAt: new Date(),
      },
    }),
    prisma.store.create({
      data: {
        name: 'Mega Dental',
        url: 'https://www.megadental.com.ar',
        logoUrl: 'https://www.megadental.com.ar/logo.png',
        country: Country.AR,
        isActive: true,
        lastScrapedAt: new Date(),
      },
    }),
  ]);

  console.log(`   ✅ ${stores.length} tiendas creadas`);

  // ============================================
  // PRODUCTOS
  // ============================================
  console.log('📦 Creando productos...');

  const productData: Array<{
    name: string;
    brand: string;
    category: Category;
    subcategory: string;
    description: string;
    ean: string | null;
    priceRange: [number, number];
  }> = [
    // MATERIALES (8 productos)
    {
      name: 'Resina Compuesta Filtek Z350 XT',
      brand: '3M',
      category: Category.MATERIALES,
      subcategory: 'Resinas',
      description: 'Resina compuesta nanoparticulada para restauraciones anteriores y posteriores',
      ean: '7501065912345',
      priceRange: [25000, 42000],
    },
    {
      name: 'Cemento de Ionómero Vítreo Ketac Molar',
      brand: '3M',
      category: Category.MATERIALES,
      subcategory: 'Cementos',
      description: 'Ionómero vítreo de alta viscosidad para restauraciones posteriores',
      ean: '7501065912346',
      priceRange: [18000, 28000],
    },
    {
      name: 'Adhesivo Single Bond Universal',
      brand: '3M',
      category: Category.MATERIALES,
      subcategory: 'Adhesivos',
      description: 'Adhesivo universal para esmalte y dentina, compatible con todas las técnicas',
      ean: '7501065912347',
      priceRange: [32000, 48000],
    },
    {
      name: 'Alginato Jeltrate Plus',
      brand: 'Dentsply Sirona',
      category: Category.MATERIALES,
      subcategory: 'Impresión',
      description: 'Material de impresión de alginato de alta precisión',
      ean: '7891010100001',
      priceRange: [8000, 15000],
    },
    {
      name: 'Composite Tetric N-Ceram',
      brand: 'Ivoclar Vivadent',
      category: Category.MATERIALES,
      subcategory: 'Resinas',
      description: 'Composite nanohíbrido para restauraciones directas anteriores y posteriores',
      ean: '7612451234567',
      priceRange: [22000, 38000],
    },
    {
      name: 'Hidróxido de Calcio Dycal',
      brand: 'Dentsply Sirona',
      category: Category.MATERIALES,
      subcategory: 'Protección pulpar',
      description: 'Recubrimiento pulpar directo e indirecto a base de hidróxido de calcio',
      ean: '7891010100002',
      priceRange: [12000, 20000],
    },
    {
      name: 'Gutapercha ProTaper Gold',
      brand: 'Dentsply Sirona',
      category: Category.MATERIALES,
      subcategory: 'Endodoncia',
      description: 'Puntas de gutapercha para obturación de conductos radiculares',
      ean: '7891010100003',
      priceRange: [15000, 25000],
    },
    {
      name: 'Silicona de Adición Elite HD+',
      brand: 'Zhermack',
      category: Category.MATERIALES,
      subcategory: 'Impresión',
      description: 'Material de impresión de silicona de adición de alta definición',
      ean: null,
      priceRange: [35000, 55000],
    },

    // EQUIPAMIENTO (5 productos)
    {
      name: 'Lámpara LED Woodpecker i-LED',
      brand: 'Woodpecker',
      category: Category.EQUIPAMIENTO,
      subcategory: 'Fotocurado',
      description: 'Lámpara de fotocurado LED inalámbrica de alta potencia 2500mW/cm²',
      ean: '6953338900001',
      priceRange: [85000, 140000],
    },
    {
      name: 'Ultrasonido Dental Cavitron',
      brand: 'Dentsply Sirona',
      category: Category.EQUIPAMIENTO,
      subcategory: 'Periodoncia',
      description: 'Equipo ultrasónico para profilaxis y tratamiento periodontal',
      ean: '7891010100004',
      priceRange: [250000, 380000],
    },
    {
      name: 'Autoclave Clase B 18L',
      brand: 'Midmark',
      category: Category.EQUIPAMIENTO,
      subcategory: 'Esterilización',
      description: 'Autoclave de vapor clase B para esterilización de instrumental',
      ean: null,
      priceRange: [1200000, 1800000],
    },
    {
      name: 'Sillón Odontológico Gnatus S500',
      brand: 'Gnatus',
      category: Category.EQUIPAMIENTO,
      subcategory: 'Sillones',
      description: 'Sillón odontológico con pedestal, lámpara y bandeja integrada',
      ean: null,
      priceRange: [3500000, 5200000],
    },
    {
      name: 'Compresor Dental 1HP Silencioso',
      brand: 'Drean',
      category: Category.EQUIPAMIENTO,
      subcategory: 'Compresores',
      description: 'Compresor odontológico libre de aceite, ultra silencioso',
      ean: null,
      priceRange: [450000, 680000],
    },

    // INSTRUMENTAL (4 productos)
    {
      name: 'Kit de Exploración Dental (5 piezas)',
      brand: 'Hu-Friedy',
      category: Category.INSTRUMENTAL,
      subcategory: 'Diagnóstico',
      description: 'Kit básico: espejo, explorador, pinza, sonda periodontal, cucharita',
      ean: '0073854120001',
      priceRange: [45000, 72000],
    },
    {
      name: 'Fórceps Superior #150',
      brand: 'Hu-Friedy',
      category: Category.INSTRUMENTAL,
      subcategory: 'Cirugía',
      description: 'Fórceps para extracción de premolares superiores',
      ean: '0073854120002',
      priceRange: [35000, 55000],
    },
    {
      name: 'Cureta Gracey 5/6',
      brand: 'Hu-Friedy',
      category: Category.INSTRUMENTAL,
      subcategory: 'Periodoncia',
      description: 'Cureta Gracey para raspaje y alisado radicular de dientes anteriores',
      ean: '0073854120003',
      priceRange: [18000, 30000],
    },
    {
      name: 'Elevador Recto Winter #301',
      brand: 'Hu-Friedy',
      category: Category.INSTRUMENTAL,
      subcategory: 'Cirugía',
      description: 'Elevador recto para luxación de raíces dentales',
      ean: '0073854120004',
      priceRange: [22000, 38000],
    },

    // TECNOLOGÍA (3 productos)
    {
      name: 'Scanner Intraoral Medit i700',
      brand: 'Medit',
      category: Category.TECNOLOGIA,
      subcategory: 'Escáners',
      description: 'Escáner intraoral 3D de alta velocidad para impresiones digitales',
      ean: null,
      priceRange: [8500000, 12000000],
    },
    {
      name: 'Sensor Digital RVG Carestream 6200',
      brand: 'Carestream',
      category: Category.TECNOLOGIA,
      subcategory: 'Radiología',
      description: 'Sensor digital intraoral para radiografías periapicales',
      ean: null,
      priceRange: [2800000, 4200000],
    },
    {
      name: 'Motor de Endodoncia X-Smart IQ',
      brand: 'Dentsply Sirona',
      category: Category.TECNOLOGIA,
      subcategory: 'Endodoncia',
      description: 'Motor rotatorio de endodoncia con control de torque y localizador apical',
      ean: '7891010100005',
      priceRange: [650000, 950000],
    },
  ];

  const products = [];

  for (const p of productData) {
    const product = await prisma.product.create({
      data: {
        name: p.name,
        slug: slugify(p.name),
        brand: p.brand,
        category: p.category,
        subcategory: p.subcategory,
        description: p.description,
        ean: p.ean,
        imageUrl: `https://placehold.co/400x400/1565C0/white?text=${encodeURIComponent(p.name.substring(0, 15))}`,
      },
    });
    products.push({ ...product, priceRange: p.priceRange });
  }

  console.log(`   ✅ ${products.length} productos creados`);

  // ============================================
  // STORE PRODUCTS + HISTORIAL DE PRECIOS
  // ============================================
  console.log('💰 Creando precios por tienda e historial...');

  let storeProductCount = 0;
  let priceHistoryCount = 0;

  for (const product of products) {
    // Cada producto está en 2-3 tiendas aleatorias
    const shuffledStores = [...stores].sort(() => Math.random() - 0.5);
    const storeCount = Math.random() > 0.3 ? 3 : 2;
    const selectedStores = shuffledStores.slice(0, storeCount);

    for (const store of selectedStores) {
      const currentPrice = randomPrice(product.priceRange[0], product.priceRange[1]);

      const storeProduct = await prisma.storeProduct.create({
        data: {
          productId: product.id,
          storeId: store.id,
          externalUrl: `${store.url}/producto/${product.slug}`,
          externalId: `ext-${Math.random().toString(36).substring(7)}`,
          price: currentPrice,
          currency: Currency.ARS,
          isAvailable: Math.random() > 0.1, // 90% disponible
          lastCheckedAt: new Date(),
        },
      });
      storeProductCount++;

      // Generar historial de precios (10-20 registros por producto/tienda, últimos 90 días)
      const historyCount = 10 + Math.floor(Math.random() * 11);
      const historyRecords = [];

      for (let i = 0; i < historyCount; i++) {
        // Precio fluctúa ±15% respecto al actual
        const variation = 1 + (Math.random() * 0.3 - 0.15);
        const historicalPrice = Math.round(currentPrice * variation * 100) / 100;
        const daysAgo = Math.floor((90 / historyCount) * (historyCount - i));

        const recordedAt = new Date();
        recordedAt.setDate(recordedAt.getDate() - daysAgo);

        historyRecords.push({
          storeProductId: storeProduct.id,
          price: historicalPrice,
          currency: Currency.ARS,
          recordedAt,
        });
      }

      // Agregar el precio actual como último registro
      historyRecords.push({
        storeProductId: storeProduct.id,
        price: currentPrice,
        currency: Currency.ARS,
        recordedAt: new Date(),
      });

      await prisma.priceHistory.createMany({ data: historyRecords });
      priceHistoryCount += historyRecords.length;
    }
  }

  console.log(`   ✅ ${storeProductCount} precios de tienda creados`);
  console.log(`   ✅ ${priceHistoryCount} registros de historial de precios`);

  // ============================================
  // USUARIO DE EJEMPLO
  // ============================================
  console.log('👤 Creando usuario de ejemplo...');

  const user = await prisma.user.create({
    data: {
      email: 'demo@insumodent.com.ar',
      name: 'Usuario Demo',
      plan: 'FREE',
    },
  });

  // Crear una alerta de ejemplo
  await prisma.priceAlert.create({
    data: {
      userId: user.id,
      productId: products[0].id,
      targetPrice: products[0].priceRange[0] * 0.9, // 10% por debajo del mínimo
      currency: Currency.ARS,
      isActive: true,
    },
  });

  console.log('   ✅ Usuario y alerta de ejemplo creados');

  // ============================================
  // RESUMEN
  // ============================================
  console.log('\n🎉 Seed completado:');
  console.log(`   🏪 ${stores.length} tiendas`);
  console.log(`   📦 ${products.length} productos`);
  console.log(`   💰 ${storeProductCount} precios por tienda`);
  console.log(`   📊 ${priceHistoryCount} registros de historial`);
  console.log(`   👤 1 usuario demo`);
  console.log(`   🔔 1 alerta de precio`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error en el seed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
