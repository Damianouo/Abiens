import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/")({
  component: HomePage,
});

function HomePage() {
  return <div>Hello, this is home page!</div>;
}
