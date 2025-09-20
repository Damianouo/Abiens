import Navbar from "@/components/layout/Navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <div className="h-screen">
    <div className="mx-auto flex h-screen w-full max-w-[1300px] flex-col">
      <header>
        <Navbar />
      </header>
      <main className="grid flex-1 grid-rows-[1fr_auto] overflow-y-auto px-4">
        <Outlet />
        <footer className="py-4 text-center">© 2025 Abiens</footer>
      </main>
      <TanStackRouterDevtools />
    </div>
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
