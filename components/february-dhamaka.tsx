"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function FebruaryDhamaka() {
  const dhamakaPackage = {
    id: "bali-dhamaka",
    title: "Bali Bliss Edition",
    price: "₹68,499",
    originalPrice: "₹68,000",
    duration: "7 Days / 6 Nights",
    location: "Bali, Indonesia",
    image: "/bali-temple-rice-terraces.jpg",
    description: "January special offer! Tropical paradise with stunning temples, rice terraces, and pristine beaches.",
    tags: ["International", "Beach", "February Dhamaka"],
    href: "/packages/bali-bliss",
    discount: "20% OFF"
  }

  return (
    <section className="py-16 bg-gradient-to-b from-[#0a0e27] via-[#1e3a5f] to-[#0a0e27] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold text-xl shadow-xl">
              🔥 February Dhamaka - Limited Time Offer!
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Exclusive February Deal</h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Grab this incredible discount on our most popular tropical paradise package. Limited slots available!
          </p>
        </motion.div>

        {/* Dhamaka Package Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href={dhamakaPackage.href}>
              <Card className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-4 border-orange-500/30 max-w-md w-full">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dhamakaPackage.image || "/placeholder.svg"}
                    alt={dhamakaPackage.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    {dhamakaPackage.duration}
                  </div>
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                    {dhamakaPackage.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {dhamakaPackage.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {dhamakaPackage.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full ${
                          tag === "February Dhamaka" 
                            ? "bg-orange-100 text-orange-700 font-bold"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {dhamakaPackage.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{dhamakaPackage.location}</span>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-500 line-through">{dhamakaPackage.originalPrice}</p>
                      <p className="text-2xl font-bold text-orange-600">{dhamakaPackage.price}</p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
