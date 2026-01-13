"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2 } from "lucide-react"

const hotelBrands = [
  {
    id: 1,
    name: "Wyndham Hotels & Resorts",
    image: "/wyndham-luxury-hotel-night-lights.jpg",
    description: "Luxury accommodations worldwide",
  },
  {
    id: 2,
    name: "Sterling Hotels & Resorts",
    image: "/sterling-resort-pool-mountains.jpg",
    description: "Premium holiday resorts",
  },
  {
    id: 3,
    name: "Hyatt Hotels",
    image: "/hyatt-luxury-hotel-exterior.jpg",
    description: "World-class hospitality",
  },
  {
    id: 4,
    name: "Majestic Hotels",
    image: "/majestic-hotel-modern-architecture.jpg",
    description: "Boutique luxury stays",
  },
]

export function HotelBrands() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Flagship Hotel Stores</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Partner hotels offering exclusive deals and premium experiences
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {hotelBrands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Card with gradient border effect */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-white">
                {/* Image */}
                <div className="relative h-full overflow-hidden">
                  <Image
                    src={brand.image || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 transition-all duration-500" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{brand.name}</h3>
                  <p className="text-white/80 text-sm font-medium">{brand.description}</p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    className="w-16 h-1 bg-gradient-to-r from-[#d4af37] to-transparent mt-4 origin-left"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
