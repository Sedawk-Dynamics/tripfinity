"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Phone, MapPin, Calendar, Users, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MalaysianMosaicPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/langkawi-cable-car-sky-bridge.jpg" alt="Langkawi Sky Bridge" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Malaysian Mosaic</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Cities, Heritage & Islands Adventure</p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span>9 Days / 8 Nights</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /><span>Kuala Lumpur - Malacca - Penang - Langkawi</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-gold" /><span>Family Package</span></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }} />
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
              <Link href="/packages"><Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20"><ArrowLeft className="h-4 w-4 mr-2" />Back to Packages</Button></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹92,999</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing | Ex-Delhi)</p>
                    <p className="text-orange-600 text-sm mt-1">Family Package | Complete Malaysia</p>
                  </div>
             <a href="tel:+919220863958">       <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold h-14 px-8"><Phone className="h-5 w-5 mr-2" />Book Now</Button>  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Discover Malaysia's Treasures</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/malaysia-petronas-family.jpg", alt: "Kuala Lumpur Petronas Towers" },
                  { src: "/penang-georgetown-street-art.jpg", alt: "Penang Georgetown" },
                  { src: "/langkawi-cable-car-sky-bridge.jpg", alt: "Langkawi Sky Bridge" }
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 9-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Departure from India", description: "Evening flight from New Delhi to Kuala Lumpur. Overnight journey with arrival next morning." },
                  { day: 2, title: "Kuala Lumpur Arrival & City Tour", description: "Check into Ibis Styles Fraser Business Park. Evening Kuala Lumpur city tour featuring the mesmerizing Symphony Water Fountain Show at KLCC Park beneath the iconic Petronas Towers." },
                  { day: 3, title: "Malacca Heritage Experience", description: "Full-day UNESCO World Heritage Malacca tour. Visit Dutch Square, St. Paul's Church, and enjoy a romantic sunset river cruise past street art and heritage buildings." },
                  { day: 4, title: "Journey to Penang", description: "Travel to the Pearl of the Orient. Check into boutique Chulia Mansion heritage hotel. Explore Georgetown's famous street art scene and sample local hawker food favorites." },
                  { day: 5, title: "Penang Paradise & Candlelight Dinner", description: "Explore colonial architecture, Clan Jetties, and Penang Hill. Evening transforms with a magical candlelight dinner at The Tamaras featuring stunning views and exquisite cuisine." },
                  { day: 6, title: "Langkawi Island Arrival", description: "Fly to paradise! Check into Chill Box Langkawi. Spend afternoon by the pool or strolling pristine Pantai Cenang beach with crystal clear waters." },
                  { day: 7, title: "Langkawi Cable Car & Sky Bridge", description: "Ascend 708 meters via one of the world's steepest cable cars. Walk the spectacular Sky Bridge suspended 660m above rainforest. Evening rainforest night tour with expert guides." },
                  { day: 8, title: "Free Day in Paradise", description: "Your day to craft your perfect island experience. Choose spa treatments, duty-free shopping, water adventures like jet-skiing and parasailing, or simply relax on powder-soft sands." },
                  { day: 9, title: "Farewell to Malaysia", description: "After breakfast, begin your journey home via Kuala Lumpur connection. Depart with wonderful memories of Malaysia's diverse landscapes, cuisine, and warm hospitality." }
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

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose This Package?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Complete Malaysia Experience", description: "From glittering towers of Kuala Lumpur to tranquil beaches of Langkawi. Discover vibrant cities, UNESCO heritage sites, and tropical paradise.", bgColor: "bg-white" },
                  { title: "Cultural Immersion", description: "Explore Malacca's colonial history, Penang's street art and cuisine, authentic Malaysian experiences including candlelight dining and river cruises.", bgColor: "bg-blue-50" },
                  { title: "Island Paradise Adventures", description: "Langkawi's spectacular cable car, Sky Bridge suspended over rainforest, rainforest night tour, pristine beaches, and water sports activities.", bgColor: "bg-amber-50" },
                  { title: "Budget-Friendly Value", description: "Exceptional value including 8 nights quality accommodation, daily breakfast, return flights from India, domestic flights, guided tours, and special highlights.", bgColor: "bg-pink-50" }
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
                  <ul className="space-y-2 text-sm">
                    {["8 nights quality hotel accommodation", "Daily breakfast included", "Return flights from Delhi to Kuala Lumpur", "Domestic flights (Penang and Langkawi)", "All airport transfers arranged", "Kuala Lumpur city tour with Symphony show", "Malacca heritage tour with river cruise", "Langkawi island excursions (cable car & Sky Bridge)", "Candlelight dinner in Penang", "Rainforest night tour"].map((item, idx) => (
                      <li key={idx} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                    ))}
                  </ul>
                </Card>
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="h-6 w-6" />Package Excludes</h3>
                  <ul className="space-y-2 text-sm">
                    {["Lunch and dinner (except candlelight dinner)", "Personal expenses and shopping", "Optional activities and water sports", "Travel insurance", "Malaysia visa fees", "Tips and gratuities", "Anything not mentioned in inclusions"].map((item, idx) => (
                      <li key={idx} className="flex gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Malaysia?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Discover the perfect blend of culture, cuisine, and coastal paradise across Malaysia's most captivating destinations.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8"><Download className="h-5 w-5 mr-2" />Download Detailed Brochure</Button> */}
                  <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">
                    <a href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20the%20Malaysian%20Mosaic%20package" target="_blank" rel="noopener noreferrer">
                      Contact Us on WhatsApp
                    </a>
                  </Button>
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
