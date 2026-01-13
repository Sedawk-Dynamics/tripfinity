"use client"

import { motion } from "framer-motion"

export function CuratedJourneys() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Curated Journeys &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Exc
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="inline-block"
              >
                lusive Desti
              </motion.span>
              <span className="text-gray-500">nations</span>
            </motion.span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            {/* Animated line before text */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[2px] w-32 bg-gradient-to-r from-[#FFD700] to-transparent mb-6 origin-left"
            />

            <p className="text-lg md:text-xl text-white/90 max-w-5xl leading-relaxed">
              Every journey deserves intention and detail. From inspiring landscapes to immersive experiences,
              <span className="text-white/60">
                {" "}
                well-designed travel brings comfort, discovery, and memories together — creating trips that feel
                personal, seamless, and unforgettable.
              </span>
            </p>

            {/* Decorative animated elements */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#00D9FF]/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
