"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Download, Phone, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function VaranasiKashi() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/varanasi-ganges-boats-ghats-birds.jpg" alt="Varanasi Ganges" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Link href="/packages"><Button variant="ghost" className="mb-6 text-white hover:text-gold"><ArrowLeft className="mr-2 h-4 w-4" />Back to Packages</Button></Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-4">Varanasi - Kashi Darshan</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto">Family Package to the Spiritual Capital of India</motion.p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹18,999</p>
                    <p className="text-gray-600 text-sm">per person</p>
                    <p className="text-orange-600 text-sm mt-1">Family Package | Cultural Experience</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700"><Calendar className="h-5 w-5 text-gold" /><span className="font-medium">3 Days / 2 Nights</span></div>
              <a href="tel:+919220863958">      <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6 text-lg"><Phone className="mr-2 h-5 w-5" />Book Now</Button> </a>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Sacred Kashi</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: "/varanasi-ganges-boats-ghats-birds.jpg", alt: "Ganges Ghats" },
                  { src: "/kashi-vishwanath-temple.jpg", alt: "Kashi Vishwanath" },
                  { src: "/varanasi-kashi-ghats-temples.jpg", alt: "Temple City" }
                ].map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                    <Image src={img.src || "/placeholder.svg"} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 3-Day Family Journey</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival & Evening Ganga Aarti", desc: "Arrival in Varanasi. Check-in. Evening witness the magnificent Ganga Aarti at Dashashwamedh Ghat. Boat ride on holy Ganges.", highlights: ["Hotel check-in", "Ganga Aarti", "Boat ride"] },
                  { day: 2, title: "Kashi Vishwanath & Sarnath", desc: "Early morning Ganga snan. Darshan at Kashi Vishwanath temple. Visit Sarnath - where Buddha gave his first sermon. Dhamek Stupa and museum.", highlights: ["Temple darshan", "Sarnath visit", "Buddhist heritage"] },
                  { day: 3, title: "Local Temples & Departure", desc: "Visit Sankat Mochan Hanuman temple, Durga temple, Tulsi Manas temple. Shopping at local silk markets. Departure with blessings.", highlights: ["Temple tour", "Shopping", "Departure"] }
                ].map((day) => (
                  <Card key={day.day} className="bg-white border-gray-200 p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">{day.day}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-700 mb-3">{day.desc}</p>
                        <div className="flex flex-wrap gap-2">{day.highlights.map((h, i) => (<span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{h}</span>))}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose This Package?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Family-Friendly", desc: "Perfect for families seeking spiritual and cultural experience. Kid-friendly itinerary.", bgColor: "bg-white" },
                  { title: "Complete Kashi Experience", desc: "Visit all major temples, ghats, and cultural sites. Witness the famous Ganga Aarti.", bgColor: "bg-blue-50" },
                  { title: "Cultural Immersion", desc: "Experience the ancient culture, traditions, music, and spirituality of the oldest living city.", bgColor: "bg-amber-50" },
                  { title: "Affordable Package", desc: "Great value family package with comfortable accommodation and all major sightseeing included.", bgColor: "bg-pink-50" }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} border-gray-200 p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-white border-gray-200 p-6 shadow-md">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check className="h-6 w-6" /> Inclusions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {["2 nights accommodation", "Daily breakfast", "All temple visits", "Ganga boat ride", "Sarnath guided tour", "Airport transfers"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-white border-gray-200 p-6 shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X className="h-6 w-6" /> Exclusions</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {["Lunch & dinner", "Personal expenses", "Shopping", "Travel insurance", "Tips & gratuities"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2"><X className="h-4 w-4 text-red-600 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Eternal City</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Book your family spiritual journey to Varanasi - the city of Lord Shiva and moksha.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button className="bg-gradient-to-r from-gold to-[#f4d03f] hover:from-gold/90 text-black px-8 py-6 text-lg"><Download className="mr-2" />Download Brochure</Button> */}
       <a href="tel:+919220863958">             <Button className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg bg-transparent">Contact Us</Button>   </a>
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
