import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { DatabaseService } from '../database/database.service';
import { ConceptoDentalScraper, AxDentalScraper, MegaDentalScraper, ProductNormalizer } from '@insumodent/scrapers';

interface ScrapingData {
    storeId: string;
}

@Processor('scraping-queue')
export class ScraperProcessor extends WorkerHost {
    private readonly logger = new Logger(ScraperProcessor.name);
    private readonly normalizer = new ProductNormalizer();

    constructor(private readonly db: DatabaseService) {
        super();
    }

    async process(job: Job<ScrapingData, any, string>): Promise<any> {
        const { storeId } = job.data;

        // Aquí implementaremos la lógica del scraping en la Fase 3, llamando
        // a los scrapers de `packages/scrapers`.

        const store = await this.db.store.findUnique({
            where: { id: storeId },
        });

        if (!store) {
            throw new Error(`Store con ID ${storeId} no encontrada.`);
        }

        this.logger.log(`Empezando el scraping de la tienda: ${store.name}`);

        try {
            let scraper;
            if (store.name.includes('Concepto Dental')) {
                scraper = new ConceptoDentalScraper();
            } else if (store.name.includes('AX Dental')) {
                scraper = new AxDentalScraper();
            } else if (store.name.includes('Mega Dental')) {
                scraper = new MegaDentalScraper();
            } else {
                throw new Error(`Scraper no implementado para la tienda: ${store.name}`);
            }

            // Obtener resultados en bruto
            const rawProducts = await scraper.scrapeAll();
            this.logger.log(`[${store.name}] Encontró ${rawProducts.length} productos brutos. Normalizando y guardando...`);

            let newCount = 0;
            let updateCount = 0;

            for (const raw of rawProducts) {
                // Normalizar los datos
                const parsed = this.normalizer.normalize(raw);

                // Buscar producto genérico existente usando nombre slug o ean
                let product = await this.db.product.findFirst({
                    where: { name: { equals: parsed.name, mode: 'insensitive' } },
                });

                if (!product) {
                    // Crear un producto nuevo
                    const slug = this.generateSlug(parsed.name);
                    product = await this.db.product.create({
                        data: {
                            name: parsed.name,
                            slug,
                            brand: parsed.brand,
                            category: parsed.category ?? 'MATERIALES',
                            subcategory: parsed.subcategory,
                            imageUrl: raw.imageUrl,
                        },
                    });
                    newCount++;
                }

                // Upsert StoreProduct
                const storeProduct = await this.db.storeProduct.upsert({
                    where: {
                        productId_storeId: {
                            storeId: store.id,
                            productId: product.id,
                        },
                    },
                    update: {
                        price: raw.price,
                        currency: raw.currency,
                        isAvailable: raw.isAvailable,
                        externalUrl: raw.externalUrl,
                        lastCheckedAt: new Date(),
                    },
                    create: {
                        storeId: store.id,
                        productId: product.id,
                        externalId: raw.externalId,
                        price: raw.price,
                        currency: raw.currency,
                        isAvailable: raw.isAvailable,
                        externalUrl: raw.externalUrl,
                        lastCheckedAt: new Date(),
                    },
                });

                // Upsert PriceHistory
                await this.db.priceHistory.create({
                    data: {
                        storeProductId: storeProduct.id,
                        price: raw.price,
                        currency: raw.currency,
                    },
                });
                updateCount++;
            }

            // Actualizar tienda
            await this.db.store.update({
                where: { id: store.id },
                data: { lastScrapedAt: new Date() },
            });

            this.logger.log(`[${store.name}] Terminó exitosamente. Nuevos: ${newCount}, Actualizados: ${updateCount}`);
            return { success: true, processed: rawProducts.length, newCount, updateCount };
        } catch (err: any) {
            this.logger.error(`Falló el scraping de ${store.name}: ${err.message}`);
            throw err;
        }
    }

    private generateSlug(text: string): string {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '') + '-' + Math.random().toString(36).substring(2, 6);
    }
}
