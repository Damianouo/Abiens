import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/merch")({
  component: MerchPage,
});

function MerchPage() {
  return <div>Hello "/merch"!</div>;
}
