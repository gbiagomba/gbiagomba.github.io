# Gilles S. Biagomba — Neo-Futurist Security Portfolio

Static, data-driven portfolio for Gilles S. Biagomba built with React, TypeScript, Vite, TailwindCSS, Framer Motion, and lucide-react. Design direction: neo-futurist security (glass panels, cyan/violet accents, subtle scanlines).

## Getting Started

```bash
npm ci
npm run dev
```

Additional commands:

- `npm run build` – type-check + production build
- `npm run preview` – preview the built site
- `npm run lint` – ESLint (TypeScript + React)
- `npm run test` – Vitest + Testing Library smoke tests
- `npm run format` – Prettier
- `npm run clean` – remove build artifacts and dependencies

Makefile mirrors these tasks (`make install`, `make build`, etc.).

## Project Structure

- `src/content/resume.ts` – single source of truth for content (resume-derived)
- `src/components/*` – UI sections (Hero, About, Skills, Experience, Projects, Leadership, Education, Footer)
- `src/styles/global.css` – Tailwind base + CSS variables, glass/scanline treatments
- `.github/workflows/pages.yml` – GitHub Pages build/deploy from `main`
- `public/Gilles_Biagomba_Resume_2025v1.pdf` – downloadable resume asset

## Design & UX

- Dark-first with light-mode toggle (persisted in `localStorage`)
- Glass panels, grid/scanline overlays, cyan/violet accents
- Sticky nav with active section indicator and smooth scroll
- Accessible focus styles, semantic HTML, reduced motion use of Framer Motion
- “STATUS: ONLINE” microcopy in footer

## Deployment (GitHub Pages)

Workflow builds on push to `main`:

1) `npm ci`
2) `npm run build`
3) Upload `dist/` artifact
4) Deploy via `actions/deploy-pages`

Vite base is `/` for user site hosting at `https://gbiagomba.github.io`.

## Content Updates

Update `src/content/resume.ts` only; components render from this object. Avoid inventing details not present in the resume. LinkedIn URL intentionally omitted (not in source resume).

## Docker

Multi-stage Dockerfile builds the static site with Node 20 and serves via Nginx on port 8080:

```bash
docker build -t gbiagomba-portfolio .
docker run -p 8080:8080 gbiagomba-portfolio
```

## Security & Accessibility Notes

- No runtime remote code or analytics
- No `dangerouslySetInnerHTML`
- Visible focus rings, semantic landmarks, keyboard-friendly navigation
