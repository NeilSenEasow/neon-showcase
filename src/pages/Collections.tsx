import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product } from "@/data/products";

const priceRanges = ["All", "Under $100", "$100 - $200", "$200 - $300", "$300+"];
const sizes = ["XS", "S", "M", "L", "XL"];

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [gridView, setGridView] = useState(true);

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex gap-0 md:gap-6 p-6">
      {/* Sidebar Filters */}
      <aside className="hidden w-56 shrink-0 space-y-8 md:block">
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </h3>
        </div>

        {/* Category */}
        <div className="glass rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Category</h4>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Range */}
        <div className="glass rounded-xl p-4 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Price Range</h4>
          {priceRanges.map((range) => (
            <button
              key={range}
              className="block w-full text-left rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            >
              {range}
            </button>
          ))}
        </div>

        {/* Size */}
        <div className="glass rounded-xl p-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Size</h4>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className="rounded-md border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary transition-all"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <div className="flex-1">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Collections</h1>
            <p className="text-sm text-muted-foreground mt-1">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setGridView(true)}
              className={`rounded-lg p-2 transition-colors ${gridView ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`rounded-lg p-2 transition-colors ${!gridView ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 ${gridView ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProductCard product={product} onQuickView={() => setQuickView(product)} />
            </motion.div>
          ))}
        </div>
      </div>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
