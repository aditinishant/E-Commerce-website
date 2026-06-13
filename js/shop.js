/* =====================================================
   TERRA FASHION — shop.js
   Shop page: filter, sort, search, render
   ===================================================== */

const Shop = (() => {

  let activeColorFilters = [];
  let isGridView = true;

  /* ── Render all shop products ── */
  function render() {
    const container = document.getElementById('shopProductsGrid');
    if (!container) return;

    const filtered = getFiltered();
    container.className = 'products-grid' + (isGridView ? '' : ' list-view');

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="no-results">
          <div class="no-results-icon">🌿</div>
          <h3>No products found</h3>
          <p>Try adjusting your filters or search term.</p>
          <button class="btn btn-dark" onclick="Shop.clearFilters()">Clear Filters</button>
        </div>`;
    } else {
      container.innerHTML = filtered.map(productCardHTML).join('');
    }

    const countEl = document.getElementById('shopResultsCount');
    if (countEl) countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

    renderActiveTags();
  }

  /* ── Build filtered + sorted product list ── */
  function getFiltered() {
    const search    = document.getElementById('shopSearchInput')?.value?.toLowerCase() ?? '';
    const catBoxes  = [...document.querySelectorAll('.cat-filter-cb:checked')].map(c => c.value);
    const maxPrice  = parseInt(document.getElementById('priceRangeSlider')?.value ?? 10000);
    const inStock   = document.getElementById('inStockCb')?.checked ?? false;
    const saleOnly  = document.getElementById('saleCb')?.checked ?? false;
    const sort      = document.getElementById('sortSelect')?.value ?? 'featured';

    let list = PRODUCTS.filter(p => {
      if (search && !p.name.toLowerCase().includes(search) && !p.category.toLowerCase().includes(search) && !p.subcategory.toLowerCase().includes(search)) return false;
      if (catBoxes.length && !catBoxes.includes(p.category)) return false;
      if (p.price > maxPrice) return false;
      if (inStock && !p.inStock) return false;
      if (saleOnly && !p.oldPrice) return false;
      if (activeColorFilters.length) {
        const pColorNames = p.colors.map(c => c.name);
        if (!activeColorFilters.some(c => pColorNames.includes(c))) return false;
      }
      return true;
    });

    if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
    if (sort === 'name-asc')   list.sort((a,b) => a.name.localeCompare(b.name));
    if (sort === 'newest')     list.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sort === 'rating')     list.sort((a,b) => b.rating - a.rating);

    return list;
  }

  /* ── Render active filter tags ── */
  function renderActiveTags() {
    const container = document.getElementById('activeFilterTags');
    if (!container) return;

    const catBoxes = [...document.querySelectorAll('.cat-filter-cb:checked')].map(c => c.value);
    const inStock  = document.getElementById('inStockCb')?.checked;
    const saleOnly = document.getElementById('saleCb')?.checked;

    let html = '';
    catBoxes.forEach(c => {
      html += `<div class="filter-tag" onclick="Shop.removeCatFilter('${c}')">${c} <span class="remove-x">✕</span></div>`;
    });
    if (inStock) html += `<div class="filter-tag" onclick="document.getElementById('inStockCb').checked=false;Shop.render()">In Stock <span class="remove-x">✕</span></div>`;
    if (saleOnly) html += `<div class="filter-tag" onclick="document.getElementById('saleCb').checked=false;Shop.render()">On Sale <span class="remove-x">✕</span></div>`;
    activeColorFilters.forEach(c => {
      html += `<div class="filter-tag" onclick="Shop.removeColorFilter('${c}')">${c} <span class="remove-x">✕</span></div>`;
    });

    container.innerHTML = html;
  }

  /* ── Toggle color filter ── */
  function toggleColorFilter(colorName, el) {
    if (activeColorFilters.includes(colorName)) {
      activeColorFilters = activeColorFilters.filter(c => c !== colorName);
      el.classList.remove('active');
    } else {
      activeColorFilters.push(colorName);
      el.classList.add('active');
    }
    render();
  }

  /* ── Remove single category filter ── */
  function removeCatFilter(val) {
    document.querySelectorAll('.cat-filter-cb').forEach(cb => { if (cb.value === val) cb.checked = false; });
    render();
  }

  /* ── Remove single color filter ── */
  function removeColorFilter(colorName) {
    activeColorFilters = activeColorFilters.filter(c => c !== colorName);
    document.querySelectorAll('.color-filter-swatch').forEach(el => { if (el.dataset.color === colorName) el.classList.remove('active'); });
    render();
  }

  /* ── Clear all filters ── */
  function clearFilters() {
    document.querySelectorAll('.cat-filter-cb').forEach(cb => cb.checked = false);
    const slider = document.getElementById('priceRangeSlider');
    if (slider) { slider.value = 10000; updatePriceLabel(10000); }
    const inStockCb = document.getElementById('inStockCb');
    const saleCb    = document.getElementById('saleCb');
    if (inStockCb) inStockCb.checked = false;
    if (saleCb)    saleCb.checked    = false;
    const search = document.getElementById('shopSearchInput');
    if (search) search.value = '';
    activeColorFilters = [];
    document.querySelectorAll('.color-filter-swatch').forEach(el => el.classList.remove('active'));
    render();
  }

  /* ── Update price label ── */
  function updatePriceLabel(val) {
    const el = document.getElementById('priceMaxLabel');
    if (el) el.textContent = '₹' + parseInt(val).toLocaleString('en-IN');
  }

  /* ── Set view ── */
  function setView(view) {
    isGridView = view === 'grid';
    document.getElementById('gridViewBtn')?.classList.toggle('active', isGridView);
    document.getElementById('listViewBtn')?.classList.toggle('active', !isGridView);
    render();
  }

  /* ── Filter by category (from homepage) ── */
  function filterByCategory(cat) {
    showPage('shop');
    setTimeout(() => {
      document.querySelectorAll('.cat-filter-cb').forEach(cb => { cb.checked = cb.value === cat; });
      const subtitle = document.getElementById('shopPageSubtitle');
      if (subtitle) subtitle.textContent = cat;
      render();
    }, 60);
  }

  return { render, clearFilters, updatePriceLabel, setView, toggleColorFilter, removeCatFilter, removeColorFilter, filterByCategory };

})();

/* ═══════════════════════════════════
   PRODUCT CARD HTML
═══════════════════════════════════ */

function productCardHTML(p) {
  const discount   = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;
  const badgeClass = { Sale: 'badge-sale', New: 'badge-new', Hot: 'badge-hot', Limited: 'badge-limited' }[p.badge] ?? '';
  const badgeHTML  = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : '';
  const oldPriceHTML = p.oldPrice ? `<span class="price-old">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : '';
  const discountHTML = discount ? `<span class="price-discount">-${discount}%</span>` : '';
  const starsHTML  = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));

  return `
    <article class="product-card" id="pcard-${p.id}">
      <div class="product-img-wrap">
        <img src="${p.images[0]}"
             alt="${p.name}"
             loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'">
        ${badgeHTML}
        <div class="product-quick-actions">
          <button class="quick-action-btn" onclick="event.stopPropagation();showDetail(${p.id})" title="Quick view">👁</button>
          <button class="quick-action-btn" onclick="event.stopPropagation();showToast('Added to wishlist 🤍')" title="Add to wishlist">🤍</button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-cat-label">${p.category} · ${p.subcategory}</p>
        <h3 class="product-name" onclick="showDetail(${p.id})">${p.name}</h3>
        <div class="product-rating-row">
          <span class="stars-sm">${starsHTML}</span>
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <span class="price-now">₹${p.price.toLocaleString('en-IN')}</span>
          ${oldPriceHTML}
          ${discountHTML}
        </div>
        <button class="card-atc-btn" onclick="Cart.add(${p.id});Cart.updateBadge();showToast('&quot;${p.name}&quot; added to cart ✓')">
          Add to Cart
        </button>
      </div>
    </article>`;
}
