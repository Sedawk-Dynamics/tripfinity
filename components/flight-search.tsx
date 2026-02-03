"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Plane, Users, Search, ArrowLeftRight, ChevronDown, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CITIES } from "@/lib/flight-data"

interface TravellersState {
  adults: number
  children: number
  infants: number
}

interface CityInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  accentColor?: "gold" | "blue"
  hasError?: boolean
}

function CityInput({ label, value, onChange, placeholder = "City or Airport", accentColor = "gold", hasError = false }: CityInputProps) {
  const [inputValue, setInputValue] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Get selected city display name
  const selectedCity = CITIES.find(c => c.code === value)
  
  useEffect(() => {
    if (selectedCity && !isFocused) {
      setInputValue(`${selectedCity.code} — ${selectedCity.name}`)
    }
  }, [selectedCity, isFocused])

  // Only filter when 2+ characters typed
  const shouldShowSuggestions = inputValue.length >= 2
  const filteredCities = shouldShowSuggestions 
    ? CITIES.filter(city => 
        city.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        city.code.toLowerCase().includes(inputValue.toLowerCase()) ||
        city.country.toLowerCase().includes(inputValue.toLowerCase()) ||
        city.airport.toLowerCase().includes(inputValue.toLowerCase())
      )
    : []

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setShowSuggestions(true)
    if (e.target.value === "") {
      onChange("")
    }
  }

  const handleSelectCity = (city: typeof CITIES[0]) => {
    onChange(city.code)
    setInputValue(`${city.code} — ${city.name}`)
    setShowSuggestions(false)
    inputRef.current?.blur()
  }

  const handleFocus = () => {
    setIsFocused(true)
    setShowSuggestions(true)
    if (selectedCity) {
      setInputValue("")
    }
  }

  const handleBlur = () => {
    setIsFocused(false)
    setTimeout(() => {
      setShowSuggestions(false)
      if (selectedCity) {
        setInputValue(`${selectedCity.code} — ${selectedCity.name}`)
      }
    }, 200)
  }

  const showMinCharMessage = isFocused && inputValue.length > 0 && inputValue.length < 2

  return (
    <div className="flex-1 space-y-1.5 w-full md:w-auto relative" ref={containerRef}>
      <Label className="text-gold/80 text-[10px] font-semibold uppercase tracking-wider">{label}</Label>
      <div className={`relative flex items-center gap-2 h-10 px-3 bg-[#1e3a5f]/60 hover:bg-[#1e3a5f] transition-all rounded-lg ${hasError ? 'ring-2 ring-red-500' : isFocused ? 'ring-1 ring-gold/50' : ''}`}>
        <Plane className={`h-4 w-4 ${accentColor === 'gold' ? 'text-gold' : 'text-neon-blue'} ${label === 'To' ? 'rotate-90' : ''}`} />
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder:text-gray-400"
        />
      </div>
      
      <AnimatePresence>
        {showMinCharMessage && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 bg-[#1e3a5f] text-gray-300 text-xs px-3 py-2 rounded-lg shadow-lg z-50"
          >
            Type at least 2 characters to search...
          </motion.div>
        )}
        
        {showSuggestions && filteredCities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1 bg-[#0c1929] border border-[#1e3a5f] rounded-lg shadow-xl z-50 max-h-[250px] overflow-y-auto"
          >
            {filteredCities.map((city) => (
              <button
                key={city.code}
                type="button"
                onClick={() => handleSelectCity(city)}
                className="w-full px-3 py-2.5 flex items-start gap-3 hover:bg-[#1e3a5f] transition-colors text-left border-b border-[#1e3a5f]/30 last:border-b-0"
              >
                <div className={`flex flex-col items-center justify-center min-w-[45px] py-1 px-2 rounded ${accentColor === 'gold' ? 'bg-gold/20' : 'bg-neon-blue/20'}`}>
                  <Plane className={`h-3 w-3 ${accentColor === 'gold' ? 'text-gold' : 'text-neon-blue'}`} />
                  <span className={`font-bold text-xs ${accentColor === 'gold' ? 'text-gold' : 'text-neon-blue'}`}>{city.code}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium">
                    {city.code} — {city.name}, {city.country}
                  </div>
                  <div className="text-gray-400 text-xs truncate">
                    {city.airport}
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FlightSearch() {
  const router = useRouter()
  const [tripType, setTripType] = useState<"return" | "oneway">("return")
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [travellers, setTravellers] = useState<TravellersState>({
    adults: 1,
    children: 0,
    infants: 0,
  })
  const [showTravellers, setShowTravellers] = useState(false)
  const [cabinClass, setCabinClass] = useState("economy")
  const [errors, setErrors] = useState({
    from: false,
    to: false,
    depart: false,
    return: false,
  })
  const travellersRef = useRef<HTMLDivElement>(null)
  const [passengers, setPassengers] = useState(1); // Declare passengers variable

  useEffect(() => {
    if (tripType === "oneway") {
      setReturnDate("")
      setErrors((prev) => ({ ...prev, return: false }))
    }
  }, [tripType])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (travellersRef.current && !travellersRef.current.contains(event.target as Node)) {
        setShowTravellers(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const totalTravellers = travellers.adults + travellers.children + travellers.infants

  const updateTravellers = (type: keyof TravellersState, increment: boolean) => {
    setTravellers((prev) => {
      const newValue = increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
      
      // Enforce rules: min 1 adult, infants ≤ adults
      if (type === "adults" && newValue < 1) return prev
      if (type === "infants" && increment && newValue > prev.adults) return prev
      if (type === "adults" && !increment && prev.infants > newValue) return prev
      
      return { ...prev, [type]: newValue }
    })
  }

  const getTravellersText = () => {
    const parts = []
    if (travellers.adults > 0) parts.push(`${travellers.adults} Adult${travellers.adults > 1 ? "s" : ""}`)
    if (travellers.children > 0) parts.push(`${travellers.children} Child${travellers.children > 1 ? "ren" : ""}`)
    if (travellers.infants > 0) parts.push(`${travellers.infants} Infant${travellers.infants > 1 ? "s" : ""}`)
    return parts.join(", ")
  }

  const validateForm = () => {
    const newErrors = {
      from: !fromCity,
      to: !toCity,
      depart: !departDate,
      return: false, // Return date is not required
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleSearch = () => {
    if (!validateForm()) return

    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      depart: departDate,
      adults: travellers.adults.toString(),
      children: travellers.children.toString(),
      infants: travellers.infants.toString(),
      class: cabinClass,
      tripType,
    })

    if (tripType === "return" && returnDate) {
      params.append("return", returnDate)
    }

    router.push(`/search?${params.toString()}`)
  }

  const handleSwapCities = () => {
    const temp = fromCity
    setFromCity(toCity)
    setToCity(temp)
  }

  const isSearchDisabled = !fromCity || !toCity || !departDate

  return (
    <section className="relative -mt-12 z-30 pb-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="backdrop-blur-xl bg-[#0c1929] border border-[#1e3a5f]/50 shadow-2xl rounded-xl p-4 md:p-5 max-w-4xl mx-auto relative overflow-visible">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-blue/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex gap-2 mb-5">
                <Button
                  variant="ghost"
                  className="h-9 px-5 rounded-full font-medium text-sm transition-all bg-gradient-to-r from-gold to-[#f4d03f] text-black shadow-lg"
                >
                  <Plane className="h-4 w-4 mr-2" />
                  Flights
                </Button>
              </div>

              {/* Trip Type Toggle */}
              <div className="flex gap-2 mb-4">
                <button
                  type="button"
                  onClick={() => setTripType("return")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    tripType === "return"
                      ? "bg-gold text-black shadow-md"
                      : "bg-[#1e3a5f]/40 text-white/70 hover:bg-[#1e3a5f]/60"
                  }`}
                >
                  Round Trip
                </button>
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    tripType === "oneway"
                      ? "bg-gold text-black shadow-md"
                      : "bg-[#1e3a5f]/40 text-white/70 hover:bg-[#1e3a5f]/60"
                  }`}
                >
                  One Way
                </button>
              </div>

              <div className="flex flex-col md:flex-row items-end gap-3 mb-4">
                <div className="flex-1 w-full md:w-auto">
                  <CityInput
                    label="From"
                    value={fromCity}
                    onChange={(val) => {
                      setFromCity(val)
                      setErrors((prev) => ({ ...prev, from: false }))
                    }}
                    accentColor="gold"
                    hasError={errors.from}
                  />
                  {errors.from && (
                    <p className="text-red-500 text-xs mt-1">From is required</p>
                  )}
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={handleSwapCities}
                  className="w-9 h-9 rounded-full bg-[#1e3a5f] hover:bg-[#2a4a6f] text-white shadow-md hover:shadow-lg transition-all duration-300 shrink-0 mb-0.5"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>

                <div className="flex-1 w-full md:w-auto">
                  <CityInput
                    label="To"
                    value={toCity}
                    onChange={(val) => {
                      setToCity(val)
                      setErrors((prev) => ({ ...prev, to: false }))
                    }}
                    accentColor="blue"
                    hasError={errors.to}
                  />
                  {errors.to && (
                    <p className="text-red-500 text-xs mt-1">To is required</p>
                  )}
                </div>

                <div className="space-y-1.5 w-full md:w-auto">
                  <Label className="text-gold/80 text-[10px] font-semibold uppercase tracking-wider">Departure</Label>
                  <div className={`flex items-center gap-2 h-10 px-3 bg-[#1e3a5f]/60 hover:bg-[#1e3a5f] transition-all rounded-lg ${errors.depart ? 'ring-2 ring-red-500' : ''}`}>
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => {
                        setDepartDate(e.target.value)
                        setErrors((prev) => ({ ...prev, depart: false }))
                      }}
                      min={new Date().toISOString().split("T")[0]}
                      className="flex-1 bg-transparent border-none outline-none text-white text-sm w-[100px]"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                  {errors.depart && (
                    <p className="text-red-500 text-xs mt-1">Departure date is required</p>
                  )}
                </div>

                {tripType === "return" && (
                  <div className="space-y-1.5 w-full md:w-auto">
                    <Label className="text-gold/80 text-[10px] font-semibold uppercase tracking-wider">Return</Label>
                    <div className="flex items-center gap-2 h-10 px-3 bg-[#1e3a5f]/60 hover:bg-[#1e3a5f] transition-all rounded-lg">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => {
                          setReturnDate(e.target.value)
                        }}
                        min={departDate || new Date().toISOString().split("T")[0]}
                        className="flex-1 bg-transparent border-none outline-none text-white text-sm w-[100px]"
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row items-end gap-3">
                <div className="space-y-1.5 w-full md:w-auto relative" ref={travellersRef}>
                  <Label className="text-gold/80 text-[10px] font-semibold uppercase tracking-wider">Travellers</Label>
                  <button
                    type="button"
                    onClick={() => setShowTravellers(!showTravellers)}
                    className="h-10 w-full md:min-w-[200px] bg-[#1e3a5f]/60 border-0 hover:bg-[#1e3a5f] transition-all rounded-lg text-white flex items-center gap-2 px-3"
                  >
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm flex-1 text-left">{getTravellersText()}</span>
                  </button>

                  <AnimatePresence>
                    {showTravellers && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-full md:min-w-[320px] bg-[#1a2642] border border-[#2a3f5f] rounded-xl shadow-2xl z-50 p-4"
                      >
                        <div className="space-y-5">
                          <div className="flex items-center justify-between py-1">
                            <div>
                              <div className="text-white font-medium text-sm">Adults</div>
                              <div className="text-gray-400 text-xs mt-0.5">12+ years</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => updateTravellers("adults", false)}
                                disabled={travellers.adults <= 1}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-white text-base font-medium w-8 text-center">{travellers.adults}</span>
                              <button
                                type="button"
                                onClick={() => updateTravellers("adults", true)}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] flex items-center justify-center text-white transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between py-1">
                            <div>
                              <div className="text-white font-medium text-sm">Children</div>
                              <div className="text-gray-400 text-xs mt-0.5">2-11 years</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => updateTravellers("children", false)}
                                disabled={travellers.children === 0}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-white text-base font-medium w-8 text-center">{travellers.children}</span>
                              <button
                                type="button"
                                onClick={() => updateTravellers("children", true)}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] flex items-center justify-center text-white transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between py-1">
                            <div>
                              <div className="text-white font-medium text-sm">Infants</div>
                              <div className="text-gray-400 text-xs mt-0.5">Under 2 years</div>
                            </div>
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                onClick={() => updateTravellers("infants", false)}
                                disabled={travellers.infants === 0}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-white text-base font-medium w-8 text-center">{travellers.infants}</span>
                              <button
                                type="button"
                                onClick={() => updateTravellers("infants", true)}
                                disabled={travellers.infants >= travellers.adults}
                                className="w-9 h-9 rounded-full border-2 border-[#3a4f6f] bg-transparent hover:bg-[#2a3f5f] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          <Button
                            onClick={() => setShowTravellers(false)}
                            className="w-full bg-gradient-to-r from-gold to-[#f4d03f] hover:from-[#f4d03f] hover:to-gold text-black font-semibold text-sm rounded-lg h-10 mt-2"
                          >
                            Done
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1.5 w-full md:w-auto">
                  <Label className="text-gold/80 text-[10px] font-semibold uppercase tracking-wider">Class</Label>
                  <Select value={cabinClass} onValueChange={setCabinClass}>
                    <SelectTrigger className="h-10 bg-[#1e3a5f]/60 border-0 hover:bg-[#1e3a5f] transition-all rounded-lg text-white min-w-[140px]">
                      <SelectValue className="text-sm" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0c1929] border-[#1e3a5f]">
                      <SelectItem
                        value="economy"
                        className="text-white hover:bg-[#1e3a5f] focus:bg-[#1e3a5f] text-sm py-2"
                      >
                        Economy
                      </SelectItem>
                      <SelectItem
                        value="premium"
                        className="text-white hover:bg-[#1e3a5f] focus:bg-[#1e3a5f] text-sm py-2"
                      >
                        Premium Economy
                      </SelectItem>
                      <SelectItem
                        value="business"
                        className="text-white hover:bg-[#1e3a5f] focus:bg-[#1e3a5f] text-sm py-2"
                      >
                        Business
                      </SelectItem>
                      <SelectItem
                        value="first"
                        className="text-white hover:bg-[#1e3a5f] focus:bg-[#1e3a5f] text-sm py-2"
                      >
                        First Class
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 hidden md:block" />

                <Button
                  size="sm"
                  onClick={handleSearch}
                  disabled={isSearchDisabled}
                  className="h-10 px-6 bg-gradient-to-r from-gold via-[#f4d03f] to-gold hover:from-[#f4d03f] hover:to-gold text-black font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search Flights
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
