"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlightFilters } from "@/components/flight-filters"
import { FlightResults } from "@/components/flight-results"
import { CITIES, DUMMY_FLIGHTS } from "@/lib/flight-data"

function SearchContent() {
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    stops: "all",
    departureTime: "all",
    airlines: [] as string[],
    duration: 24,
  })

  const fromCode = searchParams.get("from") || ""
  const toCode = searchParams.get("to") || ""
  const fromCity = CITIES.find((c) => c.code === fromCode)
  const toCity = CITIES.find((c) => c.code === toCode)

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
            {searchParams.get("depart")} • {searchParams.get("passengers")} passenger(s) • {searchParams.get("class")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FlightFilters filters={filters} setFilters={setFilters} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <FlightResults flights={DUMMY_FLIGHTS} filters={filters} />
          </motion.div>
        </div>
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
