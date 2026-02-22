import { Controller, Post, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ScraperService } from './scraper.service';

/**
 * Controlador de scrapers.
 * Permite disparar scraping manual y ver el estado.
 */
@ApiTags('scraper')
@Controller('scraper')
export class ScraperController {
    constructor(private readonly scraperService: ScraperService) { }

    @Post('run/:storeId')
    @ApiOperation({ summary: 'Disparar scraping manual de una tienda' })
    @ApiParam({ name: 'storeId', description: 'ID de la tienda a scrapear' })
    @ApiResponse({ status: 200, description: 'Resultado del scraping' })
    async runScraper(@Param('storeId') storeId: string) {
        return this.scraperService.runScraper(storeId);
    }

    @Get('status')
    @ApiOperation({ summary: 'Estado de scrapers por tienda' })
    @ApiResponse({ status: 200, description: 'Estado de cada scraper' })
    async getStatus() {
        return this.scraperService.getStatus();
    }
}
