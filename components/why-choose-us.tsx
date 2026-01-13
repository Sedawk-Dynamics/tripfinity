"use client"

import { motion } from "framer-motion"
import { Plane, Zap, Globe, Shield } from "lucide-react"

const features = [
  {
    icon: Plane,
    title: "Best Flight Deals",
    description: "Exclusive prices on flights worldwide",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book your flight in seconds",
  },
  {
    icon: Globe,
    title: "Global Airlines",
    description: "Access to 500+ airlines globally",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your data is safe with us",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark-charcoal">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Why Choose TripInfinity?</h2>
          <p className="text-xl text-white/70 text-pretty">Your trusted partner for seamless flight bookings</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card border-white/10 p-6 text-center group hover:border-neon-blue/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-neon-blue/20 mb-4 group-hover:glow-neon-blue transition-all duration-300">
                  <Icon className="h-8 w-8 text-gold group-hover:text-neon-blue transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
