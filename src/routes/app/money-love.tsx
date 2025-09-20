import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/money-love")({
  component: MoneyLoverPage,
});

function MoneyLoverPage() {
  return <div>Hello "/money-love"!</div>;
}
