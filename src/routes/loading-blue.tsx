import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import RippleLoader from "@/components/ui/pulsating-loader";

export const Route = createFileRoute("/loading-blue")({
  component: LoadingBlue,
});

function LoadingBlue() {
  const navigate = useNavigate();
  const cameFromApp = useRef(window.history.state?.idx > 0);

  useEffect(() => {
    if (!cameFromApp.current) {
      navigate({ to: "/", replace: true });
      return;
    }
    const timer = setTimeout(() => {
      navigate({ to: "/portfolio", replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 70%)" }}
      />
      <motion.div
        className="absolute rounded-full border border-blue-500/20"
        style={{ width: 320, height: 320 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full border border-blue-500/10"
        style={{ width: 480, height: 480 }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.div
        className="flex flex-col items-center gap-10 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RippleLoader color="blue" />
        <motion.p
          className="text-blue-400 text-sm tracking-[0.3em] uppercase font-mono"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Initializing User Mode
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
