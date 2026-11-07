# eigencodeai.com

The website for EigenCodeAI LLC, built with [Astro](https://astro.build) as a static site.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Edit content

- Company name, email and social links: `src/data/site.ts`
- Services and projects (each one gets a page at `/work/<slug>`): `src/data/work.ts`.
  To launch a project, change its `status` from `'coming-soon'` to `'available'`.
- Pages: `src/pages/`. Brand colours: `src/styles/global.css`.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
`public/CNAME` sets the custom domain to eigencodeai.com.
