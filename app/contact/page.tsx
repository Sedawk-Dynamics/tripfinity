"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle,
  Send,
  MessageSquare
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 92208 63958",
      href: "tel:+919220863958"
    },
    {
      icon: Mail,
      label: "Email",
      value: "helpdesk@tripfinitytravels.com",
      href: "mailto:info@tripfinitytravels.com"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "T-61, Solanki Road, Jain Colony Part-2, Uttam Nagar, New Delhi - 110059",
      href: "https://maps.google.com/?q=Uttam+Nagar+New+Delhi"
    }
  ]

  const trustIndicators = [
    { icon: Clock, label: "24/7 Support" },
    { icon: Shield, label: "Secure Payments" },
    { icon: CheckCircle, label: "GST Registered" }
  ]

  return (
    <main className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <MessageSquare className="w-16 h-16 text-gold mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Talk to a Travel Expert
            </h1>
            <p className="text-xl text-white/70">
              Ready to plan your next adventure? Our dedicated team is here to help you 
              create unforgettable travel experiences tailored just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-white/70 mb-6">
                      Your message has been received. Our travel experts will get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gold hover:bg-gold/90 text-black"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Travel Requirement / Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Tell us about your travel plans, preferred destinations, dates, and any special requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold hover:bg-gold/90 text-black font-semibold py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Plan My Trip
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-white/70 mb-8">
                  Have questions about our packages? Need help planning a custom itinerary? 
                  Our friendly travel experts are just a call or message away.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target={item.icon === MapPin ? "_blank" : undefined}
                        rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-gold/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                          <p className="text-white/60 text-sm mb-1">{item.label}</p>
                          <p className="text-white font-medium group-hover:text-gold transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-gold/10 to-amber-500/10 border border-gold/20 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4">Why Trust Tripfinity?</h3>
                <div className="grid grid-cols-3 gap-4">
                  {trustIndicators.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="text-center">
                        <Icon className="w-8 h-8 text-gold mx-auto mb-2" />
                        <p className="text-white/80 text-sm">{item.label}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-white/70">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="text-white">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-slate-700">
                    <span>Emergency Support</span>
                    <span className="text-gold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
