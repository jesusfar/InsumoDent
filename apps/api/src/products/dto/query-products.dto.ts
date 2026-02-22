import { IsOptional, IsString, IsEnum, IsNumber, Min, Max, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Category } from '@insumodent/database';

/**
 * DTO de query params para listar productos con filtros.
 */
export class QueryProductsDto {
    @ApiPropertyOptional({ description: 'Término de búsqueda' })
    @IsOptional()
    @IsString()
    q?: string;

    @ApiPropertyOptional({ enum: Category, description: 'Filtrar por categoría' })
    @IsOptional()
    @IsEnum(Category)
    category?: Category;

    @ApiPropertyOptional({ description: 'Filtrar por marca' })
    @IsOptional()
    @IsString()
    brand?: string;

    @ApiPropertyOptional({ description: 'Precio mínimo' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    minPrice?: number;

    @ApiPropertyOptional({ description: 'Precio máximo' })
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    maxPrice?: number;

    @ApiPropertyOptional({ description: 'Página (default: 1)', default: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @ApiPropertyOptional({ description: 'Límite por página (default: 20)', default: 20 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = 20;

    @ApiPropertyOptional({
        description: 'Ordenar por',
        enum: ['priceAsc', 'priceDesc', 'newest', 'storeCount', 'priceDrop'],
    })
    @IsOptional()
    @IsString()
    sortBy?: string;
}
