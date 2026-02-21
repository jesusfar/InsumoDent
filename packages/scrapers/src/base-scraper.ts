import { ScraperResult } from '@insumodent/shared';

/**
 * Clase base abstracta para todos los scrapers de tiendas.
 * Cada scraper de tienda debe extender esta clase e implementar los métodos abstractos.
 */
export abstract class BaseScraper {
  /** Nombre de la tienda */
  abstract readonly storeName: string;

  /** URL base de la tienda */
  abstract readonly baseUrl: string;

  /** Delay mínimo entre requests en milisegundos (rate limiting) */
  protected rateLimitMs = 2000;

  /** Máximo de reintentos por request */
  protected maxRetries = 3;

  /**
   * Scrapear todos los productos de la tienda.
   * @returns Lista de productos encontrados
   */
  abstract scrapeAll(): Promise<ScraperResult[]>;

  /**
   * Scrapear un producto individual por URL.
   * @param url - URL del producto en la tienda
   * @returns Datos del producto
   */
  abstract scrapeProduct(url: string): Promise<ScraperResult>;

  /**
   * Esperar el tiempo de rate limiting entre requests.
   */
  protected async waitRateLimit(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.rateLimitMs));
  }

  /**
   * Ejecutar una función con reintentos y backoff exponencial.
   * @param fn - Función a ejecutar
   * @param retries - Número de reintentos restantes
   * @returns Resultado de la función
   */
  protected async withRetry<T>(
    fn: () => Promise<T>,
    retries: number = this.maxRetries,
  ): Promise<T> {
    try {
      return await fn();
    } catch (error) {
      if (retries <= 0) throw error;
      const delay = this.rateLimitMs * Math.pow(2, this.maxRetries - retries);
      console.warn(
        `[${this.storeName}] Error, reintentando en ${delay}ms (${retries} intentos restantes)`,
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
      return this.withRetry(fn, retries - 1);
    }
  }
}
