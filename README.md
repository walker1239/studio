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
