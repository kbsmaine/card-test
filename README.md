# RosterCard Studio Website

A launch-ready starter website for selling customizable blank school sports trading card templates.

## What is included

- Responsive landing page
- Product catalog with 16 sports templates
- Downloadable blank front/back SVG templates
- Parent instructions
- Fundraiser section
- Suggested bundle pricing
- Demo request/order form
- Sample card image

## Run locally

1. Open this folder in VS Code.
2. Install Node if needed.
3. Run:

```bash
npm install
npm start
```

4. Open:

```text
http://localhost:3000
```

## Launch options

### Easiest static launch
Upload the `public` folder to Netlify, Vercel, or GitHub Pages.

### Node launch
Upload the full folder to Render, Railway, or a VPS and run:

```bash
npm install
npm start
```

## What to edit first

### Brand name
Edit these files:

- `public/index.html`
- `public/styles.css`

Search for:

```text
RosterCard Studio
```

### Products
Edit:

```text
public/app.js
```

Add/remove products in the `products` array.

### Templates
Template files are located in:

```text
public/assets/templates
```

Each sport has:

```text
sport-front.svg
sport-back.svg
```

Parents can open these in Canva, Photopea, Figma, Illustrator, or Inkscape.

## Important launch note

The request form is currently a demo form that saves requests to the visitor's browser using localStorage. Before launching for real, connect it to one of these:

- Formspree
- Google Forms
- Shopify
- Stripe payment links
- Firebase
- Supabase
- Your own backend

## Recommended real product setup

Sell these as digital downloads:

- Single Sport Template - $9
- Full Team Pack - $49
- All Sports Bundle - $79
- Fundraiser Pack - custom quote

## Print specs

- Final card size: 2.5 in x 3.5 in
- Template size with bleed: 2.75 in x 3.75 in
- Template pixels: 825 x 1125
- Recommended export: 300 DPI PDF print or high-quality PNG

## Legal / school logo reminder

Parents and schools should only upload school logos, league logos, or team marks they have permission to use.
