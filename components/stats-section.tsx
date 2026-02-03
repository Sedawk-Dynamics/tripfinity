"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  delay?: number
}

function StatItem({ value, label, suffix = "", delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        delay: delay,
        ease: "easeOut",
      })
      return controls.stop
    }
  }, [isInView, count, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <motion.div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37] mb-2">
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </motion.div>
      <p className="text-base md:text-lg text-[#D4AF37] font-medium">{label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F1E8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatItem value={11} label="Years of Experience" delay={0} />
          <StatItem value={25000} label="Happy Travelers" delay={0.1} />
          <StatItem value={120} label="Desstination Covered" delay={0.2} />
          <StatItem value={150} label="Global Partners" delay={0.3} />
        </div>
      </div>
    </section>
  )
}
