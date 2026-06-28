# rua1.ai Frontpage

MVP frontend for `rua1.ai`, a geospatial intelligence product inspired by modern B2B market intelligence sites.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react icons

## Run Locally

Install Node.js 20+ first, then:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Most page content lives in `data/site.ts`.

Current routes:

```txt
/
/contato
/solucoes/mapa-inteligente
/solucoes/ia-prospeccao
/solucoes/ia-expansao
/solucoes/audience
/solucoes/dados-como-servico
/casos-de-uso/inteligencia-de-mercado
/casos-de-uso/prospeccao-b2b
/casos-de-uso/expansao
```

## DigitalOcean

The project is configured for DigitalOcean App Platform with `output: "standalone"` in `next.config.ts`.

Typical App Platform settings:

```txt
Build command: npm run build
Run command: npm run start
HTTP port: 3000
```

If you use `.do/app.yaml`, replace `your-org/rua1-ai` with your real GitHub repository.
