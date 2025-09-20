import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/merch")({
  component: MerchPage,
});

function MerchPage() {
  return <div>Hello "/merch"!</div>;
}
