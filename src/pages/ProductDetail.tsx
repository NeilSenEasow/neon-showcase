import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex items-center justify-center p-20">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const handleAdd = () => {
    addItem(product, selectedSize || product.sizes[0], quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="space-y-16 p-6 pb-20">
      {/* Back */}
      <Link
        to="/collections"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Collections
      </Link>

      {/* Product */}
      <div className="mx-auto max-w-6xl flex flex-col gap-10 lg:flex-row">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-4"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="relative z-10 w-full aspect-square object-cover rounded-2xl"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`h-20 w-20 rounded-lg overflow-hidden border-2 transition-all ${
                    i === selectedImage ? "border-primary neon-glow" : "border-border opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 space-y-6"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{product.category}</p>
            <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">{product.name}</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">{product.description}</p>

          {/* Size */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                    selectedSize === size
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quantity</h3>
            <div className="inline-flex items-center gap-4 rounded-lg border border-border px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-muted-foreground hover:text-foreground"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <motion.button
            onClick={handleAdd}
            whileTap={{ scale: 0.95 }}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-4 text-sm font-bold transition-all ${
              added
                ? "bg-primary neon-glow text-primary-foreground animate-pulse-neon"
                : "bg-primary text-primary-foreground hover:neon-glow"
            }`}
          >
            {added ? (
              <>
                <Check className="h-5 w-5" /> Added to Cart!
              </>
            ) : (
              <>
                <ShoppingCart className="h-5 w-5" /> Add to Cart — ${product.price * quantity}
              </>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-6xl">
        <h2 className="mb-6 text-2xl font-bold">You May Also Like</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
