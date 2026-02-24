import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Grid3X3, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: ShoppingBag, label: "Shop", to: "/collections" },
  { icon: Grid3X3, label: "Collections", to: "/collections" },
];

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-screen flex-col glass border-r border-[hsl(var(--glass-border))] transition-all duration-300",
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-[hsl(var(--glass-border))] px-4">
        {!collapsed && (
          <span className="text-lg font-bold tracking-wider neon-text">NEXUS</span>
        )}
        {collapsed && <span className="text-lg font-bold neon-text">N</span>}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-1 p-3">
        {navItems.map((item) => (
          <NavLink
            key={item.to + item.label}
            to={item.to}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
                "hover:bg-accent hover:text-foreground",
                isActive
                  ? "bg-primary/10 text-primary neon-border"
                  : "text-muted-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}

        {/* Cart Button */}
        <button
          onClick={() => setIsCartOpen(true)}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground"
        >
          <div className="relative shrink-0">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </div>
          {!collapsed && <span>Cart</span>}
        </button>
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-12 items-center justify-center border-t border-[hsl(var(--glass-border))] text-muted-foreground transition-colors hover:text-foreground"
      >
        {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </button>
    </aside>
  );
}
