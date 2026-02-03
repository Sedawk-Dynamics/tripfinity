"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const destinations = [
  {
    id: 1,
    name: "Bali",
    nights: 5,
    price: "₹45,999.00",
    image: "/bali-luxury-villa-pool-sunset.jpg",
    tags: ["Packages", "Popular Packages", "Trending Destinations"],
    hot: false,
  },
  {
    id: 2,
    name: "Dubai",
    nights: 4,
    price: "₹39,999.00",
    image: "/dubai-luxury-pool-resort-umbrella.jpg",
    tags: ["Packages", "Popular Packages", "Trending Destinations"],
    hot: false,
  },
  {
    id: 3,
    name: "Europe",
    nights: 5,
    price: "₹39,999.00",
    image: "/europe-luxury-hotel-pool-night.jpg",
    tags: ["Packages", "Trending Destinations"],
    hot: true,
  },
  {
    id: 4,
    name: "Maldives",
    nights: 4,
    price: "₹24,999.00",
    image: "/maldives-infinity-pool-ocean-palms.jpg",
    tags: ["Packages", "Trending Destinations"],
    hot: false,
  },
]

export function TrendingDestinations() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Trending Destinations</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-neon-blue mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, idx) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-2"
            >
              {destination.hot && (
                <Badge className="absolute top-4 right-4 z-10 bg-red-500 text-white font-bold px-3 py-1 text-sm">
                  HOT
                </Badge>
              )}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {destination.name} – {destination.nights} Nights
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-3xl font-bold text-gold">{destination.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
