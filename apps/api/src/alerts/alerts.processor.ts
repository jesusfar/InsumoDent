import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { DatabaseService } from '../database/database.service';

export interface AlertJobData {
    alertId: string;
    userId: string;
    productName: string;
    targetPrice: number;
    currentPrice: number;
    productUrl: string;
}

/**
 * Worker para procesar envíos de alertas de precio.
 */
@Processor('alerts-queue')
export class AlertsProcessor extends WorkerHost {
    private readonly logger = new Logger(AlertsProcessor.name);

    constructor(private readonly db: DatabaseService) {
        super();
    }

    async process(job: Job<AlertJobData, any, string>): Promise<any> {
        const { alertId, userId, productName, targetPrice, currentPrice, productUrl } = job.data;

        this.logger.log(`Procesando alerta ID ${alertId} para usuario ${userId}`);

        // Aquí iría la integración real con SendGrid:
        // const msg = {
        //   to: userEmail,
        //   from: 'alertas@insumodent.com',
        //   subject: `¡Alerta! ${productName} bajó de precio`,
        //   text: `El producto bajó a $${currentPrice}. Tu objetivo era $${targetPrice}. Link: ${productUrl}`,
        // };
        // await sgMail.send(msg);

        // Simulamos el envío de email con un delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        this.logger.log(`📧 [MOCK EMAIL] Alerta enviada: ${productName} cayó a $${currentPrice} (Objetivo: $${targetPrice})`);

        // Actualizar la alerta como disparada
        await this.db.priceAlert.update({
            where: { id: alertId },
            data: {
                isActive: false, // La desactivamos después de dispararse
                triggeredAt: new Date()
            }
        });

        return { success: true, emailSent: true };
    }
}
