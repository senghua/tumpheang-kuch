# ទំពាំងគជ់ — Tum Pheang Kuch

Static, front-end-only company profile site for **Tum Pheang Kuch** ("Building
Leadership"), a Cambodian youth-development organization. Built with
[Astro](https://astro.build) (`output: 'static'`) and Tailwind CSS v4 — no
backend, no database, no forms that submit anywhere.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`        | Start local dev server                        |
| `npm run build`       | Build the static site to `./dist/`             |
| `npm run preview`      | Preview the production build locally           |

## Deploying

`npm run build` produces a fully static `dist/` folder — no server runtime is
required. Deploy it to any static host:

- **Netlify** — drag-and-drop `dist/`, or connect the repo with build command
  `npm run build` and publish directory `dist`.
- **Vercel** — import the repo, framework preset "Astro" (static output),
  build command `npm run build`, output directory `dist`.
- **Cloudflare Pages / GitHub Pages** — same build command/output directory as
  above.

## Assets

All real photos/logos live under `src/assets/`, organized by section, and are
rendered via `astro:assets <Image />` so they're automatically optimized to
responsive WebP at build time:

| Folder | Used by |
| :----- | :------ |
| `src/assets/logo.jpg`, `hero-banner.jpg` | [`Logo.astro`](src/components/Logo.astro), [`Hero.astro`](src/components/Hero.astro) |
| `src/assets/founders/` | [`About.astro`](src/components/About.astro) |
| `src/assets/leadership/` | [`Leadership.astro`](src/components/Leadership.astro) |
| `src/assets/activities/` | [`Activities.astro`](src/components/Activities.astro) — glob-imported, so any file dropped here shows up automatically without code changes |
| `src/assets/partners/`, `media-partners/` | [`Partners.astro`](src/components/Partners.astro) |
| `src/assets/speakers/` | [`Speakers.astro`](src/components/Speakers.astro) — glob-imported by filename (`"<order>-<Full Name>.jpg"`), matched to a Khmer name via a lookup table in the component |

The favicon (`public/favicon-32.png`, `public/apple-touch-icon.png`) and the
social share preview (`public/og-image.jpg`) were generated from the logo and
hero photo.

## Outstanding TODOs before launch

- **Contact details & social links** — no phone/email/address or real
  Facebook/Telegram/TikTok/YouTube URLs were in the source deck. Placeholders
  (`href="#"`) are marked `TODO` in [`Footer.astro`](src/components/Footer.astro)
  and [`CTA.astro`](src/components/CTA.astro).
# tumpheang-kuch
