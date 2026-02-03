"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, MapPin, Download, Phone, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function DubaiSolo() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/dubai-burj-khalifa-night.jpg" alt="Dubai Burj Khalifa" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <Link href="/packages"><Button variant="ghost" className="mb-6 text-white hover:text-gold"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button></Link>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-bold text-white mb-4">Dubai Solo Edition</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto">Luxury & Adventure for Solo Travelers</motion.p>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
              <Card className="bg-white p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹45,999</p>
                    <p className="text-gray-600 text-sm">per person</p>
                    <p className="text-orange-600 text-sm mt-1">Solo Traveler | Luxury Experience</p>
                  </div>
                  <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span className="font-medium">5 Days / 4 Nights</span></div>
                  <a href="tel:+919220863958"> <Button className="bg-gold hover:bg-gold/90 text-black px-8 py-6"><Phone className="mr-2" />Book Now</Button> </a>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Dubai Highlights</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["/dubai-burj-khalifa-night.jpg", "/dubai-mall-fountain.jpg", "/dubai-skyline-night-burj-khalifa.jpg"].map((src, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                    <Image src={src || "/placeholder.svg"} alt="Dubai" fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 5-Day Solo Adventure</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival & Burj Khalifa", desc: "Airport pickup. Check-in to luxury hotel. Evening visit to Burj Khalifa At The Top. Dubai Fountain show.", highlights: ["Burj Khalifa", "Fountain show"] },
                  { day: 2, title: "Desert Safari Adventure", desc: "Morning at leisure. Afternoon desert safari with dune bashing, camel ride, BBQ dinner, and cultural show.", highlights: ["Desert safari", "BBQ dinner", "Cultural show"] },
                  { day: 3, title: "Dubai City Tour", desc: "Dubai Museum, Gold Souk, Spice Souk. Afternoon at Dubai Mall shopping. Evening at Dubai Marina walk.", highlights: ["City tour", "Shopping", "Marina"] },
                  { day: 4, title: "Palm Jumeirah & Beach", desc: "Visit Atlantis The Palm, Aquaventure Waterpark. Beach time. Optional skydiving or helicopter tour.", highlights: ["Atlantis", "Waterpark", "Beach"] },
                  { day: 5, title: "Departure", desc: "Morning free for last-minute shopping. Airport transfer for your onward journey.", highlights: ["Shopping", "Departure"] }
                ].map((day) => (
                  <Card key={day.day} className="bg-white p-6 shadow-md hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gold to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">{day.day}</div>
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Solo Dubai?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Solo-Friendly", desc: "Meet fellow solo travelers. Group activities & safe environment. Perfect for first-time solo travelers.", bgColor: "bg-white" },
                  { title: "Luxury on Budget", desc: "Experience Dubai's luxury without breaking the bank. Affordable solo package with premium experiences.", bgColor: "bg-blue-50" },
                  { title: "Complete Freedom", desc: "Structured activities with free time. Explore at your own pace. Optional add-ons available.", bgColor: "bg-amber-50" },
                  { title: "Safe & Secure", desc: "Dubai is one of the safest cities. 24/7 support. Airport transfers & assistance included.", bgColor: "bg-pink-50" }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mb-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2"><Check className="h-6 w-6" /> Inclusions</h3>
                <ul className="space-y-2 text-sm">
                  {["4 nights 4* hotel", "Daily breakfast", "Desert safari with dinner", "Burj Khalifa tickets", "Dubai city tour", "Airport transfers", "All taxes"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><Check className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
              <Card className="bg-white p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><X className="h-6 w-6" /> Exclusions</h3>
                <ul className="space-y-2 text-sm">
                  {["Visa fees", "Flights", "Lunch & dinner", "Personal expenses", "Optional activities", "Travel insurance"].map((item, idx) => (
                    <li key={idx} className="flex gap-2"><X className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="text-center">
              <Card className="bg-white p-12">
                <h2 className="text-3xl font-bold mb-4">Ready for Your Solo Dubai Adventure?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Experience luxury, adventure, and freedom in the City of Gold.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button className="bg-gradient-to-r from-gold to-[#f4d03f] text-black px-8 py-6"><Download className="mr-2" />Download Brochure</Button> */}
                  <a href="tel:+919220863958">  <Button className="border-2 border-gold text-gold hover:bg-gold/10 px-8 py-6 bg-transparent">Contact Us</Button> </a>
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
