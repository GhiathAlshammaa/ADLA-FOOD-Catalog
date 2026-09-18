# ADLA FOOD catalog prototype

Arabic-first wholesale catalog in plain HTML, CSS and JavaScript. No dependencies or build step. Open `index.html` directly or serve the repository root with any static server. On Vercel select **Other**, leave the build command empty and deploy the whole directory.

## File guide

- `index.html`: application shell and basket markup.
- `data/catalog-data.js`: the editable source for settings, labels, categories, products and variants. Loaded before `js/app.js`.
- `css/tokens.css`: light-theme design tokens.
- `css/base.css`: resets, focus, accessibility and reduced motion.
- `css/layout.css`: application shell and mobile layout.
- `css/components.css`: reusable components, including image/placeholder presentation.
- `css/responsive.css`: tablet and desktop composition.
- `js/app.js`: filtering, image fallback, variants, quantities and cart totals.
- `assets/logo/`: active brand logo. Keep this asset.
- `assets/images/products/`: future owner-supplied photography.

## Adding product photography

All current product variants intentionally have an empty `image: ""`. No legacy product photographs are referenced or displayed.

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

In `data/catalog-data.js`, change the matching variant's image field:

```js
image: "assets/images/products/grape-leaves/grape-leaves-660g.webp"
```

Do not change CSS or the initial product `<img>`. `updateProductImage()` in `js/app.js` handles both the initial selection and later variant switches. Empty, absent or failed paths show the reusable HTML/CSS package icon and Arabic label “صورة المنتج غير متوفرة”. The placeholder remains visible while a future image loads. Both states share the same fixed-height visual area, with contained, centered photography and consistent padding. There is no cropping, image-specific CSS or replacement photography.

## Responsive design

- Below 360px: one column. From 360px: the existing compact two-column mobile layout.
- 600–1199px: three equal-width cards per row, with centered incomplete rows, including after filtering.
- From 1200px: five equal-width cards inside a centered 1440px maximum shell. Larger screens retain readable cards instead of adding a vacant sixth column.
- Tablet/desktop: a single aligned brand/search/basket row, compact service strip and reduced vertical spacing. From 720px price and quantity share one row.
- Mobile/tablet below 960px: fixed safe-area-aware order bar and bottom content clearance. From 960px: an 800px maximum order bar aligned beneath the catalog, sticky within the content flow.

## Behavior and scope

Variant controls and quantity/cart semantics remain unchanged. Each variant has its own quantity within its product, including when two products share a SKU. The card and basket use the same quantity state. Integers are limited to 0–999; committing zero restores the add control. Cart state is not persisted. Search covers Arabic product names, optional `searchTerms` and every variant SKU, combined with the selected category. Categories follow their `order` values.

Edit names, categories, sizes, units per carton, prices, availability and image paths in `data/catalog-data.js`. Keep product IDs stable and give each product at least one variant. Set product or variant `available` to `false` to prevent adding it; omitted availability means available. `settings.unitNames` supplies long unit labels for pack information. `featured` is editorial metadata; the existing grid displays all products. `settings.labels` controls visible catalog labels; technical accessibility instructions remain in the application. `settings.whatsappNumber` is the only WhatsApp recipient setting. Supply international digits without +, spaces or hyphens; it is currently blank, so handoff shows the missing-number message.

Order submission opens Market Details, validates the trimmed required market name, then shows a compact review. The optional note is trimmed and otherwise preserved as plain text; an empty note is omitted from the WhatsApp message. Only the final review button opens WhatsApp. The user still sends the message there; the cart is never cleared.

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


## Final order handoff

Files: data/catalog-data.js (settings and labels), js/app.js (cart snapshot and dialog/handoff), js/order.js (pure model and formatter), index.html (dialog and existing-logo favicon), css/components.css (order sheet styles).

The serializable snapshot has exactly this shape (example values):

```js
{
  id: "ADLA-20260918-164502-003",
  createdAt: "18.09.2026 – 16:45",
  createdAtIso: "2026-09-18T14:45:02.003Z",
  marketName: "الشام ماركت",
  note: "",
  items: [{
    productId: "grape-leaves", productName: "ورق عنب", sku: "P1-07",
    variantLabel: "660غ", unitsPerCarton: 12, quantity: 4,
    unitPrice: 18, lineTotal: 72
  }],
  totalCartons: 4,
  totalAmount: 72,
  currency: "€"
}
```

IDs use ADLA-YYYYMMDD-HHmmss-SSS in browser local time, with a sequence suffix for consecutive creations within the same millisecond. IDs are created only after the details form is confirmed. The display timestamp is local; createdAtIso is the equivalent UTC instant. Returning to details and confirming creates a fresh snapshot. Retrying the WhatsApp button retains the reviewed ID.

The Arabic WhatsApp message contains the brand heading, order ID, date, market, numbered product/variant lines, SKU, units per carton, quantity, carton price, line total, total cartons, total amount, and an optional note. formatWhatsAppMessage reads the order object; it never reads cart DOM or parses message text. The URL uses encodeURIComponent and the configured number only. Blank and malformed numbers are rejected.

createOrder consumes plain item values read from the existing quantity Map and catalog metadata. A future saveOrder(order) can be inserted before openWhatsApp(order); neither cart calculations nor the formatter needs to change. No backend, database, API requests, status system, admin, email, SMS, payments, invoice, PDF, or WhatsApp Business API is implemented.

QA: Edge/Playwright at 375, 430, 768, 1024 and 1440px verified empty-cart guard, required name, trimmed/omitted notes, plain-text markup safety, multiple products and variants, basket quantity edits, SKU/line totals/overall totals, configured recipient, missing recipient, encoded URL, ID format, both entry points, Escape, intact cart and no horizontal overflow. Final run had no console or page errors. Model checks covered local date, UTC ISO, same-millisecond IDs, rounding, serialization, snapshot independence and empty-order rejection. Screenshots were visually reviewed. agent-browser CLI was unavailable; bundled Playwright was used. Native WhatsApp delivery, popup policies and real mobile keyboards cannot be established by desktop viewport emulation; handoff was intercepted in QA and no message was sent.
