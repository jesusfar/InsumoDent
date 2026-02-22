import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { StoresService } from './stores.service';

/**
 * Controlador de tiendas.
 */
@ApiTags('stores')
@Controller('stores')
export class StoresController {
    constructor(private readonly storesService: StoresService) { }

    @Get()
    @ApiOperation({ summary: 'Listar tiendas activas con cantidad de productos' })
    @ApiResponse({ status: 200, description: 'Lista de tiendas activas' })
    async findAll() {
        return this.storesService.findAll();
    }
}
