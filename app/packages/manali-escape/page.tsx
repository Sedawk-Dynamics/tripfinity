"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Phone, MapPin, Calendar, Users, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ManaliPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/manali-himalayas-snow-valley.jpg" alt="Manali" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Himalayan Bliss</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Manali Escape - Mountains Calling</p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span>5 Days / 4 Nights</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /><span>Manali - Solang - Rohtang</span></div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5 text-gold" /><span>Min 2 Person</span></div>
              </div>
            </motion.div>
          </div>
        </section>

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
                    <p className="text-5xl font-bold text-gold mb-2">₹7,000</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing)</p>
                    <p className="text-orange-600 text-sm mt-1">Budget Category | Best Value</p>
                  </div>
              <a href="tel:+919220863958">      <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold h-14 px-8"><Phone className="h-5 w-5 mr-2" />Book Now</Button> </a>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Experience Himalayan Beauty</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { src: "/solang-valley-manali.jpg", alt: "Solang Valley Adventure" },
                  { src: "/rohtang-pass-manali.jpg", alt: "Rohtang Pass" }
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 5-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Delhi to Manali", description: "Evening departure from Delhi by Volvo semi-sleeper coach. Enjoy the scenic overnight journey through the mountains." },
                  { day: 2, title: "Arrival & Local Exploration", description: "Morning arrival in Manali. Check into your hotel. Visit Hadimba Temple, Manu Temple, and explore Mall Road. Evening bonfire." },
                  { day: 3, title: "Solang Valley Adventure", description: "Full day excursion to Solang Valley. Enjoy paragliding, zorbing, and cable car rides (at own cost). Snow activities in season." },
                  { day: 4, title: "Rohtang Pass or Atal Tunnel", description: "Visit the spectacular Rohtang Pass (permit subject to availability) or explore the engineering marvel of Atal Tunnel. Visit Manikaran Sahib." },
                  { day: 5, title: "Departure to Delhi", description: "Morning at leisure for shopping. Check out and board Volvo for Delhi. Arrive Delhi early morning next day." }
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
                  { title: "Budget-Friendly Adventure", description: "Complete Manali experience at just ₹7,000 including transport, accommodation, and sightseeing.", bgColor: "bg-white" },
                  { title: "Hassle-Free Travel", description: "Comfortable Volvo transport from Delhi, no need to worry about flights or train bookings.", bgColor: "bg-blue-50" },
                  { title: "Mountain Activities", description: "Access to Solang Valley adventures, Rohtang Pass snow, and scenic Himalayan landscapes.", bgColor: "bg-amber-50" },
                  { title: "Perfect Short Getaway", description: "Ideal 5-day trip for working professionals and families looking for a quick mountain escape.", bgColor: "bg-pink-50" }
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
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Delhi to Manali return Volvo transfers (semi-sleeper)</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>2 nights accommodation in 3-star deluxe hotel</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Welcome drink, breakfast, and dinner daily</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>All sightseeing as per itinerary</span></li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" /><span>Evening bonfire and music (weather permitting)</span></li>
                  </ul>
                </Card>
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="h-6 w-6" />Package Excludes</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Lunch and any meals not mentioned</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Adventure activities (paragliding, skiing, cable car)</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Rohtang Pass permit and vehicle charges</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Travel insurance</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Personal expenses and shopping</span></li>
                    <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" /><span>Anything not mentioned in inclusions</span></li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Himalayan Escape?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Book your affordable mountain getaway today and experience the breathtaking beauty of Manali's valleys and peaks.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8"><Phone className="h-5 w-5 mr-2" />Book Now</Button> */}
                <a href="tel:+919220863958">    <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">Contact Us for Details</Button> </a>
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
