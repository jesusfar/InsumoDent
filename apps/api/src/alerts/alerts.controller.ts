import { Controller, Get, Post, Delete, Body, Param, Headers, Query, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiQuery } from '@nestjs/swagger';
import { AlertsService } from './alerts.service';
import { CreateAlertDto } from './dto/create-alert.dto';

/**
 * Controlador de alertas de precio.
 * Usa header x-user-id por ahora (auth completa en Fase 5).
 */
@ApiTags('alerts')
@Controller('alerts')
export class AlertsController {
    constructor(private readonly alertsService: AlertsService) { }

    @Post()
    @ApiOperation({ summary: 'Crear alerta de precio' })
    @ApiHeader({ name: 'x-user-id', description: 'ID del usuario (temporal, se reemplaza por JWT en Fase 5)' })
    @ApiResponse({ status: 201, description: 'Alerta creada' })
    async create(
        @Headers('x-user-id') userId: string,
        @Body() dto: CreateAlertDto,
    ) {
        if (!userId) {
            throw new BadRequestException('Se requiere el header x-user-id');
        }
        return this.alertsService.create(userId, dto);
    }

    @Get()
    @ApiOperation({ summary: 'Listar alertas activas del usuario' })
    @ApiQuery({ name: 'userId', required: true, description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Lista de alertas activas' })
    async findByUser(@Query('userId') userId: string) {
        if (!userId) {
            throw new BadRequestException('Se requiere el parámetro userId');
        }
        return this.alertsService.findByUser(userId);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar una alerta de precio' })
    @ApiHeader({ name: 'x-user-id', description: 'ID del usuario' })
    @ApiResponse({ status: 200, description: 'Alerta eliminada' })
    @ApiResponse({ status: 404, description: 'Alerta no encontrada' })
    async delete(
        @Param('id') id: string,
        @Headers('x-user-id') userId: string,
    ) {
        if (!userId) {
            throw new BadRequestException('Se requiere el header x-user-id');
        }
        return this.alertsService.delete(id, userId);
    }
}
