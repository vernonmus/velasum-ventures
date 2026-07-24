# Velasum Ventures Limited

Static corporate website (Next.js `output: "export"`).

**Repo:** https://github.com/vernonmus/velasum-ventures  

## Deploy on Vercel (recommended)

### One-time setup (dashboard — ~2 minutes)

1. Open **[vercel.com/new](https://vercel.com/new)** and sign in with **GitHub** (`vernonmus`).
2. **Import** repository: **`vernonmus/velasum-ventures`**.
3. Leave defaults (or confirm):

   | Setting | Value |
   |---------|--------|
   | Framework Preset | **Next.js** |
   | Root Directory | `./` |
   | Build Command | `npm run build` (default) |
   | Output Directory | `out` |
   | Install Command | `npm install` (default) |

4. Click **Deploy**.

You get a URL like `https://velasum-ventures.vercel.app`.

### Custom domain (www.velasumventures.com)

1. Vercel project → **Settings** → **Domains**
2. Add `www.velasumventures.com` (and optionally `velasumventures.com`)
3. In **Cloudflare DNS** for the domain, add what Vercel shows, typically:

   | Type | Name | Target | Proxy |
   |------|------|--------|--------|
   | CNAME | `www` | `cname.vercel-dns.com` | DNS only (grey) first, or as Vercel instructs |

4. Wait for SSL (usually a few minutes).

### CLI (optional)

```bash
npm i -g vercel
vercel login
cd VelasumVenturesLimited
vercel --prod
```

## Local development

```bash
npm install
npm run dev
npm run build   # writes static files to /out
```

## Contact form

FormSubmit → `info@velasumventures.com`. First submission may need email confirmation.
