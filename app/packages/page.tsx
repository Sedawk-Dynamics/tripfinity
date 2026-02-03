"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Plane } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const februaryDhamaka = [
  {
    id: "bali-dhamaka",
    title: "Bali Bliss Edition",
    price: "₹68,499",
    originalPrice: "₹68,000",
    duration: "7 Days / 6 Nights",
    location: "Bali, Indonesia",
    image: "/bali-temple-rice-terraces.jpg",
    description: "January special offer! Tropical paradise with stunning temples, rice terraces, and pristine beaches.",
    tags: ["International", "Beach", "February Dhamaka"],
    href: "/packages/bali-bliss",
    discount: "20% OFF"
  }
]

const packageCategories = {
  spiritual: [
    {
      id: "amarnath-yatra",
      title: "Shri Amarnath Yatra Information",
      price: "Registration via SASB",
      duration: "As per SASB Guidelines",
      location: "Jammu & Kashmir",
      image: "/amarnath-cave-ice-shiva-lingam.jpg",
      description: "Sacred pilgrimage to witness the ice Shiva Lingam. Registration ONLY through Shri Amarnathji Shrine Board. We provide travel planning guidance.",
      tags: ["Spiritual", "High Altitude", "Info Only"],
      href: "/packages/amarnath-yatra-info"
    },
    {
      id: "char-dham-yatra",
      title: "Char Dham Yatra",
      price: "₹49,999",
      duration: "8 Days / 7 Nights",
      location: "Uttarakhand, India",
      image: "/char-dham-four-temples-collage-uttarakhand.jpg",
      description: "Experience all four sacred temples—Yamunotri, Gangotri, Kedarnath, and Badrinath—with helicopter service included.",
      tags: ["Spiritual", "Adventure", "Helicopter"],
      href: "/packages/char-dham-yatra"
    },
    {
      id: "12-jyotirlinga",
      title: "12 Jyotirlinga Darshan Yatra",
      price: "₹75,000",
      duration: "12-15 Days",
      location: "Pan-India Circuit",
      image: "/jyotirlinga-temples-collage.jpg",
      description: "Complete sacred circuit of all 12 Jyotirlingas of Lord Shiva across India via Bharat Gaurav Tourist Train.",
      tags: ["Spiritual", "Train Journey", "Pilgrimage"],
      href: "/packages/12-jyotirlinga-yatra"
    },
    {
      id: "vaishno-devi",
      title: "Vaishno Devi Divine Express",
      price: "₹9,999",
      duration: "3 Nights / 4 Days",
      location: "Katra, Jammu",
      image: "/vaishno-devi-temple-hillside-night.jpg",
      description: "Sacred pilgrimage to Mata Vaishno Devi with comfortable train travel from Delhi and hotel stay in Katra.",
      tags: ["Spiritual", "Train Journey", "Budget"],
      href: "/packages/vaishno-devi-express"
    },
    {
      id: "varanasi-kashi",
      title: "Varanasi – Kashi Darshan",
      price: "₹18,999",
      duration: "3 Days / 2 Nights",
      location: "Varanasi, Uttar Pradesh",
      image: "/varanasi-kashi-ghats-temples.jpg",
      description: "Experience the spiritual capital of India with sacred Ganga Aarti and Kashi Vishwanath Temple darshan for families.",
      tags: ["Spiritual", "Family", "Cultural"],
      href: "/packages/varanasi-kashi-darshan"
    }
  ],
  soloEdition: [
    {
      id: "thailand-solo",
      title: "Thailand Solo Edition",
      price: "₹1,19,999",
      duration: "9 Days / 8 Nights",
      location: "Thailand",
      image: "/thailand-phuket-beach.jpg",  
      description: "Designed for solo travelers with Bangkok, Chiang Mai, and Phuket/Krabi experiences. Includes Songkran Festival in April.",
      tags: ["Solo Travel", "Adventure", "Culture"],
      href: "/packages/thailand-solo-edition"
    },
    {
      id: "dubai-solo",
      title: "Dubai Solo Edition",
      price: "₹1,24,999",
      duration: "5 Days / 4 Nights",
      location: "Dubai, UAE",
      image: "/dubai-burj-khalifa-night.jpg",
      description: "Luxury meets value for solo travelers with mix of affordable and 5-star hotels, desert safari, and Burj Khalifa experience.",
      tags: ["Solo Travel", "Luxury", "Adventure"],
      href: "/packages/dubai-solo-edition"
    }
    
  ],
  familyHolidays: [
    {
      id: "singapore-malaysia-family",
      title: "Singapore & Malaysia Family Adventure",
      price: "₹47,999",
      duration: "6 Days / 5 Nights",
      location: "Singapore & Malaysia",
      image: "/singapore-marina-bay-family.jpg",
      description: "Perfect family journey featuring Night Safari, Universal Studios, Sentosa Island, Batu Caves, and Genting Highlands.",
      tags: ["Family", "Adventure", "Theme Parks"],
      href: "/packages/singapore-malaysia-family"
    },
    {
      id: "vietnam-unveiled",
      title: "Vietnam Unveiled",
      price: "₹84,999",
      duration: "8 Days / 7 Nights",
      location: "Vietnam",
      image: "/vietnam-halong-bay-boats.jpg",
      description: "Journey through Vietnam's stunning landscapes from Ha Long Bay to the Mekong Delta with cultural immersion.",
      tags: ["Solo Travel", "Culture", "Nature"],
      href: "/packages/vietnam-unveiled"
    },
    {
      id: "malaysian-mosaic",
      title: "Malaysian Mosaic: Cities, Heritage & Islands",
      price: "₹92,999",
      duration: "9 Days / 8 Nights",
      location: "Malaysia",
      image: "/malaysia-petronas-family.jpg",
      description: "Discover Kuala Lumpur, historic Malacca, cultural Penang, and tropical Langkawi. Perfect blend of culture, cuisine, and beaches.",
      tags: ["Family", "Cultural", "Beach"],
      href: "/packages/malaysian-mosaic"
    },
    {
      id: "varanasi-kashi",
      title: "Kashi Darshan - Family Package",
      price: "₹35,999",
      duration: "5 Days / 4 Nights",
      location: "Varanasi, India",
      image: "/kashi-vishwanath-temple.jpg",
      description: "Sacred family journey to the spiritual capital of India with ghats, temples, and Ganga aarti experiences.",
      tags: ["Family", "Spiritual", "Cultural"],
      href: "/packages/varanasi-kashi-darshan"
    }
  ],
  honeymoon: [
    {
      id: "peru-honeymoon",
      title: "Forever Begins in Peru",
      price: "₹4,99,999",
      duration: "10 Days / 9 Nights",
      location: "Peru, South America",
      image: "/peru-machu-picchu-mountains.jpg",
      description: "A romantic honeymoon adventure exploring Machu Picchu, Rainbow Mountain, and luxurious Peruvian experiences.",
      tags: ["Honeymoon", "Luxury", "Adventure"],
      href: "/packages/peru-honeymoon"
    },
    {
      id: "bali-bliss",
      title: "Bali Bliss Edition",
      price: "₹68,499",
      duration: "7 Days / 6 Nights",
      location: "Bali, Indonesia",
      image: "/bali-temple-rice-terraces.jpg",
      description: "Romantic paradise with pristine beaches, ancient temples, and lush rice terraces perfect for honeymooners.",
      tags: ["Honeymoon", "Beach", "Relaxation"],
      href: "/packages/bali-bliss"
    },
    {
      id: "goa-honeymoon",
      title: "The Goa Collection: Honeymoon Edition",
      price: "₹1,09,999",
      duration: "6 Nights / 7 Days",
      location: "Goa, India",
      image: "/goa-honeymoon-beach.jpg",
      description: "Perfect blend of North and South Goa with romantic experiences, beach tours, and couple-friendly activities.",
      tags: ["Honeymoon", "Beach", "Romantic"],
      href: "/packages/goa-honeymoon-collection"
    },
    {
      id: "maldives-honeymoon",
      title: "Azure Infinity: Maldivian Love Story",
      price: "₹1,45,000",
      duration: "5-6 Nights",
      location: "Maldives",
      image: "/maldives-overwater-villas.jpg",
      description: "Ultimate romantic escape with overwater villas, pristine lagoons, and luxury resort experiences for couples.",
      tags: ["Honeymoon", "Luxury", "Beach"],
      href: "/packages/maldives-honeymoon"
    }
  ],
  weekendGetaways: [
    {
      id: "jim-corbett-weekend",
      title: "Jim Corbett Friends' Weekend Escape",
      price: "₹44,999",
      duration: "2 Nights / 3 Days",
      location: "Jim Corbett, Uttarakhand",
      image: "/jim-corbett-wildlife-safari.jpg",
      description: "Disconnect from screens, reconnect with nature. Wildlife safaris, bonfire evenings, and riverside relaxation with friends.",
      tags: ["Weekend", "Wildlife", "Nature"],
      href: "/packages/jim-corbett-weekend"
    },
    {
      id: "nainital-weekend",
      title: "Nainital Friends' Weekend Escape",
      price: "₹39,999",
      duration: "2 Nights / 3 Days",
      location: "Nainital, Uttarakhand",
      image: "/nainital-naini-lake-boats.jpg",
      description: "Lake views, cool air, and easy hill days. Boat rides, scenic viewpoints, and café hopping in the perfect hill station.",
      tags: ["Weekend", "Hills", "Leisure"],
      href: "/packages/nainital-weekend"
    },
    {
      id: "rishikesh-weekend",
      title: "Rishikesh Friends' Weekend Escape",
      price: "₹29,999",
      duration: "2 Nights / 3 Days",
      location: "Rishikesh, Uttarakhand",
      image: "/rishikesh-ganges-rafting.jpg",
      description: "Adventure meets serenity. White water rafting, riverside yoga, and bonfire nights in the yoga capital of the world.",
      tags: ["Weekend", "Adventure", "Spiritual"],
      href: "/packages/rishikesh-weekend"
    },
    {
      id: "neemrana-weekend",
      title: "Neemrana Luxury Friends' Escape",
      price: "₹69,999",
      duration: "1 Night / 2 Days",
      location: "Neemrana, Rajasthan",
      image: "/neemrana-fort-palace-heritage.jpg",
      description: "A royal break just a drive away. Sleep in a 15th-century fort palace with heritage charm and modern luxury.",
      tags: ["Weekend", "Heritage", "Luxury"],
      href: "/packages/neemrana-weekend"
    },
    {
      id: "jaipur-weekend",
      title: "Jaipur Friends' Weekend Escape",
      price: "₹34,999",
      duration: "2 Nights / 3 Days",
      location: "Jaipur, Rajasthan",
      image: "/jaipur-hawa-mahal-pink-city.jpg",
      description: "Royal days, lively nights. Explore magnificent forts, vibrant bazaars, and the Pink City's hidden gems.",
      tags: ["Weekend", "Heritage", "Culture"],
      href: "/packages/jaipur-weekend"
    },
    {
      id: "mussoorie-weekend",
      title: "Mussoorie & Landour Friends' Escape",
      price: "₹39,999",
      duration: "2 Nights / 3 Days",
      location: "Mussoorie, Uttarakhand",
      image: "/mussoorie-landour-himalayan-hills.jpg",
      description: "Tranquil retreat in the Himalayas. Colonial charm, misty hills, and peaceful moments with friends in nature.",
      tags: ["Weekend", "Hills", "Peaceful"],
      href: "/packages/mussoorie-weekend"
    },
    {
      id: "manali-weekend",
      title: "Manali Weekend Escape",
      price: "₹7,000",
      duration: "5 Days / 4 Nights",
      location: "Himachal Pradesh, India",
      image: "/manali-himalayas-snow-valley.jpg",
      description: "Quick getaway to snow-capped mountains with adventure activities and scenic beauty perfect for a refreshing break.",
      tags: ["Weekend", "Adventure", "Mountains"],
      href: "/packages/manali-escape"
    }
  ]
}

const categoryInfo = {
  spiritual: {
    title: "Spiritual Journeys",
    description: "Sacred pilgrimages and divine experiences across India's holiest sites",
    icon: "🕉️"
  },
  soloEdition: {
    title: "Solo Edition",
    description: "Thoughtfully curated adventures designed for independent travelers",
    icon: "🎒"
  },
  familyHolidays: {
    title: "Family Holidays",
    description: "Memorable vacations perfect for families to create lasting bonds",
    icon: "👨‍👩‍👧‍👦"
  },
  honeymoon: {
    title: "Honeymoon",
    description: "Romantic escapes designed for newlyweds and couples",
    icon: "💑"
  },
  weekendGetaways: {
    title: "Weekend Getaways",
    description: "Quick escapes for short breaks and refreshing getaways",
    icon: "🏖️"
  }
}

export default function PackagesPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-[#0a0e27] via-[#0c1929] to-[#1e3a5f] overflow-hidden">
        {/* Animated Background */}
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
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Explore Our <span className="text-gold">Travel Packages</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Curated travel experiences across categories designed for every type of traveler
            </p>
          </motion.div>
        </div>
      </section>

      {/* February Dhamaka Section */}
      <section className="py-16 bg-gradient-to-b from-[#1e3a5f] to-[#0c1929] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-10 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold text-xl shadow-xl">
                🔥 February Dhamaka - Limited Time Offers!
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Exclusive February Deals</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Grab these incredible discounts on our most popular packages. Limited slots available!
            </p>
          </motion.div>

          {/* Dhamaka Package */}
          <div className="flex justify-center mb-8">
            {februaryDhamaka.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={pkg.href}>
                  <Card className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer h-full border-4 border-orange-500/30 max-w-md w-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={pkg.image || "/placeholder.svg"}
                        alt={pkg.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Duration Badge */}
                      <div className="absolute top-4 left-4 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                        {pkg.duration}
                      </div>
                      {/* Discount Badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse">
                        {pkg.discount}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {pkg.title}
                      </h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pkg.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-3 py-1 rounded-full ${
                              tag === "February Dhamaka" 
                                ? "bg-orange-100 text-orange-700 font-bold"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {pkg.description}
                      </p>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{pkg.location}</span>
                      </div>

                      {/* Price Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-sm text-gray-500 line-through">{pkg.originalPrice}</p>
                          <p className="text-2xl font-bold text-orange-600">{pkg.price}</p>
                          <p className="text-xs text-gray-500">per person</p>
                        </div>
                        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                          Book Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-16 bg-gradient-to-b from-[#0c1929] to-[#0a0e27]">
        <div className="container mx-auto px-4">
          {Object.entries(packageCategories).map(([categoryKey, packages], categoryIndex) => {
            const category = categoryInfo[categoryKey as keyof typeof categoryInfo]
            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                {/* Category Header */}
                <div className="text-center mb-10">
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h2 className="text-4xl font-bold text-white mb-3">{category.title}</h2>
                  <p className="text-white/70 text-lg max-w-2xl mx-auto">{category.description}</p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={pkg.href}>
                        <Card className="group bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                          {/* Image */}
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={pkg.image || "/placeholder.svg"}
                              alt={pkg.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-gold text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                              {pkg.price}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{pkg.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span className="truncate">{pkg.location}</span>
                              </div>
                            </div>

                            <p className="text-gray-700 mb-4 line-clamp-2">
                              {pkg.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {pkg.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <Button className="w-full bg-gradient-to-r from-gold to-[#f4d03f] text-black font-semibold hover:shadow-lg transition-all group">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold/10 to-[#f4d03f]/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Our travel experts can create a custom package tailored to your preferences and budget.
            </p>
            <Button 
              asChild
              className="bg-white text-black hover:bg-gold transition-all px-8 py-6 text-lg font-semibold"
            >
              <a href="https://wa.me/919876543210?text=Hi,%20I'm%20interested%20in%20a%20custom%20package" target="_blank" rel="noopener noreferrer">
                <Plane className="mr-2 h-5 w-5" />
                Contact Us for Custom Packages
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
