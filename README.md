# Velasum Ventures Limited

Corporate website for **Velasum Ventures Limited** — a Zambian investment holding company.

- **Production domain:** https://www.velasumventures.com  
- **Stack:** Next.js 15 (static export), React 19, Tailwind CSS 4  
- **Hosting:** GitHub Pages and/or Cloudflare Pages (no Railway required)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

Static production build:

```bash
npm run build
# Output is in /out
```

## Deploy without Railway

### Option A — Cloudflare Pages (recommended with Cloudflare DNS)

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository.
4. Build settings:
   - **Framework preset:** None (or Next.js static)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 22
5. After the first deploy, go to **Custom domains** and add:
   - `www.velasumventures.com`
   - `velasumventures.com` (optional apex)
6. Cloudflare will create the DNS records automatically if the domain is already on Cloudflare.

### Option B — GitHub Pages

1. Repo **Settings → Pages → Source:** GitHub Actions.
2. Push to `main` — the workflow in `.github/workflows/deploy-pages.yml` builds and deploys.
3. Site will be at `https://vernonmus.github.io/velasum-ventures/` (or your org/user pages URL).
4. For the custom domain, set `www.velasumventures.com` in Pages settings and add a CNAME in Cloudflare pointing to the GitHub Pages hostname.

## Contact form

The contact form posts via [FormSubmit](https://formsubmit.co) to `info@velasumventures.com` (no backend server). The first submission may require a one-time email confirmation to activate the inbox.

## Legal / company

- Company No. **120261050369**
- Registered office: Elunda Spaces, Longacres, Lusaka, Zambia
