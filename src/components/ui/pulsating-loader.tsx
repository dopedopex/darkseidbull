import { motion } from "framer-motion";

interface RippleLoaderProps {
  color?: "red" | "blue";
}

export default function RippleLoader({ color = "red" }: RippleLoaderProps) {
  const colorClass = color === "blue" ? "bg-blue-500" : "bg-red-500";
  const glowColor = color === "blue" ? "rgba(59,130,246,0.6)" : "rgba(239,68,68,0.6)";

  return (
    <div className="flex items-center justify-center space-x-1">
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          className={`h-8 w-2 rounded-full ${colorClass}`}
          style={{ boxShadow: `0 0 8px 2px ${glowColor}` }}
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            scaleX: [1, 0.8, 1],
            translateY: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.07,
          }}
        />
      ))}
    </div>
  );
}
