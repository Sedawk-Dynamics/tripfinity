"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Phone, MapPin, Calendar, Users, CheckCircle2, XCircle, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PeruPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/peru-machu-picchu-mountains.jpg" alt="Peru Machu Picchu" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Heart className="h-16 w-16 text-pink-500 fill-pink-500 mx-auto mb-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Forever Begins in Peru</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">A Honeymoon Adventure of a Lifetime</p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span>10 Days / 9 Nights</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /><span>Lima - Cusco - Machu Picchu</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-gold" /><span>Romantic Couple Package</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
              <Link href="/"><Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Button></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Honeymoon Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹4,99,999</p>
                    <p className="text-gray-600 text-sm">per couple</p>
                    <p className="text-orange-600 text-sm mt-1">Luxury Category | All-Inclusive</p>
                  </div>
                  <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold h-14 px-8"><Phone className="h-5 w-5 mr-2" />Reserve Your Dates</Button>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Romantic Destinations Await</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/peru-machu-picchu-mountains.jpg", alt: "Machu Picchu Wonder" },
                  { src: "/cusco-plaza-armas-peru.jpg", alt: "Cusco Historic Center" },
                  { src: "/sacred-valley-peru.jpg", alt: "Sacred Valley" }
                ].map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 10-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival in Lima", description: "Welcome to Peru! Transfer to your romantic hotel overlooking the Pacific Ocean. Evening stroll along Miraflores boardwalk." },
                  { day: 2, title: "Lima City & Culinary Tour", description: "Explore historic center, Plaza Mayor, and San Francisco Monastery. Evening gourmet dining experience in Lima's world-renowned culinary scene." },
                  { day: 3, title: "Fly to Cusco & Sacred Valley", description: "Morning flight to Cusco. Transfer to Sacred Valley. Visit Pisac ruins and artisan markets. Acclimatization in comfortable valley altitude." },
                  { day: 4, title: "Sacred Valley Exploration", description: "Visit Ollantaytambo fortress and Maras salt mines. Explore Moray agricultural terraces. Romantic dinner at valley resort." },
                  { day: 5, title: "Journey to Machu Picchu", description: "Scenic train ride through Urubamba Valley to Aguas Calientes. Afternoon guided tour of Machu Picchu. Overnight near the citadel." },
                  { day: 6, title: "Sunrise at Machu Picchu", description: "Early morning return to witness magical sunrise over Machu Picchu. Optional Huayna Picchu hike. Return to Cusco by train and transfer." },
                  { day: 7, title: "Cusco City Tour", description: "Explore Cusco's colonial architecture, Qorikancha Sun Temple, Cathedral, and nearby Sacsayhuaman fortress. Evening at San Pedro Market." },
                  { day: 8, title: "Rainbow Mountain Adventure", description: "Early morning excursion to Vinicunca Rainbow Mountain. Trek through stunning Andean landscapes. Witness nature's painted masterpiece." },
                  { day: 9, title: "Leisure & Shopping", description: "Free day to explore Cusco's charming streets, shop for alpaca textiles, or relax at hotel spa. Farewell dinner with traditional Andean show." },
                  { day: 10, title: "Departure", description: "Morning at leisure. Transfer to Cusco airport for your flight home via Lima, carrying memories of your extraordinary Peruvian honeymoon." }
                ].map((day, idx) => (
                  <Card key={idx} className="bg-white border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">{day.day}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Video Gallery Section */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">See us in Action !</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["/peru-video-1.mp4", "/peru-video-2.mp4"].map((videoSrc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-gray-900"
                  >
                    <video
                      src={videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      preload="auto"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose This Honeymoon Package?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Once-in-a-Lifetime Experience", description: "Explore Machu Picchu, one of the New Seven Wonders of the World, in an intimate romantic setting.", bgColor: "bg-white" },
                  { title: "Luxury Accommodations", description: "Stay in boutique hotels and resorts handpicked for honeymooners with stunning views and romantic ambiance.", bgColor: "bg-blue-50" },
                  { title: "All-Inclusive Romance", description: "Everything included - flights, hotels, meals, tours, and special honeymoon touches throughout your journey.", bgColor: "bg-amber-50" },
                  { title: "Cultural Immersion", description: "Experience authentic Peruvian culture, cuisine, and traditions while creating unforgettable memories together.", bgColor: "bg-pink-50" }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><CheckCircle2 className="h-6 w-6" />Package Includes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Return international flights from Delhi to Peru</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>9 nights in romantic boutique hotels with breakfast</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All domestic flights and train tickets within Peru</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Machu Picchu entrance and guided tours</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Rainbow Mountain excursion with guide</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>24/7 honeymoon concierge assistance</span></li>
                  </ul>
                </Card>
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="h-6 w-6" />Package Excludes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Peru visa fees and travel insurance</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Lunch and dinner meals (except mentioned)</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Optional activities and excursions</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Huayna Picchu mountain permit (optional)</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Personal expenses and tips</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Services not mentioned in inclusions</span></li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Begin Your Forever in Peru</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Limited honeymoon slots available for best-season travel (May-September). Customizable experiences to match your unique love story.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8"><Download className="h-5 w-5 mr-2" />Download Brochure</Button> */}
               <a href="tel:+919220863958">   <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">Reserve Your Dates</Button> </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
