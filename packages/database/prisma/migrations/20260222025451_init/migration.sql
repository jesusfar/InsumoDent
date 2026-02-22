-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MATERIALES', 'EQUIPAMIENTO', 'INSTRUMENTAL', 'TECNOLOGIA');

-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('ARS', 'USD', 'EUR');

-- CreateEnum
CREATE TYPE "Country" AS ENUM ('AR', 'ES', 'CL', 'US');

-- CreateEnum
CREATE TYPE "UserPlan" AS ENUM ('FREE', 'PRO');

-- CreateTable
CREATE TABLE "stores" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "logoUrl" TEXT,
    "country" "Country" NOT NULL DEFAULT 'AR',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastScrapedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "brand" TEXT,
    "ean" TEXT,
    "category" "Category" NOT NULL,
    "subcategory" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "store_products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "externalUrl" TEXT NOT NULL,
    "externalId" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'ARS',
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "lastCheckedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "store_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_history" (
    "id" TEXT NOT NULL,
    "storeProductId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'ARS',
    "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "price_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "plan" "UserPlan" NOT NULL DEFAULT 'FREE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_alerts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "targetPrice" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'ARS',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "triggeredAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "price_alerts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "stores_url_key" ON "stores"("url");

-- CreateIndex
CREATE UNIQUE INDEX "products_slug_key" ON "products"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "products_ean_key" ON "products"("ean");

-- CreateIndex
CREATE INDEX "products_category_idx" ON "products"("category");

-- CreateIndex
CREATE INDEX "products_brand_idx" ON "products"("brand");

-- CreateIndex
CREATE INDEX "products_name_idx" ON "products"("name");

-- CreateIndex
CREATE INDEX "store_products_storeId_idx" ON "store_products"("storeId");

-- CreateIndex
CREATE INDEX "store_products_productId_idx" ON "store_products"("productId");

-- CreateIndex
CREATE INDEX "store_products_price_idx" ON "store_products"("price");

-- CreateIndex
CREATE UNIQUE INDEX "store_products_productId_storeId_key" ON "store_products"("productId", "storeId");

-- CreateIndex
CREATE INDEX "price_history_storeProductId_idx" ON "price_history"("storeProductId");

-- CreateIndex
CREATE INDEX "price_history_recordedAt_idx" ON "price_history"("recordedAt");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "price_alerts_userId_idx" ON "price_alerts"("userId");

-- CreateIndex
CREATE INDEX "price_alerts_productId_idx" ON "price_alerts"("productId");

-- CreateIndex
CREATE INDEX "price_alerts_isActive_idx" ON "price_alerts"("isActive");

-- AddForeignKey
ALTER TABLE "store_products" ADD CONSTRAINT "store_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_products" ADD CONSTRAINT "store_products_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_storeProductId_fkey" FOREIGN KEY ("storeProductId") REFERENCES "store_products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_alerts" ADD CONSTRAINT "price_alerts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_alerts" ADD CONSTRAINT "price_alerts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
