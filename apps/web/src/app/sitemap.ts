import { MetadataRoute } from 'next';

const BASE_URL = 'https://insumodent.com.ar';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/buscar',
        '/categorias',
        '/tiendas',
        '/ofertas',
        '/mi-cuenta',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // In a real implementation we would fetch products and categories here to include them
    // const products = await getProducts();
    // const productRoutes = products.map...

    return [...routes];
}
