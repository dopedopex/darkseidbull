import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bullPills from "@/assets/bull-pills.png";
import { SpecialText } from "@/components/ui/special-text";
import RippleLoader from "@/components/ui/pulsating-loader";

export const Route = createFileRoute("/")({
  component: Index,
});

type Screen = "home" | "loading-red" | "loading-blue";

function Index() {
  const navigate = useNavigate();
  const [screen, setScreen] = useState<Screen>("home");
  const [hovered, setHovered] = useState<"blue" | "red" | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [textKey, setTextKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTextKey((k) => k + 1), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (screen === "loading-red") {
      const t = setTimeout(() => navigate({ to: "/os-select" }), 3000);
      return () => clearTimeout(t);
    }
    if (screen === "loading-blue") {
      const t = setTimeout(() => navigate({ to: "/portfolio" }), 3000);
      return () => clearTimeout(t);
    }
  }, [screen]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-black"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
    >
      <AnimatePresence mode="wait">

        {/* HOME SCREEN */}
        {screen === "home" && (
          <motion.div
            key="home"
            className="relative w-full min-h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* IMAGE */}
            <img
              src={bullPills}
              alt="Choose your path"
              className="absolute inset-0 w-full h-full select-none pointer-events-none"
              style={{
                objectFit: isMobile ? "contain" : "cover",
                objectPosition: isMobile ? "40% center" : "center center",
              }}
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

            {/* DESKTOP CURSOR GLOW */}
            {hovered && (
              <span
                className="pointer-events-none fixed z-50 rounded-full"
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                  width: 60,
                  height: 60,
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

            {/* PILL BUTTONS */}
            <div className="absolute inset-0 z-10">
                {/* BLUE PILL */}
                <button
                  type="button"
                  onClick={() => setScreen("loading-blue")}
                  onMouseEnter={() => setHovered("blue")}
                  onMouseLeave={() => setHovered(null)}
                  aria-label="User Mode"
                  className="absolute rounded-full"
                  style={{
                    left: "29%",
                    top: "64.4%",
                    width: "5%",
                    height: "6%",
                    transform: "translate(-50%, -50%)",
                    cursor: "none",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -top-10 px-4 py-2 rounded-full bg-blue-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-blue-300/40 shadow-lg shadow-blue-500/40 transition-all duration-300 ${
                      hovered === "blue"
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    User Mode
                  </span>
                </button>

                {/* RED PILL */}
                <button
                  type="button"
                  onClick={() => setScreen("loading-red")}
                  onMouseEnter={() => setHovered("red")}
                  onMouseLeave={() => setHovered(null)}
                  aria-label="Root Access"
                  className="absolute rounded-full"
                  style={{
                    left: "68.5%",
                    top: "64.4%",
                    width: "5%",
                    height: "6%",
                    transform: "translate(-50%, -50%)",
                    cursor: "none",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -top-10 px-4 py-2 rounded-full bg-red-500/90 text-white text-xs md:text-sm font-medium whitespace-nowrap backdrop-blur-md border border-red-300/40 shadow-lg shadow-red-500/40 transition-all duration-300 ${
                      hovered === "red"
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    Root Access
                  </span>
                </button>
            </div>



            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10" >
              <SpecialText key={textKey} speed={16} className="text-xl md:text-3xl text-white tracking-widest">
                Choose your pill
              </SpecialText>
            </div>
          </motion.div>
        )}

        {/* RED LOADING */}
        {screen === "loading-red" && (
          <motion.div
            key="loading-red"
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.15) 0%, transparent 70%)" }} />
            <motion.div className="absolute rounded-full border border-red-500/20" style={{ width: 320, height: 320 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute rounded-full border border-red-500/10" style={{ width: 480, height: 480 }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
            <motion.div className="flex flex-col items-center gap-10 z-10"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <RippleLoader color="red" />
              <motion.p className="text-red-400 text-sm tracking-[0.3em] uppercase font-mono"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                Initializing Root Access
              </motion.p>
            </motion.div>
          </motion.div>
        )}

        {/* BLUE LOADING */}
        {screen === "loading-blue" && (
          <motion.div
            key="loading-blue"
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
            <motion.div className="absolute rounded-full border border-blue-500/20" style={{ width: 320, height: 320 }}
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute rounded-full border border-blue-500/10" style={{ width: 480, height: 480 }}
              animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
            <motion.div className="flex flex-col items-center gap-10 z-10"
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <RippleLoader color="blue" />
              <motion.p className="text-blue-400 text-sm tracking-[0.3em] uppercase font-mono"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                Initializing User Mode
              </motion.p>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
