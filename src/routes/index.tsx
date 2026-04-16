import { createFileRoute } from "@tanstack/react-router";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WindowsLogo } from "@/components/WindowsLogo";
import linuxGif from "@/assets/linux-tux.gif";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(50,117,248,0.04) 0%, transparent 65%)'
      }} />

      <div className="flex items-center gap-6 relative z-10">
        {/* Windows Button */}
        <HoverBorderGradient duration={1.2}>
          <span className="flex items-center gap-2.5">
            <WindowsLogo className="w-[18px] h-[18px]" />
            <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">Windows</span>
          </span>
        </HoverBorderGradient>

        {/* Linux Button */}
        <HoverBorderGradient duration={1.2}>
          <span className="flex items-center gap-2.5">
            <img
              src="https://media1.giphy.com/media/EfHmlClbuNAGc/giphy.gif"
              alt="Linux"
              className="w-[22px] h-[22px] object-contain rounded-sm"
            />
            <span className="text-[13px] text-[#a0a0a0] font-normal tracking-wide">Linux</span>
          </span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}
