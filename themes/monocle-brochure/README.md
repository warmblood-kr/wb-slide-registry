# monocle-brochure

Brochure-style theme used by Warmblood/Monocle product decks.

## Provides

### Layouts
- `slide-brochure-feature` — Title + subtitle + content area that extends to the slide bottom. Left/right padding keeps footer chrome visible.

### Styles
- Pretendard font (via CDN)
- Orange accent `#FF6600`
- Brochure-tuned overrides for built-in layouts (cover, section, TOC, contact)
- Screenshot helpers (`.screenshot-frame`, `.screenshots-overlap`)

## Usage

```yaml
---
title: My Deck
theme: monocle-brochure
watermark: Brand Name
footer: <b>Author</b>
---
```

Optional: set `--color-accent` in your own `styles/custom.css` to override the brand color.

## Screenshot Helpers

Full-width screenshot:
```html
<img src="assets/photo.png" class="screenshot-frame" />
```

Two screenshots overlapping (for comparison/demo flow):
```html
<div class="screenshots-overlap">
  <img src="assets/before.png" />
  <img src="assets/after.png" />
</div>
```
