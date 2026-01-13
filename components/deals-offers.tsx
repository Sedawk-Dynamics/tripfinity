"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Percent } from "lucide-react"

const deals = [
  {
    title: "Flash Sale: Dubai",
    discount: "40% OFF",
    price: "₹11,399",
    originalPrice: "₹18,999",
    validity: "Valid till 31 Jan 2026",
  },
  {
    title: "Early Bird: London",
    discount: "30% OFF",
    price: "₹25,199",
    originalPrice: "₹35,999",
    validity: "Valid till 15 Feb 2026",
  },
  {
    title: "Weekend Special: Singapore",
    discount: "35% OFF",
    price: "₹14,949",
    originalPrice: "₹22,999",
    validity: "Valid till 28 Jan 2026",
  },
]

export function DealsOffers() {
  return (
    <section id="deals" className="py-20 bg-gradient-to-b from-dark-charcoal to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Exclusive Deals & Offers</h2>
          <p className="text-xl text-white/70 text-pretty">Limited time offers on your favorite destinations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card border-gold/30 p-6 hover:border-gold transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Percent className="h-5 w-5 text-gold" />
                    <span className="text-gold font-bold text-xl">{deal.discount}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{deal.title}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-neon-blue">{deal.price}</div>
                    <div className="text-white/50 line-through">{deal.originalPrice}</div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
                    <Clock className="h-4 w-4" />
                    <span>{deal.validity}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold/70 text-black font-bold glow-gold">
                    Book Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
