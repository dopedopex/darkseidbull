import { motion } from 'framer-motion'

export function WindowsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Top-left */}
      <motion.rect
        rx="0.5"
        fill="#3B9BFF"
        initial={{ x: 5, y: 5, width: 10, height: 10 }}
        animate={{ x: 1, y: 1, width: 8, height: 8 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
      {/* Top-right */}
      <motion.rect
        rx="0.5"
        fill="#3B9BFF"
        initial={{ x: 5, y: 5, width: 10, height: 10, opacity: 0 }}
        animate={{ x: 11, y: 1, width: 8, height: 8, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
      {/* Bottom-left */}
      <motion.rect
        rx="0.5"
        fill="#3B9BFF"
        initial={{ x: 5, y: 5, width: 10, height: 10, opacity: 0 }}
        animate={{ x: 1, y: 11, width: 8, height: 8, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
      {/* Bottom-right */}
      <motion.rect
        rx="0.5"
        fill="#3B9BFF"
        initial={{ x: 5, y: 5, width: 10, height: 10, opacity: 0 }}
        animate={{ x: 11, y: 11, width: 8, height: 8, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      />
    </svg>
  )
}
