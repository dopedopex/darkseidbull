import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

export const Route = createFileRoute("/mode-select")({
  component: ModeSelect,
});

function ModeSelect() {
  const [buttonsVisible, setButtonsVisible] = useState(false);

  // Same 2s delay as os-select so spiral settles first
  useEffect(() => {
    const t = setTimeout(() => setButtonsVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const goStatic = () => {
    window.location.href = "/portfolio?anim=false";
  };

  const goAnimated = () => {
    window.location.href = "/portfolio";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="flex items-center gap-6 relative z-10">
        {/* View without animation — slides in from LEFT */}
        <div
          className="transition-all ease-out"
          style={{
            transitionDuration: "900ms",
            transform: buttonsVisible ? "translateX(0)" : "translateX(-60vw)",
            opacity: buttonsVisible ? 1 : 0,
            willChange: "transform, opacity",
          }}
        >
          <HoverBorderGradient
            duration={1.2}
            onClick={goStatic}
            style={{ cursor: "pointer" }}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-lg">⚡</span>
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                View without animation
              </span>
            </span>
          </HoverBorderGradient>
        </div>

        {/* View with animation — slides in from RIGHT */}
        <div
          className="transition-all ease-out"
          style={{
            transitionDuration: "900ms",
            transform: buttonsVisible ? "translateX(0)" : "translateX(60vw)",
            opacity: buttonsVisible ? 1 : 0,
            willChange: "transform, opacity",
          }}
        >
          <HoverBorderGradient
            duration={1.2}
            onClick={goAnimated}
            style={{ cursor: "pointer" }}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-lg">✨</span>
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                View with animation
              </span>
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}