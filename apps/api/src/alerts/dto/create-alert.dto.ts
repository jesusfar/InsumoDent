import { IsString, IsNumber, IsOptional, IsEnum, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Currency } from '@insumodent/database';

/**
 * DTO para crear una alerta de precio.
 */
export class CreateAlertDto {
    @ApiProperty({ description: 'ID del producto' })
    @IsString()
    productId!: string;

    @ApiProperty({ description: 'Precio objetivo' })
    @IsNumber()
    @Min(0)
    targetPrice!: number;

    @ApiPropertyOptional({ enum: Currency, description: 'Moneda (default: ARS)', default: 'ARS' })
    @IsOptional()
    @IsEnum(Currency)
    currency?: Currency = Currency.ARS;
}
