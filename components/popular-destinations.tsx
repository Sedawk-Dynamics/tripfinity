"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const destinations = [
  {
    name: "Dubai",
    price: "₹18,999",
    image: "/dubai-skyline-night-burj-khalifa.jpg",
  },
  {
    name: "London",
    price: "₹35,999",
    image: "/london-city-night-big-ben.jpg",
  },
  {
    name: "Singapore",
    price: "₹22,999",
    image: "/singapore-marina-bay-night.jpg",
  },
  {
    name: "Bangkok",
    price: "₹12,999",
    image: "/bangkok-city-night-temples.jpg",
  },
  {
    name: "New York",
    price: "₹45,999",
    image: "/new-york-city-skyline-night.png",
  },
  {
    name: "Tokyo",
    price: "₹38,999",
    image: "/tokyo-city-night-neon.jpg",
  },
]

export function PopularDestinations() {
  return (
    <section id="destinations" className="py-20 bg-gradient-to-b from-black to-dark-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Popular Destinations</h2>
          <p className="text-xl text-white/70 text-pretty">Explore the world&apos;s most exciting cities</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-white/10 overflow-hidden group cursor-pointer hover:border-gold/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gold font-semibold text-lg">Starting from {destination.price}</p>
                      <ArrowRight className="h-5 w-5 text-gold group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
