"use client";

import { useEffect, useRef } from "react";

type MatrixRainProps = {
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  fadeOpacity?: number;
  speed?: number;
  className?: string;
};

/**
 * Classic Matrix digital-rain effect rendered on a full-screen canvas.
 * Optimized: throttled to ~30fps to keep CPU light while still smooth.
 */
export function MatrixRain({
  color = "#a855f7",
  backgroundColor = "#0a0a12",
  fontSize = 16,
  fadeOpacity = 0.06,
  speed = 33,
  className = "",
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    let rafId: number | null = null;
    let lastTime = 0;

    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFXYZ$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = new Array(columns).fill(0).map(() => Math.random() * -50);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
    };

    const draw = (time: number) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastTime < speed) return;
      lastTime = time;

      // fade trail
      ctx.fillStyle = `rgba(10, 10, 18, ${fadeOpacity})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // bright head
        if (Math.random() > 0.975) {
          ctx.fillStyle = "#ffffff";
        } else {
          ctx.fillStyle = color;
        }
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [color, backgroundColor, fontSize, fadeOpacity, speed]);

  return (
    <div
      className={`fixed inset-0 -z-10 overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="block" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,18,0.4) 70%, rgba(10,10,18,0.7) 100%)",
        }}
      />
    </div>
  );
}
