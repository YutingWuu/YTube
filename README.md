# Yuting Wu — Portfolio

A responsive portfolio for growth product, product analytics, and data applications roles.

## What is included

- Home page with positioning, metrics, selected case studies, and career timeline
- Three anonymized case studies:
  - CRM and sales analytics foundation
  - AI-powered SMS product analytics
  - Multi-channel growth and creative testing
- About page
- Resume page
- Responsive mobile design
- GitHub Pages deployment workflow

> All case studies are anonymized and reconstructed. No confidential customer, company, or internal system information is included. Metrics are rounded where appropriate.

## Run locally

The current Next.js documentation requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## Deploy to GitHub Pages

1. Copy these files into the root of `YutingWuu/YTube`.
2. Commit and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included workflow will build and deploy the site.

The expected URL is:

`https://yutingwuu.github.io/YTube/`

## Push from your computer

```bash
git clone https://github.com/YutingWuu/YTube.git
cd YTube
# Copy the portfolio files into this folder
git add .
git commit -m "Build portfolio website"
git push origin main
```

## Customize

- Main project content: `lib/projects.ts`
- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Resume page: `app/resume/page.tsx`
- Styling: `app/globals.css`
- Contact details: search for `t112255zl@gmail.com`
