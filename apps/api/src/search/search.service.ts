import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MeiliSearch, Index } from 'meilisearch';
import { DatabaseService } from '../database/database.service';

/**
 * Documento de producto indexado en Meilisearch.
 */
export interface ProductDocument {
    id: string;
    name: string;
    slug: string;
    brand: string | null;
    category: string;
    subcategory: string | null;
    imageUrl: string | null;
    minPrice: number | null;
    minPriceStore: string | null;
    storeCount: number;
}

/**
 * Servicio de búsqueda full-text usando Meilisearch.
 * Configura el índice y sincroniza productos automáticamente.
 */
@Injectable()
export class SearchService implements OnModuleInit {
    private readonly logger = new Logger(SearchService.name);
    private client: MeiliSearch;
    private productsIndex!: Index;

    constructor(
        private readonly configService: ConfigService,
        private readonly db: DatabaseService,
    ) {
        const host = this.configService.get<string>('MEILI_HOST', 'http://localhost:7700');
        const apiKey = this.configService.get<string>('MEILI_MASTER_KEY', '');

        this.client = new MeiliSearch({ host, apiKey });
    }

    async onModuleInit(): Promise<void> {
        try {
            // Timeout de 3 segundos para no bloquear el inicio si Meilisearch no está disponible
            await Promise.race([
                this.initMeilisearch(),
                new Promise<never>((_, reject) =>
                    setTimeout(() => reject(new Error('Meilisearch timeout')), 3000),
                ),
            ]);
            this.logger.log('🔍 Meilisearch configurado correctamente');
        } catch (error) {
            this.logger.warn(`⚠️ Meilisearch no disponible, usando búsqueda SQL como fallback: ${String(error)}`);
        }
    }

    private async initMeilisearch(): Promise<void> {
        await this.client.createIndex('products', { primaryKey: 'id' });
        this.productsIndex = this.client.index('products');

        await this.productsIndex.updateSearchableAttributes([
            'name',
            'brand',
            'subcategory',
            'category',
        ]);

        await this.productsIndex.updateFilterableAttributes([
            'category',
            'brand',
            'minPrice',
        ]);

        await this.productsIndex.updateSortableAttributes(['minPrice', 'name']);

        await this.syncAllProducts();
    }

    /**
     * Buscar productos con búsqueda full-text.
     */
    async search(q: string, limit: number = 10): Promise<ProductDocument[]> {
        try {
            const results = await this.productsIndex.search<ProductDocument>(q, {
                limit,
            });
            return results.hits;
        } catch {
            // Si Meilisearch no está disponible, hacer fallback a búsqueda SQL
            this.logger.warn('Meilisearch no disponible, usando búsqueda SQL');
            return this.searchFallback(q, limit);
        }
    }

    /**
     * Sincronizar todos los productos con Meilisearch.
     */
    async syncAllProducts(): Promise<void> {
        const products = await this.db.product.findMany({
            include: {
                storeProducts: {
                    where: { isAvailable: true },
                    include: { store: { select: { name: true } } },
                    orderBy: { price: 'asc' },
                },
            },
        });

        const documents: ProductDocument[] = products.map((p) => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            brand: p.brand,
            category: p.category,
            subcategory: p.subcategory,
            imageUrl: p.imageUrl,
            minPrice: p.storeProducts[0]?.price ?? null,
            minPriceStore: p.storeProducts[0]?.store.name ?? null,
            storeCount: p.storeProducts.length,
        }));

        if (documents.length > 0) {
            await this.productsIndex.addDocuments(documents);
            this.logger.log(`📄 ${documents.length} productos sincronizados con Meilisearch`);
        }
    }

    /**
     * Sincronizar un producto individual con Meilisearch.
     */
    async syncProduct(productId: string): Promise<void> {
        try {
            const product = await this.db.product.findUnique({
                where: { id: productId },
                include: {
                    storeProducts: {
                        where: { isAvailable: true },
                        include: { store: { select: { name: true } } },
                        orderBy: { price: 'asc' },
                    },
                },
            });

            if (!product) return;

            const doc: ProductDocument = {
                id: product.id,
                name: product.name,
                slug: product.slug,
                brand: product.brand,
                category: product.category,
                subcategory: product.subcategory,
                imageUrl: product.imageUrl,
                minPrice: product.storeProducts[0]?.price ?? null,
                minPriceStore: product.storeProducts[0]?.store.name ?? null,
                storeCount: product.storeProducts.length,
            };

            await this.productsIndex.addDocuments([doc]);
        } catch {
            this.logger.warn(`No se pudo sincronizar producto ${productId} con Meilisearch`);
        }
    }

    /**
     * Búsqueda fallback usando SQL cuando Meilisearch no está disponible.
     */
    private async searchFallback(q: string, limit: number): Promise<ProductDocument[]> {
        const products = await this.db.product.findMany({
            where: {
                OR: [
                    { name: { contains: q, mode: 'insensitive' } },
                    { brand: { contains: q, mode: 'insensitive' } },
                    { subcategory: { contains: q, mode: 'insensitive' } },
                ],
            },
            take: limit,
            include: {
                storeProducts: {
                    where: { isAvailable: true },
                    include: { store: { select: { name: true } } },
                    orderBy: { price: 'asc' },
                },
            },
        });

        return products.map((p) => ({
            id: p.id,
            name: p.name,
            slug: p.slug,
            brand: p.brand,
            category: p.category,
            subcategory: p.subcategory,
            imageUrl: p.imageUrl,
            minPrice: p.storeProducts[0]?.price ?? null,
            minPriceStore: p.storeProducts[0]?.store.name ?? null,
            storeCount: p.storeProducts.length,
        }));
    }
}
