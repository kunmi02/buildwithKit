# Faceless Blueprint Landing Page

A Next.js + Tailwind landing page scaffold for selling the **Faceless Blueprint** zip folder.

## What is included

- Dark file-browser inspired theme
- Product landing page at `/faceless-blueprint`
- Privacy Policy page
- Terms page
- Refund Policy page
- Meta Pixel support through `NEXT_PUBLIC_META_PIXEL_ID`
- TikTok Pixel support through `NEXT_PUBLIC_TIKTOK_PIXEL_ID`
- Checkout link support through `NEXT_PUBLIC_CHECKOUT_URL`

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```txt
http://localhost:3000/faceless-blueprint
```

## Environment variables

```env
NEXT_PUBLIC_CHECKOUT_URL=https://selar.com/64z7171o14
NEXT_PUBLIC_CONTACT_EMAIL=azeezakinkunmi02@gmail.com
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_TIKTOK_PIXEL_ID=D8MT5H3C77UDGOQMADAG
```

## Deploy

Push to GitHub and import the repo on Vercel.
Add the same environment variables in Vercel.

## Notes

- Replace `NEXT_PUBLIC_CHECKOUT_URL` if you change your Selar product link (default: `https://selar.com/64z7171o14`).
- If you use Meta ads, add your Pixel ID in `NEXT_PUBLIC_META_PIXEL_ID`.
- If you use TikTok ads, add your Pixel ID in `NEXT_PUBLIC_TIKTOK_PIXEL_ID` (default: `D8MT5H3C77UDGOQMADAG`).
- The landing page should receive traffic first, then route buyers to checkout.
