import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terminal")({
  component: () => <div style={{color: "white", background: "black", height: "100vh", padding: "20px"}}>Terminal Test Page</div>,
});