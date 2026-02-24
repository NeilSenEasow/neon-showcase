import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-lg font-semibold">Cart ({totalItems})</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 && (
                <p className="text-center text-muted-foreground py-12">Your cart is empty</p>
              )}
              {items.map((item) => (
                <div
                  key={item.product.id + item.size}
                  className="flex gap-4 rounded-lg border border-border p-3"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="rounded p-1 hover:bg-accent"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="rounded p-1 hover:bg-accent"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-primary">
                          ${item.product.price * item.quantity}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id, item.size)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 space-y-4">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="neon-text">${totalPrice}</span>
                </div>
                <button className="w-full rounded-lg bg-primary py-3 text-sm font-bold text-primary-foreground transition-all hover:neon-glow">
                  Checkout — ${totalPrice}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
