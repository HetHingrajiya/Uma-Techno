import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const UmaApp = lazy(() => import("@/UmaApp"));

export const Route = createFileRoute("/")({
  ssr: false,
  component: () => (
    <Suspense fallback={null}>
      <UmaApp />
    </Suspense>
  ),
});