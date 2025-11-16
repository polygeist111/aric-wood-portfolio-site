### NOTE:
This project is not my work. This project is largely vibe coded. I do not endorse the use of AI in this way, but I am managing the repo as a favor to someone. - Thalia

# Aric Wood — Strategy to Reality (Next.js + Tailwind + Cloudflare Pages)

## Local
```bash
npm install
npm run dev
```

## Cloudflare Pages Deploy
- Connect repo to Cloudflare Pages → Framework preset: Next.js (Static HTML)
- Build command: `npm run build`
- Output directory: `out`
- Env vars:
  - `NEXT_PUBLIC_GA_ID=<your GA4 measurement id>`
- Add custom domains `aricwood.com` and `www.aricwood.com` in Pages → Custom domains, follow DNS prompts.

## Analytics
- Google Analytics via `NEXT_PUBLIC_GA_ID`
- Cloudflare Web Analytics: configure in Cloudflare, script and token will be auto-injected

## Contact Form
- Uses Cloudflare MailChannels from Edge API route at `/api/contact` to email `aric.wood@gmail.com`
- Honeypot `_honeypot` input for spam (no reCAPTCHA)
