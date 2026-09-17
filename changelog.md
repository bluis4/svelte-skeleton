# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.5.0] - 2026-09-18
### Added
- Static site generation via `@sveltejs/adapter-static`: the entire site now builds to pure static files with zero server runtime.
- Build-time prerendering of all routes; dynamic `/[slug]` URLs are discovered through `entries()` reading the content layer, so every CMS page automatically becomes a real static URL.
- Prerendered permanent redirect `/home` → `/`, baked into the static output for canonical URLs.
- Build guardrails: `strict: true` fails the build on any non-prerenderable route, and `prerender.handleHttpError` fails on unexpected broken links while whitelisting known placeholder paths.
- Dedicated `svelte.config.js` as the single home for SvelteKit and adapter configuration.
### Changed
- `vite.config.js` reduced to plugin declarations only; SvelteKit options previously embedded there moved to `svelte.config.js` (Vite-level options silently override the SvelteKit config file).
- Editor configuration: `.vscode/settings.json` now silences the CSS lint false positive on Tailwind v4 `@plugin` at-rules.

## [0.4.0] - 2026-09-18
### Added
- Settings-driven layout shell: `Header` and `Footer` components with zero hardcoded strings; brand, highlight, tagline, and header CTA read from `site.json`.
- Self-assembling navigation (desktop menu and mobile dropdown) from page frontmatter via `show_in_menu` and `menu_order`.
- Site-wide daisyUI theme application through the `data-theme` attribute, driven by the `color_palette` setting.
- daisyUI v5 theme opt-ins (`luxury`, `emerald`, `pastel`) via the `@plugin` configuration in `app.css`.
- Canonical URL guard: `/home` redirects permanently (308) to `/` to prevent duplicate content.

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

## [0.2.0] - 2026-09-17
### Added
- Tailwind CSS v4 + DaisyUI integrated via the `@tailwindcss/vite` plugin.
- Centralized global stylesheet at `src/lib/assets/app.css`.

## [0.1.0] - 2026-08-31
### Added
- Initial SvelteKit skeleton project structure.
- Project documentation (README, CHANGELOG).
- Git version control initialization.