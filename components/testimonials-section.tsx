"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Tripfinity planned our Bali trip so smoothly! Every detail was perfect and affordable.",
    author: "Riya Sharma",
  },
  {
    quote: "Superb service! Dubai trip felt luxurious and hassle-free.",
    author: "Manish Verma",
  },
  {
    quote: "Highly recommended for spiritual journeys. Kedarnath Yatra was flawlessly managed.",
    author: "Suman Gupta",
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-[#0A0E27] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">What Our Travelers Say</h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-[#D4AF37] mx-auto"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 md:p-8 relative group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white fill-white" />
              </div>

              {/* Testimonial Content */}
              <div className="mt-6">
                <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-gray-900 font-bold text-lg">— {testimonial.author}</p>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
