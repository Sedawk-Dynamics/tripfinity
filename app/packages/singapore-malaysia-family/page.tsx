"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Phone, MapPin, Calendar, Users, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SingaporeMalaysiaFamilyPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/singapore-marina-bay-family.jpg" alt="Singapore Marina Bay" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Singapore & Malaysia</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">Your Perfect 6-Day Southeast Asian Adventure</p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-gold" /><span>6 Days / 5 Nights</span></div>
                <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /><span>Singapore - Malaysia</span></div>
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
                    <p className="text-5xl font-bold text-gold mb-2">₹47,999</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing)</p>
                    <p className="text-orange-600 text-sm mt-1">Family Package | Complete Thailand</p>
                  </div>
            <a href="tel:+919220863958">      <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold h-14 px-8"><Phone className="h-5 w-5 mr-2" />Book Now</Button>  </a>
                </div>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Southeast Asia's Best Attractions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/sentosa-island-singapore.jpg", alt: "Sentosa Island Singapore" },
                  { src: "/malaysia-petronas-family.jpg", alt: "Petronas Towers Malaysia" },
                  { src: "/batu-caves-malaysia.jpg", alt: "Batu Caves Malaysia" }
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
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 6-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  { day: 1, title: "Arrival & Night Safari", description: "Arrive in Singapore. Evening visit to the world's first nocturnal wildlife park with animal shows and complimentary tram ride through natural nighttime habitats." },
                  { day: 2, title: "Universal Studios Singapore", description: "Full day at Southeast Asia's only Universal Studios. Experience 28 thrilling rides across 7 themed zones plus magnificent aquarium with 800 marine species." },
                  { day: 3, title: "Sentosa Island Experience", description: "Explore Sentosa via cable car. Visit Tiger Sky Tower, Madame Tussauds, 4D Marvel experience, boat ride, Tanjong Beach, and Wings of Time show at 7:30 PM." },
                  { day: 4, title: "Border Crossing to Malaysia", description: "Travel by comfortable air-conditioned coach from Singapore to Malaysia. Check into your Malaysian hotel and relax for the evening." },
                  { day: 5, title: "Batu Caves & Genting Highlands", description: "Visit iconic Batu Caves with 272 colorful steps and golden Lord Murugan statue. Ascend to Genting Highlands via scenic cable car for mountain resort views." },
                  { day: 6, title: "Departure", description: "After breakfast, enjoy free time for last-minute shopping. Transfer to airport for your departure flight with wonderful family memories." }
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
                  { title: "Family-Friendly Attractions", description: "Night Safari, Universal Studios, and Sentosa Island offer perfect entertainment for all ages with thrilling rides and shows.", bgColor: "bg-white" },
                  { title: "Two Countries, One Trip", description: "Experience the best of Singapore's modern marvels and Malaysia's natural wonders and cultural treasures in one journey.", bgColor: "bg-blue-50" },
                  { title: "Hassle-Free Travel", description: "All transfers, attractions, and accommodations included. Cross-border coach travel handled professionally with comfortable AC coaches.", bgColor: "bg-amber-50" },
                  { title: "Great Value Package", description: "Exceptional value including 5 nights accommodation, daily breakfast, all major attractions, and comfortable transfers throughout.", bgColor: "bg-pink-50" }
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
                    {["3 nights Singapore (4-star PARKROYAL or 3-star Ibis Styles)", "2 nights Malaysia (4-star Ramada or 3-star Metro Star)", "Daily breakfast included", "Night Safari with shows & tram", "Universal Studios admission", "Sentosa attractions package", "Batu Caves & Genting tour", "All transfers in AC coaches", "Airport meet & greet service"].map((item, idx) => (
                      <li key={idx} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                    ))}
                  </ul>
                </Card>
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2"><XCircle className="h-6 w-6" />Package Excludes</h3>
                  <ul className="space-y-2 text-sm">
                    {["Visa fees for Singapore & Malaysia", "Lunch and dinner meals", "Travel insurance", "Personal expenses", "Optional activities", "Shopping", "Tips and gratuities"].map((item, idx) => (
                      <li key={idx} className="flex gap-2"><XCircle className="h-4 w-4 text-red-600 mt-0.5" /><span className="text-gray-900">{item}</span></li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for Your Family Adventure?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">Create unforgettable memories exploring Singapore's futuristic cityscape and Malaysia's cultural treasures together as a family.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8"><Download className="h-5 w-5 mr-2" />Download Detailed Brochure</Button> */}
                  <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">
                    <a href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20the%20Singapore%20Malaysia%20Family%20package" target="_blank" rel="noopener noreferrer">
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
