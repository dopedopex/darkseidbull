import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WindowsLogo } from "@/components/WindowsLogo";
import linuxGif from "@/assets/linux-tux.gif";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleWindowsClick = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 50);
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(50,117,248,0.04) 0%, transparent 65%)'
      }} />

      <div className="flex items-center gap-6 relative z-10">
        {/* Windows Button */}
        <HoverBorderGradient duration={1.2} onClick={handleWindowsClick} style={{ cursor: 'pointer' }}>
          <span className="flex items-center gap-2.5">
            <WindowsLogo className="w-[18px] h-[18px]" />
            <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">Windows</span>
          </span>
        </HoverBorderGradient>

        {/* Linux Button */}
        <HoverBorderGradient duration={1.2}>
          <span className="flex items-center gap-2.5">
            <img
              src={linuxGif}
              alt="Linux"
              className="w-[22px] h-[22px] object-contain"
            />
            <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">Linux</span>
          </span>
        </HoverBorderGradient>
      </div>

      {/* Fullscreen Windows boot video overlay */}
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
