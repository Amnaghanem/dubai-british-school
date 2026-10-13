# Dubai British School

Mira Media out-of-home proposal for Dubai British School. Three locations: the Hessa Street hoarding, the Art of Living LED on Umm Suqeim Street, and digital screens at Dubai Hills Mall.

## Deploy to GitHub + Vercel

### One-time setup

1. Open PowerShell in this folder
2. Run: `powershell -ExecutionPolicy Bypass -File deploy.ps1`
3. Complete GitHub login in the browser when prompted
4. Import the repo on [vercel.com/new](https://vercel.com/new) → Deploy

No build step — Vercel serves the static files directly.

## Local preview

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```

Open http://localhost:8084/

## Edit data

All figures and image paths: `config.js`
