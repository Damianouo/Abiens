import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/money-love")({
  component: MoneyLoverPage,
});

function MoneyLoverPage() {
  return <div>Hello "/money-love"!</div>;
}
