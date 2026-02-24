import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Product } from "@/data/products";

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 11, minutes: 42, seconds: 37 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex gap-3">
      {[
        { label: "HRS", value: pad(time.hours) },
        { label: "MIN", value: pad(time.minutes) },
        { label: "SEC", value: pad(time.seconds) },
      ].map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="glass neon-border rounded-lg px-4 py-3 text-2xl font-bold tabular-nums text-primary md:text-3xl">
            {unit.value}
          </div>
          <span className="mt-1 text-[10px] tracking-widest text-muted-foreground">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Index() {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const heroProduct = products[0];
  const newArrivals = products.slice(1, 7);
  const flashDeals = products.filter((p) => p.originalPrice);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Zap className="h-3 w-3" /> Featured Product
            </span>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Winter<br />
              <span className="neon-text">Prodigy</span>
            </h1>
            <p className="max-w-md text-muted-foreground leading-relaxed">
              {heroProduct.description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">${heroProduct.price}</span>
              {heroProduct.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">${heroProduct.originalPrice}</span>
              )}
            </div>
            <div className="flex gap-3">
              <Link
                to={`/product/${heroProduct.id}`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:neon-glow"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setQuickView(heroProduct)}
                className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                Quick View
              </button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-1"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px]" />
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={heroProduct.image}
              alt={heroProduct.name}
              className="relative z-10 mx-auto w-full max-w-md rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Flash Sale */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Flash Sale</h2>
              <p className="text-sm text-muted-foreground mt-1">Limited time deals — grab them before they're gone</p>
            </div>
            <CountdownTimer />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flashDeals.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ProductCard product={product} onQuickView={() => setQuickView(product)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">New Arrivals</h2>
              <p className="text-sm text-muted-foreground mt-1">Fresh drops for the forward-thinking</p>
            </div>
            <Link
              to="/collections"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newArrivals.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ProductCard product={product} onQuickView={() => setQuickView(product)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Showcase */}
      <section className="px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold mb-8 md:text-3xl">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["Outerwear", "Footwear", "Accessories", "Apparel"].map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  to="/collections"
                  className="group flex flex-col items-center justify-center gap-3 rounded-xl glass neon-border p-8 text-center transition-all hover:bg-primary/5"
                >
                  <span className="text-lg font-semibold group-hover:text-primary transition-colors">{cat}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </div>
  );
}
