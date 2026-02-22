import { chromium, Browser, Page } from 'playwright';
import { ScraperResult, Currency } from '@insumodent/shared';
import { BaseScraper } from '../base-scraper';

/**
 * Scraper para la tienda "AX Dental".
 * Utiliza Playwright porque es una SPA (Next.js/React) y el contenido se renderiza en cliente.
 */
export class AxDentalScraper extends BaseScraper {
    readonly storeName = 'AX Dental';
    readonly baseUrl = 'https://www.axdental.com.ar';

    private browser: Browser | null = null;

    async scrapeAll(): Promise<ScraperResult[]> {
        this.browser = await chromium.launch({ headless: true });

        try {
            const page = await this.browser.newPage();
            await page.goto(this.baseUrl + '/productos', { waitUntil: 'networkidle' });

            // Hacer scroll para cargar más productos (Infinite Scroll)
            await this.autoScroll(page);

            const products = await page.$$eval('.product-card', (elements) => {
                return elements.map((el) => {
                    const url = el.querySelector('a')?.getAttribute('href') || '';
                    const name = el.querySelector('.product-name')?.textContent?.trim() || '';
                    const priceText = el.querySelector('.product-price')?.textContent?.replace(/[^\d]/g, '') || '0';
                    const price = parseInt(priceText, 10);
                    const imageUrl = el.querySelector('img')?.getAttribute('src') || '';
                    const isAvailable = !el.querySelector('.sold-out');
                    const externalId = el.getAttribute('data-product-id') || btoa(url).slice(0, 15);

                    return {
                        externalId,
                        name,
                        price,
                        currency: 'ARS' as const,
                        isAvailable,
                        imageUrl,
                        externalUrl: url,
                    };
                });
            });

            return products.map(p => ({
                ...p,
                currency: Currency.ARS,
                imageUrl: p.imageUrl.startsWith('http') ? p.imageUrl : this.baseUrl + p.imageUrl,
                externalUrl: p.externalUrl.startsWith('http') ? p.externalUrl : this.baseUrl + p.externalUrl,
            })).filter(p => p.name && p.price > 0);

        } finally {
            if (this.browser) await this.browser.close();
        }
    }

    async scrapeProduct(url: string): Promise<ScraperResult> {
        return this.withRetry(async () => {
            this.browser = await chromium.launch({ headless: true });
            try {
                const page = await this.browser.newPage();
                await page.goto(url, { waitUntil: 'networkidle' });

                const name = await page.$eval('h1.product-title', el => el.textContent?.trim());
                if (!name) throw new Error('Título no encontrado');

                const priceText = await page.$eval('.price-wrapper', el => el.textContent?.replace(/[^\d]/g, '') || '0');
                const price = parseInt(priceText, 10);

                const isAvailable = await page.$('.add-to-cart-button:not([disabled])') !== null;
                const imageUrl = await page.$eval('.product-gallery img', el => el.getAttribute('src')) || undefined;
                const externalId = await page.$eval('[data-product-id]', el => el.getAttribute('data-product-id')) || btoa(url).slice(0, 15);

                return {
                    externalId,
                    name,
                    price,
                    currency: Currency.ARS,
                    isAvailable,
                    imageUrl: imageUrl ? (imageUrl.startsWith('http') ? imageUrl : this.baseUrl + imageUrl) : undefined,
                    externalUrl: url,
                };
            } finally {
                if (this.browser) {
                    await this.browser.close();
                    this.browser = null;
                }
            }
        });
    }

    /**
     * Helper para hacer scroll hasta abajo y cargar todos los productos
     */
    private async autoScroll(page: Page): Promise<void> {
        await page.evaluate(async () => {
            await new Promise<void>((resolve) => {
                let totalHeight = 0;
                const distance = 100;
                const timer = setInterval(() => {
                    const scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;

                    if (totalHeight >= scrollHeight - window.innerHeight) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);
            });
        });
    }
}
