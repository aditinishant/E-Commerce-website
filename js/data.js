/* =====================================================
   TERRA FASHION — data.js
   Product catalog — 20 products with real images
   ===================================================== */

const PRODUCTS = [
  {
    id: 1,
    name: "Linen Wrap Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 3299,
    oldPrice: 4599,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Tan",   hex: "#C8B49A" },
      { name: "Rust",  hex: "#B85C38" },
      { name: "Cream", hex: "#F0EAD6" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: [],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
      "https://images.unsplash.com/photo-1614093302611-8efc4dca5d3f?w=600&q=80"
    ],
    description: "A flowing midi wrap dress crafted from 100% Belgian linen. The adjustable tie waist flatters all figures while the relaxed silhouette keeps you cool through warm days. Machine washable. Ethically made in Jaipur."
  },
  {
    id: 2,
    name: "Cotton Co-ord Set",
    category: "Women",
    subcategory: "Sets",
    price: 4199,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Moss",  hex: "#6B7B5E" },
      { name: "Sage",  hex: "#8B9E8A" }
    ],
    sizes: ["S","M","L","XL"],
    unavailSizes: [],
    rating: 4.9,
    reviews: 87,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80"
    ],
    description: "A relaxed two-piece co-ord set in hand-woven cotton. Features wide-leg trousers with an elasticated waistband and a matching cropped blouse. The moss-dyed fabric is breathable and beautifully textured."
  },
  {
    id: 3,
    name: "Oversized Linen Shirt",
    category: "Men",
    subcategory: "Shirts",
    price: 2499,
    oldPrice: 2999,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Cream",      hex: "#F0EAD6" },
      { name: "Dark Brown", hex: "#3D2B1F" },
      { name: "Tan",        hex: "#C8B49A" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: [],
    rating: 4.7,
    reviews: 56,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&q=80"
    ],
    description: "A generously cut linen shirt with dropped shoulders and a relaxed chest-pocket silhouette. Perfect for casual days or layering over trousers. Breathable 100% natural linen — gets softer with every wash."
  },
  {
    id: 4,
    name: "Terra Leather Tote",
    category: "Accessories",
    subcategory: "Bags",
    price: 3799,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Tan",        hex: "#C8B49A" },
      { name: "Dark Brown", hex: "#3D2B1F" }
    ],
    sizes: ["One Size"],
    unavailSizes: [],
    rating: 5.0,
    reviews: 43,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80",
      "https://images.unsplash.com/photo-1611485988300-b7ef6a1766a6?w=600&q=80"
    ],
    description: "Handcrafted from vegetable-tanned full-grain leather. This roomy tote carries your essentials beautifully and develops a gorgeous patina with age. Brass hardware, interior zip pocket, reinforced base."
  },
  {
    id: 5,
    name: "Kalamkari Print Kurta",
    category: "Women",
    subcategory: "Kurtas",
    price: 3599,
    oldPrice: null,
    badge: null,
    isNew: false,
    colors: [
      { name: "Rust",  hex: "#B85C38" },
      { name: "Cream", hex: "#F0EAD6" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: ["XS"],
    rating: 4.6,
    reviews: 92,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
      "https://images.unsplash.com/photo-1592669241067-2f49d4de0e91?w=600&q=80",
      "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&q=80"
    ],
    description: "A hand-painted Kalamkari kurta featuring traditional nature motifs rendered in natural iron and vegetable dyes. Each piece is unique. Straight silhouette, side slits, and a mandarin collar."
  },
  {
    id: 6,
    name: "Structured Wool Blazer",
    category: "Men",
    subcategory: "Jackets",
    price: 6999,
    oldPrice: 8499,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Dark Brown", hex: "#3D2B1F" },
      { name: "Moss",       hex: "#6B7B5E" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: ["XXL"],
    rating: 4.8,
    reviews: 34,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80"
    ],
    description: "A slim-fit blazer crafted from a premium natural wool blend. Fully lined with organic cotton, two-button closure, and side vents for ease of movement. Transition effortlessly from office to evening."
  },
  {
    id: 7,
    name: "Macrame Drop Earrings",
    category: "Accessories",
    subcategory: "Jewellery",
    price: 699,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Tan",   hex: "#C8B49A" },
      { name: "Cream", hex: "#F0EAD6" }
    ],
    sizes: ["One Size"],
    unavailSizes: [],
    rating: 4.5,
    reviews: 28,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
      "https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=600&q=80"
    ],
    description: "Handknotted macrame drop earrings using natural undyed cotton rope. Lightweight, bohemian, and hypoallergenic gold-fill hooks. Each pair is made by artisans in Jaipur. No two pairs are identical."
  },
  {
    id: 8,
    name: "Khadi Lounge Set",
    category: "Men",
    subcategory: "Loungewear",
    price: 3299,
    oldPrice: null,
    badge: null,
    isNew: false,
    colors: [
      { name: "Cream", hex: "#F0EAD6" },
      { name: "Sage",  hex: "#8B9E8A" },
      { name: "Moss",  hex: "#6B7B5E" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: [],
    rating: 4.7,
    reviews: 61,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&q=80",
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&q=80"
    ],
    description: "Handspun khadi lounge set — the ultimate weekend wear. Drawstring trousers and a relaxed boxy tee. Khadi is the fabric of comfort; it keeps you cool in summer and warm in winter."
  },
  {
    id: 9,
    name: "Pleated Palazzo Pants",
    category: "Women",
    subcategory: "Bottoms",
    price: 2799,
    oldPrice: 3299,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Cream", hex: "#F0EAD6" },
      { name: "Tan",   hex: "#C8B49A" },
      { name: "Rust",  hex: "#B85C38" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: [],
    rating: 4.5,
    reviews: 73,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4bdf31?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80"
    ],
    description: "High-waisted palazzo pants with elegant pleating at the front. Crafted from a fluid organic cotton-modal blend that drapes beautifully. Elasticated waistband and side pockets."
  },
  {
    id: 10,
    name: "Block-Print Scarf",
    category: "Accessories",
    subcategory: "Scarves",
    price: 1299,
    oldPrice: null,
    badge: "Hot",
    isNew: false,
    colors: [
      { name: "Rust",  hex: "#B85C38" },
      { name: "Moss",  hex: "#6B7B5E" },
      { name: "Tan",   hex: "#C8B49A" }
    ],
    sizes: ["One Size"],
    unavailSizes: [],
    rating: 4.9,
    reviews: 112,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=600&q=80",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80"
    ],
    description: "Hand block-printed cotton scarf using traditional Bagru printing techniques from Rajasthan. Natural vegetable dyes in earthy tones. 180 × 70 cm. Doubles as a beach wrap or table runner."
  },
  {
    id: 11,
    name: "A-Line Midi Skirt",
    category: "Women",
    subcategory: "Bottoms",
    price: 2199,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Moss",       hex: "#6B7B5E" },
      { name: "Dark Brown", hex: "#3D2B1F" },
      { name: "Cream",      hex: "#F0EAD6" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: ["XS"],
    rating: 4.6,
    reviews: 38,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
      "https://images.unsplash.com/photo-1601924638867-3b84e8397798?w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80"
    ],
    description: "A classic A-line midi skirt in organic cotton with a discreet side zip. The flared silhouette moves beautifully. Features a wide waistband and two hidden side pockets. Pairs well with the Linen Wrap Blouse."
  },
  {
    id: 12,
    name: "Slim Chino Trousers",
    category: "Men",
    subcategory: "Trousers",
    price: 2899,
    oldPrice: 3499,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Tan",        hex: "#C8B49A" },
      { name: "Moss",       hex: "#6B7B5E" },
      { name: "Dark Brown", hex: "#3D2B1F" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: [],
    rating: 4.7,
    reviews: 88,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
      "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=600&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80"
    ],
    description: "Clean-cut slim chino trousers in a cotton-linen twill. Sits at the natural waist with a zip fly and belt loops. Two side pockets, two back pockets. Wrinkle-resistant and breathable."
  },
  {
    id: 13,
    name: "Off-Shoulder Blouse",
    category: "Women",
    subcategory: "Tops",
    price: 1999,
    oldPrice: null,
    badge: null,
    isNew: false,
    colors: [
      { name: "Cream", hex: "#F0EAD6" },
      { name: "Tan",   hex: "#C8B49A" },
      { name: "Rust",  hex: "#B85C38" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: [],
    rating: 4.5,
    reviews: 54,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
      "https://images.unsplash.com/photo-1614093302611-8efc4dca5d3f?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    ],
    description: "A breezy off-shoulder blouse in breathable gauze cotton. Smocked at the neckline and sleeves for a fitted-yet-relaxed look. Tuck into high-waisted trousers or wear loose over wide-leg pants."
  },
  {
    id: 14,
    name: "Handwoven Bucket Hat",
    category: "Accessories",
    subcategory: "Hats",
    price: 1099,
    oldPrice: null,
    badge: "Limited",
    isNew: false,
    colors: [
      { name: "Tan",   hex: "#C8B49A" },
      { name: "Cream", hex: "#F0EAD6" }
    ],
    sizes: ["S/M","L/XL"],
    unavailSizes: [],
    rating: 4.8,
    reviews: 22,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=600&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80"
    ],
    description: "Handwoven from natural raffia grass by artisans in Tamil Nadu. Wide brim provides excellent sun protection. Inner cotton sweatband. The limited colourway makes each hat unique."
  },
  {
    id: 15,
    name: "Embroidered Kurta Set",
    category: "Women",
    subcategory: "Kurtas",
    price: 5499,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Cream", hex: "#F0EAD6" },
      { name: "Sage",  hex: "#8B9E8A" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: [],
    rating: 4.9,
    reviews: 19,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80",
      "https://images.unsplash.com/photo-1592669241067-2f49d4de0e91?w=600&q=80"
    ],
    description: "A full kurta-palazzo set featuring intricate Chikankari hand embroidery from Lucknow. 100% mulmul cotton with delicate threadwork at the neckline and cuffs. Comes with matching dupatta."
  },
  {
    id: 16,
    name: "Linen Jogger Pants",
    category: "Men",
    subcategory: "Trousers",
    price: 2599,
    oldPrice: null,
    badge: null,
    isNew: false,
    colors: [
      { name: "Cream",      hex: "#F0EAD6" },
      { name: "Tan",        hex: "#C8B49A" },
      { name: "Dark Brown", hex: "#3D2B1F" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: [],
    rating: 4.6,
    reviews: 47,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80"
    ],
    description: "Relaxed linen jogger pants with a tapered ankle and soft elasticated waistband. Drawstring closure and deep side pockets. Goes from morning yoga to evening strolls without missing a beat."
  },
  {
    id: 17,
    name: "Printed Maxi Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 4499,
    oldPrice: 5299,
    badge: "Sale",
    isNew: false,
    colors: [
      { name: "Rust",  hex: "#B85C38" },
      { name: "Moss",  hex: "#6B7B5E" }
    ],
    sizes: ["XS","S","M","L","XL"],
    unavailSizes: ["XS","XL"],
    rating: 4.7,
    reviews: 66,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    ],
    description: "A sweeping maxi dress with a hand-screen-printed botanical pattern in natural ink. V-neckline, tiered skirt, and adjustable straps. The flowy crepe fabric keeps you cool all day long."
  },
  {
    id: 18,
    name: "Woven Leather Belt",
    category: "Accessories",
    subcategory: "Belts",
    price: 1499,
    oldPrice: null,
    badge: null,
    isNew: false,
    colors: [
      { name: "Tan",        hex: "#C8B49A" },
      { name: "Dark Brown", hex: "#3D2B1F" }
    ],
    sizes: ["S","M","L","XL"],
    unavailSizes: [],
    rating: 4.6,
    reviews: 31,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      "https://images.unsplash.com/photo-1611485988300-b7ef6a1766a6?w=600&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
    ],
    description: "Handbraided full-grain leather belt with a matte brass buckle. 3 cm width. The interwoven leather construction adds texture and strength. Ages beautifully to develop a rich patina."
  },
  {
    id: 19,
    name: "Linen Nehru Jacket",
    category: "Men",
    subcategory: "Jackets",
    price: 3999,
    oldPrice: null,
    badge: "Hot",
    isNew: false,
    colors: [
      { name: "Tan",        hex: "#C8B49A" },
      { name: "Dark Brown", hex: "#3D2B1F" },
      { name: "Moss",       hex: "#6B7B5E" }
    ],
    sizes: ["S","M","L","XL","XXL"],
    unavailSizes: [],
    rating: 4.9,
    reviews: 78,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80"
    ],
    description: "A classic Nehru jacket in a premium linen-cotton blend. Mandarin collar, five covered buttons, and two welt pockets. Fully lined in breathable cotton. Wears equally well over kurtas or western shirts."
  },
  {
    id: 20,
    name: "Handloom Dupatta",
    category: "Accessories",
    subcategory: "Scarves",
    price: 1799,
    oldPrice: null,
    badge: "New",
    isNew: true,
    colors: [
      { name: "Rust",  hex: "#B85C38" },
      { name: "Sage",  hex: "#8B9E8A" },
      { name: "Cream", hex: "#F0EAD6" }
    ],
    sizes: ["One Size"],
    unavailSizes: [],
    rating: 4.8,
    reviews: 15,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
      "https://images.unsplash.com/photo-1601924638867-3b84e8397798?w=600&q=80",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?w=600&q=80"
    ],
    description: "A handloom dupatta woven on traditional pit looms in Maheshwar. Soft pure cotton with a subtle geometric pattern and hand-twisted fringe border. 250 × 100 cm. A versatile everyday accessory."
  }
];
