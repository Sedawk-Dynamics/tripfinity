"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

export function VideoShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const videos = [
    {
      url: "/videos/showcase-1.mp4",
      title: "Hidden Gems",
      description: "Discover breathtaking hidden destinations",
    },
    {
      url: "/videos/showcase-4.mp4",
      title: "Adventure Awaits",
      description: "Experience thrilling travel moments",
    },
    {
      url: "/videos/showcase-5.mp4",
      title: "Cultural Journey",
      description: "Immerse yourself in local cultures",
    },
  ]

  return (
    <section className="py-24 lg:py-40 bg-gradient-to-br from-blue-900/5 via-transparent to-slate-900/5 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <p className="text-sm font-bold bg-gradient-to-r from-blue-500 to-amber-500 bg-clip-text text-transparent uppercase tracking-wider">
              VIDEO SHOWCASE
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full mt-2 mx-auto" />
          </div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            See Us in Action!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Watch our travelers experience unforgettable moments around the world
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 ring-1 ring-blue-500/20"
            >
              <div className="relative aspect-[9/16] bg-black">
                <video src={video.url} autoPlay loop muted playsInline className="w-full h-full object-cover" />

                <motion.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.75 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-blue-900/30 to-transparent pointer-events-none"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 border-4 border-blue-500/40 rounded-3xl pointer-events-none"
                />

                <motion.div
                  initial={{ y: 10, opacity: 0.9 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <Play className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider opacity-75">Now Playing</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                  <p className="text-sm opacity-90">{video.description}</p>
                </motion.div>

                <div className="absolute top-4 right-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  Live Travel
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
