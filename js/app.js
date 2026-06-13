/* =====================================================
   TERRA FASHION — app.js
   Navigation, UI helpers, initialisation
   ===================================================== */

/* ═══════════════════════════════════
   PAGE ROUTING
═══════════════════════════════════ */

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  /* Update nav active link */
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navLink = document.getElementById('nav-' + pageId);
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Page-specific init */
  if (pageId === 'cart')  renderCartPage();
  if (pageId === 'shop')  Shop.render();
}

/* ═══════════════════════════════════
   MOBILE NAV
═══════════════════════════════════ */

function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('navOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════
   SEARCH BAR TOGGLE
═══════════════════════════════════ */

function toggleSearchBar() {
  const bar = document.getElementById('navSearchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    bar.querySelector('input')?.focus();
  }
}

function navSearchSubmit(e) {
  if (e.key === 'Enter' || e.type === 'click') {
    const val = document.getElementById('navSearchInput')?.value?.trim();
    if (val) {
      document.getElementById('shopSearchInput').value = val;
      showPage('shop');
      Shop.render();
      document.getElementById('navSearchBar').classList.remove('open');
    }
  }
}

/* ═══════════════════════════════════
   SHOP HELPERS (called from HTML)
═══════════════════════════════════ */

function filterByCategory(cat) {
  Shop.filterByCategory(cat);
}

function showShop() {
  showPage('shop');
  Shop.render();
}

/* ═══════════════════════════════════
   TOAST
═══════════════════════════════════ */

let _toastTimer;

function showToast(msg) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;
  msgEl.innerHTML = msg;
  toast.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ═══════════════════════════════════
   NEWSLETTER
═══════════════════════════════════ */

function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmailInput');
  const email = input?.value?.trim();
  if (email && email.includes('@') && email.includes('.')) {
    showToast('Welcome to the Terra Circle! 🌿');
    if (input) input.value = '';
  } else {
    showToast('Please enter a valid email address.');
  }
}

/* ═══════════════════════════════════
   NAVBAR SCROLL EFFECT
═══════════════════════════════════ */

function initNavScrollEffect() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ═══════════════════════════════════
   FILTER SIDEBAR (mobile)
═══════════════════════════════════ */

function openFilterSidebar() {
  document.getElementById('filterSidebar').classList.add('open');
  document.getElementById('filterOverlay').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeFilterSidebar() {
  document.getElementById('filterSidebar').classList.remove('open');
  document.getElementById('filterOverlay').classList.remove('show');
  document.body.style.overflow = '';
}

/* ═══════════════════════════════════
   HOME — FEATURED PRODUCTS
═══════════════════════════════════ */

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProductsGrid');
  if (!container) return;
  const featured = PRODUCTS.filter(p => p.badge || p.isNew || p.rating >= 4.8).slice(0, 8);
  container.innerHTML = featured.map(productCardHTML).join('');
}

/* ═══════════════════════════════════
   INIT
═══════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  Cart.load();
  Cart.updateBadge();
  renderFeaturedProducts();
  initNavScrollEffect();
  Shop.render();
});
