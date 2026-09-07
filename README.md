# rua1.ai Frontpage

MVP frontend for `rua1.ai`, a geospatial intelligence product inspired by modern B2B market intelligence sites.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- lucide-react icons

## Run Locally

Install Node.js 22 first, then:

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

Production domain:

```txt
Primary: rua1.com.br
Alias: www.rua1.com.br redirects to rua1.com.br
DNS: managed in GoDaddy
```

App Platform settings:

```txt
Build command: npm run build
Run command: npm run start
HTTP port: 3000
```

`npm run build` also prepares the `.next/standalone` bundle with the static
assets required by DigitalOcean's Node service runtime.

Use `.do/app.yaml` to create or update the app from `pyunc/geo-spatial-frontpage`.
The DigitalOcean account must have its GitHub integration connected with access
to that repository before `doctl apps create --spec .do/app.yaml` can deploy it.

Before deploying, run:

```bash
npm run check:prod
```

After DigitalOcean creates the app, add the custom domains in App Platform using
the "You manage your domain" option. In GoDaddy, keep existing email records and
point `www` to the DigitalOcean CNAME target. For the apex `@`, use the A
records/IPs that DigitalOcean shows if GoDaddy cannot flatten a CNAME at root.
Add any TXT verification records requested by DigitalOcean.
