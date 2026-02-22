import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { QueryProductsDto } from './dto/query-products.dto';
import { Prisma } from '@insumodent/database';

/**
 * Servicio de productos.
 * Consulta productos con filtros, detalle por slug e historial de precios.
 */
@Injectable()
export class ProductsService {
    constructor(private readonly db: DatabaseService) { }

    /**
     * Listar productos con filtros, paginación y precio mínimo actual.
     */
    async findAll(query: QueryProductsDto) {
        const { q, category, brand, minPrice, maxPrice, page = 1, limit = 20, sortBy } = query;
        const skip = (page - 1) * limit;

        // Construir filtro dinámico
        const where: Prisma.ProductWhereInput = {};

        if (q) {
            where.OR = [
                { name: { contains: q, mode: 'insensitive' } },
                { brand: { contains: q, mode: 'insensitive' } },
                { subcategory: { contains: q, mode: 'insensitive' } },
            ];
        }
        if (category) where.category = category;
        if (brand) where.brand = { equals: brand, mode: 'insensitive' };

        // Filtro de precio en StoreProducts
        if (minPrice !== undefined || maxPrice !== undefined) {
            where.storeProducts = {
                some: {
                    isAvailable: true,
                    ...(minPrice !== undefined && { price: { gte: minPrice } }),
                    ...(maxPrice !== undefined && { price: { lte: maxPrice } }),
                },
            };
        }

        const [products, total] = await Promise.all([
            this.db.product.findMany({
                where,
                skip,
                take: limit,
                include: {
                    storeProducts: {
                        where: { isAvailable: true },
                        include: { store: { select: { name: true, logoUrl: true } } },
                        orderBy: { price: 'asc' },
                    },
                },
                orderBy: this.getOrderBy(sortBy),
            }),
            this.db.product.count({ where }),
        ]);

        // Mapear para incluir precio mínimo
        const data = products.map((product) => {
            const bestOffer = product.storeProducts[0] ?? null;
            return {
                id: product.id,
                name: product.name,
                slug: product.slug,
                brand: product.brand,
                category: product.category,
                subcategory: product.subcategory,
                imageUrl: product.imageUrl,
                minPrice: bestOffer?.price ?? null,
                minPriceCurrency: bestOffer?.currency ?? null,
                minPriceStore: bestOffer?.store.name ?? null,
                storeCount: product.storeProducts.length,
            };
        });

        return {
            data,
            total,
            page,
            totalPages: Math.ceil(total / limit),
        };
    }

    /**
     * Detalle completo de un producto por slug.
     * Incluye precios por tienda e historial de 90 días.
     */
    async findBySlug(slug: string) {
        const product = await this.db.product.findUnique({
            where: { slug },
            include: {
                storeProducts: {
                    include: {
                        store: { select: { id: true, name: true, logoUrl: true, url: true, country: true } },
                        priceHistory: {
                            where: {
                                recordedAt: { gte: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) },
                            },
                            orderBy: { recordedAt: 'asc' },
                        },
                    },
                    orderBy: { price: 'asc' },
                },
            },
        });

        if (!product) {
            throw new NotFoundException(`Producto con slug "${slug}" no encontrado`);
        }

        // Formatear la respuesta
        const storeProducts = product.storeProducts.map((sp) => ({
            storeId: sp.store.id,
            storeName: sp.store.name,
            storeLogoUrl: sp.store.logoUrl,
            storeUrl: sp.store.url,
            storeCountry: sp.store.country,
            price: sp.price,
            currency: sp.currency,
            isAvailable: sp.isAvailable,
            externalUrl: sp.externalUrl,
            lastCheckedAt: sp.lastCheckedAt,
        }));

        const priceHistory = product.storeProducts.flatMap((sp) =>
            sp.priceHistory.map((ph) => ({
                price: ph.price,
                currency: ph.currency,
                recordedAt: ph.recordedAt,
                storeName: sp.store.name,
                storeId: sp.store.id,
            })),
        );

        return {
            id: product.id,
            name: product.name,
            slug: product.slug,
            description: product.description,
            brand: product.brand,
            ean: product.ean,
            category: product.category,
            subcategory: product.subcategory,
            imageUrl: product.imageUrl,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            storeProducts,
            priceHistory,
        };
    }

    /**
     * Historial de precios de un producto agrupado por tienda.
     */
    async getPriceHistory(slug: string, days: number = 90) {
        const product = await this.db.product.findUnique({
            where: { slug },
            include: {
                storeProducts: {
                    include: {
                        store: { select: { id: true, name: true } },
                        priceHistory: {
                            where: {
                                recordedAt: { gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) },
                            },
                            orderBy: { recordedAt: 'asc' },
                        },
                    },
                },
            },
        });

        if (!product) {
            throw new NotFoundException(`Producto con slug "${slug}" no encontrado`);
        }

        return product.storeProducts.map((sp) => ({
            storeId: sp.store.id,
            storeName: sp.store.name,
            history: sp.priceHistory.map((ph) => ({
                price: ph.price,
                currency: ph.currency,
                recordedAt: ph.recordedAt,
            })),
        }));
    }

    /**
     * Resolver la columna de ordenamiento.
     */
    private getOrderBy(sortBy?: string): Prisma.ProductOrderByWithRelationInput {
        switch (sortBy) {
            case 'newest':
                return { createdAt: 'desc' };
            case 'name':
                return { name: 'asc' };
            default:
                return { name: 'asc' };
        }
    }
}
