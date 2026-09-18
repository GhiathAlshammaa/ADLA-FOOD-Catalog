(() => {
  'use strict';
  const root = document.querySelector('#catalog-app');
  const cards = [...root.querySelectorAll('.product')];
  const search = root.querySelector('#product-search');
  const categoryButtons = [...root.querySelectorAll('.category')];
  // One quantity per variant element. Product-scoped identity also handles duplicate SKUs.
  const quantities = new Map();
  const basket = document.querySelector('#basket');
  const basketItems = basket.querySelector('#basket-items');
  const basketRows = new Map(); // Rendered elements only; never a second cart state.
  let basketTrigger = null;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let selectedCategory = 'all';
  const money = value => `€${value.toFixed(2)}`;
  const quantityForVariant = variant => quantities.get(variant) || 0;
  const quantityFor = card => quantityForVariant(selectedVariant(card));
  const selectedVariant = card => card.querySelector('.variant[aria-pressed="true"]');

  const categoryNav = root.querySelector('.category-nav');
  const categoryStrip = root.querySelector('.categories');
  const leftArrow = root.querySelector('.category-arrow-left');
  const rightArrow = root.querySelector('.category-arrow-right');
  let categoryFrame = 0;

  function updateCategoryNavigation() {
    categoryFrame = 0;
    // Compare with the full wrapper so reserved arrow space cannot create overflow.
    const overflowing = categoryStrip.scrollWidth > categoryNav.clientWidth + 1;
    categoryNav.classList.toggle('has-overflow', overflowing);
    const viewport = categoryStrip.getBoundingClientRect();
    const first = categoryButtons[0].getBoundingClientRect();
    const last = categoryButtons[categoryButtons.length - 1].getBoundingClientRect();
    // Physical edges work with RTL negative scrollLeft and with LTR alike.
    const hasLeft = overflowing && Math.min(first.left, last.left) < viewport.left - 1;
    const hasRight = overflowing && Math.max(first.right, last.right) > viewport.right + 1;
    leftArrow.disabled = !hasLeft;
    rightArrow.disabled = !hasRight;
    categoryNav.classList.toggle('has-left', hasLeft);
    categoryNav.classList.toggle('has-right', hasRight);
  }

  function scheduleCategoryNavigation() {
    if (!categoryFrame) categoryFrame = requestAnimationFrame(updateCategoryNavigation);
  }

  [[leftArrow, -1], [rightArrow, 1]].forEach(([arrow, direction]) => {
    arrow.addEventListener('click', () => categoryStrip.scrollBy({
      left: direction * categoryStrip.clientWidth * 0.7,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    }));
  });
  categoryStrip.addEventListener('scroll', scheduleCategoryNavigation, { passive: true });
  window.addEventListener('resize', scheduleCategoryNavigation);
  document.fonts.ready.then(scheduleCategoryNavigation);
  updateCategoryNavigation();

  function filterProducts() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const searchable = `${card.dataset.search} ${[...card.querySelectorAll('.variant')].map(button => button.dataset.code).join(' ')}`;
      card.hidden = !((selectedCategory === 'all' || card.dataset.category === selectedCategory) && searchable.toLowerCase().includes(query));
      if (!card.hidden) visible++;
    });
    root.querySelector('#result-count').textContent = `${visible} ${visible === 1 ? 'منتج' : 'منتجات'}`;
    root.querySelector('#empty-state').hidden = visible > 0;
  }

  function updateCart() {
    let count = 0, total = 0;
    quantities.forEach((quantity, variant) => {
      count += quantity;
      total += quantity * Number(variant.dataset.price);
    });
    root.querySelector('#cart-count').textContent = count;
    root.querySelector('#cart-items').textContent = count;
    root.querySelector('#cart-total').textContent = money(total);
    root.querySelector('#cart-bar').hidden = count === 0;
    root.querySelector('.header-cart').setAttribute('aria-label', `فتح سلة الطلب: ${count} كرتونة، ${money(total)}`);
    const summary = count ? `${count} كرتونة في الطلب. الإجمالي ${money(total)}` : 'الطلب فارغ';
    root.querySelector('#cart-status').textContent = summary;
    basket.querySelector('#basket-count').textContent = `${count} كرتونة`;
    basket.querySelector('#basket-summary-count').textContent = `${count} كرتونة`;
    basket.querySelector('#basket-total').textContent = money(total);
    basket.querySelector('#basket-empty').hidden = count > 0;
    basket.querySelector('.basket-order').hidden = count === 0;
    basket.querySelector('#basket-status').textContent = summary;
    if (!count) {
      root.querySelector('#order-note').hidden = true;
      basket.querySelector('#basket-order-note').hidden = true;
    }
    renderBasket();
  }

  function setVariantQuantity(variant, value) {
    const parsed = Number.parseInt(value, 10);
    const quantity = Number.isFinite(parsed) ? Math.max(0, Math.min(999, parsed)) : 0;
    if (quantity) quantities.set(variant, quantity);
    else quantities.delete(variant);
    const card = variant.closest('.product');
    if (selectedVariant(card) === variant) renderQuantity(card);
    updateCart();
  }

  // Shared controls and normalization for both the catalog and basket.
  function createStepper(label, getVariant) {
    const stepper = document.createElement('div');
    stepper.className = 'stepper';
    stepper.innerHTML = '<button type="button">−</button><input type="number" min="0" max="999" step="1" inputmode="numeric"><button type="button">+</button>';
    const [minus, plus] = stepper.querySelectorAll('button');
    const input = stepper.querySelector('input');
    minus.setAttribute('aria-label', `إنقاص كمية ${label}`);
    plus.setAttribute('aria-label', `زيادة كمية ${label}`);
    input.setAttribute('aria-label', `عدد كراتين ${label}`);
    minus.addEventListener('click', () => setVariantQuantity(getVariant(), quantityForVariant(getVariant()) - 1));
    plus.addEventListener('click', () => setVariantQuantity(getVariant(), quantityForVariant(getVariant()) + 1));
    input.addEventListener('input', () => {
      // Allow clearing the field while typing; commit an empty field as zero on blur.
      if (input.value !== '') setVariantQuantity(getVariant(), input.value);
    });
    input.addEventListener('change', () => setVariantQuantity(getVariant(), input.value));
    return stepper;
  }

  function renderQuantity(card) {
    const holder = card.querySelector('.quantity-control');
    const name = card.querySelector('h3').textContent;
    const previousFocus = holder.contains(document.activeElement);
    const quantity = quantityFor(card);
    if (!quantity) {
      if (!holder.querySelector('.add')) {
        holder.innerHTML = '<button class="add" type="button">+</button>';
        const add = holder.querySelector('button');
        add.setAttribute('aria-label', `إضافة ${name}`);
        add.addEventListener('click', () => setVariantQuantity(selectedVariant(card), 1));
        if (previousFocus) add.focus({preventScroll:true});
      }
      return;
    }
    if (!holder.querySelector('.stepper')) {
      holder.replaceChildren(createStepper(name, () => selectedVariant(card)));
      if (previousFocus) holder.querySelector('button:last-child').focus({preventScroll:true});
    }
    const input = holder.querySelector('input');
    if (input.value !== String(quantity)) input.value = quantity;
  }

  function createBasketRow(variant) {
    const card = variant.closest('.product');
    const name = card.querySelector('h3').textContent;
    const row = document.createElement('article');
    row.className = 'basket-item';
    row.setAttribute('role', 'listitem');
    row.dataset.itemKey = `${cards.indexOf(card)}:${variant.dataset.code}:${variant.dataset.size}`;
    row.innerHTML = '<div class="basket-item-top"><div class="basket-details"><h3></h3><div class="basket-variant"></div><p class="basket-meta"><span class="basket-pack"></span><br>الكود <bdi class="basket-sku"></bdi></p></div></div><div class="basket-line"><span><bdi class="basket-unit-price"></bdi> × <span class="basket-quantity"></span></span><strong>الإجمالي: <bdi class="basket-line-total"></bdi></strong></div><div class="basket-actions"><button class="basket-remove" type="button">حذف</button></div>';
    row.querySelector('h3').textContent = name;
    row.querySelector('.basket-variant').textContent = variant.dataset.size;
    row.querySelector('.basket-pack').textContent = variant.dataset.pack;
    row.querySelector('.basket-sku').textContent = variant.dataset.code;
    row.querySelector('.basket-unit-price').textContent = money(Number(variant.dataset.price));
    const visual = card.querySelector('.visual').cloneNode(true);
    visual.querySelector('.stock')?.remove();
    row.querySelector('.basket-item-top').prepend(visual);
    updateProductImage(card, variant, row);
    row.querySelector('.basket-actions').prepend(createStepper(`${name} ${variant.dataset.size}`, () => variant));
    const remove = row.querySelector('.basket-remove');
    remove.setAttribute('aria-label', `حذف ${name} ${variant.dataset.size}`);
    remove.addEventListener('click', () => setVariantQuantity(variant, 0));
    return row;
  }

  function renderBasket() {
    let removedFocusIndex = -1;
    [...basketRows].forEach(([variant, row], index) => {
      if (!quantities.has(variant)) {
        if (row.contains(document.activeElement)) removedFocusIndex = index;
        basketRows.delete(variant);
        row.remove();
      }
    });
    quantities.forEach((quantity, variant) => {
      let row = basketRows.get(variant);
      if (!row) {
        row = createBasketRow(variant);
        basketRows.set(variant, row);
        basketItems.append(row);
      }
      const input = row.querySelector('input');
      if (input.value !== String(quantity)) input.value = quantity;
      row.querySelector('.basket-quantity').textContent = quantity;
      row.querySelector('.basket-line-total').textContent = money(quantity * Number(variant.dataset.price));
    });
    if (removedFocusIndex >= 0 && basket.open) {
      const remaining = [...basketRows.values()];
      const next = remaining[Math.min(removedFocusIndex, remaining.length - 1)];
      // Removing an edited input can dispatch a final change/blur event.
      // Restore focus after that event completes, inside the still-open dialog.
      queueMicrotask(() => {
        if (basket.open) (next?.querySelector('.basket-remove') || basket.querySelector('.basket-close')).focus({preventScroll:true});
      });
    }
  }

  function openBasket(event) {
    basketTrigger = event.currentTarget;
    updateCart();
    basket.showModal();
    basket.querySelector('.basket-close').focus({preventScroll:true});
  }

  basket.querySelector('.basket-close').addEventListener('click', () => basket.close());
  basket.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return; // Escape is handled by the native dialog.
    const controls = [...basket.querySelectorAll('button:not(:disabled), input:not(:disabled)')]
      .filter(control => control.getClientRects().length);
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  // Require both pointer-down and click outside, so dragging out of the sheet cannot close it.
  const outsideBasket = event => {
    const rect = basket.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  };
  let backdropPress = false;
  basket.addEventListener('pointerdown', event => { backdropPress = event.target === basket && outsideBasket(event); });
  basket.addEventListener('click', event => {
    if (backdropPress && event.target === basket && outsideBasket(event)) basket.close();
    backdropPress = false;
  });
  basket.addEventListener('close', () => {
    // A summary trigger may disappear when the last item is removed.
    const trigger = basketTrigger?.getClientRects().length ? basketTrigger : root.querySelector('.header-cart');
    trigger.focus({preventScroll:true});
  });
  basket.querySelector('.basket-order').addEventListener('click', () => {
    basket.querySelector('#basket-order-note').hidden = false;
  });

  // Image paths live only on variant data-image attributes in index.html.
  // Keep the same visual container for missing, failed, and loaded images.
  function updateProductImage(card, button, container = card) {
    const photo = container.querySelector('.product-image');
    const placeholder = container.querySelector('.image-placeholder');
    const path = button.dataset.image?.trim();
    photo.onload = null;
    photo.onerror = null;
    photo.hidden = true;
    placeholder.hidden = false;
    photo.removeAttribute('src');
    if (!path) return;
    photo.alt = `${card.querySelector('h3').textContent} — ${button.dataset.size}`;
    photo.onload = () => { photo.hidden = false; placeholder.hidden = true; };
    photo.onerror = () => { photo.hidden = true; placeholder.hidden = false; };
    photo.src = path;
  }

  function selectVariant(card, button) {
    card.querySelectorAll('.variant').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    card.querySelector('.pack').textContent = button.dataset.pack;
    card.querySelector('.sku').textContent = button.dataset.code;
    card.querySelector('.price strong').textContent = money(Number(button.dataset.price));
    updateProductImage(card, button);
    card.dataset.selectedSize = button.dataset.size;
    renderQuantity(card);
    updateCart();
  }

  cards.forEach(card => {
    const add = card.querySelector('.add');
    const holder = document.createElement('div');
    holder.className = 'quantity-control';
    add.replaceWith(holder);
    renderQuantity(card);
    card.querySelectorAll('.variant').forEach(button => button.addEventListener('click', () => selectVariant(card, button)));
    selectVariant(card, selectedVariant(card));
  });
  categoryButtons.forEach(button => button.addEventListener('click', () => {
    selectedCategory = button.dataset.category;
    categoryButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    const target = button.dataset.category === 'seeds' ? button.nextElementSibling : button;
    target.scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth', block:'nearest', inline:'nearest'});
    filterProducts();
    scheduleCategoryNavigation();
  }));
  root.querySelector('.header-cart').addEventListener('click', openBasket);
  root.querySelector('.basket-trigger').addEventListener('click', openBasket);
  root.querySelector('.order-btn').addEventListener('click', () => {
    const note = root.querySelector('#order-note');
    note.hidden = false;
    note.setAttribute('tabindex', '-1');
    note.focus();
  });
  search.addEventListener('input', filterProducts);
  filterProducts();
  updateCart();
})();
