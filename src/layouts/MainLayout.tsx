import { Outlet } from "react-router-dom";
import Header from "@/components/shared/Header/Header";

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
