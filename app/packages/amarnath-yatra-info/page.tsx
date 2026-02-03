"use client"

import React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Calendar, MapPin, AlertCircle, CheckCircle2, XCircle, Info, Bell } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function AmarnathYatraInfoPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleGetUpdates = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your backend to store email for updates
    const whatsappMessage = encodeURIComponent(`Hi, I want to receive updates about Shri Amarnath Yatra registration and travel planning. My email: ${email}`)
    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="dark min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Shri Amarnath Yatra
            </h1>
            <p className="text-xl md:text-2xl text-gold mb-2">
              Sacred Pilgrimage Information & Travel Guidance
            </p>
            <p className="text-lg text-white/80 mb-6">
              Journey to the Holy Ice Lingam Cave
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Jammu & Kashmir, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                <span>Altitude: 3,888 metres</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notice Banner */}
      <section className="py-8 bg-orange-500/10 border-y border-orange-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">Important Registration Notice</h3>
                <p className="text-white/90 mb-3">
                  Registration for Shri Amarnath Yatra is conducted <strong>ONLY</strong> through the{" "}
                  <strong>Shri Amarnathji Shrine Board (SASB)</strong>. No private travel company, including Tripfinity Travels, 
                  is authorized to issue Yatra permits or Compulsory Health Certificates.
                </p>
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a href="https://www.shriamarnathjishrine.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Official SASB Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] relative overflow-hidden">
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
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Info Card - No Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <Card className="bg-white p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Pilgrimage Information</h2>
                <p className="text-gray-600">Registration & Travel Planning Guidance</p>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Registration Authority</p>
                    <p className="text-sm">Shri Amarnathji Shrine Board (SASB) - Sole authorized body</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Routes Available</p>
                    <p className="text-sm">Pahalgam Route (48 km) & Baltal Route (14 km)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Yatra Season</p>
                    <p className="text-sm">Announced annually by SASB (typically June-August)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4">
                  Tripfinity Travels provides travel planning support only. We do not handle registration or permits.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Destination Gallery */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Sacred Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                "/amarnath-cave-ice-shiva-lingam.jpg",
                "/amarnath-yatra-pilgrims-trekking.jpg",
                "/pahalgam-base-camp-valley.jpg"
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-80 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Amarnath ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "/baltal-route-steep-mountain-path.jpg",
                "/chandanwari-snow-bridge-kashmir.jpg",
                "/sheshnag-lake-camping-site.jpg"
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative h-80 rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Amarnath Route ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* About the Pilgrimage */}
          <div className="mb-16">
            <Card className="bg-white p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Shri Amarnath Yatra</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  The Shri Amarnath Yatra is one of the most revered pilgrimages in India, drawing devotees from across 
                  the world to witness the naturally formed ice Shiva Lingam in the holy cave shrine. Located in the 
                  Himalayas of Jammu and Kashmir at an altitude of 3,888 metres, this sacred journey is a testament to 
                  faith and devotion.
                </p>
                <p>
                  The Yatra is conducted annually under the supervision and governance of the Shri Amarnathji Shrine 
                  Board (SASB), a statutory body established to ensure the safety, security, and spiritual sanctity of 
                  the pilgrimage. All Yatra guidelines, dates, routes, and eligibility criteria are decided each year 
                  by SASB based on weather conditions, security assessments, and logistical considerations.
                </p>
                <p>
                  Pilgrims undertake this challenging journey through mountainous terrain, experiencing both the physical 
                  demands of high-altitude trekking and the profound spiritual rewards of darshan at the sacred cave.
                </p>
              </div>
            </Card>
          </div>

          {/* Registration Process */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Registration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <div className="text-6xl font-bold text-blue-600 mb-4">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Official Announcement</h3>
                <p className="text-gray-700">
                  Registration is announced by SASB each year, typically several weeks before the Yatra commences. 
                  Dates, procedures, and requirements are published on the official SASB website.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-green-100 p-8">
                <div className="text-6xl font-bold text-green-600 mb-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Registration Modes</h3>
                <p className="text-gray-700">
                  Pilgrims may register through official online and/or offline modes as notified by SASB. Online 
                  registration is typically available through designated bank branches and online portals.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8">
                <div className="text-6xl font-bold text-yellow-600 mb-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-700">
                  Registration requires valid identity documents, proof of address, and a Compulsory Health Certificate 
                  (CHC) in the prescribed format. Accurate information must be provided to avoid rejection.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <div className="text-6xl font-bold text-purple-600 mb-4">04</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Permit Issuance</h3>
                <p className="text-gray-700">
                  Upon successful registration and verification, SASB issues the Yatra permit with specific travel 
                  dates and route allocation. This permit is mandatory for accessing the Yatra route.
                </p>
              </Card>
            </div>
          </div>

          {/* Eligibility Requirements */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Eligibility Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white p-6">
                <div className="text-center mb-4">
                  <Calendar className="h-12 w-12 text-gold mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">Age Requirements</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Pilgrims must fall within the permitted age group as notified by SASB each season. Typically, 
                  minimum and maximum age limits are enforced to ensure pilgrim safety during high-altitude trekking.
                </p>
              </Card>

              <Card className="bg-white p-6">
                <div className="text-center mb-4">
                  <CheckCircle2 className="h-12 w-12 text-gold mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">Medical Fitness</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  All pilgrims must be medically fit for high-altitude travel. Conditions such as heart disease, 
                  respiratory issues, or other serious ailments may disqualify pilgrims for safety reasons.
                </p>
              </Card>

              <Card className="bg-white p-6">
                <div className="text-center mb-4">
                  <Info className="h-12 w-12 text-gold mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900">Health Certificate</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  A Compulsory Health Certificate (CHC) in the prescribed SASB format is mandatory. This must be 
                  obtained from authorised medical institutions as specified by SASB.
                </p>
              </Card>
            </div>
          </div>

          {/* Routes Comparison */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12">Yatra Routes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pahalgam Route</h3>
                <p className="text-lg text-gold mb-4">Traditional Path – Longer Journey</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Approximately 48 kilometres to the holy cave</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gradual ascent over 3-5 days</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Passes through Chandanwari, Sheshnag, and Panchtarni</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Suitable for pilgrims preferring a gentler gradient</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>More time for acclimatisation</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Baltal Route</h3>
                <p className="text-lg text-gold mb-4">Shorter Path – Steeper Terrain</p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Approximately 14 kilometres to the holy cave</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Can be completed in 1-2 days</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Steeper ascent requiring good fitness levels</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Shorter duration of exposure to high altitude</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Popular amongst experienced trekkers</span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <p className="text-white/70 text-sm">
                Route selection is subject to SASB guidelines, permit allocation, and individual fitness levels.
              </p>
            </div>
          </div>

          {/* How We Can Help */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-4">How Tripfinity Travels Can Assist</h2>
            <p className="text-center text-white/70 mb-12 max-w-3xl mx-auto">
              We provide travel planning support after your successful registration with SASB. We do not handle registration or permit issuance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Registration Guidance</h3>
                <p className="text-gray-700 text-sm">
                  Explaining the official registration steps once announced by SASB, helping you understand the process, 
                  timelines, and documentation requirements.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">CHC Documentation</h3>
                <p className="text-gray-700 text-sm">
                  Providing a checklist for Compulsory Health Certificate documentation and guidance on where to obtain 
                  authorised medical certification.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Travel Planning</h3>
                <p className="text-gray-700 text-sm">
                  Comprehensive travel planning services after successful registration, including itinerary development 
                  based on your allocated route and dates.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Accommodation & Transport</h3>
                <p className="text-gray-700 text-sm">
                  Hotel and transport coordination along the Yatra route, ensuring comfortable stays and reliable 
                  connectivity to base camps.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-pink-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Route-Based Itineraries</h3>
                <p className="text-gray-700 text-sm">
                  Detailed itinerary planning for both Baltal and Pahalgam routes, including acclimatisation schedules 
                  and rest points.
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-white p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Preparation Guidance</h3>
                <p className="text-gray-700 text-sm">
                  Packing checklists, fitness preparation advice, and guidance on essential items for high-altitude 
                  trekking in varying weather conditions.
                </p>
              </Card>
            </div>
          </div>

          {/* Get Updates Form */}
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-gold/10 to-white p-8 max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <Bell className="h-12 w-12 text-gold mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Stay Updated</h2>
                <p className="text-gray-700">
                  Receive notifications when SASB opens registration and get travel planning guidance from Tripfinity
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleGetUpdates} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold text-gray-900"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-gold to-[#f4d03f] text-black hover:opacity-90 text-lg py-6">
                    <Bell className="mr-2 h-5 w-5" />
                    Get Yatra Updates
                  </Button>
                  <p className="text-xs text-gray-600 text-center">
                    We'll connect via WhatsApp to share official SASB updates and travel planning assistance
                  </p>
                </form>
              ) : (
                <div className="text-center py-6">
                  <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-900">Thank you for registering interest!</p>
                  <p className="text-gray-700">We'll reach out to you via WhatsApp with updates.</p>
                </div>
              )}
            </Card>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-100 border-2 border-gray-300 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Important Disclaimer
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Tripfinity Travels provides travel planning and informational support only. Shri Amarnath Yatra 
                registration, permits, eligibility, and rules are governed exclusively by the Shri Amarnathji Shrine 
                Board (SASB) and local authorities. Pilgrims must comply with all official guidelines.
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Plan responsibly. Travel with faith. Follow official guidelines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
