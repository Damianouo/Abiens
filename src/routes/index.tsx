import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="App">
      <h1 className="text-primary text-3xl font-bold">Abiens</h1>
    </div>
  );
}
