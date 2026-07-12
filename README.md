# A single-page portfolio for Jaycee

## Tech Stack

- Next.js 16 with the App Router
- React 19 and JavaScript
- Tailwind CSS and Shadcn-style UI primitives
- Lucide icons
- ESLint and jscpd duplicate-code checks
- GitHub Actions CI and Vercel-compatible deployment

## Local Development

Create `.env`

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Requires Node.js 22 or newer.

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` after the development server starts.

## Environment Variables

`NEXT_PUBLIC_SITE_URL` is used for Next.js metadata and canonical URLs. The app intentionally has no localhost fallback, so configure this value in every environment, including Vercel and GitHub Actions.

## Quality Checks

```powershell
npm run lint
npm run cpd
npm run build
```

`npm run cpd` enforces a `0%` duplicate-code threshold for blocks of at least 5 lines and 50 tokens. HTML reports are written to `copypaste/` and are not committed.

## Project Structure

```text
app/
  layout.js        # Metadata, font, favicon, and theme configuration
  page.js          # Server-rendered portfolio page
  globals.css      # Design tokens, responsive behavior, and accessibility styles
components/
  site/            # Sidebar, sections, journey, projects, and pointer glow
  ui/              # Reusable Shadcn-style primitives
lib/
  portfolio-data.js # Profile, social links, journey, and project content
public/
  Favicon.png
```

## CI/CD and Deployment

GitHub Actions runs `npm ci`, linting, duplicate-code detection, and a production build on every branch push and on pull requests targeting `main`.

To deploy:

1. Import this repository into Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` for Preview and Production environments.
3. Configure `main` as the Vercel production branch.
4. Protect `main` in GitHub and require the CI workflow before merging.

Feature branches are ready for Vercel Preview Deployments. Merging an approved pull request into `main` can then trigger the production deployment.

## Acknowledgements

UI design inspired by [Brittany Chiang's portfolio](https://brittanychiang.com).