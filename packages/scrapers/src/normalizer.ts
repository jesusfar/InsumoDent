import { ScraperResult, Category } from '@insumodent/shared';

/**
 * Servicio de Normalización.
 * Convierte los datos en crudo extraídos por los scrapers a un formato
 * estructurado, estandarizando nombres, categorías y marcas de acuerdo
 * al esquema de la base de datos centralizada de InsumoDent.
 */
export class ProductNormalizer {

    // Diccionario básico para mapeos de marcas comunes en base a strings extraídos
    private brandMappings: Record<string, string> = {
        '3m': '3M',
        'ivoclar': 'Ivoclar Vivadent',
        'dentsply': 'Dentsply Sirona',
        'zhermack': 'Zhermack',
        'tokuyama': 'Tokuyama Dental',
        'fuji': 'GC',
        'gc': 'GC',
        'kavo': 'KaVo',
        'nsv': 'NSK',
        'w&h': 'W&H',
        'kulzer': 'Kulzer',
        'voco': 'VOCO',
        'ulradent': 'Ultradent',
    };

    /**
     * Normaliza un nombre en crudo buscando marcas y limpiando texto irrelevante,
     * así como adivinando la categoría según palabras clave.
     */
    normalize(rawProduct: ScraperResult): {
        name: string;
        brand: string | undefined;
        category: Category | undefined;
        subcategory: string | undefined;
    } {
        const rawNameLower = rawProduct.name.toLowerCase();

        // 1. Detección de marca
        let brand = rawProduct.brand;
        if (!brand) {
            for (const [key, standardizedBrand] of Object.entries(this.brandMappings)) {
                if (rawNameLower.includes(key)) {
                    brand = standardizedBrand;
                    break;
                }
            }
        } else {
            // Normalizar la marca si venía parseada
            const mapped = this.brandMappings[brand.toLowerCase()];
            if (mapped) brand = mapped;
        }

        // 2. Detección de Categoría y Subcategoría
        let category: Category | undefined = undefined;
        let subcategory: string | undefined = undefined;

        if (rawNameLower.includes('resina') || rawNameLower.includes('composite')) {
            category = Category.MATERIALES;
            subcategory = 'Resinas';
        } else if (rawNameLower.includes('alginato') || rawNameLower.includes('silicona') || rawNameLower.includes('impresion')) {
            category = Category.MATERIALES;
            subcategory = 'Impresión';
        } else if (rawNameLower.includes('adhesivo') || rawNameLower.includes('bond')) {
            category = Category.MATERIALES;
            subcategory = 'Adhesivos';
        } else if (rawNameLower.includes('turbina') || rawNameLower.includes('micromotor') || rawNameLower.includes('contra angulo')) {
            category = Category.INSTRUMENTAL;
            subcategory = 'Rotatorio';
        } else if (rawNameLower.includes('autoclave') || rawNameLower.includes('rx') || rawNameLower.includes('rayos')) {
            category = Category.EQUIPAMIENTO;
            subcategory = rawNameLower.includes('autoclave') ? 'Esterilización' : 'Radiología';
        } else if (rawNameLower.includes('scanner') || rawNameLower.includes('impresora 3d')) {
            category = Category.TECNOLOGIA;
            subcategory = 'Flujo Digital';
        } else if (rawNameLower.includes('fresa') || rawNameLower.includes('piedra')) {
            category = Category.INSTRUMENTAL;
            subcategory = 'Fresas';
        } else if (rawNameLower.includes('forcep') || rawNameLower.includes('elevador') || rawNameLower.includes('explorador') || rawNameLower.includes('espejo')) {
            category = Category.INSTRUMENTAL;
            subcategory = 'Clínico';
        }

        // 3. Limpieza del nombre (remoción de códigos sku, etc)
        // Esto es muy básico, un normalizador real usaría expresiones regulares más pesadas o LLMs
        let cleanName = rawProduct.name.trim();

        // Eliminar la marca del comienzo del nombre si existe
        if (brand && cleanName.toLowerCase().startsWith(brand.toLowerCase())) {
            cleanName = cleanName.substring(brand.length).trim();
        }

        // Capitalizar la primera letra
        cleanName = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);

        return {
            name: cleanName,
            brand: brand?.trim(),
            category,
            subcategory,
        };
    }
}
