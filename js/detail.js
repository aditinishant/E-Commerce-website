/* =====================================================
   TERRA FASHION — detail.js
   Product detail page renderer
   ===================================================== */

let _detailQty = 1;
let _detailProduct = null;

function showDetail(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  _detailProduct = p;
  _detailQty = 1;

  renderDetailPage(p);
  showPage('detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetailPage(p) {
  const layout   = document.getElementById('detailLayout');
  const tabsSec  = document.getElementById('detailTabsSection');
  const relSec   = document.getElementById('detailRelatedSection');
  if (!layout) return;

  /* Stars */
  const fullStars  = Math.floor(p.rating);
  const halfStar   = p.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  const starsHTML  = '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);

  /* Discount */
  const discount    = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;
  const oldPriceHTML = p.oldPrice ? `<span class="detail-price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : '';
  const discountHTML = discount   ? `<span class="detail-price-off">-${discount}%</span>` : '';

  /* Thumbnails */
  const thumbsHTML = p.images.map((img, i) => `
    <div class="detail-thumb ${i === 0 ? 'active' : ''}" onclick="switchDetailImage('${img}', this)">
      <img src="${img}" alt="${p.name} view ${i + 1}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'">
    </div>`).join('');

  /* Sizes */
  const sizesHTML = p.sizes.map((s, i) => {
    const unavail = p.unavailSizes.includes(s);
    return `<button class="size-btn ${i === 0 && !unavail ? 'selected' : ''} ${unavail ? 'unavail' : ''}"
      onclick="${unavail ? '' : `selectDetailSize(this,'${s}')`}">${s}</button>`;
  }).join('');

  /* Colors */
  const colorsHTML = p.colors.map((c, i) => `
    <div class="color-dot ${i === 0 ? 'selected' : ''}"
         style="background:${c.hex};"
         title="${c.name}"
         onclick="selectDetailColor(this,'${c.name}')">
    </div>`).join('');

  layout.innerHTML = `
    <!-- Images -->
    <div class="detail-images">
      <div class="detail-main-img" id="detailMainImg">
        <img src="${p.images[0]}" alt="${p.name}" id="detailMainImgEl"
             onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'">
      </div>
      <div class="detail-thumbs">${thumbsHTML}</div>
    </div>

    <!-- Info -->
    <div class="detail-info">
      <p class="detail-cat">${p.category} · ${p.subcategory}</p>
      <h1 class="detail-name">${p.name}</h1>

      <div class="detail-rating-row">
        <span class="stars-md">${starsHTML}</span>
        <span class="review-count">${p.rating} · ${p.reviews} reviews</span>
      </div>

      <div class="detail-price">
        ₹${p.price.toLocaleString('en-IN')}
        ${oldPriceHTML}
        ${discountHTML}
      </div>

      <p class="detail-desc">${p.description}</p>

      <!-- Size -->
      <div class="option-label">
        <span>Size</span>
        <span class="size-guide-link" onclick="showToast('Size guide coming soon!')">Size Guide</span>
      </div>
      <div class="sizes-row" id="detailSizesRow">${sizesHTML}</div>

      <!-- Colour -->
      <p class="option-label">Colour: <span id="selectedColorLabel" style="font-weight:400;text-transform:none;letter-spacing:0;">${p.colors[0]?.name ?? ''}</span></p>
      <div class="colors-row">${colorsHTML}</div>

      <!-- ATC -->
      <div class="detail-atc-row">
        <div class="qty-control">
          <button class="qty-btn" onclick="changeDetailQty(-1)">−</button>
          <span class="qty-display" id="detailQtyDisplay">1</span>
          <button class="qty-btn" onclick="changeDetailQty(1)">+</button>
        </div>
        <button class="detail-atc-btn" onclick="addDetailToCart()">Add to Cart</button>
        <button class="wishlist-icon-btn" id="wishlistBtn" onclick="toggleWishlist(this)" title="Wishlist">🤍</button>
      </div>

      <!-- Meta -->
      <div class="detail-meta">
        <div><strong>SKU:</strong> TRR-${String(p.id).padStart(4, '0')}</div>
        <div><strong>Category:</strong> ${p.category} — ${p.subcategory}</div>
        <div><strong>Material:</strong> 100% Natural Fibres</div>
        <div><strong>Origin:</strong> Handcrafted in India</div>
        <div><strong>Stock:</strong> ${p.inStock ? '✓ In Stock' : '✗ Out of Stock'}</div>
      </div>
    </div>`;

  /* ── Tabs ── */
  if (tabsSec) {
    tabsSec.innerHTML = `
      <div class="tabs-nav">
        <button class="tab-btn active" onclick="switchDetailTab('tab-desc', this)">Description</button>
        <button class="tab-btn"        onclick="switchDetailTab('tab-care', this)">Care & Materials</button>
        <button class="tab-btn"        onclick="switchDetailTab('tab-ship', this)">Shipping & Returns</button>
        <button class="tab-btn"        onclick="switchDetailTab('tab-rev',  this)">Reviews (${p.reviews})</button>
      </div>

      <div class="tab-pane active" id="tab-desc">
        <p>${p.description}</p>
        <p>Every Terra piece is made with intention. We work directly with skilled artisans across India — ensuring fair wages, safe working conditions, and sustainable dye practices at every step of production.</p>
      </div>

      <div class="tab-pane" id="tab-care">
        <p><strong>Fabric:</strong> 100% natural fibres — linen, cotton, khadi, or wool as specified above.</p>
        <p><strong>Washing:</strong> Hand wash or gentle machine cycle in cold water (30°C). Use a mild, pH-neutral detergent. Do not bleach or tumble dry.</p>
        <p><strong>Drying:</strong> Lay flat or hang to dry in shade. Avoid direct sunlight to preserve natural dyes.</p>
        <p><strong>Ironing:</strong> Iron on medium heat while slightly damp. Use a pressing cloth for embroidered pieces.</p>
        <p><strong>Storage:</strong> Fold and store in a cool, dry place. Use cotton garment bags — avoid plastic covers.</p>
      </div>

      <div class="tab-pane" id="tab-ship">
        <p><strong>Free Standard Shipping</strong> on all orders above ₹2,499. Estimated delivery 5–7 business days across India.</p>
        <p><strong>Express Shipping</strong> available at ₹199 — delivered within 2–3 business days to most metro cities.</p>
        <p><strong>International Shipping</strong> available to 30+ countries. Rates calculated at checkout.</p>
        <p><strong>Free Returns</strong> within 30 days of delivery. Items must be unworn, unwashed, and in original packaging with tags attached. Initiate a return from your order page.</p>
      </div>

      <div class="tab-pane" id="tab-rev">
        <p>⭐ <strong>${p.rating} out of 5</strong> — based on ${p.reviews} verified customer reviews.</p>
        <p>Our customers love the quality, craftsmanship, and fit of Terra pieces. After placing your order, you'll receive an email invitation to leave a review — we read every one.</p>
        <p>Try coupon code <strong>TERRA10</strong> for 10% off your next order!</p>
      </div>`;
  }

  /* ── Related Products ── */
  if (relSec) {
    const related = PRODUCTS.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);
    if (related.length) {
      relSec.innerHTML = `
        <p class="section-label">You may also like</p>
        <h2 class="section-title" style="font-size:clamp(26px,3vw,36px);margin-bottom:28px;">Related Pieces</h2>
        <div class="products-grid">${related.map(productCardHTML).join('')}</div>`;
    } else {
      relSec.innerHTML = '';
    }
  }
}

/* ── Helpers ── */
function switchDetailImage(src, thumbEl) {
  const mainImg = document.getElementById('detailMainImgEl');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.detail-thumb').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectDetailSize(btn, size) {
  document.querySelectorAll('#detailSizesRow .size-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function selectDetailColor(dot, colorName) {
  dot.closest('.colors-row').querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
  dot.classList.add('selected');
  const label = document.getElementById('selectedColorLabel');
  if (label) label.textContent = colorName;
}

function changeDetailQty(delta) {
  _detailQty = Math.max(1, _detailQty + delta);
  const el = document.getElementById('detailQtyDisplay');
  if (el) el.textContent = _detailQty;
}

function addDetailToCart() {
  if (!_detailProduct) return;
  const sizeBtn    = document.querySelector('#detailSizesRow .size-btn.selected');
  const colorDot   = document.querySelector('.colors-row .color-dot.selected');
  const size  = sizeBtn   ? sizeBtn.textContent  : (_detailProduct.sizes[0] || 'M');
  const color = colorDot  ? colorDot.title        : (_detailProduct.colors[0]?.name || '');
  Cart.add(_detailProduct.id, _detailQty, size, color);
  showToast(`"${_detailProduct.name}" added to cart ✓`);
}

function toggleWishlist(btn) {
  btn.classList.toggle('active');
  const isWishlisted = btn.classList.contains('active');
  btn.textContent = isWishlisted ? '❤️' : '🤍';
  showToast(isWishlisted ? 'Added to wishlist ❤️' : 'Removed from wishlist');
}

function switchDetailTab(tabId, btnEl) {
  document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId)?.classList.add('active');
  btnEl.classList.add('active');
}
