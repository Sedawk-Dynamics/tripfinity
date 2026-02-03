"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Plane, 
  Hotel, 
  Globe, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  Target,
  Sparkles,
  Heart,
  Award,
  TrendingUp
} from "lucide-react"

export default function AboutPage() {
  const usps = [
    {
      icon: Shield,
      title: "Same-Day Price Match Guarantee",
      description: "Find a lower price? We'll match it instantly, ensuring you always get the best deal."
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      description: "No hidden markups or surprise fees. What you see is exactly what you pay."
    },
    {
      icon: Globe,
      title: "Unified Search Platform",
      description: "Access flights and hotels from multiple suppliers in one seamless search experience."
    },
    {
      icon: Users,
      title: "Technology + Human Expertise",
      description: "Our hybrid model combines smart automation with dedicated travel experts."
    },
    {
      icon: Clock,
      title: "Fast, Minimal-Step Booking",
      description: "Book your entire trip in minutes with our streamlined, intuitive platform."
    },
    {
      icon: TrendingUp,
      title: "Scalable B2B & B2C Platform",
      description: "Whether you're an individual traveler or a business, we scale to meet your needs."
    }
  ]

  const painPoints = [
    {
      problem: "Complex Trip Planning",
      solution: "Our intelligent platform simplifies multi-destination bookings into a single, cohesive journey."
    },
    {
      problem: "Hidden Pricing & Fees",
      solution: "Complete transparency with upfront pricing and no last-minute surprises at checkout."
    },
    {
      problem: "Fragmented Bookings",
      solution: "Unified search across flights, hotels, and experiences - all managed in one place."
    },
    {
      problem: "Impersonal Service",
      solution: "Dedicated travel experts who understand your preferences and craft personalized itineraries."
    }
  ]

  const trustIndicators = [
    { value: "11+", label: "Years of Industry Experience" },
    { value: "50K+", label: "Happy Travelers" },
    { value: "100+", label: "Destinations Worldwide" },
    { value: "24/7", label: "Customer Support" }
  ]

  return (
    <main className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Where Every Journey Becomes a Story
            </h1>
            <p className="text-xl text-white/70 mb-8">
              From seamless flight bookings to handpicked hotels and curated holiday experiences, 
              we transform travel dreams into unforgettable adventures.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gold">
                <Plane className="w-5 h-5" />
                <span className="text-white/80">Flights</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <Hotel className="w-5 h-5" />
                <span className="text-white/80">Hotels</span>
              </div>
              <div className="flex items-center gap-2 text-gold">
                <Globe className="w-5 h-5" />
                <span className="text-white/80">Curated Experiences</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
              <p className="text-white/70 mb-4">
                Tripfinity Travels is a technology-enabled travel solutions company that's redefining 
                how people explore the world. With over a decade of industry expertise, we combine 
                cutting-edge technology with personalized service to deliver exceptional travel experiences.
              </p>
              <p className="text-white/70 mb-4">
                Our platform leverages smart booking algorithms, real-time pricing intelligence, and 
                transparent processes to ensure every journey is seamless from start to finish. We believe 
                that travel should be accessible, affordable, and absolutely stress-free.
              </p>
              <p className="text-white/70">
                Whether you're planning a spiritual pilgrimage, a romantic honeymoon, a solo adventure, 
                or a family vacation, Tripfinity is your trusted partner in crafting journeys that matter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {trustIndicators.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{item.value}</div>
                    <div className="text-white/60 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Solve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Solve</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We understand the frustrations of modern travel planning. That's why we've built 
              solutions that address your biggest pain points.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <span className="text-red-400 text-xl">X</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.problem}</h3>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-white/70 text-sm">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-amber-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Target className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-white/70 text-lg">
              To become a global travel partner that travelers trust implicitly. We envision a future 
              where every journey is personalized, every booking is transparent, and every traveler 
              feels supported at every step. Through continuous innovation and unwavering commitment 
              to excellence, we aim to set new standards in the travel industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Tripfinity - USPs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Tripfinity?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're not just another travel company. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usps.map((usp, index) => {
              const Icon = usp.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-gold/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{usp.title}</h3>
                  <p className="text-white/60 text-sm">{usp.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl p-8 md:p-12">
              <Heart className="w-12 h-12 text-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Message From Our Founders</h2>
              <div className="text-white/70 space-y-4 mb-8">
                <p>
                  Travel has the power to transform lives. It opens our eyes to new cultures, 
                  creates lasting memories, and brings us closer to the people we love. At Tripfinity, 
                  we started with a simple belief: booking travel should be as exciting as the journey itself.
                </p>
                <p>
                  Over the past decade, we've had the privilege of helping thousands of travelers 
                  discover the world. From spiritual pilgrimages to romantic getaways, from solo adventures 
                  to family vacations, every journey we craft is infused with care, expertise, and a 
                  genuine desire to exceed expectations.
                </p>
                <p>
                  We're grateful for the trust you place in us, and we promise to continue innovating, 
                  improving, and delivering travel experiences that truly matter. Thank you for being 
                  part of the Tripfinity family.
                </p>
              </div>
              <div className="border-t border-slate-700 pt-6">
                <p className="text-gold font-semibold">Manifest. Travel. Repeat.</p>
                <div className="mt-4 space-y-2">
                  <p className="text-white font-medium">Akansha Sinha <span className="text-white/60">- Founder & Director</span></p>
                  <p className="text-white font-medium">Vishal Singh Tomar <span className="text-white/60">- Founder & Director</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Award className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trust & Experience</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-gold mb-2">11+</div>
              <p className="text-white font-medium mb-1">Years of Experience</p>
              <p className="text-white/60 text-sm">Deep industry expertise and established supplier relationships</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
            >
              <Globe className="w-10 h-10 text-gold mx-auto mb-2" />
              <p className="text-white font-medium mb-1">NRI & International Clients</p>
              <p className="text-white/60 text-sm">Specialized in serving global travelers with diverse needs</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 text-center"
            >
              <Sparkles className="w-10 h-10 text-gold mx-auto mb-2" />
              <p className="text-white font-medium mb-1">Specialized Travel</p>
              <p className="text-white/60 text-sm">FIT, spiritual, honeymoon & experiential travel expertise</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
