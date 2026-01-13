"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Calendar, Plane, Users, Search, ArrowLeftRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CITIES } from "@/lib/flight-data"

export function FlightSearch() {
  const router = useRouter()
  const [tripType, setTripType] = useState<"return" | "oneway">("return")
  const [fromCity, setFromCity] = useState("")
  const [toCity, setToCity] = useState("")
  const [departDate, setDepartDate] = useState("")
  const [returnDate, setReturnDate] = useState("")
  const [passengers, setPassengers] = useState(1)
  const [airline, setAirline] = useState("all")
  const [cabinClass, setCabinClass] = useState("economy")
  const [directOnly, setDirectOnly] = useState(false)

  const handleSearch = () => {
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      depart: departDate,
      ...(tripType === "return" && returnDate ? { return: returnDate } : {}),
      passengers: passengers.toString(),
      class: cabinClass,
      airline,
      directOnly: directOnly.toString(),
    })
    router.push(`/search?${params.toString()}`)
  }

  const handleSwapCities = () => {
    const temp = fromCity
    setFromCity(toCity)
    setToCity(temp)
  }

  return (
    <section className="relative -mt-20 z-30 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="backdrop-blur-2xl bg-black/40 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-10 max-w-6xl mx-auto relative overflow-hidden">
            {/* Decorative gradient overlays */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-neon-blue/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Trip Type Selection */}
              <div className="flex gap-6 mb-8">
                <RadioGroup value={tripType} onValueChange={(value: any) => setTripType(value)} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="return" id="return" className="border-white/40 text-gold" />
                    <Label htmlFor="return" className="text-white cursor-pointer font-semibold text-base">
                      Return
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oneway" id="oneway" className="border-white/40 text-gold" />
                    <Label htmlFor="oneway" className="text-white cursor-pointer font-semibold text-base">
                      One Way
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* City Selection Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* From City */}
                <div className="space-y-2">
                  <Label className="text-white/90 text-sm font-medium">From</Label>
                  <Select value={fromCity} onValueChange={setFromCity}>
                    <SelectTrigger className="h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                          <Plane className="h-5 w-5 text-gold" />
                        </div>
                        <SelectValue placeholder="Select departure city" className="text-white" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-white/20 max-h-[300px]">
                      {CITIES.map((city) => (
                        <SelectItem
                          key={city.code}
                          value={city.code}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          <div className="flex flex-col py-1">
                            <span className="font-semibold">
                              {city.name} ({city.code})
                            </span>
                            <span className="text-xs text-white/60">{city.country}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* To City with Swap Button */}
                <div className="space-y-2 relative">
                  <Label className="text-white/90 text-sm font-medium">To</Label>
                  <Select value={toCity} onValueChange={setToCity}>
                    <SelectTrigger className="h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                          <Plane className="h-5 w-5 text-neon-blue rotate-90" />
                        </div>
                        <SelectValue placeholder="Select arrival city" className="text-white" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-white/20 max-h-[300px]">
                      {CITIES.map((city) => (
                        <SelectItem
                          key={city.code}
                          value={city.code}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          <div className="flex flex-col py-1">
                            <span className="font-semibold">
                              {city.name} ({city.code})
                            </span>
                            <span className="text-xs text-white/60">{city.country}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={handleSwapCities}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 md:translate-y-0 z-20 w-12 h-12 rounded-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  >
                    <ArrowLeftRight className="h-5 w-5 text-black" />
                  </Button>
                </div>
              </div>

              {/* Date and Passengers Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Depart Date */}
                <div className="space-y-2">
                  <Label className="text-white/90 text-sm font-medium">Depart</Label>
                  <div className="flex items-center gap-3 h-14 px-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-gold" />
                    </div>
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      className="flex-1 bg-transparent border-none outline-none text-white text-base [color-scheme:dark]"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>

                {/* Return Date */}
                {tripType === "return" && (
                  <div className="space-y-2">
                    <Label className="text-white/90 text-sm font-medium">Return</Label>
                    <div className="flex items-center gap-3 h-14 px-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-lg bg-neon-blue/20 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-neon-blue" />
                      </div>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-white text-base [color-scheme:dark]"
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                  </div>
                )}

                {/* Passengers */}
                <div className="space-y-2">
                  <Label className="text-white/90 text-sm font-medium">Passengers</Label>
                  <Select value={passengers.toString()} onValueChange={(val) => setPassengers(Number(val))}>
                    <SelectTrigger className="h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                          <Users className="h-5 w-5 text-gold" />
                        </div>
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-white/20">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem
                          key={num}
                          value={num.toString()}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          {num} Adult{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Airline and Class Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Airline Selection */}
                <div className="space-y-2">
                  <Label className="text-white/90 text-sm font-medium">Choose Airline</Label>
                  <Select value={airline} onValueChange={setAirline}>
                    <SelectTrigger className="h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-white/20">
                      <SelectItem value="all" className="text-white hover:bg-white/10 focus:bg-white/10">
                        All Airlines
                      </SelectItem>
                      <SelectItem value="emirates" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Emirates
                      </SelectItem>
                      <SelectItem value="qatar" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Qatar Airways
                      </SelectItem>
                      <SelectItem value="singapore" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Singapore Airlines
                      </SelectItem>
                      <SelectItem value="etihad" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Etihad Airways
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Cabin Class */}
                <div className="space-y-2">
                  <Label className="text-white/90 text-sm font-medium">Choose Cabin Class</Label>
                  <Select value={cabinClass} onValueChange={setCabinClass}>
                    <SelectTrigger className="h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all rounded-xl backdrop-blur-sm text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-black/95 backdrop-blur-xl border-white/20">
                      <SelectItem value="economy" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Economy
                      </SelectItem>
                      <SelectItem value="premium" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Premium Economy
                      </SelectItem>
                      <SelectItem value="business" className="text-white hover:bg-white/10 focus:bg-white/10">
                        Business
                      </SelectItem>
                      <SelectItem value="first" className="text-white hover:bg-white/10 focus:bg-white/10">
                        First Class
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Direct Flights Checkbox */}
              <div className="flex items-center space-x-3 mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <Checkbox
                  id="direct"
                  checked={directOnly}
                  onCheckedChange={(checked) => setDirectOnly(checked as boolean)}
                  className="border-white/40 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                />
                <Label htmlFor="direct" className="text-white cursor-pointer font-medium">
                  Direct Flights Only
                </Label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={handleSearch}
                  className="flex-1 h-14 bg-gradient-to-r from-gold via-[#f4d03f] to-gold hover:from-[#f4d03f] hover:to-gold text-black font-bold text-base rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300"
                >
                  <Search className="mr-2 h-5 w-5" />
                  SEARCH FLIGHTS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setFromCity("")
                    setToCity("")
                    setDepartDate("")
                    setReturnDate("")
                    setPassengers(1)
                    setAirline("all")
                    setCabinClass("economy")
                    setDirectOnly(false)
                  }}
                  className="h-14 px-8 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl transition-all duration-300"
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
