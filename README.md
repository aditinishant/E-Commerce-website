# TERRA — Natural Fashion E-Commerce Website

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-4CAF50?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A fully responsive, multi-page fashion e-commerce website built with pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies. Features a complete shopping experience with product browsing, filtering, cart management, and a clean earthy design system.

> **Live Demo:** [terra-fashion.netlify.app](https://terra-fashion.netlify.app) ← *(replace with your deployed URL)*

---

## 📸 Screenshots

| Home | Shop | Product Detail | Cart |
|------|------|----------------|------|
| Hero section with editorial imagery | Filter sidebar + product grid | Image gallery, size & colour picker | Live cart with order summary |

---

## ✨ Features

### 🛍️ Shopping Experience
- **20 products** across Women, Men, and Accessories categories
- **Product detail pages** with image gallery, size selector, colour picker, and tabbed info (Description, Care, Shipping, Reviews)
- **Add to Cart** from any page — product card, quick-view, or detail page
- **Persistent cart** — items saved to `localStorage` and restored on page reload
- **Quantity controls** — increment, decrement, and remove items
- **Coupon codes** — try `TERRA10`, `WELCOME`, or `FIRST15`

### 🔍 Filter & Search
- Real-time **text search** across product names, categories, and subcategories
- **Category filter** — Women / Men / Accessories
- **Price range slider** — dynamic max-price filtering
- **Colour filter** — filter by Tan, Moss, Rust, Dark Brown, Cream, Sage
- **Availability filters** — In Stock Only / On Sale
- **Active filter tags** — visible chips with one-click removal
- **Sort options** — Featured, Newest, Price Low→High, Price High→Low, A–Z, Top Rated
- **Grid / List view** toggle

### 📱 Responsive Design
- Mobile-first CSS with breakpoints at 480px, 768px, 960px, 1024px, 1280px
- Slide-out **mobile navigation** with full-screen overlay
- Slide-in **mobile filter sidebar** with backdrop overlay
- Touch-friendly tap targets throughout

### 🎨 Design System
- Earthy colour palette — cream, sand, tan, brown, moss, rust
- Typography: **Cormorant Garamond** (display) + **DM Sans** (body)
- CSS custom properties (variables) for consistent theming
- Subtle hover animations, page fade transitions, and toast notifications

---

## 🗂️ Project Structure

```
terra-fashion/
│
├── index.html              # Main HTML — all pages as sections
│
├── css/
│   ├── style.css           # CSS variables, reset, base typography, utilities
│   ├── navbar.css          # Sticky navigation, search bar, mobile hamburger
│   ├── home.css            # Hero, category grid, promo banner, testimonials
│   ├── products.css        # Product cards, badges, detail page layout
│   ├── shop.css            # Shop layout, filter sidebar, controls bar
│   └── cart.css            # Cart item rows, order summary, checkout
│
└── js/
    ├── data.js             # Product catalog — 20 items with images & metadata
    ├── app.js              # Page routing, navbar, toast, newsletter, init
    ├── shop.js             # Filter engine, sort logic, product card renderer
    ├── detail.js           # Product detail page — images, tabs, related products
    └── cart.js             # Cart state, localStorage, quantity controls, renderer
```

---

## 🚀 Getting Started

### Option 1 — Open directly in browser
No build step required. Just clone and open:

```bash
git clone https://github.com/your-username/terra-fashion.git
cd terra-fashion
open index.html        # macOS
# or
start index.html       # Windows
# or
xdg-open index.html    # Linux
```

### Option 2 — Local dev server (recommended)
For best results with image loading, use a local server:

```bash
# Using VS Code — install Live Server extension, then click "Go Live"

# Using Node.js
npx serve .

# Using Python
python -m http.server 8000
# then visit http://localhost:8000
```

---

## 🌐 Deployment

This is a **static site** — deploy anywhere for free:

### Netlify (recommended)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo — Netlify auto-detects it as a static site
4. Click **Deploy** — live in under 60 seconds

### GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site is live at `https://your-username.github.io/terra-fashion`

### Vercel
```bash
npm install -g vercel
vercel
```

---

## 🧩 Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup, accessibility attributes |
| **CSS3** | Custom properties, Grid, Flexbox, animations, media queries |
| **Vanilla JavaScript (ES6+)** | Modules pattern, localStorage API, DOM manipulation |
| **Google Fonts** | Cormorant Garamond + DM Sans |
| **Unsplash** | Product & editorial imagery (free to use) |

> **Zero dependencies** — no React, no Vue, no jQuery, no Bootstrap. Built from scratch.

---

## 🔧 Customisation

### Add a new product
Open `js/data.js` and add an object to the `PRODUCTS` array:

```js
{
  id: 21,
  name: "Your Product Name",
  category: "Women",          // "Women" | "Men" | "Accessories"
  subcategory: "Dresses",
  price: 2999,
  oldPrice: 3999,             // null if not on sale
  badge: "New",               // "New" | "Sale" | "Hot" | "Limited" | null
  isNew: true,
  colors: [
    { name: "Rust", hex: "#B85C38" }
  ],
  sizes: ["S", "M", "L", "XL"],
  unavailSizes: ["XL"],       // sizes shown as crossed out
  rating: 4.7,
  reviews: 12,
  inStock: true,
  images: [
    "https://your-image-url.com/image1.jpg",
    "https://your-image-url.com/image2.jpg"
  ],
  description: "Product description here."
}
```

### Change the colour theme
Edit the CSS variables in `css/style.css`:

```css
:root {
  --cream:  #F5F0E8;
  --tan:    #C8B49A;
  --brown:  #8B6F55;
  --dark:   #2C2218;
  --bark:   #5C4433;
  --moss:   #6B7B5E;
  --rust:   #B85C38;
}
```

### Add a coupon code
In `js/cart.js`, find the `applyCoupon()` function and add to the `validCodes` object:

```js
const validCodes = {
  'TERRA10': '10% off applied!',
  'WELCOME': '₹200 off applied!',
  'YOURNEWCODE': 'Your discount message!'
};
```

---

## 📋 Pages

| Page | Route (SPA) | Description |
|------|-------------|-------------|
| **Home** | `#home` | Hero, category grid, featured products, promo banner, testimonials, Instagram strip, newsletter |
| **Shop** | `#shop` | Full product catalog with filter sidebar, search, sort, and view toggle |
| **Product Detail** | `#detail` | Image gallery, size/colour picker, add to cart, tabs, related products |
| **Cart** | `#cart` | Cart items, quantity controls, order summary, coupon, checkout CTA |

---

## ♿ Accessibility

- Semantic HTML5 elements (`nav`, `main`, `article`, `aside`, `footer`)
- `aria-label` attributes on icon-only buttons
- Keyboard-navigable interactive elements
- Sufficient colour contrast ratios throughout
- `alt` text on all product images
- `loading="lazy"` on below-fold images for performance

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this project for personal or commercial purposes.

---

## 🙏 Acknowledgements

- Product photography from [Unsplash](https://unsplash.com) — free to use under the Unsplash License
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspired by sustainable fashion brands and the beauty of earthy, natural aesthetics

---

<div align="center">
  <p>Made with 🌿 by <strong>Your Name</strong></p>
  <p>
    <a href="https://github.com/your-username">GitHub</a> ·
    <a href="https://linkedin.com/in/your-profile">LinkedIn</a> ·
    <a href="https://your-portfolio.com">Portfolio</a>
  </p>
</div>
