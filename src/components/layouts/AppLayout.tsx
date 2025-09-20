import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="h-screen">
      <div className="mx-auto flex h-screen w-full max-w-[1300px] flex-col">
        <header>
          <Navbar />
        </header>
        <main className="grid flex-1 grid-rows-[1fr_auto] overflow-y-auto px-4">
          {children}
          <footer className="py-4 text-center">© 2025 Abiens</footer>
        </main>
        <TanStackRouterDevtools />
      </div>
    </div>
  );
};

export default AppLayout;
