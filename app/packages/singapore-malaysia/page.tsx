"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Phone, MapPin, Calendar, Users, Check, X, CheckCircle2, Hotel, Utensils } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SingaporeMalaysiaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Singapore & Malaysia
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience the perfect blend of modern marvels and cultural heritage in two vibrant nations
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span>6 Days / 5 Nights</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span>Singapore + Malaysia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-gold" />
                  <span>Family Friendly</span>
                </div>
              </div>
            </motion.div>

            {/* Package Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-2">Package Price</p>
                    <p className="text-5xl font-bold text-gold mb-2">₹47,999</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing Basis)</p>
                    <p className="text-orange-600 text-sm mt-1">International Tour | Best Value</p>
                  </div>
                  <div className="flex gap-4">
                      <a href="tel:+919220863958">
                    <Button className="bg-gold hover:bg-gold/90 text-black font-semibold px-8 py-6 text-lg">
                      <Phone className="h-5 w-5 mr-2" />
                      Book Now
                    </Button>
                    </a>
                    {/* <Button variant="outline" className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg bg-transparent">
                      <Download className="h-5 w-5 mr-2" />
                      Download PDF
                    </Button> */}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Destination Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Explore Iconic Destinations
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Marina Bay Sands", image: "/marina-bay-sands-singapore.jpg", description: "Singapore's Iconic Landmark" },
                  { name: "Petronas Towers", image: "/petronas-towers-malaysia.jpg", description: "Twin Towers of Malaysia" },
                  { name: "Gardens by the Bay", image: "/gardens-by-bay-singapore.jpg", description: "Futuristic Nature Park" },
                  { name: "Genting Highlands", image: "/genting-highlands-malaysia.jpg", description: "Mountain Resort Paradise" },
                ].map((destination, idx) => (
                  <motion.div
                    key={destination.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{destination.name}</h3>
                        <p className="text-gold/90 text-sm">{destination.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <Card className="bg-white border-gray-200 p-8 shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Your Singapore & Malaysia Adventure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Discover the vibrant fusion of cultures, cuisines, and cutting-edge attractions in Singapore and Malaysia. This carefully crafted 6-day journey takes you through the region's most iconic landmarks, from Singapore's futuristic skyline to Malaysia's rich heritage.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience world-class attractions including Universal Studios, Gardens by the Bay, Petronas Twin Towers, and the enchanting Genting Highlands. Shop in bustling markets, savor diverse cuisines, and create unforgettable memories in two of Southeast Asia's most dynamic nations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This package is perfect for families, couples, and first-time visitors seeking a comprehensive introduction to Singapore and Malaysia's best attractions, all at an exceptional value.
                </p>
              </Card>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Package Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-orange-600 to-orange-800 border-orange-500/30 p-6 hover:shadow-xl hover:shadow-orange-500/20 transition-all">
                  <CheckCircle2 className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Universal Studios</h3>
                  <p className="text-white/90 text-sm">
                    Full day access to Singapore's premier theme park with thrilling rides and entertainment for all ages.
                  </p>
                </Card>
                <Card className="bg-gradient-to-br from-teal-600 to-teal-800 border-teal-500/30 p-6 hover:shadow-xl hover:shadow-teal-500/20 transition-all">
                  <Hotel className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Premium Accommodation</h3>
                  <p className="text-white/90 text-sm">
                    Comfortable hotels in prime locations with modern amenities and easy access to major attractions.
                  </p>
                </Card>
                <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500/30 p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
                  <Utensils className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Diverse Cuisine</h3>
                  <p className="text-white/90 text-sm">
                    Experience the region's incredible food culture with breakfast included and local dining recommendations.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                Your 6-Day Journey Unfolds
              </h2>

              <div className="space-y-4">
                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 1: Arrival in Singapore</h4>
                      <p className="text-gray-700">
                        Arrive at Changi Airport and transfer to your hotel. Evening at leisure to explore nearby attractions or rest after your journey. Overnight in Singapore.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 2: Singapore City Tour</h4>
                      <p className="text-gray-700">
                        Full day city tour including Merlion Park, Marina Bay Sands, Gardens by the Bay, Chinatown, Little India, and Arab Street. Experience Singapore's multicultural heritage. Evening optional activities. Overnight in Singapore.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 3: Universal Studios Singapore</h4>
                      <p className="text-gray-700">
                        Entire day at Universal Studios Sentosa Island. Enjoy thrilling rides, shows, and attractions across seven themed zones. Meet your favorite characters and create magical memories. Overnight in Singapore.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 4: Singapore to Malaysia</h4>
                      <p className="text-gray-700">
                        Check out and travel to Kuala Lumpur by coach. Visit Putrajaya, Malaysia's administrative capital with stunning architecture. Check into your Kuala Lumpur hotel. Evening shopping at Bukit Bintang. Overnight in Kuala Lumpur.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 5: Genting Highlands Excursion</h4>
                      <p className="text-gray-700">
                        Day trip to Genting Highlands mountain resort. Ride the cable car, visit theme parks, and enjoy cool mountain air. Evening return to Kuala Lumpur. Visit Petronas Twin Towers viewing deck (optional). Overnight in Kuala Lumpur.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">6</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Day 6: Departure</h4>
                      <p className="text-gray-700">
                        Final breakfast and check out. Last-minute shopping or sightseeing as per flight schedule. Transfer to Kuala Lumpur Airport for your departure flight with wonderful memories of Singapore and Malaysia.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <Check className="h-6 w-6" /> Package Includes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>5 nights accommodation in 3-star hotels with breakfast</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Universal Studios Singapore entry ticket</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Singapore city tour with transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Genting Highlands day tour with cable car</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Airport transfers in Singapore and Malaysia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>All intercity transfers by comfortable coach</span>
                    </li>
                  </ul>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <X className="h-6 w-6" /> Package Excludes
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>International and domestic airfare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Visa fees for Singapore and Malaysia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Lunch and dinner (gives flexibility for local exploration)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Petronas Twin Towers viewing deck tickets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Personal expenses, shopping, and optional activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Travel insurance (strongly recommended)</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </motion.div>

            {/* Why Choose This Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose This Package?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Complete Dual-Nation Experience",
                    description: "Explore the best of both Singapore and Malaysia in one seamless journey with curated attractions and experiences.",
                    bgColor: "bg-white"
                  },
                  {
                    title: "Universal Studios Included",
                    description: "Full day access to one of Asia's premier theme parks with world-class rides and entertainment included in the package price.",
                    bgColor: "bg-blue-50"
                  },
                  {
                    title: "Exceptional Value",
                    description: "At ₹47,999 per person, this package offers incredible value with accommodation, tours, and key attractions all covered.",
                    bgColor: "bg-amber-50"
                  },
                  {
                    title: "Perfect for First-Timers",
                    description: "Thoughtfully designed itinerary covering must-see attractions, ideal for families and first-time visitors to Southeast Asia.",
                    bgColor: "bg-pink-50"
                  }
                ].map((item, idx) => (
                  <Card key={idx} className={`${item.bgColor} border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                    <h3 className="text-lg font-bold text-orange-600 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore Singapore & Malaysia?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Book your adventure today and experience the perfect blend of modern attractions, cultural diversity, and unforgettable memories.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-gold to-[#f4d03f] hover:from-gold/90 hover:to-[#f4d03f]/90 text-black font-bold px-8 py-6 text-lg shadow-lg">
                    <Download className="h-5 w-5 mr-2" />
                    Download Detailed Brochure
                  </Button>
                  <Button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold px-8 py-6 text-lg shadow-lg">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Us for Booking
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
