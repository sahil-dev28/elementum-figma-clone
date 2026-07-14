import { createFileRoute } from "@tanstack/react-router";

import { Home } from "@/module/home/pages/home";

export const Route = createFileRoute("/")({
  component: Home,
});
