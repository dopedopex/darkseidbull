import React, { useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Element = 'button',
  duration = 2,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType
    containerClassName?: string
    className?: string
    duration?: number
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false)
  const rotationRef = useRef(0)
  const animFrameRef = useRef<number>(0)
  const gradientRef = useRef<HTMLDivElement>(null)
  const lastTimeRef = useRef<number>(0)

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp
    const delta = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp

    // Smooth continuous rotation: 360deg per `duration` seconds
    rotationRef.current = (rotationRef.current + (delta / (duration * 1000)) * 360) % 360

    if (gradientRef.current) {
      gradientRef.current.style.transform = `rotate(${rotationRef.current}deg)`
    }

    animFrameRef.current = requestAnimationFrame(animate)
  }, [duration])

  const startAnimation = useCallback(() => {
    if (!animFrameRef.current) {
      lastTimeRef.current = 0
      animFrameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  const stopAnimation = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current)
      animFrameRef.current = 0
    }
  }, [])

  // Start on mount, stop on unmount
  React.useEffect(() => {
    startAnimation()
    return stopAnimation
  }, [startAnimation, stopAnimation])

  return (
    <Element
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        'relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center overflow-hidden rounded-full border border-transparent bg-black/40 box-decoration-clone p-px backdrop-blur-sm transition duration-500 hover:bg-black/60',
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          'z-10 w-auto rounded-[inherit] bg-[#0a0a0a] px-5 py-2.5',
          className
        )}
      >
        {children}
      </div>

      {/* Rotating gradient layer — GPU accelerated via transform */}
      <div
        ref={gradientRef}
        className="absolute z-0 pointer-events-none"
        style={{
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          background: hovered
            ? 'conic-gradient(from 0deg, transparent 0deg, #3275F8 60deg, #5a9aff 120deg, #3275F8 180deg, transparent 240deg, transparent 360deg)'
            : 'conic-gradient(from 0deg, transparent 0deg, #3275F8 40deg, transparent 80deg, transparent 360deg)',
          filter: 'blur(4px)',
          willChange: 'transform',
          transition: 'background 0.4s ease',
        }}
      />

      <div className="absolute inset-[2px] z-[1] flex-none rounded-[100px] bg-[#0a0a0a]" />
    </Element>
  )
}
