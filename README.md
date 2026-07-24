# Velasum Ventures Limited

Static corporate website (Next.js `output: "export"`).

**Repo:** https://github.com/vernonmus/velasum-ventures  

## Critical: Cloudflare Pages must NOT use OpenNext

If the log shows:

```text
bunx opennextjs-cloudflare build
```

the project is on the **wrong** framework preset. Change it:

### Settings → Builds & deployments

| Field | Required value |
|-------|----------------|
| **Framework preset** | **None** (clear any “Next.js” / OpenNext preset) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | *(empty)* |
| **Deploy command** | *(leave empty)* |

### Environment variables

| Name | Value |
|------|--------|
| `NODE_VERSION` | `20` |
| `NPM_CONFIG_PRODUCTION` | `false` |

Then **Save** and **Retry deployment** / **Create deployment** on branch `main`.

Correct build log should show:

```text
Executing user build command: npm run build
...
▲ Next.js ...
✓ Compiled successfully
```

**Wrong** (will fail for this site):

```text
bunx opennextjs-cloudflare build
```

## Why

This site is a **static export** (`next.config.ts` → `output: "export"`).  
`opennextjs-cloudflare` is for full Next.js **server** apps on Workers. It is the wrong tool here.

## Local build

```bash
npm install
npm run build
# static files in /out
```
