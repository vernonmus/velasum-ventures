# Velasum Ventures Limited

Corporate website for **Velasum Ventures Limited** — a Zambian investment holding company.

- **Domain:** https://www.velasumventures.com  
- **Repo:** https://github.com/vernonmus/velasum-ventures  
- **Stack:** Next.js 15 static export, React 19, Tailwind CSS 4  
- **Hosting:** Cloudflare Pages

## Cloudflare Pages settings (required)

| Setting | Value |
|---------|--------|
| Production branch | `main` |
| Framework preset | **None** (do not use Next.js SSR preset) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | *(leave empty)* |

### Environment variables

| Name | Value |
|------|--------|
| `NODE_VERSION` | `20` |
| `NPM_CONFIG_PRODUCTION` | `false` |

The second variable ensures build tools (TypeScript, Tailwind) install even when Cloudflare sets production mode.

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build   # writes static site to /out
```

## Contact form

FormSubmit → `info@velasumventures.com`. First submission requires email confirmation.
