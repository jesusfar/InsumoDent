import { Controller, Get, Query as QueryParam } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { SearchService, ProductDocument } from './search.service';

/**
 * Controlador de búsqueda full-text.
 */
@ApiTags('search')
@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SearchService) { }

    @Get()
    @ApiOperation({ summary: 'Búsqueda full-text de productos' })
    @ApiQuery({ name: 'q', required: true, description: 'Término de búsqueda' })
    @ApiQuery({ name: 'limit', required: false, description: 'Máximo de resultados (default: 10)' })
    @ApiResponse({ status: 200, description: 'Productos encontrados con precio mínimo' })
    async search(
        @QueryParam('q') q: string,
        @QueryParam('limit') limit?: string,
    ): Promise<ProductDocument[]> {
        const parsedLimit = limit ? parseInt(limit, 10) : 10;
        return this.searchService.search(q, parsedLimit);
    }
}
