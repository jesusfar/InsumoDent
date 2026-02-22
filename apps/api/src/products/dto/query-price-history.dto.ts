import { IsOptional, IsInt, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

/**
 * DTO de query params para historial de precios.
 */
export class QueryPriceHistoryDto {
    @ApiPropertyOptional({ description: 'Cantidad de días hacia atrás (default: 90)', default: 90 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    days?: number = 90;
}
