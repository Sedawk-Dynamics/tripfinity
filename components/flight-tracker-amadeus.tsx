'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plane, AlertCircle, Loader2, CheckCircle, Clock, MapPin, IndianRupee, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookingContactForm } from '@/components/booking-contact-form'

interface FlightSegment {
  departure: { iataCode: string; at: string; terminal?: string; gate?: string }
  arrival: { iataCode: string; at: string; terminal?: string; gate?: string }
  carrierCode: string
  number: string
  aircraft: { code: string }
  stops: Array<{ iataCode: string; duration: string }>
  class: string
  operatingCarrierCode?: string
}

interface FlightOffer {
  id: string
  source: string
  instantTicketingRequired: boolean
  nonHomogeneous: boolean
  oneWay: boolean
  numberOfBookableSeats: number
  itineraries: Array<{ duration: string; segments: FlightSegment[] }>
  price: { currency: string; total: string; base: string }
  validatingAirlineCodes: string[]
}

export interface FlightTrackerProps {
  originCode?: string
  destinationCode?: string
  departureDate?: string
  adults?: number
}

export function FlightTracker({
  originCode: initialOriginCode,
  destinationCode: initialDestinationCode,
  departureDate: initialDepartureDate,
  adults: initialAdults,
}: FlightTrackerProps) {
  const [flights, setFlights] = useState<FlightOffer[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [originCode, setOriginCode] = useState(initialOriginCode || '')
  const [destinationCode, setDestinationCode] = useState(initialDestinationCode || '')
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState<FlightOffer | null>(null)
  const [departureDate, setDepartureDate] = useState(initialDepartureDate || '')
  const [adults, setAdults] = useState(initialAdults || 1)

  const convertToINR = (priceInUSD: number): number => {
    return Math.round(priceInUSD * 83)
  }

  const getFlightStatusBadge = (status: string): { color: string; icon: React.ReactNode; text: string } => {
    switch (status?.toLowerCase()) {
      case 'on-time':
      case 'scheduled':
        return { color: 'bg-green-500/20 border-green-500 text-green-300', icon: <CheckCircle className="w-4 h-4" />, text: 'On Time' }
      case 'delayed':
        return { color: 'bg-red-500/20 border-red-500 text-red-300', icon: <AlertCircle className="w-4 h-4" />, text: 'Delayed' }
      case 'boarding':
        return { color: 'bg-blue-500/20 border-blue-500 text-blue-300', icon: <Plane className="w-4 h-4" />, text: 'Boarding' }
      default:
        return { color: 'bg-gray-500/20 border-gray-500 text-gray-300', icon: <Clock className="w-4 h-4" />, text: 'Scheduled' }
    }
  }

  const formatDuration = (duration: string): string => {
    const match = duration.match(/PT(\d+H)?(\d+M)?/)
    if (!match) return duration
    const hours = match[1]?.replace('H', 'h ') || ''
    const minutes = match[2]?.replace('M', 'm') || ''
    return `${hours}${minutes}`.trim()
  }

  const formatTime = (isoString: string): string => {
    return new Date(isoString).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
  }

  const searchFlights = async () => {
    if (!originCode || !destinationCode || !departureDate) {
      setError('Please fill in all required fields')
      return
    }

    setLoading(true)
    setError('')
    setFlights([])

    try {
      const response = await fetch('/api/flights/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          originLocationCode: originCode.toUpperCase(),
          destinationLocationCode: destinationCode.toUpperCase(),
          departureDate,
          adults: adults.toString(),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch flights')
      }

      const data = await response.json()
      setFlights(data.data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search flights')
      console.log('[v0] Flight search error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (initialOriginCode && initialDestinationCode && initialDepartureDate) {
      searchFlights()
    }
  }, [])

  return (
    <div className="space-y-6 w-full">
      <Card className="bg-slate-800/50 border-slate-700 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Live Flight Search</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
          <input type="text" placeholder="From (e.g., DEL)" value={originCode} onChange={(e) => setOriginCode(e.target.value)} className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="To (e.g., BOM)" value={destinationCode} onChange={(e) => setDestinationCode(e.target.value)} className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500" />
          <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
          <input type="number" min="1" max="9" value={adults} onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))} className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
        </div>
        <Button onClick={searchFlights} disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Searching Live Flights...
            </>
          ) : (
            <>
              <Plane className="w-4 h-4 mr-2" />
              Search Live Flights
            </>
          )}
        </Button>
      </Card>

      {error && (
        <Card className="bg-red-500/10 border-red-500 p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-red-200">{error}</p>
        </Card>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin mb-3" />
          <p className="text-gray-300">Fetching live flights from Amadeus...</p>
        </div>
      )}

      {flights.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Live Flight Results ({flights.length} flights)
            </h3>
          </div>
          {flights.slice(0, 10).map((flight, idx) => {
            const firstSegment = flight.itineraries[0]?.segments[0]
            const lastSegment = flight.itineraries[0]?.segments[flight.itineraries[0].segments.length - 1]
            const priceINR = convertToINR(parseFloat(flight.price.total))
            const stops = flight.itineraries[0]?.segments.length - 1

            return (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 border-slate-700/50 hover:border-blue-500/50 transition-all p-5 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className="space-y-4">
                    {/* Header with airline and status */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-500/20 rounded-full p-2">
                          <Plane className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">
                            {firstSegment?.carrierCode}-{firstSegment?.number}
                          </p>
                          <p className="text-gray-400 text-sm">{firstSegment?.aircraft?.code || 'Aircraft'}</p>
                        </div>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${getFlightStatusBadge('scheduled').color}`}>
                        {getFlightStatusBadge('scheduled').icon}
                        <span className="text-sm font-medium">{getFlightStatusBadge('scheduled').text}</span>
                      </div>
                    </div>

                    {/* Flight route and times */}
                    <div className="grid grid-cols-12 gap-3 items-center">
                      <div className="col-span-3">
                        <p className="text-white font-bold text-lg">{formatTime(firstSegment?.departure.at || '')}</p>
                        <p className="text-gray-400 text-sm">{firstSegment?.departure.iataCode}</p>
                        {firstSegment?.departure.terminal && <p className="text-gray-500 text-xs">Terminal {firstSegment.departure.terminal}</p>}
                      </div>
                      <div className="col-span-6">
                        <div className="flex items-center justify-between px-2">
                          <div className="text-center">
                            <p className="text-blue-400 text-xs font-semibold">{formatDuration(flight.itineraries[0]?.duration || '')}</p>
                            <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-1" style={{ width: '100%' }} />
                            <p className="text-gray-400 text-xs">{stops === 0 ? 'Non-stop' : `${stops} stop${stops > 1 ? 's' : ''}`}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3">
                        <p className="text-white font-bold text-lg text-right">{formatTime(lastSegment?.arrival.at || '')}</p>
                        <p className="text-gray-400 text-sm text-right">{lastSegment?.arrival.iataCode}</p>
                        {lastSegment?.arrival.terminal && <p className="text-gray-500 text-xs text-right">Terminal {lastSegment.arrival.terminal}</p>}
                      </div>
                    </div>

                    {/* Price and passenger info */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-emerald-400">
                          <IndianRupee className="w-5 h-5" />
                          <span className="font-bold text-lg">₹{priceINR.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm border-l border-slate-700 pl-4">
                          <Users className="w-4 h-4" />
                          <span>{adults} Adult{adults > 1 ? 's' : ''}</span>
                        </div>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold"
                        onClick={() => {
                          setSelectedFlight(flight)
                          setIsBookingFormOpen(true)
                        }}
                      >
                        Book Now
                      </Button>
                    </div>

                    {/* Seat availability */}
                    <div className="text-xs text-gray-400 text-center">
                      {flight.numberOfBookableSeats} seats available • Last ticket: {new Date(flight.lastTicketingDate).toLocaleDateString('en-IN')}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      )}

      {!loading && flights.length === 0 && !error && (
        <Card className="bg-slate-800/30 border-slate-700 border-dashed p-8 text-center">
          <Plane className="w-12 h-12 text-gray-500 mx-auto mb-3 opacity-50" />
          <p className="text-gray-400">Enter flight details and search to see live flights from Amadeus</p>
        </Card>
      )}

      {/* Booking Contact Form Modal */}
      <BookingContactForm
        isOpen={isBookingFormOpen}
        onClose={() => {
          setIsBookingFormOpen(false)
          setSelectedFlight(null)
        }}
        flightDetails={selectedFlight ? {
          from: originCode,
          to: destinationCode,
          date: departureDate || '',
          airline: selectedFlight.validatingAirlineCodes[0] || 'Various',
          price: selectedFlight.price.total
        } : undefined}
      />
    </div>
  )
}
