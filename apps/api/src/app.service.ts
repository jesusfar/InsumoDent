import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /** Retorna el estado de salud del servidor */
  getHealth(): { status: string; timestamp: string; version: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '0.1.0',
    };
  }
}
