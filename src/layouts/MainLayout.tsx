import { Outlet } from "react-router-dom";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import { CartProvider } from "@/contexts/CartContext";

export default function MainLayout() {
  return (
    <CartProvider>
      <div className="min-h-dvh bg-white">
        <div className="sticky top-0 z-[100] w-full">
          <Header />
        </div>

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
