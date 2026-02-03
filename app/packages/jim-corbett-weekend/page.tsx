'use client';

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Check, X, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function JimCorbettWeekendPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#1e3a5f] to-[#0a0e27]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/jim-corbett-wildlife-safari.jpg" alt="Jim Corbett National Park" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-bold text-white mb-4">
            Jim Corbett Friends' Weekend Escape
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/90 max-w-3xl mx-auto">
            Disconnect from screens. Reconnect with nature.
          </motion.p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="bg-white p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-sm text-gray-600 mb-2">Package Price</h3>
                <p className="text-5xl font-bold text-gold mb-2">₹44,999</p>
                <p className="text-gray-600">per group (4-5 friends)</p>
                <p className="text-sm text-gray-500 mt-2">Self-Drive | Complete Weekend Package</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span>2 Nights / 3 Days</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Jim Corbett, Uttarakhand</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="h-5 w-5 text-gold" />
                  <span>Group of 4-5 Friends</span>
                </div>
              </div>
          <a href="tel:+919220863958">      <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6 text-lg">Book Now</Button>  </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Destination Gallery */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Nature Awaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/jim-corbett-wildlife-safari.jpg", "/jim-corbett-kosi-river.jpg", "/jim-corbett-resort-bonfire.jpg"].map((src, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="relative h-80 rounded-lg overflow-hidden group">
                <Image src={src || "/placeholder.svg"} alt={`Jim Corbett ${idx + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Your 3-Day Adventure Unfolds</h2>
          <div className="space-y-8">
            {[
              { day: "Day 1", title: "Arrival & Settling In", desc: "Depart Delhi at your leisure. Arrive at resort and unwind. Evening bonfire with friends under the stars." },
              { day: "Day 2", title: "Nature & Leisure", desc: "Wake without alarms. Optional jungle safari. Nature walks, river lounging, or resort relaxation. Evening bonfire conversations." },
              { day: "Day 3", title: "Farewell to the Forest", desc: "Leisurely breakfast amidst nature. Check out and return journey to Delhi with renewed energy." }
            ].map((item, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold text-black rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">{idx + 1}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.day}: {item.title}</h3>
                    <p className="text-white/80">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions/Exclusions */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check className="h-6 w-6" /> Inclusions</h3>
              <ul className="space-y-2 text-sm">
                {["Private transportation (self-drive/chauffeur)", "2 nights accommodation", "Daily breakfast", "Bonfire evenings", "24/7 Tripfinity support", "All fuel costs"].map((item, idx) => (
                  <li key={idx} className="flex gap-2"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                ))}
              </ul>
            </Card>
            <Card className="bg-white p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X className="h-6 w-6" /> Exclusions</h3>
              <ul className="space-y-2 text-sm">
                {["Lunch & dinner", "Jungle safari fees", "Personal expenses", "Travel insurance", "Tips & gratuities"].map((item, idx) => (
                  <li key={idx} className="flex gap-2"><X className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-[#f4d03f]/20 animate-pulse" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Nature Escape?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Disconnect from screens. Reconnect with nature. Your forest awaits.</p>
          <div className="flex gap-4 justify-center">
            {/* <Button className="bg-gradient-to-r from-gold to-[#f4d03f] text-black px-8 py-6"><Download className="mr-2" />Download Brochure</Button> */}
            <Button asChild className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 bg-transparent">
              <a href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20the%20Jim%20Corbett%20Friends'%20Weekend%20Escape" target="_blank" rel="noopener noreferrer">
                Contact Us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
