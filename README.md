# 🦷 InsumoDent

> Metabuscador de insumos odontológicos para Argentina e internacional.

Compará precios de insumos odontológicos en múltiples tiendas y encontrá las mejores ofertas. Similar a HardGamers.com.ar pero enfocado en el sector dental.

---

## ⚡ Stack Tecnológico

| Capa            | Tecnología                             |
| --------------- | -------------------------------------- |
| Frontend        | Next.js 14 (App Router) + Tailwind CSS |
| Backend         | NestJS (API REST)                      |
| Base de datos   | PostgreSQL 15 + Redis 7 (caché)        |
| Scraping        | Playwright + Cheerio                   |
| Colas de tareas | BullMQ + Redis                         |
| Búsqueda        | Meilisearch                            |
| Auth            | NextAuth.js                            |
| Emails          | SendGrid                               |
| Monorepo        | pnpm workspaces + Turborepo            |
| Lenguaje        | TypeScript (strict)                    |

---

## 📋 Requisitos previos

- **Node.js** >= 18.0.0
- **pnpm** >= 9.0.0 (`npm install -g pnpm`)
- **Docker** y **Docker Compose** (para PostgreSQL, Redis y Meilisearch)

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/insumodent.git
cd insumodent

# 2. Copiar variables de entorno
cp .env.example .env

# 3. Instalar dependencias
pnpm install

# 4. Levantar servicios con Docker
docker-compose up -d

# 5. Generar cliente de Prisma
pnpm db:generate

# 6. Ejecutar migraciones
pnpm db:migrate

# 7. (Opcional) Cargar datos de ejemplo
pnpm db:seed
```

---

## 🛠️ Comandos útiles

```bash
# Desarrollo (levanta frontend + backend en paralelo)
pnpm dev

# Build de todo el monorepo
pnpm build

# Lint
pnpm lint

# Tests
pnpm test

# Docker
pnpm docker:up      # Levantar PostgreSQL, Redis, Meilisearch
pnpm docker:down    # Detener servicios

# Base de datos
pnpm db:generate    # Generar cliente Prisma
pnpm db:migrate     # Ejecutar migraciones
pnpm db:push        # Push del schema (sin migración)
pnpm db:seed        # Cargar datos de ejemplo
```

---

## 📁 Estructura del proyecto

```
insumodent/
├── apps/
│   ├── web/              ← Frontend Next.js 14
│   │   ├── src/
│   │   │   ├── app/      ← App Router (páginas)
│   │   │   ├── components/
│   │   │   └── lib/
│   │   └── public/
│   └── api/              ← Backend NestJS
│       └── src/
│           ├── main.ts
│           ├── app.module.ts
│           ├── app.controller.ts
│           └── app.service.ts
├── packages/
│   ├── database/         ← Prisma schema + migraciones
│   │   ├── prisma/
│   │   └── src/
│   ├── scrapers/         ← Módulos de scraping por tienda
│   │   └── src/
│   └── shared/           ← Tipos TypeScript compartidos
│       └── src/
├── docker-compose.yml    ← PostgreSQL + Redis + Meilisearch
├── turbo.json            ← Config de Turborepo
├── pnpm-workspace.yaml   ← Workspaces de pnpm
├── tsconfig.base.json    ← TypeScript config base
├── .env.example          ← Variables de entorno
└── README.md
```

---

## 🌐 URLs locales

| Servicio     | URL                            |
| ------------ | ------------------------------ |
| Frontend     | http://localhost:3000          |
| API Backend  | http://localhost:4000          |
| Swagger Docs | http://localhost:4000/api/docs |
| Meilisearch  | http://localhost:7700          |

---

## 📄 Licencia

MIT
