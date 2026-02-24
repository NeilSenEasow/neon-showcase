import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView?: () => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <div className="group glass rounded-xl overflow-hidden transition-all duration-300 hover:neon-border">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
            {product.badge}
          </span>
        )}

        {/* Quick View */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.05 }}
          onClick={onQuickView}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" /> Quick View
        </motion.button>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-semibold hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
