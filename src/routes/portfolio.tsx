import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center">
      <p className="text-white font-mono">Building...</p>
    </div>
  );
}
