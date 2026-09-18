# ADLA FOOD catalog prototype

Arabic-first wholesale catalog in plain HTML, CSS and JavaScript. No dependencies or build step. Open `index.html` directly or serve the repository root with any static server. On Vercel select **Other**, leave the build command empty and deploy the whole directory.

## File guide

- `index.html`: five prototype products; each variant owns its size, pack, SKU, price and optional image path.
- `css/tokens.css`: light-theme design tokens.
- `css/base.css`: resets, focus, accessibility and reduced motion.
- `css/layout.css`: application shell and mobile layout.
- `css/components.css`: reusable components, including image/placeholder presentation.
- `css/responsive.css`: tablet and desktop composition.
- `js/app.js`: filtering, image fallback, variants, quantities and cart totals.
- `assets/logo/`: active brand logo. Keep this asset.
- `assets/images/products/`: future owner-supplied photography.

## Adding product photography

All current product variants intentionally have an empty `data-image=""`. No legacy product photographs are referenced or displayed; their files remain on disk for manual cleanup.

Upload one clean standalone package image per variant into the appropriate folder:

| Product folder | Example filename |
| --- | --- |
| `assets/images/products/grape-leaves/` | `grape-leaves-660g.webp` |
| `assets/images/products/grape-leaves/` | `grape-leaves-1350g.webp` |
| `assets/images/products/makdous/` | `makdous-1000g.webp` |
| `assets/images/products/sesame-paste/` | `sesame-paste-1800g.webp` |
| `assets/images/products/hot-pepper-paste/` | `hot-pepper-paste-660g.webp` |

A `pickled-peppers/` folder is also ready. Empty `.gitkeep` files intentionally retain these directories in Git; they are not images.

Use lowercase English slugs, hyphens, and a size with unit; no spaces. Append the lowercase SKU only to resolve a filename collision, for example `grape-leaves-660g-p1-07.webp`.

In `index.html`, change only the matching variant button's attribute:

```html
 data-image="assets/images/products/grape-leaves/grape-leaves-660g.webp"
```

Do not change CSS or the initial product `<img>`. `updateProductImage()` in `js/app.js` handles both the initial selection and later variant switches. Empty, absent or failed paths show the reusable HTML/CSS package icon and Arabic label “صورة المنتج غير متوفرة”. The placeholder remains visible while a future image loads. Both states share the same fixed-height visual area, with contained, centered photography and consistent padding. There is no cropping, image-specific CSS or replacement photography.

## Responsive design

- Below 360px: one column. From 360px: the existing compact two-column mobile layout.
- 600–1199px: three equal-width cards per row, with centered incomplete rows, including after filtering.
- From 1200px: five equal-width cards inside a centered 1440px maximum shell. Larger screens retain readable cards instead of adding a vacant sixth column.
- Tablet/desktop: a single aligned brand/search/basket row, compact service strip and reduced vertical spacing. From 720px price and quantity share one row.
- Mobile/tablet below 960px: fixed safe-area-aware order bar and bottom content clearance. From 960px: an 800px maximum order bar aligned beneath the catalog, sticky within the content flow.

## Behavior and scope

Variant controls and quantity/cart semantics remain unchanged. Quantity belongs to a product card, so changing its variant applies the new price to that card's quantity. Integers are limited to 0–999; committing zero restores the add control. Cart state is not persisted. Search covers Arabic product names, existing aliases and every variant SKU, combined with the selected category. Category order stays fixed.

WhatsApp sending remains an explicitly labelled prototype action without a configured recipient. Next.js, Sanity, localization, persistence and real order delivery remain deferred.

## QA — image/layout correction

Verified through a local HTTP server in Microsoft Edge using bundled Playwright:

- 320, 360, 375, 390, 430, 768, 1024, 1280, 1366, 1440 and 1920px: no page overflow; equal card widths and equal image-area heights; last-card clearance above the order bar.
- Desktop, tablet and mobile screenshots reviewed; no legacy photographs or broken-image icons.
- Arabic name, SKU and variant-SKU search; combined search/category filtering; category order and RTL reveal.
- All 14 variant selections: matching price, SKU, pack and placeholder.
- Add, increment, decrement, manual input, zero-to-add, cart count, total and visibility.
- Future valid-image dimensions and missing/empty/failed-image fallbacks tested with an in-memory geometric fixture, not replacement photography.
- No page/console errors or missing-file responses during the normal catalog flow; no requests for legacy photographs.

No temporary test scripts or screenshots are stored in this repository. QA artifacts are kept outside it in the Codex visualization directory. The folder-marker files are intentional project structure.
