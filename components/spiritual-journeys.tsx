"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const journeys = [
  {
    id: 1,
    name: "Char Dham Yatra",
    price: "₹49,999.00",
    image: "/char-dham-four-temples-collage-uttarakhand.jpg",
    tags: ["Packages", "Spiritual Journeys"],
  },
  {
    id: 2,
    name: "Kedarnath Yatra",
    price: "₹24,999.00",
    image: "/kedarnath-temple-snow-mountains.jpg",
    tags: ["Packages", "Spiritual Journeys"],
  },
  {
    id: 3,
    name: "Vaishno Devi",
    price: "₹18,999.00",
    image: "/vaishno-devi-temple-hillside-night.jpg",
    tags: ["Packages", "Spiritual Journeys"],
  },
  {
    id: 4,
    name: "Varanasi – Kashi Darshan",
    price: "₹18,999.00",
    image: "/varanasi-ganges-boats-ghats-birds.jpg",
    tags: ["Packages", "Spiritual Journeys"],
  },
]

export function SpiritualJourneys() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Spiritual Journeys</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-neon-blue mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journeys.map((journey, idx) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={journey.image || "/placeholder.svg"}
                  alt={journey.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{journey.name}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {journey.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-3xl font-bold text-gold">{journey.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
