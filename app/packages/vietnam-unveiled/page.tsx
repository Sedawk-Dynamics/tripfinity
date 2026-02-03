"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, MapPin, Calendar, Users, CheckCircle2, XCircle, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookNowButton } from "@/components/book-now-button"

export default function VietnamPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <Image src="/vietnam-halong-bay-boats.jpg" alt="Vietnam" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">The Dragon's Trail</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Vietnam Unveiled - From Mountains to Sea</p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span>8 Days / 7 Nights</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /><span>Hanoi - Ha Long - Hoi An - Ho Chi Minh</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-gold" /><span>Min 2 Person</span></div>
              </div>
            </motion.div>
          </div>
        </section>


{/* <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="mb-16"
>
  <h2 className="text-3xl font-bold text-white mb-8 text-center">
    See Us in Action!
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {["1.mp4", "2.mp4", "3.mp4"].map((video, idx) => (
      <div
        key={idx}
        className="rounded-xl overflow-hidden shadow-lg bg-black"
      >
        <video
          src={`/videos/vietnam/${video}`}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[320px] object-cover"
        />
      </div>
    ))}
  </div>
</motion.div> */}



        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-8">
              <Link href="/"><Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20"><ArrowLeft className="h-4 w-4 mr-2" />Back to Home</Button></Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹84,999</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing)</p>
                    <p className="text-orange-600 text-sm mt-1">Premium Category | All-Inclusive</p>
                  </div>
                  <BookNowButton 
                    packageName="The Dragon's Trail - Vietnam" 
                    packagePrice="₹84,999" 
                    duration="8 Days / 7 Nights"
                    destination="Vietnam"
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Discover Vietnam's Wonders</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/hanoi-old-quarter-vietnam.jpg", alt: "Hanoi Old Quarter" },
                  { src: "/vietnam-halong-bay-boats.jpg", alt: "Ha Long Bay" },
                  { src: "/hoi-an-ancient-town-vietnam.jpg", alt: "Hoi An Ancient Town" }
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 8-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival in Hanoi", description: "Welcome to Vietnam's capital! Airport transfer to hotel. Evening cyclo ride through Old Quarter and traditional water puppet show." },
                  { day: 2, title: "Hanoi City Tour", description: "Visit Ho Chi Minh Mausoleum, One Pillar Pagoda, Temple of Literature, and Hoan Kiem Lake. Explore the vibrant streets of the French Quarter." },
                  { day: 3, title: "Ha Long Bay Cruise", description: "Journey to UNESCO World Heritage Ha Long Bay. Overnight cruise on traditional junk boat among limestone karsts. Kayaking and swimming." },
                  { day: 4, title: "Ha Long to Hoi An", description: "Return to Hanoi and fly to Da Nang. Transfer to Hoi An Ancient Town. Evening walking tour with thousands of lanterns illuminating the streets." },
                  { day: 5, title: "Hoi An & My Son Sanctuary", description: "Morning visit to My Son Cham temples (UNESCO site). Afternoon free to explore Hoi An's tailors, cafes, and riverside. Optional cooking class." },
                  { day: 6, title: "Fly to Ho Chi Minh City", description: "Flight to Saigon. Visit Reunification Palace, War Remnants Museum, Notre Dame Cathedral, and Ben Thanh Market. Evening street food tour." },
                  { day: 7, title: "Mekong Delta Experience", description: "Full day exploring the Mekong Delta. Boat rides through narrow canals, visit fruit orchards, traditional villages, and local workshops." },
                  { day: 8, title: "Departure", description: "Free time for last-minute shopping or relaxation. Transfer to Tan Son Nhat Airport for your departure flight with unforgettable memories." }
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
                  { title: "Complete Vietnam Experience", description: "From north to south, experience all of Vietnam's UNESCO sites, cultures, and landscapes in one journey.", bgColor: "bg-white" },
                  { title: "Ha Long Bay Cruise", description: "Overnight luxury cruise on traditional junk boat through the mystical limestone karsts of Ha Long Bay.", bgColor: "bg-blue-50" },
                  { title: "Cultural Immersion", description: "Water puppet shows, cooking classes, traditional villages, and authentic local experiences throughout the trip.", bgColor: "bg-amber-50" },
                  { title: "All-Inclusive Comfort", description: "All domestic flights, hotels, meals, tours, and activities included with professional English-speaking guides.", bgColor: "bg-pink-50" }
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
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>7 nights accommodation in 4-star hotels</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All domestic flights (Hanoi-Da Nang, Da Nang-Ho Chi Minh)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Overnight Ha Long Bay cruise with all meals</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Daily breakfast and select lunches/dinners</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All sightseeing with English-speaking guides</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All entrance fees and boat rides</span></li>
                  </ul>
                </Card>
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="h-6 w-6" />Package Excludes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>International flights to/from Vietnam</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Vietnam visa fees (available on arrival)</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Some lunches and dinners</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Travel insurance</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Personal expenses and tips</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Optional activities and shopping</span></li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Unveil Vietnam's Magic?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Embark on an unforgettable journey from the bustling streets of Hanoi to the mystical Ha Long Bay and charming Hoi An.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8"><Download className="h-5 w-5 mr-2" />Download Detailed Brochure</Button> */}
                    <a href="tel:+919220863958"><Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">Contact Us for Booking</Button>  </a>
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
