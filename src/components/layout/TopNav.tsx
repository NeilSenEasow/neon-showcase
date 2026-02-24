import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

const categories = ["New Arrivals", "Best Sellers", "Tech Wear", "Accessories"];

export function TopNav() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-[hsl(var(--glass-border))] glass px-6">
      {/* Category Links */}
      <nav className="hidden items-center gap-6 md:flex">
        {categories.map((cat) => (
          <Link
            key={cat}
            to="/collections"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {cat}
          </Link>
        ))}
      </nav>

      {/* Search */}
      <div className="flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-32 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none md:w-48"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          <User className="h-5 w-5" />
        </button>
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
