import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import bullPills from "@/assets/bull-pills.png";
import { SpecialText } from "@/components/ui/special-text";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<"blue" | "red" | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextKey((k) => k + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleRootAccess = () => navigate({ to: "/os-select" });
  const handleUserMode = () => {};
  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <img
        src={bullPills}
        alt="Choose your path"
        className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {hovered && (
        <span
          className="pointer-events-none fixed z-50 rounded-full"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            width: 80,
            height: 80,
            transform: "translate(-50%, -50%)",
            transition: "left 0.03s linear, top 0.03s linear",
            boxShadow:
              hovered === "blue"
                ? "0 0 40px 20px rgba(59,130,246,0.8), 0 0 80px 40px rgba(59,130,246,0.4)"
                : "0 0 40px 20px rgba(239,68,68,0.8), 0 0 80px 40px rgba(239,68,68,0.4)",
            background:
              hovered === "blue"
                ? "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(239,68,68,0.3) 0%, transparent 70%)",
          }}
        />
      )}

      <div className="absolute inset-0 z-10">
        {/* BLUE HAND — full hand clickable area */}
        <button
          type="button"
          onClick={handleUserMode}
          onMouseEnter={() => setHovered("blue")}
          onMouseLeave={() => setHovered(null)}
          aria-label="User Mode"
          className="absolute"
          style={{
            left: "5%",
            top: "38%",
            width: "32%",
            height: "52%",
            cursor: "none",
            background: "transparent",
            border: "none",
          }}
        >
          <span
            className={`absolute left-1/2 -translate-x-1/2 top-4 px-4 py-2 rounded-full bg-blue-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-blue-300/40 shadow-lg shadow-blue-500/40 transition-all duration-300 ${
              hovered === "blue"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            User Mode
          </span>
        </button>

        {/* RED HAND — full hand clickable area */}
        <button
          type="button"
          onClick={handleRootAccess}
          onMouseEnter={() => setHovered("red")}
          onMouseLeave={() => setHovered(null)}
          aria-label="Root Access"
          className="absolute"
          style={{
            left: "63%",
            top: "38%",
            width: "32%",
            height: "52%",
            cursor: "none",
            background: "transparent",
            border: "none",
          }}
        >
          <span
            className={`absolute left-1/2 -translate-x-1/2 top-4 px-4 py-2 rounded-full bg-red-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-red-300/40 shadow-lg shadow-red-500/40 transition-all duration-300 ${
              hovered === "red"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Root Access
          </span>
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <SpecialText
          key={textKey}
          speed={16}
          className="text-3xl text-white tracking-widest"
        >
          Choose your pill
        </SpecialText>
      </div>
    </div>
  );
}
