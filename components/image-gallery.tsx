"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

export function ImageGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [currentSlide, setCurrentSlide] = useState(0)

  const galleryImages = [
    "/bali-luxury-villa-pool-sunset.jpg",
    "/dubai-burj-khalifa-night.jpg",
    "/maldives-overwater-villas.jpg",
    "/kashmir-mountains-snow-valley.jpg",
    "/varanasi-ganges-boats-ghats-birds.jpg",
    "/goa-beach-sunset-palms.jpg",
    "/singapore-marina-bay-night.jpg",
    "/peru-machu-picchu-mountains.jpg",
    // "/thailand-temples-bangkok.jpg",
    "/manali-himalayas-snow-valley.jpg",
    "/kedarnath-temple-snow-mountains.jpg",
    "/nainital-naini-lake-boats.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <p className="text-sm font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent uppercase tracking-wider">
              OUR TRAVEL MOMENTS
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 mx-auto" />
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white text-balance mb-6">
            Image Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore the breathtaking destinations and unforgettable moments from our travelers' journeys around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-amber-400/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentSlide] || "/placeholder.jpg"}
                    alt={`Travel destination ${currentSlide + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-3">
                      <p className="text-sm font-semibold">Destination {currentSlide + 1}</p>
                    </div>
                    <p className="text-4xl font-bold mb-2">Unforgettable Memories</p>
                    <p className="text-lg opacity-90">Experience the world with Tripfinity</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-amber-400 w-12" : "bg-white/50 w-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-6 md:grid-cols-8 gap-4">
              {galleryImages.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative h-20 md:h-24 rounded-2xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-4 ring-amber-400 shadow-xl"
                      : "opacity-60 hover:opacity-100 shadow-lg"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.jpg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-400/30 to-transparent" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
