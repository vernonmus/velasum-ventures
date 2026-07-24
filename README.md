# Velasum Ventures Limited

Corporate website for **Velasum Ventures Limited**.

**Repo:** https://github.com/vernonmus/velasum-ventures  
**Deploy:** [Vercel](https://vercel.com) (import this GitHub repo)

## Vercel settings

| Field | Value |
|--------|--------|
| Framework | **Next.js** |
| Build Command | `npm run build` |
| Output Directory | **leave empty / default** (do **not** set `out`) |
| Install Command | `npm install` |
| Root Directory | `./` |

> If a previous attempt set Output Directory to `out`, clear it. That setting caused  
> `routes-manifest.json couldn't be found` on Vercel.

## Custom domain

1. Vercel → Project → **Settings** → **Domains** → add `www.velasumventures.com`
2. Cloudflare DNS: CNAME `www` → value Vercel shows (often `cname.vercel-dns.com`), proxy as instructed

## Local

```bash
npm install
npm run dev
npm run build
```
