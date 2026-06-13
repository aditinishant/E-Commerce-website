/* =====================================================
   TERRA FASHION — cart.js
   Cart state, persistence, rendering
   ===================================================== */

const Cart = (() => {

  let items = [];

  /* ── Load from localStorage ── */
  function load() {
    try {
      items = JSON.parse(localStorage.getItem('terra_cart') || '[]');
    } catch {
      items = [];
    }
  }

  /* ── Save to localStorage ── */
  function save() {
    localStorage.setItem('terra_cart', JSON.stringify(items));
  }

  /* ── Add item ── */
  function add(productId, qty = 1, size = 'M', color = null) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = items.find(i => i.id === productId && i.size === size);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: productId,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.images[0],
        size,
        color: color || (product.colors[0]?.name ?? ''),
        qty
      });
    }
    save();
    updateBadge();
  }

  /* ── Remove item ── */
  function remove(productId, size) {
    items = items.filter(i => !(i.id === productId && i.size === size));
    save();
    updateBadge();
  }

  /* ── Update quantity ── */
  function setQty(productId, size, qty) {
    const item = items.find(i => i.id === productId && i.size === size);
    if (!item) return;
    if (qty < 1) { remove(productId, size); return; }
    item.qty = qty;
    save();
    updateBadge();
  }

  /* ── Totals ── */
  function subtotal() {
    return items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function totalQty() {
    return items.reduce((sum, i) => sum + i.qty, 0);
  }

  function shipping() {
    return subtotal() >= 2499 ? 0 : 199;
  }

  function total() {
    return subtotal() + shipping();
  }

  /* ── Update navbar badge ── */
  function updateBadge() {
    const badge = document.getElementById('cartCountBadge');
    if (!badge) return;
    const qty = totalQty();
    badge.textContent = qty;
    badge.classList.toggle('hidden', qty === 0);
  }

  /* ── Get all items ── */
  function getItems() {
    return [...items];
  }

  /* ── Clear cart ── */
  function clear() {
    items = [];
    save();
    updateBadge();
  }

  return { load, add, remove, setQty, subtotal, totalQty, shipping, total, updateBadge, getItems, clear };

})();

/* ═══════════════════════════════════
   CART PAGE RENDERER
═══════════════════════════════════ */

function renderCartPage() {
  const container = document.getElementById('cartPageContent');
  if (!container) return;

  const cartItems = Cart.getItems();

  if (cartItems.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet. Explore our collection to find something you'll love.</p>
        <button class="btn btn-dark" onclick="showPage('shop')">Shop the Collection</button>
      </div>`;
    return;
  }

  const sub = Cart.subtotal();
  const ship = Cart.shipping();
  const tot = Cart.total();
  const qty = Cart.totalQty();

  const itemsHTML = cartItems.map(item => `
    <div class="cart-item" id="cart-item-${item.id}-${item.size}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="cart-item-body">
        <p class="cart-item-category">${item.category}</p>
        <h3 class="cart-item-name" onclick="showDetail(${item.id})">${item.name}</h3>
        <p class="cart-item-variants">Size: ${item.size} &nbsp;·&nbsp; Colour: ${item.color}</p>
        <div class="item-qty-control">
          <button class="item-qty-btn" onclick="changeCartQty(${item.id},'${item.size}',-1)">−</button>
          <span class="item-qty-val">${item.qty}</span>
          <button class="item-qty-btn" onclick="changeCartQty(${item.id},'${item.size}',1)">+</button>
        </div>
      </div>
      <div class="cart-item-aside">
        <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        <button class="cart-remove-btn" onclick="removeCartItem(${item.id},'${item.size}')" title="Remove">✕</button>
      </div>
    </div>`).join('');

  container.innerHTML = `
    <div class="cart-wrapper">
      <div>
        <div class="cart-items-list">${itemsHTML}</div>
        <div class="cart-actions-row">
          <button class="continue-shopping-btn" onclick="showPage('shop')">← Continue Shopping</button>
        </div>
      </div>

      <aside class="cart-summary-card">
        <h3 class="summary-card-title">Order Summary</h3>

        <div class="summary-line">
          <span class="summary-line-label">Subtotal (${qty} item${qty !== 1 ? 's' : ''})</span>
          <span class="summary-line-value">₹${sub.toLocaleString('en-IN')}</span>
        </div>
        <div class="summary-line">
          <span class="summary-line-label">Shipping</span>
          <span class="summary-line-value ${ship === 0 ? 'free' : ''}">${ship === 0 ? 'FREE' : '₹' + ship}</span>
        </div>

        ${ship > 0 ? `<p class="free-shipping-note">Add ₹${(2499 - sub).toLocaleString('en-IN')} more for free shipping</p>` : ''}

        <hr class="summary-divider">
        <div class="summary-total-line">
          <span>Total</span>
          <span>₹${tot.toLocaleString('en-IN')}</span>
        </div>

        <div class="coupon-row">
          <input class="coupon-input" type="text" placeholder="Coupon code" id="couponInput">
          <button class="coupon-apply-btn" onclick="applyCoupon()">Apply</button>
        </div>

        <button class="checkout-btn" onclick="showToast('Redirecting to checkout… 🛒')">
          Proceed to Checkout →
        </button>

        <div class="payment-methods">
          <span class="pay-badge">UPI</span>
          <span class="pay-badge">VISA</span>
          <span class="pay-badge">MC</span>
          <span class="pay-badge">COD</span>
          <span class="pay-badge">EMI</span>
        </div>
        <p class="secure-note">🔒 256-bit SSL Secure Checkout</p>
      </aside>
    </div>`;
}

function changeCartQty(id, size, delta) {
  const items = Cart.getItems();
  const item = items.find(i => i.id === id && i.size === size);
  if (!item) return;
  Cart.setQty(id, size, item.qty + delta);
  renderCartPage();
}

function removeCartItem(id, size) {
  Cart.remove(id, size);
  renderCartPage();
  showToast('Item removed from cart');
}

function applyCoupon() {
  const val = document.getElementById('couponInput')?.value?.trim().toUpperCase();
  const validCodes = { 'TERRA10': '10% off applied!', 'WELCOME': '₹200 off applied!', 'FIRST15': '15% off applied!' };
  if (validCodes[val]) {
    showToast('🎉 ' + validCodes[val]);
  } else {
    showToast('Invalid coupon code. Try TERRA10');
  }
}
