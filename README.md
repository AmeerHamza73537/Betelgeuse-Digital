# Betelgeuse Digital

A simple JavaScript Next.js site for a digital agency focused on paid growth,
web experiences, and practical AI systems.

The application intentionally keeps a small structure:

- `app/page.js` contains the page and its interactions
- `app/globals.css` contains the complete visual system
- `app/layout.js` contains site metadata

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

The production build uses standard Next.js output and deploys directly to
Vercel without a custom output-directory setting.
