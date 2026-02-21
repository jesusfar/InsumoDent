import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Prefijo global para la API
  app.setGlobalPrefix('api');

  // Habilitar CORS para el frontend
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Validación global con class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Configuración de Swagger/OpenAPI
  const swaggerConfig = new DocumentBuilder()
    .setTitle('InsumoDent API')
    .setDescription(
      'API del metabuscador de insumos odontológicos. ' +
      'Permite buscar productos, comparar precios entre tiendas, ' +
      'gestionar alertas de precio y ejecutar scrapers.',
    )
    .setVersion('0.1.0')
    .addBearerAuth()
    .addTag('products', 'Operaciones con productos')
    .addTag('stores', 'Operaciones con tiendas')
    .addTag('search', 'Búsqueda full-text')
    .addTag('alerts', 'Alertas de precio')
    .addTag('scraper', 'Gestión de scrapers')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  // Iniciar servidor
  const port = process.env.API_PORT || 4000;
  await app.listen(port);
  console.log(`🦷 InsumoDent API corriendo en http://localhost:${port}`);
  console.log(`📄 Swagger docs en http://localhost:${port}/api/docs`);
}

bootstrap();
