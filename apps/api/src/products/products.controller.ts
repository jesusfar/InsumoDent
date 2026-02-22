import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { QueryProductsDto } from './dto/query-products.dto';
import { QueryPriceHistoryDto } from './dto/query-price-history.dto';

/**
 * Controlador de productos.
 * Endpoints para listar, buscar y consultar precios de productos.
 */
@ApiTags('products')
@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @ApiOperation({ summary: 'Listar productos con filtros y paginación' })
    @ApiResponse({
        status: 200,
        description: 'Lista paginada de productos con precio mínimo por tienda',
    })
    async findAll(@Query() query: QueryProductsDto) {
        return this.productsService.findAll(query);
    }

    @Get(':slug')
    @ApiOperation({ summary: 'Detalle completo de un producto por slug' })
    @ApiParam({ name: 'slug', description: 'Slug del producto', example: 'resina-compuesta-filtek-z350-xt' })
    @ApiResponse({ status: 200, description: 'Producto con precios por tienda e historial' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async findBySlug(@Param('slug') slug: string) {
        return this.productsService.findBySlug(slug);
    }

    @Get(':slug/price-history')
    @ApiOperation({ summary: 'Historial de precios de un producto agrupado por tienda' })
    @ApiParam({ name: 'slug', description: 'Slug del producto' })
    @ApiResponse({ status: 200, description: 'Historial de precios por tienda' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async getPriceHistory(
        @Param('slug') slug: string,
        @Query() query: QueryPriceHistoryDto,
    ) {
        return this.productsService.getPriceHistory(slug, query.days);
    }
}
