"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const destinations = [
  {
    id: 1,
    name: "Alberta, Canada",
    image: "/alberta-canada-mountains-glacier.jpg",
    nights: 3,
    price: "5000 Rs.",
  },
  {
    id: 2,
    name: "Kashmir",
    image: "/kashmir-mountains-snow-valley.jpg",
    nights: 4,
    price: "7999 Rs.",
  },
  {
    id: 3,
    name: "Kashi",
    image: "/varanasi-kashi-ghats-temples.jpg",
    nights: 3,
    price: "4999 Rs.",
  },
  {
    id: 4,
    name: "Kerala",
    image: "/kerala-backwaters-boat-palms.jpg",
    nights: 5,
    price: "6999 Rs.",
  },
  {
    id: 5,
    name: "Goa",
    image: "/goa-beach-sunset-palms.jpg",
    nights: 4,
    price: "5499 Rs.",
  },
]

export function DestinationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  const visibleDestinations = [
    destinations[currentIndex],
    destinations[(currentIndex + 1) % destinations.length],
    destinations[(currentIndex + 2) % destinations.length],
    destinations[(currentIndex + 3) % destinations.length],
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Featured Destinations</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-neon-blue mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleDestinations.map((destination, idx) => (
              <motion.div
                key={`${destination.id}-${currentIndex}-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-gold/20 transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">{destination.name}</h3>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-white/90 font-medium">{destination.nights} Nights</span>
                    <span className="text-2xl font-bold text-gold drop-shadow-lg">{destination.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/50 hover:bg-black/70 text-white rounded-full h-12 w-12 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-8">
            {destinations.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-gold" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
