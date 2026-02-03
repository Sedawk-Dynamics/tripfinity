"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Download, Phone, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ThailandSolo() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/thailand-phuket-beach.jpg" alt="Thailand Temples" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Link href="/packages"><Button variant="ghost" className="mb-6 text-white hover:text-gold"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button></Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-4">Thailand Solo Edition</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80">Temple, Beach & Culture for Solo Travelers</motion.p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative">
          <div className="container mx-auto px-4">
            <Card className="bg-white p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Package Price</p>
                  <p className="text-5xl font-bold text-gold mb-2">₹42,999</p>
                  <p className="text-gray-600 text-sm">per person</p>
                  <p className="text-orange-600 text-sm mt-1">Solo Traveler | Complete Thailand</p>
                </div>
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span className="font-medium">7 Days / 6 Nights</span></div>
               <a href="tel:+919220863958">   <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6"><Phone className="mr-2" />Book Now</Button>    </a>
              </div>
            </Card>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Amazing Thailand</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["/bali-luxury-villa-pool-sunset.jpg", "/thailand-phuket-beach.jpg", "/thailand-phi-phi-islands.jpg"].map((src, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                    <Image src={src || "/placeholder.svg"} alt="Thailand" fill className="object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 7-Day Adventure</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Bangkok Arrival", desc: "Airport pickup. Check-in. Evening visit Khao San Road. Welcome dinner with fellow solo travelers.", highlights: ["Hotel check-in", "Khao San Road", "Group dinner"] },
                  { day: 2, title: "Bangkok Temples", desc: "Grand Palace & Wat Phra Kaew. Wat Pho (Reclining Buddha). Wat Arun. Chao Phraya river cruise. Night market visit.", highlights: ["Temple tour", "River cruise", "Night market"] },
                  { day: 3, title: "Ayutthaya Day Trip", desc: "Ancient capital exploration. Historical temples. Floating market. Traditional Thai lunch. Return to Bangkok.", highlights: ["Ayutthaya temples", "Floating market"] },
                  { day: 4, title: "Phuket Transfer", desc: "Flight to Phuket. Check-in beach hotel. Patong Beach. Evening beach clubs. Thai massage.", highlights: ["Flight to Phuket", "Beach time"] },
                  { day: 5, title: "Phi Phi Islands", desc: "Full day Phi Phi Islands tour. Maya Bay, snorkeling, Viking Cave. Beach BBQ lunch. Sunset views.", highlights: ["Phi Phi tour", "Snorkeling", "Beach BBQ"] },
                  { day: 6, title: "Phuket Leisure", desc: "Morning free. Optional activities: elephant sanctuary, zip-lining, or beach. Evening Phuket FantaSea show.", highlights: ["Free time", "Optional activities", "Cultural show"] },
                  { day: 7, title: "Departure", desc: "Breakfast. Last beach moments. Airport transfer. Fly home with amazing memories and new friends.", highlights: ["Beach time", "Departure"] }
                ].map((day) => (
                  <Card key={day.day} className="bg-white p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">{day.day}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-700 mb-3">{day.desc}</p>
                        <div className="flex flex-wrap gap-2">{day.highlights.map((h, i) => (<span key={i} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{h}</span>))}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Solo Thailand?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Perfect for Solo Travelers", desc: "Meet like-minded travelers. Group activities with personal freedom. Safe and friendly environment.", bgColor: "bg-white" },
                  { title: "Complete Experience", desc: "Temples, beaches, islands, culture. Bangkok city + Phuket beaches. Complete Thailand in one trip.", bgColor: "bg-blue-50" },
                  { title: "Adventure & Relaxation", desc: "Island hopping, snorkeling, water sports mixed with cultural temple visits and Thai massages.", bgColor: "bg-amber-50" },
                  { title: "Great Value", desc: "Affordable solo package. No single supplement. All major attractions. Domestic flight included.", bgColor: "bg-pink-50" }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check className="h-6 w-6" /> Inclusions</h3>
                <ul className="space-y-2 text-sm">
                  {["6 nights accommodation", "Daily breakfast", "Bangkok-Phuket flight", "All tours & activities", "Phi Phi Islands tour", "Airport transfers", "English-speaking guides", "All entrance fees"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X className="h-6 w-6" /> Exclusions</h3>
                <ul className="space-y-2 text-sm">
                  {["International flights", "Thailand visa (VOA ₹2000)", "Lunch & dinner", "Personal expenses", "Optional activities", "Travel insurance", "Tips"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><X className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="bg-white p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Your Thai Adventure?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Experience temples, beaches, and culture with fellow solo travelers in amazing Thailand.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button className="bg-gradient-to-r from-gold to-[#f4d03f] text-black px-8 py-6"><Download className="mr-2" />Download Brochure</Button> */}
                 <a href="tel:+919220863958"> <Button className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 bg-transparent">Book Your Adventure</Button> </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
