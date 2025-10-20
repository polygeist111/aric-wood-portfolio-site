# Aric Wood — Strategy to Reality (Next.js + Tailwind + Cloudflare Pages)

## Local
```bash
npm install
npm run dev
```

## Cloudflare Pages Deploy
- Connect repo to Cloudflare Pages → Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `.next`
- Env vars:
  - `NODE_VERSION=18`
  - `NEXT_PUBLIC_GA_ID=<your GA4 measurement id>`
- Add custom domains `aricwood.com` and `www.aricwood.com` in Pages → Custom domains, follow DNS prompts.

## Analytics
- Google Analytics via `NEXT_PUBLIC_GA_ID`
- Cloudflare Web Analytics: replace `REPLACE_WITH_CLOUDFLARE_TOKEN` in `app/layout.tsx`

## Contact Form
- Uses Cloudflare MailChannels from Edge API route at `/api/contact` to email `aric.wood@gmail.com`
- Honeypot `_honeypot` input for spam (no reCAPTCHA)
