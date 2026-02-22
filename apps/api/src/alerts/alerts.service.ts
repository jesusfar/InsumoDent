import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateAlertDto } from './dto/create-alert.dto';

/**
 * Servicio de alertas de precio.
 * CRUD de alertas para usuarios.
 */
@Injectable()
export class AlertsService {
    constructor(private readonly db: DatabaseService) { }

    /**
     * Crear una nueva alerta de precio.
     */
    async create(userId: string, dto: CreateAlertDto) {
        // Verificar que el producto existe
        const product = await this.db.product.findUnique({
            where: { id: dto.productId },
        });

        if (!product) {
            throw new NotFoundException(`Producto con id "${dto.productId}" no encontrado`);
        }

        return this.db.priceAlert.create({
            data: {
                userId,
                productId: dto.productId,
                targetPrice: dto.targetPrice,
                currency: dto.currency,
            },
            include: {
                product: { select: { name: true, slug: true, imageUrl: true } },
            },
        });
    }

    /**
     * Listar alertas activas de un usuario.
     */
    async findByUser(userId: string) {
        const alerts = await this.db.priceAlert.findMany({
            where: { userId, isActive: true },
            include: {
                product: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        imageUrl: true,
                        storeProducts: {
                            where: { isAvailable: true },
                            orderBy: { price: 'asc' },
                            take: 1,
                            select: { price: true, currency: true, store: { select: { name: true } } },
                        },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        return alerts.map((alert) => {
            const currentBest = alert.product.storeProducts[0] ?? null;
            return {
                id: alert.id,
                productId: alert.productId,
                productName: alert.product.name,
                productSlug: alert.product.slug,
                productImageUrl: alert.product.imageUrl,
                targetPrice: alert.targetPrice,
                currency: alert.currency,
                currentPrice: currentBest?.price ?? null,
                currentPriceStore: currentBest?.store.name ?? null,
                isActive: alert.isActive,
                triggeredAt: alert.triggeredAt,
                createdAt: alert.createdAt,
            };
        });
    }

    /**
     * Eliminar una alerta.
     */
    async delete(alertId: string, userId: string) {
        const alert = await this.db.priceAlert.findUnique({
            where: { id: alertId },
        });

        if (!alert) {
            throw new NotFoundException(`Alerta con id "${alertId}" no encontrada`);
        }

        if (alert.userId !== userId) {
            throw new ForbiddenException('No tenés permiso para eliminar esta alerta');
        }

        await this.db.priceAlert.delete({ where: { id: alertId } });
        return { message: 'Alerta eliminada correctamente' };
    }
}
