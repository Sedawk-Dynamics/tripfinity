"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "Exploring Atlanta's modern homes",
    excerpt:
      "Vivamus enim sagittis aptent hac mi dui a per aptent suspendisse cras odio bibendum augue rhoncus laoreet dui...",
    image: "/luxury-beach-resort-with-palm-trees-and-infinity-p.jpg",
    position: "left",
  },
  {
    id: 2,
    title: "Green interior design inspiration",
    excerpt:
      "A sed a risusal luctus esta anibh rhoncus hendrerit blandit nam rutrum sitmiad hac. Cras a vestibulum a varius...",
    image: "/modern-luxury-pool-with-turquoise-water-and-blue-l.jpg",
    position: "right",
  },
]

export function ArticlesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative bg-[#0a0e27] py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00bfff] rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Latest Articles</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Article Card Container */}
              <div className="relative h-[500px] md:h-[550px]">
                {/* Image - positioned absolutely */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute w-[85%] h-[340px] overflow-hidden rounded-2xl shadow-2xl z-10 ${
                    article.position === "left" ? "left-0 top-0" : "right-0 top-0"
                  }`}
                >
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Text Card - positioned to overlap image */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute w-[85%] bg-white rounded-2xl shadow-2xl p-8 z-20 ${
                    article.position === "left" ? "right-0 bottom-0" : "left-0 bottom-0"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#d4af37] font-bold text-sm uppercase tracking-wide group/link"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Continue Reading
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-2" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
