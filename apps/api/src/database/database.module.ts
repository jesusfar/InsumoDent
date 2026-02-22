import { Module, Global } from '@nestjs/common';
import { DatabaseService } from './database.service';

/**
 * Módulo global de base de datos.
 * Provee el servicio de Prisma a toda la aplicación.
 */
@Global()
@Module({
    providers: [DatabaseService],
    exports: [DatabaseService],
})
export class DatabaseModule { }
