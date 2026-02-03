"use client"

import { motion } from "framer-motion"
import { Plane, Hotel, Calendar, FileText, Briefcase, Car } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Flight Bookings",
    description: "Domestic & international flight booking at unbeatable prices.",
    color: "text-pink-500",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Budget to luxury stays with verified comfort and quality.",
    color: "text-orange-500",
  },
  {
    icon: Calendar,
    title: "Holiday Packages",
    description: "Curated journeys—international, adventure & spiritual tours.",
    color: "text-blue-500",
  },
  {
    icon: FileText,
    title: "Visa Assistance",
    description: "Full support for tourist, business & student visas.",
    color: "text-purple-500",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "Complete business travel management solutions.",
    color: "text-red-500",
  },
  {
    icon: Car,
    title: "Transfers & Rentals",
    description: "Private cars, airport transfers & chauffeur services.",
    color: "text-cyan-500",
  },
]

export function ServicesSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`mb-3 ${service.color}`}>
                  <Icon className="w-9 h-9" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-950 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
