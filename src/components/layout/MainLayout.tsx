import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { TopNav } from "./TopNav";
import { CartDrawer } from "@/components/CartDrawer";
import { DemoBadge } from "@/components/DemoBadge";
import { cn } from "@/lib/utils";

export function MainLayout() {
  const [sidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          "ml-56 max-md:ml-16"
        )}
      >
        <TopNav />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <CartDrawer />
      <DemoBadge />
    </div>
  );
}
