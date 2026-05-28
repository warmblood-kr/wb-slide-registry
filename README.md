# wb-slide-registry

Themes and standalone layouts for [wb-slide](https://github.com/warmblood-kr/wb-slide).

Served via GitHub Pages — no install step. wb-slide fetches files at runtime
and inlines them into the generated presentation.

## Browse the catalog

- **[index.json](./index.json)** — full catalog
- **[Themes](./themes/)** — bundled visual identities (layouts + styles)
- **[Layouts](./layouts/)** — standalone Web Component layouts

## Use a theme

In your `slides.md`:

```yaml
---
title: My Deck
theme: monocle-brochure
---
```

That's it. Run `wb-slide show` — the theme is fetched, cached, and inlined automatically.

## Use by URL

If your theme isn't in this registry, point at any GitHub Pages URL:

```yaml
theme: https://your-org.github.io/wb-theme-something/theme.json
```

## Available Themes

| Name | Description | Author |
|------|-------------|--------|
| [monocle-brochure](./themes/monocle-brochure/) | Brochure-style with Pretendard + orange accent | Warmblood |

## Submit a theme

1. Build your theme as a directory with `theme.json` + `layouts/` + `styles/`. See [the theme format spec](https://github.com/warmblood-kr/wb-slide/blob/main/docs/registry-design.md).
2. Host it on GitHub Pages (any repo).
3. Open a PR adding an entry to [`index.json`](./index.json).

## Theme format

A minimal theme looks like:

```
my-theme/
  theme.json
  layouts/
    slide-my-layout.js
  styles/
    theme.css
```

`theme.json`:

```json
{
  "name": "my-theme",
  "version": "0.1.0",
  "description": "...",
  "author": "...",
  "license": "MIT",
  "wb-slide": ">=0.5.0",
  "layouts": ["layouts/slide-my-layout.js"],
  "styles": ["styles/theme.css"]
}
```

## License

This registry repository: MIT.
Individual themes/layouts may have their own licenses (see each `theme.json` / `README.md`).
