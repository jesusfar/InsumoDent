import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@insumodent/database';

/**
 * Servicio de base de datos que extiende PrismaClient.
 * Maneja la conexión y desconexión automática con el ciclo de vida de NestJS.
 */
@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
            log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
        });
    }

    async onModuleInit(): Promise<void> {
        await this.$connect();
    }

    async onModuleDestroy(): Promise<void> {
        await this.$disconnect();
    }
}
