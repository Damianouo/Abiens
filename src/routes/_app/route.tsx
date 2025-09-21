import Navbar from "@/components/layouts/Navbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createFileRoute("/_app")({
  component: AppLayoutRoute,
});

function AppLayoutRoute() {
  return (
    <div className="h-screen">
      <div className="mx-auto flex h-screen w-full max-w-[1300px] flex-col">
        <header className="px-8 py-12">
          <Navbar />
        </header>
        <main className="grid flex-1 grid-rows-[1fr_auto] overflow-y-auto px-8">
          <Outlet />
          <footer className="py-4 text-center">© 2025 Abiens</footer>
        </main>
        <TanStackRouterDevtools />
      </div>
    </div>
  );
}
