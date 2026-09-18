const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
const source = fs.readFileSync(path.join(root, 'data/catalog-data.js'), 'utf8');
vm.runInContext(source, context);
vm.runInContext(fs.readFileSync(path.join(root, 'js/order.js'), 'utf8'), context);
const { products, categories, settings } = context.window.catalogData;
const variants = products.flatMap(product => product.variants);
const bySku = new Map(variants.map(variant => [variant.sku, variant]));

test('every official code on pages 2–13 is represented exactly once', () => {
  const expected = [35, 15, 26].flatMap((count, page) =>
    Array.from({ length: count }, (_, index) => `P${page + 1}-${String(index + 1).padStart(2, '0')}`));
  assert.equal(variants.length, 76);
  assert.deepEqual([...bySku.keys()].sort(), expected.sort());
  assert.equal(bySku.size, variants.length);
  const pageCounts = Object.fromEntries(Array.from({ length: 12 }, (_, i) =>
    [i + 2, variants.filter(variant => variant.sourcePage === i + 2).length]));
  assert.deepEqual(pageCounts, { 2:14, 3:13, 4:11, 5:3, 6:6, 7:14, 8:4, 9:4, 10:2, 11:1, 12:2, 13:2 });
});

test('one schema, valid categories, stable IDs, numeric prices and empty image placeholders', () => {
  assert.equal(products.length, 51);
  assert.equal(categories.length, 14);
  assert.equal(new Set(products.map(product => product.id)).size, products.length);
  assert.equal(new Set(categories.map(category => category.id)).size, categories.length);
  const categoryIds = new Set(categories.map(category => category.id));
  for (const id of ['all','pickles','sauces','dry','seeds','olives','rice','legumes','canned','sweets','drinks']) assert.ok(categoryIds.has(id));
  for (const product of products) {
    assert.match(product.id, /^[a-z]+(?:-[a-z]+)*$/);
    assert.ok(categoryIds.has(product.category));
    assert.ok(product.variants.length > 0);
    assert.equal(product.available, true);
    for (const variant of product.variants) {
      assert.ok(variant.sku);
      assert.ok(Number.isFinite(variant.price) && variant.price > 0);
      assert.ok(Number.isInteger(variant.unitsPerCarton) && variant.unitsPerCarton > 0);
      assert.ok(variant.size.value > 0);
      assert.ok(['غ','كغ','مل'].includes(variant.size.unit));
      assert.equal(variant.image, '');
      assert.ok(variant.expectedImage.startsWith(`assets/images/products/${product.id}/${product.id}-`));
      assert.match(variant.expectedImage, /\.webp$/);
      if ('unitPrice' in variant) assert.ok(Number.isFinite(variant.unitPrice) && variant.unitPrice > 0);
      if (variant.priceUnit === 'kg') {
        assert.equal(variant.size.value, 1);
        assert.equal(variant.size.unit, 'كغ');
        assert.equal(variant.unitsPerCarton, 1);
        assert.ok(!('unitPrice' in variant));
      }
    }
  }
  assert.equal(new Set(variants.map(variant => variant.expectedImage)).size, variants.length);
  assert.equal(products.filter(product => product.featured).length, 5);
  for (const id of ['grape-leaves','makdous','pepper-paste','tahini','pickled-peppers'])
    assert.ok(products.find(product => product.id === id && product.featured));
  assert.doesNotMatch(source, /base64|data:image|product-\d+\.jpe?g/i);
});

test('source discrepancies remain distinct, missing source fields stay missing', () => {
  assert.equal(bySku.get('P1-02').price, 22);
  assert.equal(bySku.get('P1-03').size.value, 1250);
  assert.equal(bySku.get('P3-05').unitsPerCarton, 8);
  assert.equal(bySku.get('P3-05').price, 36);
  assert.equal(bySku.get('P3-07').unitsPerCarton, 12);
  assert.equal(bySku.get('P3-07').price, 50);
  assert.equal(bySku.get('P1-10').price, 18);
  assert.equal(bySku.get('P3-09').price, 50);
  for (const sku of ['P2-11','P2-12','P2-13','P2-14','P2-15'])
    assert.ok(!('packageType' in bySku.get(sku)));
});

function item(sku, quantity) {
  const product = products.find(product => product.variants.some(variant => variant.sku === sku));
  const variant = bySku.get(sku);
  return { productId: product.id, productName: product.name, sku,
    variantLabel: `${variant.size.value}${variant.size.unit}`, unitsPerCarton: variant.unitsPerCarton,
    quantity, unitPrice: variant.price, ...(variant.priceUnit ? { priceUnit: variant.priceUnit } : {}) };
}
test('carton order keeps the existing object shape and uses carton price, not package price', () => {
  const order = context.window.orderTools.createOrder({ marketName: ' السوق ', note: '', items: [item('P3-07', 2)], currency: '€' });
  assert.equal(order.totalAmount, 100);
  assert.equal(order.totalCartons, 2);
  assert.ok(!('totalKilograms' in order));
  assert.ok(!('totalOrderUnits' in order));
  assert.ok(!('priceUnit' in order.items[0]));
  assert.equal(order.marketName, 'السوق');
});
test('mixed orders preserve kilogram meaning through JSON and WhatsApp formatting', () => {
  const order = JSON.parse(JSON.stringify(context.window.orderTools.createOrder({
    marketName: ' السوق ', note: ' ملاحظة ', items: [item('P1-14', 3), item('P3-14', 2)], currency: '€'
  })));
  assert.equal(order.totalAmount, 52.5);
  assert.equal(order.totalCartons, 2);
  assert.equal(order.totalKilograms, 3);
  assert.equal(order.totalOrderUnits, 5);
  assert.equal(order.items[0].priceUnit, 'kg');
  const message = context.window.orderTools.formatWhatsAppMessage(order, settings.labels, settings.brandName);
  assert.ok(message.includes('الكمية: 3 كغ'));
  assert.ok(message.includes('سعر الكيلو: €7.50'));
  assert.ok(message.includes('سعر الكرتونة: €15.00'));
  assert.ok(message.includes('إجمالي وحدات الطلب: 5'));
  assert.ok(message.includes('ملاحظة'));
});
