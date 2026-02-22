import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

/**
 * Servicio de tiendas.
 * Lista las tiendas activas con cantidad de productos indexados.
 */
@Injectable()
export class StoresService {
    constructor(private readonly db: DatabaseService) { }

    /**
     * Obtener todas las tiendas activas con conteo de productos.
     */
    async findAll() {
        const stores = await this.db.store.findMany({
            where: { isActive: true },
            include: {
                _count: {
                    select: { storeProducts: true },
                },
            },
            orderBy: { name: 'asc' },
        });

        return stores.map((store) => ({
            id: store.id,
            name: store.name,
            url: store.url,
            logoUrl: store.logoUrl,
            country: store.country,
            lastScrapedAt: store.lastScrapedAt,
            productCount: store._count.storeProducts,
        }));
    }
}
