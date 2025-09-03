# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## GitHub Pages

This repo is configured to deploy to GitHub Pages using static export from Next.js.

- Build/export: configured in `next.config.ts` with `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true`.
- Dynamic base path: if your repo is a project page, the site is served under `/<repo>`; if it is a user/organization page (`<user>.github.io`), it is served at the root. The workflow sets `NEXT_PUBLIC_BASE_PATH` accordingly.
- Workflow: `.github/workflows/pages.yml` builds the site and deploys the `out/` folder via `actions/deploy-pages`.

How to use it:
- Push to the `master` branch on GitHub.
- The "Deploy to GitHub Pages" action will run and publish automatically.
- Your site will be available at:
  - User/org page: `https://<user>.github.io/`
  - Project page: `https://<user>.github.io/<repo>/`

Optional:
- If you use a custom domain, add a `CNAME` file at the repository root of the `gh-pages` deployment (or set it in the Pages settings; GitHub will manage the `CNAME`).

## Images

Place your real assets under `public/images/` using these names (or update the code to match your naming):

- Products: `public/images/products/`
  - `vino-seco-sol-yauca.jpg`
  - `vino-semiseco-alma.jpg`
  - `pisco-quebranta-espiritu.jpg`
  - `macerado-maracuya.jpg`
  - `macerado-fresa.jpg`
- Process: `public/images/proceso/`
  - `paso-1.jpg` … `paso-10.jpg`
- Story: `public/images/historia/`
  - `familia.jpg`, `hacienda-detalle.jpg`
- Visit: `public/images/visitanos/`
  - `mapa.jpg`, `entrada.jpg`
- Hero: `public/images/hero/`
  - `hero.jpg`

Notes:
- Next/Image is set to `unoptimized: true` and export mode; images in `public/` are served as static files.
- For the homepage background, the path uses `NEXT_PUBLIC_BASE_PATH` so it also works on GitHub Pages.
