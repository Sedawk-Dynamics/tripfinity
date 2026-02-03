"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Calendar, MapPin, Users, CheckCircle2, XCircle,Phone  } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CharDhamYatraPage() {
  const handleDownloadPDF = () => {
    // Create a link to download the PDF
    const link = document.createElement("a")
    link.href = "/char-dham-yatra.pdf"
    link.download = "Char-Dham-Yatra-Footsteps-to-the-Divine.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
              Char Dham Yatra
            </h1>
            <p className="text-xl md:text-2xl text-gold mb-2">
              Footsteps to the Divine
            </p>
            <p className="text-lg text-white/80 mb-6">
              Yamunotri • Gangotri • Kedarnath • Badrinath
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Pickup & Drop: Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gold" />
                <span>Duration: 10 Days / 9 Nights</span>
              </div>
            </div>
          </motion.div>
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Price & Download Section */}
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
                    <p className="text-5xl font-bold text-gold mb-2">₹64,999</p>
                    <p className="text-gray-600 text-sm">per person (Twin Sharing Basis)</p>
                    <p className="text-orange-600 text-sm mt-1">Budget Category | Best Value</p>
                  </div>
                  {/* <Button
                    onClick={handleDownloadPDF}
                    className="bg-gradient-to-r from-gold to-[#f4d03f] hover:from-[#f4d03f] hover:to-gold text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button> */}
                  <a href="tel:+919220863958">
                  <Button
                    // onClick={handleDownloadPDF}
                    className="bg-gradient-to-r from-gold to-[#f4d03f] hover:from-[#f4d03f] hover:to-gold text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                The Sacred Four Dhams
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Yamunotri", image: "/yamunotri-temple.jpg", description: "Source of River Yamuna" },
                  { name: "Gangotri", image: "/gangotri-temple.jpg", description: "Origin of River Ganga" },
                  { name: "Kedarnath", image: "/kedarnath-temple.jpg", description: "Abode of Lord Shiva" },
                  { name: "Badrinath", image: "/badrinath-temple.jpg", description: "Abode of Lord Vishnu" },
                ].map((dham, idx) => (
                  <motion.div
                    key={dham.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={dham.image || "/placeholder.svg"}
                        alt={dham.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white mb-1">{dham.name}</h3>
                        <p className="text-gold/90 text-sm">{dham.description}</p>
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
                  Your Complete Himalayan Pilgrimage Journey
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Embark on a sacred journey to the four most revered temples in the Himalayas. This carefully designed
                  pilgrimage covers Yamunotri, Gangotri, Kedarnath, and Badrinath—the spiritual heart of India's
                  devotional landscape.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Embark on a sacred journey to the four most revered temples in the Himalayas. This carefully designed
                  pilgrimage covers Yamunotri, Gangotri, Kedarnath, and Badrinath—the spiritual heart of India's
                  devotional landscape.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our comprehensive package ensures your journey is comfortable, safe, and spiritually enriching. With
                  helicopter service to Kedarnath, this yatra is especially suitable for families and senior citizens who
                  seek divine blessings without strenuous travel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Experience the pristine beauty of the Himalayas, the serenity of ancient temples, and the warmth of
                  traditional hospitality throughout your ten-day pilgrimage.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Experience the pristine beauty of the Himalayas, the serenity of ancient temples, and the warmth of
                  traditional hospitality throughout your ten-day pilgrimage.
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
                  <h3 className="text-xl font-bold text-white mb-2">Kedarnath Helicopter Included</h3>
                  <p className="text-white/90 text-sm">
                    Avoid the challenging 16 km trek with our complimentary helicopter service, making the yatra
                    accessible for all age groups.
                  </p>
                </Card>
                <Card className="bg-gradient-to-br from-teal-600 to-teal-800 border-teal-500/30 p-6 hover:shadow-xl hover:shadow-teal-500/20 transition-all">
                  <Users className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Senior Citizen Friendly</h3>
                  <p className="text-white/90 text-sm">
                    Thoughtfully paced itinerary with comfortable accommodation and transportation, ensuring a pleasant
                    journey for elderly pilgrims.
                  </p>
                </Card>
                <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 border-indigo-500/30 p-6 hover:shadow-xl hover:shadow-indigo-500/20 transition-all">
                  <CheckCircle2 className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Quality Assured</h3>
                  <p className="text-white/90 text-sm">
                    Clean, comfortable hotels and reliable vehicles throughout your pilgrimage, with experienced drivers
                    familiar with mountain routes.
                  </p>
                </Card>
              </div>
            </motion.div>

            {/* Day-by-Day Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Your Sacred Journey</h2>

              {/* Days 1-4 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">Days 1 to 4</h3>
                <div className="space-y-4">
                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 1: Delhi → Barkot</h4>
                        <p className="text-gray-700">
                          Your pilgrimage begins with a scenic drive through Mussoorie's beautiful hill roads. Arrive in
                          Barkot for overnight rest and acclimatization to the mountain climate.
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
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 2: Yamunotri Darshan</h4>
                        <p className="text-gray-700">
                          Drive to Janki Chatti, then proceed to Yamunotri Temple via trek or pony ride. Take a holy bath
                          in the hot springs and receive blessings at the source of River Yamuna. Return to Barkot for the
                          night.
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
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 3: Barkot → Uttarkashi</h4>
                        <p className="text-gray-700">
                          Journey through picturesque Himalayan valleys to Uttarkashi. Visit the ancient Kashi Vishwanath
                          Temple and immerse yourself in the spiritual atmosphere of this sacred town.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">4</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 4: Gangotri Darshan</h4>
                        <p className="text-gray-700">
                          Early morning departure for Gangotri, the origin of the holy River Ganga. Take a sacred dip,
                          offer prayers at the temple, and experience divine tranquility before returning to Uttarkashi.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Days 5-7 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-teal-600 mb-4">Days 5 to 7</h3>
                <div className="space-y-4">
                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">5</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 5: Gangotri Darshan</h4>
                        <p className="text-gray-700">
                          Visit the sacred Gangotri Temple where River Ganga originates. Witness the spectacular natural
                          beauty and take blessings at this holy site. Return to Uttarkashi.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">6</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 6: Uttarkashi → Phata</h4>
                        <p className="text-gray-700">
                          Drive through the enchanting Himalayan landscape to Phata, the base for your Kedarnath helicopter
                          journey. Check into your hotel and prepare for the next day's spiritual experience.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">7</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 5: Uttarkashi → Guptkashi</h4>
                        <p className="text-gray-700">
                          Scenic mountain journey through winding roads and breathtaking vistas. Evening rest allows proper
                          acclimatization before the Kedarnath helicopter journey.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">6</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Day 6: Kedarnath by Helicopter ⭐
                        </h4>
                        <p className="text-gray-700 mb-2">
                          <strong className="text-orange-600">The highlight of your yatra!</strong> Helicopter transfer from
                          Phata/Sersi to Kedarnath Temple. Receive blessings at one of the twelve Jyotirlingas, situated
                          at 3,583 metres. Return to Guptkashi by evening.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">7</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 7: Guptkashi → Badrinath</h4>
                        <p className="text-gray-700">
                          Drive through Joshimath to Badrinath. Arrive in time for the enchanting evening aarti at
                          Badrinath Temple, one of the four sacred Char Dham sites.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Days 8-10 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-indigo-600 mb-4">Days 8 to 10</h3>
                <div className="space-y-4">
                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">8</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 8: Phata → Badrinath</h4>
                        <p className="text-gray-700">
                          Travel to Badrinath, one of the holiest temples in India dedicated to Lord Vishnu. Visit the
                          temple for evening aarti and explore Mana Village, the last Indian village before Tibet border.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">9</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 9: Badrinath → Rudraprayag</h4>
                        <p className="text-gray-700">
                          After morning darshan at Badrinath Temple, journey to Rudraprayag. Visit the confluence of Rivers
                          Alaknanda and Mandakini. Overnight stay in a comfortable hotel.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">10</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 8: Badrinath Darshan → Rudraprayag</h4>
                        <p className="text-gray-700">
                          Morning darshan at Badrinath Temple dedicated to Lord Vishnu. Visit Mana Village, the last
                          Indian village before Tibet, and witness the mythological Vyas Gufa and Ganesh Gufa. Drive to
                          Rudraprayag for overnight stay at the sacred confluence of Alaknanda and Mandakini rivers.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">9</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 9: Rudraprayag → Haridwar</h4>
                        <p className="text-gray-700">
                          Scenic return journey through the Himalayan foothills. Arrive in Haridwar by evening to witness
                          the mesmerizing Ganga Aarti at Har Ki Pauri, a perfect spiritual conclusion to your Char Dham
                          Yatra.
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="bg-white border-gray-200 p-6 shadow-md hover:border-gray-300 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/30 flex items-center justify-center">
                        <span className="text-gold font-bold text-lg">10</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Day 10: Departure</h4>
                        <p className="text-gray-700">
                          After breakfast, transfer to Haridwar, Rishikesh, or Dehradun for your onward journey. Depart
                          with blessed memories and spiritual fulfilment from your sacred pilgrimage.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>

            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Comfortable Accommodation Throughout
              </h2>
              <p className="text-white/70 text-center mb-8 max-w-3xl mx-auto">
                We've carefully selected clean, comfortable hotels at each destination to ensure restful nights after your
                daily journeys and darshans. All properties offer basic modern amenities whilst maintaining proximity to
                temple sites.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { place: "Barkot", hotel: "Hotel Shivlinga or similar" },
                  { place: "Uttarkashi", hotel: "Hotel Maneri or similar" },
                  { place: "Guptkashi", hotel: "Hotel Dev Dham or similar" },
                  { place: "Badrinath", hotel: "Hotel Snow Crest or similar" },
                  { place: "Rudraprayag", hotel: "Hotel Monal or similar" },
                ].map((item, idx) => (
                  <Card key={idx} className="bg-white border-gray-200 p-6 shadow-md">
                    <h4 className="text-lg font-bold text-orange-600 mb-2">{item.place}</h4>
                    <p className="text-gray-700 text-sm">{item.hotel}</p>
                  </Card>
                ))}
              </div>
              <p className="text-white/70 text-sm text-center mt-6 italic">
                Similar category hotels may be provided based on availability during peak season, ensuring the same comfort
                standards.
              </p>
            </motion.div>

            {/* Helicopter Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <Card className="bg-white border-gray-200 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Helicopter Service Details</h2>
                <h3 className="text-xl font-bold text-gold mb-4">Kedarnath Aerial Journey</h3>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong className="text-gray-900">Route:</strong> Phata / Sersi Helipad → Kedarnath Temple → Return
                  </p>
                  <p>
                    <strong className="text-gray-900">Flight Duration:</strong> Approximately 10 minutes each way
                  </p>
                  <p>
                    <strong className="text-gray-900">Included:</strong> Complete helicopter ticket cost covered in the
                    package price
                  </p>
                  <p>
                    <strong className="text-gray-900">Benefits:</strong> Eliminates the strenuous 16 km trek, making the
                    yatra accessible for senior citizens and those with physical limitations. The aerial route offers
                    breathtaking views of the Himalayan peaks and valleys.
                  </p>
                  <p className="text-orange-600 text-sm mt-4">
                    <strong>Important:</strong> Helicopter operations are subject to weather conditions. In case of
                    cancellation due to adverse weather, alternative arrangements or refunds will be processed.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6 text-center">What's Included & Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6" />
                    Package Includes
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "9 Nights Accommodation - Clean, comfortable hotels at all destinations",
                      "Daily Meals - Breakfast and dinner throughout the journey",
                      "Kedarnath Helicopter - Complete return journey by helicopter",
                      "All Transfers - Comfortable vehicle with experienced driver",
                      "Sightseeing - All temple visits and local attractions as per itinerary",
                      "Driver Allowances - Driver charges, tolls, parking, and fuel",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-white border-gray-200 p-6 shadow-md">
                  <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
                    <XCircle className="h-6 w-6" />
                    Package Excludes
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Pony / Palki Charges - Available for hire at Yamunotri if required",
                      "Personal Expenses - Laundry, telephone calls, beverages, tips",
                      "VIP Darshan - Special priority queues at temples (available on request)",
                      "Travel Insurance - We recommend purchasing comprehensive coverage",
                      "Lunch - Provides flexibility to choose meals according to preference",
                      "Anything Not Mentioned - Any services not explicitly listed in inclusions",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
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
                    title: "Complete 4 Dham Coverage",
                    description: "Experience all four sacred temples—Yamunotri, Gangotri, Kedarnath, and Badrinath—in one comprehensive, well-organized pilgrimage journey.",
                    bgColor: "bg-white"
                  },
                  {
                    title: "Helicopter to Kedarnath",
                    description: "Avoid the challenging trek with complimentary helicopter service, making this sacred site accessible to pilgrims of all ages and fitness levels.",
                    bgColor: "bg-blue-50"
                  },
                  {
                    title: "Exceptional Value",
                    description: "At ₹64,999 per person, this package offers outstanding value with helicopter included, quality accommodation, and comprehensive services throughout.",
                    bgColor: "bg-amber-50"
                  },
                  {
                    title: "Senior Citizen Friendly",
                    description: "Thoughtfully designed itinerary with comfortable pacing, quality hotels, and helicopter service—perfect for elderly pilgrims and families seeking spiritual fulfillment.",
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
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center"
            >
              <Card className="bg-white border-gray-200 p-12 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Sacred Journey?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                  Book your sacred journey today and receive blessings from the four holiest shrines in the Himalayas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {/* <Button
                    onClick={handleDownloadPDF}
                    className="bg-gradient-to-r from-gold to-[#f4d03f] hover:from-[#f4d03f] hover:to-gold text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Detailed Brochure
                  </Button> */}
                    <a href="tel:+919220863958">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10 px-8 py-6 text-lg rounded-xl bg-transparent"
                  >
                    Contact Us for Booking
                  </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
