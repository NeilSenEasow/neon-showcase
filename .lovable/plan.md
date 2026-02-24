

# 🟢 Premium E-Commerce Frontend — Digital Agency Demo

A visual-first, dark-mode e-commerce storefront with neon green accents, glassmorphism UI, and cinematic animations. No backend — pure frontend showcase.

---

## Visual Identity
- **Dark mode** base (`#0a0a0a` backgrounds, charcoal cards)
- **Neon Green (`#39FF14`)** for CTAs, glowing borders, status indicators, and hover effects
- **Glassmorphism** (backdrop-blur + semi-transparent backgrounds) on sidebar, cards, and modals
- High-quality Unsplash placeholder images (tech wear, minimalist fashion, modern gadgets)

---

## Layout & Navigation
- **Collapsible vertical sidebar** on the left with icon-based navigation (Home, Shop, Collections, Cart) — collapses to icon-only on mobile
- **Top horizontal sub-nav** bar with search input, category links, and cart/user icons
- Responsive mobile-first design with hamburger menu fallback

---

## Page 1: Landing Page
- **Hero "Winter Prodigy" Spotlight** — large product image with floating animation, glowing green aura effect, and CTA button
- **Flash Sale Section** — countdown timer with animated digits, featured deal cards
- **New Arrivals Grid** — staggered fade-in product cards with hover zoom and quick-view trigger
- Category showcase row with glassmorphic cards

## Page 2: Collections / Shop Page
- **Product grid** with staggered entry animations
- **Static sidebar filters** (Price range, Category, Size) styled with glassmorphism
- Sort dropdown and grid/list view toggle
- Product cards with neon hover glow, price badges, and "Quick View" button

## Page 3: Product Detail Page
- **Cinematic layout** — large hero image with thumbnail gallery
- Product info: title, price, description, size selector, quantity picker
- **"Add to Cart" button** with success pulse/glow animation
- Related products carousel at bottom

---

## Interactive Components
- **Quick View Modal** — glassmorphic overlay with product preview, size select, and add-to-cart
- **Shopping Cart Drawer** — slides in from right with item list, quantity controls, subtotal, and checkout CTA (frontend-only)
- **Smooth page transitions** between routes using Framer Motion

## Animations (Framer Motion)
- Staggered grid entry animations
- Floating/levitating hero product image
- Page route transitions (fade + slide)
- Button success animations (pulse glow on add-to-cart)
- Countdown timer digit flip effect

---

## Agency Demo Badge
- Small floating badge at bottom-right: **"Digital Agency Demo Mode"** with subtle glow, always visible

---

## Technical Approach
- React + Vite + Tailwind CSS (already set up)
- Framer Motion for all animations
- React Router for page navigation
- Local state for cart management (no backend)
- Fully responsive, mobile-first

