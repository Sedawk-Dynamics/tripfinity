"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Phone, MapPin, Calendar, Users, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingContactForm } from "@/components/booking-contact-form"
import { useState } from "react"

export default function BaliBlissPage() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f]">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/bali-temple-rice-terraces.jpg"
              alt="Bali Paradise"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0e27]" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Bali Bliss Edition
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                February Dhamaka - Tropical Paradise Awaits
              </p>
              <div className="flex flex-wrap gap-6 justify-center text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span>7 Days / 6 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Bali, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gold" />
                  <span>Min 2 Person</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/">
                <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Package Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹68,499</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing)</p>
                    <p className="text-orange-600 text-sm mt-1">Premium Category | Best Deal</p>
                  </div>
                  
                  <a href="tel:+919220863958">
                  <Button 
                    size="lg" 
                    className="bg-gold hover:bg-gold/90 text-black font-semibold h-14 px-8"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Book Now
                  </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Destination Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Explore Bali's Beauty</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { src: "/bali-ubud-rice-terraces.jpg", alt: "Ubud Rice Terraces" },
                  { src: "/tanah-lot-temple-bali.jpg", alt: "Tanah Lot Temple" },
                  { src: "/bali-beach-seminyak.jpg", alt: "Seminyak Beach" }
                ].map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-lg overflow-hidden group">
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Your 7-Day Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your 7-Day Journey Unfolds</h2>
              <div className="space-y-6">
                {[
                  {
                    day: 1,
                    title: "Arrival in Bali",
                    description: "Welcome to paradise! Airport pickup and transfer to hotel. Evening at leisure to explore Seminyak Beach."
                  },
                  {
                    day: 2,
                    title: "Ubud Cultural Experience",
                    description: "Visit Ubud Monkey Forest, Tegalalang Rice Terraces, and traditional art markets. Experience Balinese culture and crafts."
                  },
                  {
                    day: 3,
                    title: "Water Temple & Tanah Lot",
                    description: "Explore Tirta Empul holy water temple, scenic coffee plantations, and witness spectacular sunset at Tanah Lot Temple."
                  },
                  {
                    day: 4,
                    title: "Beach Day & Water Sports",
                    description: "Full day at Nusa Dua Beach with water sports activities. Optional snorkeling, banana boat, and jet ski."
                  },
                  {
                    day: 5,
                    title: "Island Adventure - Nusa Penida",
                    description: "Day trip to Nusa Penida Island. Visit Kelingking Beach, Angel's Billabong, and Crystal Bay for snorkeling."
                  },
                  {
                    day: 6,
                    title: "Shopping & Spa Relaxation",
                    description: "Visit Seminyak shopping district and traditional markets. Relax with authentic Balinese spa treatment in the evening."
                  },
                  {
                    day: 7,
                    title: "Departure",
                    description: "Leisure morning until checkout. Transfer to Ngurah Rai International Airport for your flight home with memories of paradise."
                  }
                ].map((day, idx) => (
                  <Card key={idx} className="bg-white border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-gold text-black font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        {day.day}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Why Choose This Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose This Package?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Cultural Immersion", description: "Experience authentic Balinese culture with temple visits, traditional arts, and local experiences.", bgColor: "bg-white" },
                  { title: "Beach Paradise", description: "Relax on pristine beaches with water sports and island hopping adventures to Nusa Penida.", bgColor: "bg-blue-50" },
                  { title: "All-Inclusive Value", description: "Comprehensive package including hotels, transfers, tours, and spa treatment at unbeatable price.", bgColor: "bg-amber-50" },
                  { title: "January Special", description: "Special Dhamaka pricing for January travel with premium inclusions and tropical weather guarantee.", bgColor: "bg-pink-50" }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Package Includes
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>6 nights accommodation in 4-star hotels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Daily breakfast at hotels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Airport transfers and all sightseeing in private AC vehicle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Nusa Penida island tour with fast boat transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Traditional Balinese spa session</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>All entrance fees and parking charges</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Package Excludes
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>International flight tickets to/from Bali</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Lunch and dinner meals (available at hotels)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Water sports activities and optional tours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Travel insurance and visa fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Personal expenses and shopping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span>Any services not mentioned in inclusions</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Bali Paradise?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Book your tropical escape today and experience the magic of Bali's beaches, temples, and culture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button size="lg" className="bg-gradient-to-r from-gold to-[#f4d03f] hover:opacity-90 text-black font-semibold h-14 px-8">
                    <Download className="h-5 w-5 mr-2" />
                    Download Detailed Brochure
                  </Button> */}
                    <a href="tel:+919220863958">
                  <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold/10 h-14 px-8 font-semibold bg-transparent">
                    Contact Us for Booking
                  </Button>
                    </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />

      {/* Booking Contact Form Modal */}
      
    </>
  )
}
