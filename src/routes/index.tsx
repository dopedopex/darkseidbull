import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import bullPills from "@/assets/bull-pills.png";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<"blue" | "red" | null>(null);

  const handleRootAccess = () => {
    navigate({ to: "/os-select" });
  };

  const handleUserMode = () => {
    // Coming soon
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      <img
        src={bullPills}
        alt="Choose your path"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable={false}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      <div className="absolute inset-0 z-10">
        {/* BLUE PILL — User Mode (positioned exactly on the blue pill in the image) */}
        <button
          type="button"
          onClick={handleUserMode}
          onMouseEnter={() => setHovered("blue")}
          onMouseLeave={() => setHovered(null)}
          aria-label="User Mode"
          className="group absolute rounded-full"
          style={{
            left: "28%",
            top: "62%",
            width: "5.5%",
            aspectRatio: "1",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
        >
          {/* Glow ring — only renders on hover */}
          {hovered === "blue" && (
            <span
              className="absolute inset-0 rounded-full pointer-events-none animate-in fade-in zoom-in-75 duration-300"
              style={{
                boxShadow:
                  "0 0 40px 10px rgba(59,130,246,0.7), 0 0 80px 20px rgba(59,130,246,0.4)",
              }}
            />
          )}
          <span
            className={`absolute left-1/2 -translate-x-1/2 -top-14 px-4 py-2 rounded-full bg-blue-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-blue-300/40 shadow-lg shadow-blue-500/40 transition-all duration-300 ${
              hovered === "blue"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            User Mode
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-blue-500/90 border-r border-b border-blue-300/40" />
          </span>
        </button>

        {/* RED PILL — Root Access */}
        <button
          type="button"
          onClick={handleRootAccess}
          onMouseEnter={() => setHovered("red")}
          onMouseLeave={() => setHovered(null)}
          aria-label="Root Access"
          className="group absolute"
          style={{
            right: "23%",
            top: "55%",
            width: "8%",
            aspectRatio: "1",
            transform: "translate(50%, -50%)",
          }}
        >
          {/* Glow ring — only renders on hover */}
          {hovered === "red" && (
            <span
              className="absolute inset-0 rounded-full pointer-events-none animate-in fade-in zoom-in-75 duration-300"
              style={{
                boxShadow:
                  "0 0 40px 10px rgba(239,68,68,0.7), 0 0 80px 20px rgba(239,68,68,0.4)",
              }}
            />
          )}
          <span
            className={`absolute left-1/2 -translate-x-1/2 -top-14 px-4 py-2 rounded-full bg-red-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-red-300/40 shadow-lg shadow-red-500/40 transition-all duration-300 ${
              hovered === "red"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Root Access
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-red-500/90 border-r border-b border-red-300/40" />
          </span>
        </button>
      </div>

      {/* Bottom hint — vaporize text effect */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-[320px] h-[40px]">
        <VaporizeTextCycle
          texts={["Choose your pill"]}
          font={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            fontWeight: 500,
          }}
          color="rgb(255, 255, 255)"
          spread={4}
          density={6}
          animation={{
            vaporizeDuration: 2.2,
            fadeInDuration: 1.4,
            waitDuration: 1.2,
          }}
          direction="left-to-right"
          alignment="center"
          tag={Tag.P}
        />
      </div>
    </div>
  );
}
