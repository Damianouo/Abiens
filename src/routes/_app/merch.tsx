import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/merch")({
  component: MerchPage,
});

function MerchPage() {
  return <div>Hello "/merch"!</div>;
}
