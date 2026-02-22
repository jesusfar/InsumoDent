import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ScraperController } from './scraper.controller';
import { ScraperService } from './scraper.service';
import { ScraperProcessor } from './scraper.processor';

@Module({
    imports: [
        BullModule.registerQueue({
            name: 'scraping-queue',
        }),
    ],
    controllers: [ScraperController],
    providers: [ScraperService, ScraperProcessor],
    exports: [ScraperService],
})
export class ScraperModule { }
