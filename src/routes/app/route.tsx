import AppLayout from "@/components/layouts/AppLayout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/app")({
  component: HomePage,
});

function HomePage() {
  return (
    <AppLayout>
      <h1 className="text-4xl">Abiens</h1>
      <Outlet />
    </AppLayout>
  );
}
