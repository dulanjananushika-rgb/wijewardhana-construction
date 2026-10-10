# Wijewardhana Construction

An English-first Next.js website for Wijewardhana Construction in Kurunegala, Sri Lanka. The site uses the App Router, TypeScript, CSS Modules for section-level styles, and configuration files for editable company content.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
npm run build
npm run start
```

`npm run check` runs ESLint and TypeScript. `npm run verify` runs those checks and a production build.

## Project structure

- `app/` — App Router page, root layout, metadata, and global design tokens.
- `components/` — page sections and their colocated CSS Modules.
- `config/` — company details and editable section content.
- `public/media/` — locally served architectural concept videos and posters.
- `PROJECT_PROGRESS.md` — phase history, decisions, and known limitations.

Keep confirmed business details in `config/company.ts`. The email and street address are unset. The videos are architectural concept visuals; they do not represent completed company projects.

## Vercel deployment

Import this GitHub repository into Vercel and keep the detected **Next.js** framework settings. Vercel uses the `build` script automatically; no custom output directory, environment variables, or `vercel.json` is required for the current site. Pushes to the connected production branch trigger deployments, and pull requests receive preview deployments.

The media files in `public/media/` are part of the repository and deploy as static assets. Preserve the original files when preparing any future optimized encodes.
