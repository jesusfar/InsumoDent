import { PrismaClient } from '@prisma/client';

// Singleton de PrismaClient para evitar múltiples conexiones en desarrollo
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Re-exportar todos los tipos generados por Prisma
export * from '@prisma/client';
export default prisma;
