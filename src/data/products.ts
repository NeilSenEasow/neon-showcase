export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  description: string;
  sizes: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: "winter-prodigy",
    name: "Winter Prodigy Jacket",
    price: 289,
    originalPrice: 389,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    ],
    category: "Outerwear",
    description: "Engineered for the modern explorer. The Winter Prodigy features a triple-layer insulation system with water-resistant nano-coating and adaptive thermal regulation. Minimalist design meets maximum performance.",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "Featured",
  },
  {
    id: "stealth-runner",
    name: "Stealth Runner Sneakers",
    price: 199,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    ],
    category: "Footwear",
    description: "Ultra-lightweight carbon fiber sole with adaptive cushioning. The Stealth Runner redefines what a performance sneaker can be.",
    sizes: ["7", "8", "9", "10", "11", "12"],
  },
  {
    id: "neo-backpack",
    name: "Neo Utility Backpack",
    price: 149,
    originalPrice: 189,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
    ],
    category: "Accessories",
    description: "40L capacity with magnetic quick-access compartments and integrated USB-C charging. Built from recycled ocean plastics.",
    sizes: ["One Size"],
    badge: "Sale",
  },
  {
    id: "quantum-watch",
    name: "Quantum Chrono Watch",
    price: 459,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    ],
    category: "Accessories",
    description: "Swiss movement with sapphire crystal display. 100m water resistance. The Quantum Chrono — precision reimagined.",
    sizes: ["One Size"],
  },
  {
    id: "phantom-hoodie",
    name: "Phantom Tech Hoodie",
    price: 129,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
    ],
    category: "Apparel",
    description: "Moisture-wicking graphene-infused fabric with hidden tech pockets. Seamless construction for zero-distraction comfort.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    badge: "New",
  },
  {
    id: "aero-sunglasses",
    name: "Aero Shield Sunglasses",
    price: 219,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    ],
    category: "Accessories",
    description: "Polarized titanium frames with photochromic lenses. Auto-adjusting tint technology for any light condition.",
    sizes: ["One Size"],
  },
  {
    id: "terra-boots",
    name: "Terra Tactical Boots",
    price: 279,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    ],
    category: "Footwear",
    description: "Vibram Megagrip sole with Gore-Tex lining. Built for urban exploration and trail domination.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    badge: "Sale",
  },
  {
    id: "cipher-tee",
    name: "Cipher Minimal Tee",
    price: 69,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    ],
    category: "Apparel",
    description: "100% Supima cotton with anti-microbial treatment. The perfect foundation for any tech-forward wardrobe.",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
];

export const categories = ["All", "Outerwear", "Footwear", "Accessories", "Apparel"];
