# Velasum Ventures Limited

Static corporate website (Next.js `output: "export"` → folder **`out`**).

**Repo:** https://github.com/vernonmus/velasum-ventures

## Vercel settings (important)

| Field | Value |
|--------|--------|
| Framework Preset | **Other** (not Next.js) |
| Build Command | `npm run build` |
| **Output Directory** | **`out`** |
| Install Command | `npm install` |

`vercel.json` already sets `framework: null` and `outputDirectory: "out"`.

**Why not Framework = Next.js?**  
That mode expects a server build (`.next` / `routes-manifest.json`). This site is a pure static export into `out`.

## Domain

Vercel → Domains → add `www.velasumventures.com`  
Cloudflare DNS → CNAME `www` → value Vercel provides
