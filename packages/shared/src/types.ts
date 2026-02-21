// Tipos y enums compartidos para InsumoDent

/** Categorías de productos odontológicos */
export enum Category {
  MATERIALES = 'MATERIALES',
  EQUIPAMIENTO = 'EQUIPAMIENTO',
  INSTRUMENTAL = 'INSTRUMENTAL',
  TECNOLOGIA = 'TECNOLOGIA',
}

/** Monedas soportadas */
export enum Currency {
  ARS = 'ARS',
  USD = 'USD',
  EUR = 'EUR',
}

/** Países soportados */
export enum Country {
  AR = 'AR',
  ES = 'ES',
  CL = 'CL',
  US = 'US',
}

/** Planes de usuario */
export enum UserPlan {
  FREE = 'FREE',
  PRO = 'PRO',
}

/** Resultado de un scraper individual */
export interface ScraperResult {
  externalId: string;
  name: string;
  price: number;
  currency: Currency;
  isAvailable: boolean;
  imageUrl?: string;
  externalUrl: string;
  brand?: string;
  category?: string;
}

/** Respuesta paginada genérica */
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

/** Filtros de búsqueda de productos */
export interface ProductSearchFilters {
  q?: string;
  category?: Category;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

/** Producto con precio mínimo (para listados) */
export interface ProductWithMinPrice {
  id: string;
  name: string;
  slug: string;
  brand: string | null;
  category: Category;
  imageUrl: string | null;
  minPrice: number | null;
  minPriceCurrency: Currency | null;
  minPriceStore: string | null;
  storeCount: number;
}

/** Detalle de precio por tienda */
export interface StorePriceDetail {
  storeId: string;
  storeName: string;
  storeLogoUrl: string | null;
  storeCountry: Country;
  price: number;
  currency: Currency;
  isAvailable: boolean;
  externalUrl: string;
  lastCheckedAt: Date;
}

/** Punto de historial de precio */
export interface PriceHistoryPoint {
  price: number;
  currency: Currency;
  recordedAt: Date;
  storeName: string;
}
