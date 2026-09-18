// Plain order snapshots and presentation: independent of DOM, cart state and persistence.
window.orderTools = (() => {
  'use strict';
  const pad = (value, length = 2) => String(value).padStart(length, '0');
  const roundMoney = value => Math.round((value + Number.EPSILON) * 100) / 100;
  let lastIdTime = -1, sequence = 0;

  function createOrder({ marketName, note, items, currency }, now = new Date()) {
    if (!marketName.trim() || !items.length) throw new Error('Order requires a market and items');
    const date = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
    const time = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
    const idTime = now.getTime();
    sequence = idTime === lastIdTime ? sequence + 1 : 0;
    lastIdTime = idTime;
    const normalizedItems = items.map(item => ({ ...item, lineTotal: roundMoney(item.quantity * item.unitPrice) }));
    return {
      id: `ADLA-${date}-${time}-${pad(now.getMilliseconds(), 3)}${sequence ? `-${sequence}` : ''}`,
      createdAt: `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()} – ${pad(now.getHours())}:${pad(now.getMinutes())}`,
      createdAtIso: now.toISOString(),
      marketName: marketName.trim(),
      note: note.trim(),
      items: normalizedItems,
      totalCartons: normalizedItems.reduce((sum, item) => sum + (item.priceUnit === 'kg' ? 0 : item.quantity), 0),
      ...(normalizedItems.some(item => item.priceUnit === 'kg') ? {
        totalKilograms: normalizedItems.reduce((sum, item) => sum + (item.priceUnit === 'kg' ? item.quantity : 0), 0),
        totalOrderUnits: normalizedItems.reduce((sum, item) => sum + item.quantity, 0)
      } : {}),
      totalAmount: roundMoney(normalizedItems.reduce((sum, item) => sum + item.lineTotal, 0)),
      currency
    };
  }

  function formatWhatsAppMessage(order, labels, brandName) {
    const money = value => `${order.currency}${value.toFixed(2)}`;
    const block = (label, value) => `${label}:\n${value}`;
    const lines = order.items.map((item, index) => [
      `${index + 1}) ${item.productName} — ${item.variantLabel}`,
      `SKU: ${item.sku}`,
      ...(item.priceUnit === 'kg' ? [] : [`${labels.unitsPerCartonLabel}: ${item.unitsPerCarton}`]),
      `${labels.quantityLabel}: ${item.quantity} ${item.priceUnit === 'kg' ? labels.kg : labels.carton}`,
      `${item.priceUnit === 'kg' ? labels.kgPrice : labels.cartonPrice}: ${money(item.unitPrice)}`,
      `${labels.lineTotalLabel}: ${money(item.lineTotal)}`
    ].join('\n'));
    return [
      `${labels.newOrderLabel} — ${brandName}`,
      block(labels.orderIdLabel, order.id), block(labels.orderDateLabel, order.createdAt),
      block(labels.marketLabel, order.marketName), `${labels.orderDetailsLabel}\n────────────────`,
      ...lines,
      `────────────────\n${order.totalOrderUnits === undefined ? labels.totalCartonsLabel : labels.totalOrderUnitsLabel}: ${order.totalOrderUnits ?? order.totalCartons}\n${labels.orderTotalLabel}: ${money(order.totalAmount)}`,
      ...(order.note ? [block(labels.orderNoteLabel, order.note)] : [])
    ].join('\n\n');
  }
  return { createOrder, formatWhatsAppMessage };
})();
