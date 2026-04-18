import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { SpiralAnimation } from "@/components/ui/spiral-animation";
import { WindowsLogo } from "@/components/WindowsLogo";
import linuxGif from "@/assets/linux-tux.gif";

export const Route = createFileRoute("/os-select")({
  component: OsSelect,
});

function OsSelect() {
  const [playing, setPlaying] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Wait 2s for spiral to settle, then slide in the OS buttons
  useEffect(() => {
    const t = setTimeout(() => setButtonsVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleWindowsClick = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 50);
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SpiralAnimation />
      </div>

      <div className="flex items-center gap-6 relative z-10">
        {/* Windows — slides in from LEFT */}
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
            onClick={handleWindowsClick}
            style={{ cursor: "pointer" }}
          >
            <span className="flex items-center gap-2.5">
              <WindowsLogo className="w-[18px] h-[18px]" />
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                Windows
              </span>
            </span>
          </HoverBorderGradient>
        </div>

        {/* Linux — slides in from RIGHT */}
        <div
          className="transition-all ease-out"
          style={{
            transitionDuration: "900ms",
            transform: buttonsVisible ? "translateX(0)" : "translateX(60vw)",
            opacity: buttonsVisible ? 1 : 0,
            willChange: "transform, opacity",
          }}
        >
          <HoverBorderGradient duration={1.2}>
            <span className="flex items-center gap-2.5">
              <img
                src={linuxGif}
                alt="Linux"
                className="w-[22px] h-[22px] object-contain"
              />
              <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">
                Linux
              </span>
            </span>
          </HoverBorderGradient>
        </div>
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center cursor-pointer"
          onClick={() => setPlaying(false)}
        >
          <video
            ref={videoRef}
            src="/windows-boot.mp4"
            className="w-full h-full object-contain"
            onEnded={handleEnded}
            playsInline
          />
        </div>
      )}
    </div>
  );
}
