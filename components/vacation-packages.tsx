"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const packages = [
  {
    id: 1,
    name: "Singapore & Malaysia",
    price: "₹47,999.00",
    duration: "6 Days / 5 Nights",
    image: "/singapore-malaysia-collage.jpg",
    tags: ["Packages", "International"],
    link: "/packages/singapore-malaysia",
  },
  {
    id: 2,
    name: "Bali Bliss Edition",
    price: "₹68,499.00",
    duration: "7 Days / 6 Nights",
    image: "/bali-temple-rice-terraces.jpg",
    tags: ["Packages", "International"],
    link: "/packages/bali-bliss",
  },
  {
    id: 3,
    name: "Vietnam Unveiled",
    price: "₹84,999.00",
    duration: "8 Days / 7 Nights",
    image: "/vietnam-halong-bay-boats.jpg",
    tags: ["Packages", "International"],
    link: "/packages/vietnam-unveiled",
  },
  {
    id: 4,
    name: "Himalayan Bliss - Manali",
    price: "₹7,000.00",
    duration: "5 Days / 4 Nights",
    image: "/manali-himalayas-snow-valley.jpg",
    tags: ["Packages", "Domestic"],
    link: "/packages/manali-escape",
  },
  {
    id: 5,
    name: "Peru Honeymoon Adventure",
    price: "₹4,99,999.00",
    duration: "10 Days / 9 Nights",
    image: "/peru-machu-picchu-mountains.jpg",
    tags: ["Packages", "Honeymoon", "International"],
    link: "/packages/peru-honeymoon",
  },
]

export function VacationPackages() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Vacation Packages</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-neon-blue mx-auto" />
          <p className="text-center text-white/70 mt-4 max-w-2xl mx-auto">
            Explore our handpicked vacation packages designed for unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <Link key={pkg.id} href={pkg.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-2xl hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-2xl font-bold text-gold">{pkg.price}</p>
                  <p className="text-sm text-gray-600 mt-1">per person</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
