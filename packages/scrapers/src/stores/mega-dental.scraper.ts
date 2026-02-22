import { chromium, Browser, BrowserContext } from 'playwright';
import { ScraperResult, Currency } from '@insumodent/shared';
import { BaseScraper } from '../base-scraper';

/**
 * Scraper para la tienda "Mega Dental".
 * Utiliza Playwright con evasión básica de anti-bots (Cloudflare/Incapsula).
 */
export class MegaDentalScraper extends BaseScraper {
    readonly storeName = 'Mega Dental';
    readonly baseUrl = 'https://www.megadental.com.ar';

    private browser: Browser | null = null;
    private context: BrowserContext | null = null;

    async scrapeAll(): Promise<ScraperResult[]> {
        await this.initBrowser();

        try {
            const page = await this.context!.newPage();

            // Ir a la página principal de productos
            await page.goto(this.baseUrl + '/productos', { waitUntil: 'domcontentloaded' });
            await page.waitForTimeout(2000); // Esperar a que pase el chequeo anti-bot inicial

            const products = await page.$$eval('.item-box', (elements) => {
                return elements.map((el) => {
                    const url = el.querySelector('h2.product-title a')?.getAttribute('href') || '';
                    const name = el.querySelector('h2.product-title')?.textContent?.trim() || '';
                    const priceText = el.querySelector('.actual-price')?.textContent?.replace(/[^\d]/g, '') || '0';
                    const price = parseInt(priceText, 10);
                    const imageUrl = el.querySelector('.picture img')?.getAttribute('src') || '';
                    const isAvailable = !el.querySelector('.out-of-stock');
                    const externalId = el.getAttribute('data-productid') || btoa(url).slice(0, 15);

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
            await this.closeBrowser();
        }
    }

    async scrapeProduct(url: string): Promise<ScraperResult> {
        return this.withRetry(async () => {
            await this.initBrowser();
            try {
                const page = await this.context!.newPage();
                await page.goto(url, { waitUntil: 'domcontentloaded' });
                await page.waitForTimeout(1000);

                const name = await page.$eval('.product-name h1', el => el.textContent?.trim());
                if (!name) throw new Error('Título no encontrado');

                const priceText = await page.$eval('.product-price', el => el.textContent?.replace(/[^\d]/g, '') || '0');
                const price = parseInt(priceText, 10);

                const isAvailable = await page.$('.add-to-cart-button') !== null;
                const imageUrl = await page.$eval('.gallery img', el => el.getAttribute('src')) || undefined;
                const externalId = await page.$eval('[data-productid]', el => el.getAttribute('data-productid')) || btoa(url).slice(0, 15);

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
                await this.closeBrowser();
            }
        });
    }

    /**
     * Inicializa el navegador con evasión básica
     */
    private async initBrowser() {
        if (!this.browser) {
            this.browser = await chromium.launch({ headless: true });
            this.context = await this.browser.newContext({
                userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                viewport: { width: 1920, height: 1080 },
                extraHTTPHeaders: {
                    'Accept-Language': 'es-AR,es;q=0.9,en-US;q=0.8,en;q=0.7',
                }
            });

            // Evasiones básicas inyectadas en todas las páginas
            await this.context.addInitScript(() => {
                Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
                // @ts-ignore
                window.chrome = { runtime: {} };
            });
        }
    }

    private async closeBrowser() {
        if (this.context) {
            await this.context.close();
            this.context = null;
        }
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
