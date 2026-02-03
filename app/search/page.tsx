"use client"

import { useState, Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlightFilters } from "@/components/flight-filters"
import { FlightTracker } from "@/components/flight-tracker-amadeus"
import { CITIES, ALL_FLIGHTS, type Flight } from "@/lib/flight-data"
import { FlightResults } from "@/components/flight-results" // Import FlightResults component

function SearchContent() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    stops: "all",
    departureTime: "all",
    airlines: [] as string[],
    duration: 24,
  })
  const [isRoundTrip, setIsRoundTrip] = useState(false) // Declare isRoundTrip state

  const fromCode = searchParams.get("from") || ""
  const toCode = searchParams.get("to") || ""
  const departDate = searchParams.get("depart") || ""
  const adults = searchParams.get("adults") || "1"
  const children = searchParams.get("children") || "0"
  const infants = searchParams.get("infants") || "0"
  const cabinClass = searchParams.get("class") || "economy"

  // Auto-calculate return date (7 days after departure) - Always used
  const getReturnDate = () => {
    if (!departDate) return ""
    const dept = new Date(departDate)
    const returnDt = new Date(dept.getTime() + 7 * 24 * 60 * 60 * 1000)
    return returnDt.toISOString().split("T")[0]
  }

  const returnDate = getReturnDate()

  const fromCity = CITIES.find((c) => c.code === fromCode)
  const toCity = CITIES.find((c) => c.code === toCode)

  // Filter flights based on search criteria
  const matchingFlights = useMemo(() => {
    if (!fromCode || !toCode) return []
    
    return ALL_FLIGHTS.filter((flight) => {
      return flight.departure.airport === fromCode && flight.arrival.airport === toCode
    })
  }, [fromCode, toCode])

  // Filter return flights - always show for round trip
  const returnFlights = useMemo(() => {
    if (!fromCode || !toCode) return []
    
    return ALL_FLIGHTS.filter((flight) => {
      return flight.departure.airport === toCode && flight.arrival.airport === fromCode
    })
  }, [fromCode, toCode])

  const totalTravellers = Number.parseInt(adults) + Number.parseInt(children) + Number.parseInt(infants)
  const travellersText = []
  if (Number.parseInt(adults) > 0) travellersText.push(`${adults} Adult${Number.parseInt(adults) > 1 ? "s" : ""}`)
  if (Number.parseInt(children) > 0) travellersText.push(`${children} Child${Number.parseInt(children) > 1 ? "ren" : ""}`)
  if (Number.parseInt(infants) > 0) travellersText.push(`${infants} Infant${Number.parseInt(infants) > 1 ? "s" : ""}`)

  return (
    <div className="dark min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Flights from {fromCity?.name || fromCode} to {toCity?.name || toCode}
          </h1>
          <p className="text-white/60">
            {departDate} • {travellersText.join(", ")} • {cabinClass}
          </p>
          {matchingFlights.length === 0 && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm">
                No flights available for selected route and date. Please try a different search.
              </p>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <FlightFilters filters={filters} setFilters={setFilters} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {/* Outbound and Return Flights in 2-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Outbound Flights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-slate-800/30 rounded-lg border border-slate-700 p-6"
              >
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                  </span>
                  <span>{fromCode} → {toCode}</span>
                  <span className="text-white/60 text-sm ml-auto">{departDate}</span>
                </h2>
                <FlightTracker originCode={fromCode} destinationCode={toCode} departureDate={departDate} adults={adults} />
              </motion.div>

              {/* Return Flights */}
              {returnDate && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-slate-800/30 rounded-lg border border-slate-700 p-6"
                >
                  <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span>{toCode} → {fromCode}</span>
                    <span className="text-white/60 text-sm ml-auto">{returnDate}</span>
                  </h2>
                  <FlightTracker originCode={toCode} destinationCode={fromCode} departureDate={returnDate} adults={adults} />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Mobile Filters - Show at bottom on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:hidden mt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Search Filters</h2>
          <FlightFilters filters={filters} setFilters={setFilters} />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <SearchContent />
    </Suspense>
  )
}
