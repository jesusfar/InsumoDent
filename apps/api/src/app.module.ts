import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bullmq';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { StoresModule } from './stores/stores.module';
import { SearchModule } from './search/search.module';
import { AlertsModule } from './alerts/alerts.module';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  imports: [
    // Configuración global de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    // Configuración de BullMQ para conexión con Redis
    BullModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        connection: {
          host: config.get<string>('REDIS_HOST', 'localhost'),
          port: config.get<number>('REDIS_PORT', 6379),
          password: config.get<string>('REDIS_PASSWORD'),
        },
      }),
    }),
    // Módulos de la aplicación
    DatabaseModule,
    ProductsModule,
    StoresModule,
    SearchModule,
    AlertsModule,
    ScraperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

