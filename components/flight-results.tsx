"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plane, Phone } from "lucide-react"

interface Flight {
  id: string
  airline: string
  flightNumber: string
  departure: { time: string; airport: string }
  arrival: { time: string; airport: string }
  duration: string
  stops: number
  price: number
  class: string
}

interface FlightResultsProps {
  flights: Flight[]
  filters: any
}

export function FlightResults({ flights, filters }: FlightResultsProps) {
  // Apply filters
  const filteredFlights = flights.filter((flight) => {
    // Price filter
    if (flight.price < filters.priceRange[0] || flight.price > filters.priceRange[1]) return false

    // Stops filter
    if (filters.stops === "direct" && flight.stops !== 0) return false
    if (filters.stops === "1-stop" && flight.stops !== 1) return false
    if (filters.stops === "2-stops" && flight.stops < 2) return false

    // Airlines filter
    if (filters.airlines.length > 0 && !filters.airlines.includes(flight.airline.toLowerCase().replace(" ", "")))
      return false

    return true
  })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <p className="text-white/60">{filteredFlights.length} flights found</p>
        <select className="glass-input text-sm">
          <option>Sort by: Recommended</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Duration: Shortest</option>
        </select>
      </div>

      {filteredFlights.map((flight, index) => (
        <motion.div
          key={flight.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card className="glass-card border-white/10 p-6 hover:border-gold/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="h-6 w-6 text-gold" />
                  <div>
                    <h3 className="text-white font-bold">{flight.airline}</h3>
                    <p className="text-white/60 text-sm">{flight.flightNumber}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-2xl font-bold text-white">{flight.departure.time}</p>
                    <p className="text-white/60 text-sm">{flight.departure.airport}</p>
                  </div>

                  <div className="flex-1 flex flex-col items-center">
                    <p className="text-white/60 text-sm mb-1">{flight.duration}</p>
                    <div className="w-full h-px bg-white/20 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full" />
                    </div>
                    {flight.stops > 0 && (
                      <p className="text-white/60 text-xs mt-1">
                        {flight.stops} stop{flight.stops > 1 ? "s" : ""}
                      </p>
                    )}
                    {flight.stops === 0 && (
                      <Badge className="bg-green-500/20 text-green-400 text-xs mt-1">Direct</Badge>
                    )}
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-white">{flight.arrival.time}</p>
                    <p className="text-white/60 text-sm">{flight.arrival.airport}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <Phone className="h-4 w-4 text-gold" />
                    <p className="text-white/60 text-sm">+91 92208 63958</p>
                  </div>
                  <p className="text-white/60 text-sm">{flight.class}</p>
                </div>
                <Button className="bg-gold hover:bg-gold/90 text-black font-bold px-8">Book Now</Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
