'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function OurAssociations() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Associations
        </h2>
        <p className="text-lg text-amber-300 mb-8">
          Partnering with the world’s finest hospitality brands
        </p>

        {/* Logo Card */}
        <div className="inline-block p-6 rounded-2xl 
                        bg-gradient-to-b from-slate-800 to-slate-900 
                        border border-amber-400/30 shadow-xl">
          <div className="bg-white rounded-xl p-6 flex items-center justify-center">
            <div className="relative w-64 h-32">
              <Image
                src="/oberoi-marrakech-logo.png"
                alt="The Oberoi Marrakech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
