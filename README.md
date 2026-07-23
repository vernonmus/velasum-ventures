# Velasum Ventures Limited

Corporate website for **Velasum Ventures Limited** — a Zambian investment holding company.

- **Domain:** https://www.velasumventures.com  
- **Repo:** https://github.com/vernonmus/velasum-ventures  
- **Stack:** Next.js 15 **static export**, React 19, Tailwind CSS 4  
- **Hosting:** Cloudflare Pages (recommended) — no Railway required

## Local development

```bash
npm install
npm run dev
```

Production static build:

```bash
npm run build
# Static files are written to /out
```

## Deploy on Cloudflare Pages (connect www.velasumventures.com)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub and select **`vernonmus/velasum-ventures`**.
3. Build configuration:

   | Setting | Value |
   |---------|--------|
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` (default) |
   | Environment variable | `NODE_VERSION` = `22` |

4. Click **Save and Deploy**. Wait for the build to finish (you get a `*.pages.dev` URL first).
5. **Custom domains** → add:
   - `www.velasumventures.com`
   - optionally `velasumventures.com`
6. If the domain is already on Cloudflare, DNS records are created automatically. SSL is provisioned by Cloudflare.

### DNS checklist (if you add records manually)

| Type | Name | Target |
|------|------|--------|
| CNAME | `www` | your-project.pages.dev |
| CNAME / A | `@` | per Cloudflare Pages apex instructions |

SSL/TLS mode: **Full**.

## Contact form

Submissions go to **info@velasumventures.com** via [FormSubmit](https://formsubmit.co) (no server). The first form submission sends a confirmation email to that inbox — click the link once to activate.

## Company details

- **Registered name:** Velasum Ventures Limited  
- **Company No.:** 120261050369  
- **Registered office:** Office 123, 2nd Floor, Elunda Spaces, Corner Chikwa Road & Los Angeles Boulevard, Longacres, Lusaka, Zambia  
