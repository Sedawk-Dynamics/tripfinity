"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Download, Phone, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function MaldivesHoneymoon() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/maldives-overwater-villas.jpg" alt="Maldives Overwater Villas" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Link href="/packages"><Button variant="ghost" className="mb-6 text-white hover:text-gold"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button></Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-4">Azure Infinity - A Maldivian Love Story</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80">Ultimate Luxury Honeymoon in Paradise</motion.p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative">
          <div className="container mx-auto px-4">
            <Card className="bg-white p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <p className="text-gray-600 text-sm mb-2">Package Price</p>
                  <p className="text-5xl font-bold text-gold mb-2">₹2,49,999</p>
                  <p className="text-gray-600 text-sm">per couple</p>
                  <p className="text-orange-600 text-sm mt-1">Luxury Honeymoon | Overwater Villa</p>
                </div>
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span className="font-medium">6 Days / 5 Nights</span></div>
         <a href="tel:+919220863958">      <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6"><Phone className="mr-2" />Book Now</Button> </a>
              </div>
            </Card>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Maldivian Paradise</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["/maldives-overwater-villas.jpg", "/maldives-beach-sunset.jpg", "/maldives-infinity-pool-ocean-palms.jpg"].map((src, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden">
                    <Image src={src || "/placeholder.svg"} alt="Maldives" fill className="object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 6-Day Luxury Escape</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival in Paradise", desc: "Seaplane transfer to resort. Check-in to overwater villa. Champagne welcome. Sunset dinner on your private deck.", highlights: ["Seaplane transfer", "Overwater villa", "Sunset dinner"] },
                  { day: 2, title: "Marine Adventure", desc: "Morning snorkeling. Dolphin watching cruise. Lunch at underwater restaurant. Afternoon couple spa. Beach BBQ dinner.", highlights: ["Snorkeling", "Dolphin cruise", "Spa session"] },
                  { day: 3, title: "Island Romance", desc: "Breakfast in villa. Private island picnic. Water sports. Sandbank dining experience under stars with wine.", highlights: ["Island picnic", "Water sports", "Sandbank dinner"] },
                  { day: 4, title: "Underwater Wonders", desc: "Scuba diving experience. Visit house reef. Sunset fishing. Traditional Maldivian cuisine dinner. Night snorkeling.", highlights: ["Scuba diving", "Sunset fishing", "Night snorkeling"] },
                  { day: 5, title: "Relaxation Day", desc: "Breakfast in bed. Pool day. Infinity pool with champagne. Couple photoshoot. Floating breakfast. Farewell dinner.", highlights: ["Pool day", "Photoshoot", "Floating breakfast"] },
                  { day: 6, title: "Farewell to Paradise", desc: "Leisure breakfast. Last swim. Check-out. Seaplane transfer. Depart with lifetime memories.", highlights: ["Last swim", "Departure"] }
                ].map((day) => (
                  <Card key={day.day} className="bg-white p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">{day.day}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-700 mb-3">{day.desc}</p>
                        <div className="flex flex-wrap gap-2">{day.highlights.map((h, i) => (<span key={i} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{h}</span>))}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Luxury Honeymoon Experiences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Overwater Villa", desc: "Private overwater villa with glass floor. Direct ocean access. Infinity pool. Outdoor shower. Ultimate privacy.", bgColor: "bg-white" },
                  { title: "All-Inclusive Luxury", desc: "All meals & drinks included. Multiple dining options. Underwater restaurant. Floating breakfast. 24-hour butler.", bgColor: "bg-blue-50" },
                  { title: "Marine Experiences", desc: "Snorkeling, diving, dolphin cruise. Water sports. Night snorkeling. Visit house reef. Marine biologist tours.", bgColor: "bg-amber-50" },
                  { title: "Romantic Moments", desc: "Sandbank dinners. Sunset cruises. Couple spa. Photography. Floating breakfasts. Private island picnics.", bgColor: "bg-pink-50" }
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
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check className="h-6 w-6" /> All-Inclusive Package</h3>
                <ul className="space-y-2 text-sm">
                  {["5 nights overwater villa", "All meals & premium drinks", "Seaplane transfers", "Daily couple spa", "Water sports", "Snorkeling & diving", "Sandbank dinner", "Floating breakfast", "Photography session", "Butler service"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X className="h-6 w-6" /> Exclusions</h3>
                <ul className="space-y-2 text-sm">
                  {["International flights", "Maldives visa ($30)", "Personal expenses", "Premium alcohol brands", "Spa extras", "Travel insurance"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><X className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card className="bg-white p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Create Your Love Story in Maldives</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Experience the ultimate luxury honeymoon in your private overwater paradise.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button className="bg-gradient-to-r from-gold to-[#f4d03f] text-black px-8 py-6"><Download className="mr-2" />Download Brochure</Button> */}
                <a href="tel:+919220863958">  <Button className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 bg-transparent">Reserve Your Villa</Button> </a>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
