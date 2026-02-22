import * as cheerio from 'cheerio';
import axios from 'axios';
import { ScraperResult, Currency } from '@insumodent/shared';
import { BaseScraper } from '../base-scraper';

/**
 * Scraper para la tienda "Concepto Dental".
 * Utiliza Axios + Cheerio porque el sitio tiene SSR y buena estructura HTML.
 */
export class ConceptoDentalScraper extends BaseScraper {
    readonly storeName = 'Concepto Dental';
    readonly baseUrl = 'https://www.conceptodental.com.ar';

    // Ejemplo de categorías a scrapear
    private readonly categories = [
        '/materiales',
        '/equipamiento',
        '/instrumental',
    ];

    async scrapeAll(): Promise<ScraperResult[]> {
        const allProducts: ScraperResult[] = [];

        for (const categoryPath of this.categories) {
            await this.waitRateLimit();
            const products = await this.scrapeCategory(this.baseUrl + categoryPath);
            allProducts.push(...products);
        }

        return allProducts;
    }

    async scrapeProduct(url: string): Promise<ScraperResult> {
        return this.withRetry(async () => {
            const { data } = await axios.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                },
            });

            const $ = cheerio.load(data);

            const name = $('h1.product-title').text().trim();
            if (!name) throw new Error('No se encontró el título del producto');

            const priceStr = $('.price-current').text().replace(/[^\d,.-]/g, '');
            const price = parseFloat(priceStr.replace('.', '').replace(',', '.'));

            const isAvailable = !$('.out-of-stock').length;
            const imageUrl = $('.product-image img').attr('src');
            const brand = $('.product-brand').text().trim();

            // Generar un ID externo basado en la URL
            const externalId = btoa(url).slice(0, 15);

            return {
                externalId,
                name,
                price,
                currency: Currency.ARS,
                isAvailable,
                imageUrl: imageUrl ? (imageUrl.startsWith('http') ? imageUrl : this.baseUrl + imageUrl) : undefined,
                externalUrl: url,
                brand: brand || undefined,
            };
        });
    }

    private async scrapeCategory(url: string, page = 1): Promise<ScraperResult[]> {
        return this.withRetry(async () => {
            // Stub: En un escenario real, paginaría y extraería los links de los productos de la grilla
            // y luego llamaría a scrapeProduct para cada uno o extraería la info directo de la grilla.
            console.log(`[Concepto Dental] Scrapeando categoría: ${url} (página ${page})`);

            const { data } = await axios.get(`${url}?page=${page}`, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                },
            });

            const $ = cheerio.load(data);
            const results: ScraperResult[] = [];

            $('.product-item').each((_, el) => {
                const productUrl = $(el).find('a.product-link').attr('href');
                const name = $(el).find('.product-title').text().trim();
                const priceStr = $(el).find('.product-price').text().replace(/[^\d,.-]/g, '');
                const price = parseFloat(priceStr.replace('.', '').replace(',', '.'));
                const externalId = $(el).attr('data-id') || btoa(productUrl || '').slice(0, 15);
                const isAvailable = !$(el).hasClass('out-of-stock');
                const imageUrl = $(el).find('img.lazyload').attr('data-src') || $(el).find('img').attr('src');

                if (name && !isNaN(price) && productUrl) {
                    results.push({
                        externalId,
                        name,
                        price,
                        currency: Currency.ARS,
                        isAvailable,
                        imageUrl: imageUrl ? (imageUrl.startsWith('http') ? imageUrl : this.baseUrl + imageUrl) : undefined,
                        externalUrl: productUrl.startsWith('http') ? productUrl : this.baseUrl + productUrl,
                    });
                }
            });

            return results;
        });
    }
}
