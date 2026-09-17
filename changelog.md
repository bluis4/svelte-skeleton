# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-09-18
### Added
- Recursive `BlockRenderer`: central dispatcher mapping CMS block types to Svelte components, with a dev-only warning for unmapped types.
- Constrained block contract: two-generation nesting (sections → children) enforced by allowed-children rules, editable via drag-and-drop in Sveltia CMS.
- Block taxonomy mirroring official daisyUI categories (`actions`, `data-display`, `data-input`, `feedback`, `layout`, `mockup`, `navigation`), plus a documented `base/` folder for blocks with no daisyUI counterpart.
- Block components: `HeroBlock`, `IntroBlock`, `CardsBlock`, `CardBlock`, `CtaBannerBlock`, `TextBlock`, `BadgeBlock`, `ButtonBlock`, `ImageBlock`.
- Content adapter `$lib/server/content.js` (`getSettings`, `loadPage`, `getAllPages`), isolated in a server-only folder.
- Global settings collection `src/content/settings/site.json` (brand identity, header CTA, theme preset, color palette, blog pagination preferences).
- Dynamic routing: `/` renders `home.md`; `/[slug]` renders any page created in the CMS.
- Sveltia CMS configuration with nested typed lists, settings file collection, and local backend support.

## [0.2.0] - 2026-09-08
### Added
- Tailwind CSS v4 + DaisyUI integrated via the `@tailwindcss/vite` plugin.
- Centralized global stylesheet at `src/lib/assets/app.css`.

## [0.1.0] - 2026-08-31
### Added
- Initial SvelteKit skeleton project structure.
- Project documentation (README, CHANGELOG).
- Git version control initialization.