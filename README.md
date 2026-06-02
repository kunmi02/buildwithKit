# Faceless Blueprint Landing Page

A Next.js + Tailwind landing page scaffold for selling the **Faceless Blueprint** zip folder.

## What is included

- Dark file-browser inspired theme
- Product landing page at `/faceless-blueprint`
- Privacy Policy page
- Terms page
- Refund Policy page
- Meta Pixel support through `NEXT_PUBLIC_META_PIXEL_ID`
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
NEXT_PUBLIC_CHECKOUT_URL=https://your-checkout-link.com
NEXT_PUBLIC_CONTACT_EMAIL=azeezakinkunmi02@gmail.com
NEXT_PUBLIC_META_PIXEL_ID=
```

## Deploy

Push to GitHub and import the repo on Vercel.
Add the same environment variables in Vercel.

## Notes

- Replace `NEXT_PUBLIC_CHECKOUT_URL` with your Selar, Lemon Squeezy, Gumroad, Paddle, or other checkout link.
- If you use Meta ads, add your Pixel ID in `NEXT_PUBLIC_META_PIXEL_ID`.
- The landing page should receive traffic first, then route buyers to checkout.
