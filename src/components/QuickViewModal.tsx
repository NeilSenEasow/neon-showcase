import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    const size = selectedSize || product.sizes[0];
    addItem(product, size);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass neon-border rounded-2xl max-w-lg w-full overflow-hidden"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full glass p-2 text-foreground hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
            {product.badge && (
              <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                {product.badge}
              </span>
            )}
          </div>

          <div className="p-6 space-y-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
              <h3 className="text-xl font-bold mt-1">{product.name}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold text-primary">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border px-3 py-1.5 text-sm transition-all ${
                    selectedSize === size
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <motion.button
              onClick={handleAdd}
              whileTap={{ scale: 0.95 }}
              className={`w-full rounded-lg py-3 text-sm font-bold transition-all ${
                added
                  ? "bg-primary neon-glow text-primary-foreground"
                  : "bg-primary text-primary-foreground hover:neon-glow"
              }`}
            >
              {added ? "✓ Added!" : "Add to Cart"}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
