import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { DatabaseService } from '../database/database.service';

/**
 * Servicio de scraping.
 * Gestiona la ejecución de scrapers encolando trabajos en BullMQ.
 */
@Injectable()
export class ScraperService {
    private readonly logger = new Logger(ScraperService.name);

    constructor(
        private readonly db: DatabaseService,
        @InjectQueue('scraping-queue') private scrapingQueue: Queue,
    ) { }

    /**
     * Disparar scraping manual de una tienda encolando un Job en Redis.
     */
    async runScraper(storeId: string) {
        const store = await this.db.store.findUnique({
            where: { id: storeId },
        });

        if (!store) {
            return { success: false, message: `Tienda con id "${storeId}" no encontrada` };
        }

        // Encolar el trabajo de scraping
        const job = await this.scrapingQueue.add('scrape-store', { storeId });
        this.logger.log(`🔄 Scraping encolado para ${store.name} (Job ID: ${job.id})`);

        return {
            success: true,
            message: `Scraping encolado para ${store.name}`,
            storeId,
            storeName: store.name,
            jobId: job.id,
        };
    }

    /**
     * Obtener el estado actual revisando la base de datos y la cola de BullMQ.
     */
    async getStatus() {
        const stores = await this.db.store.findMany({
            where: { isActive: true },
            include: {
                _count: { select: { storeProducts: true } },
            },
            orderBy: { name: 'asc' },
        });

        // Obtener jobs activos y en espera
        const activeJobs = await this.scrapingQueue.getActive();
        const waitingJobs = await this.scrapingQueue.getWaiting();
        const allPendingJobs = [...activeJobs, ...waitingJobs];

        return stores.map((store) => {
            // Verificar si hay algún job pendiente o activo para esta tienda
            const isRunning = allPendingJobs.some(job => job.data?.storeId === store.id);

            return {
                storeId: store.id,
                storeName: store.name,
                lastScrapedAt: store.lastScrapedAt,
                productsIndexed: store._count.storeProducts,
                isRunning,
            };
        });
    }
}
