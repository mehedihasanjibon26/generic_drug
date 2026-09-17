import { Outlet } from "react-router-dom";

import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
