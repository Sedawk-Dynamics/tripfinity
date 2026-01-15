"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (tripType === "oneway") {
      setReturnDate("")
    }
  }, [tripType])

  const handleSearch = () => {
    const params = new URLSearchParams({
      from: fromCity,
      to: toCity,
      depart: departDate,
      passengers: passengers.toString(),
      class: cabinClass,
      airline,
      directOnly: directOnly.toString(),
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

  return (
    <section className="relative -mt-20 z-30 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="backdrop-blur-xl bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 md:p-8 max-w-5xl mx-auto relative overflow-hidden">
            {/* Decorative gradient overlays */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-neon-blue/5 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex gap-6 mb-6">
                <RadioGroup value={tripType} onValueChange={(value: any) => setTripType(value)} className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="return" id="return" className="border-gray-400 text-gold" />
                    <Label htmlFor="return" className="text-gray-900 cursor-pointer font-semibold text-sm">
                      Return
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oneway" id="oneway" className="border-gray-400 text-gold" />
                    <Label htmlFor="oneway" className="text-gray-900 cursor-pointer font-semibold text-sm">
                      One Way
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label className="text-gray-700 text-xs font-medium">From</Label>
                  <Select value={fromCity} onValueChange={setFromCity}>
                    <SelectTrigger className="h-12 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                          <Plane className="h-4 w-4 text-gold" />
                        </div>
                        <SelectValue placeholder="Select departure city" className="text-gray-900 text-sm" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300 max-h-[300px]">
                      {CITIES.map((city) => (
                        <SelectItem
                          key={city.code}
                          value={city.code}
                          className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gold">{city.code}</span>
                            <span>—</span>
                            <span className="font-medium">{city.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 relative">
                  <Label className="text-gray-700 text-xs font-medium">To</Label>
                  <Select value={toCity} onValueChange={setToCity}>
                    <SelectTrigger className="h-12 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center">
                          <Plane className="h-4 w-4 text-neon-blue rotate-90" />
                        </div>
                        <SelectValue placeholder="Select arrival city" className="text-gray-900 text-sm" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300 max-h-[300px]">
                      {CITIES.map((city) => (
                        <SelectItem
                          key={city.code}
                          value={city.code}
                          className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-neon-blue">{city.code}</span>
                            <span>—</span>
                            <span className="font-medium">{city.name}</span>
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
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 md:translate-y-0 z-20 w-10 h-10 rounded-full bg-gradient-to-r from-gold to-gold/80 hover:from-gold/90 hover:to-gold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  >
                    <ArrowLeftRight className="h-4 w-4 text-black" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-2">
                  <Label className="text-gray-700 text-xs font-medium">Depart</Label>
                  <div className="flex items-center gap-2 h-12 px-3 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                      <Calendar className="h-4 w-4 text-gold" />
                    </div>
                    <input
                      type="date"
                      value={departDate}
                      onChange={(e) => setDepartDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="flex-1 bg-transparent border-none outline-none text-gray-900 text-sm"
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>

                {tripType === "return" && (
                  <div className="space-y-2">
                    <Label className="text-gray-700 text-xs font-medium">Return</Label>
                    <div className="flex items-center gap-2 h-12 px-3 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl">
                      <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center shrink-0">
                        <Calendar className="h-4 w-4 text-neon-blue" />
                      </div>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        min={departDate || new Date().toISOString().split("T")[0]}
                        className="flex-1 bg-transparent border-none outline-none text-gray-900 text-sm"
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="text-gray-700 text-xs font-medium">Passengers</Label>
                  <Select value={passengers.toString()} onValueChange={(val) => setPassengers(Number(val))}>
                    <SelectTrigger className="h-12 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center">
                          <Users className="h-4 w-4 text-gold" />
                        </div>
                        <SelectValue className="text-sm" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem
                          key={num}
                          value={num.toString()}
                          className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
                        >
                          {num} Adult{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <Label className="text-gray-700 text-xs font-medium">Choose Airline</Label>
                  <Select value={airline} onValueChange={setAirline}>
                    <SelectTrigger className="h-12 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl text-gray-900 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem value="all" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        All Airlines
                      </SelectItem>
                      <SelectItem value="emirates" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Emirates
                      </SelectItem>
                      <SelectItem value="qatar" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Qatar Airways
                      </SelectItem>
                      <SelectItem value="singapore" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Singapore Airlines
                      </SelectItem>
                      <SelectItem value="etihad" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Etihad Airways
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 text-xs font-medium">Choose Cabin Class</Label>
                  <Select value={cabinClass} onValueChange={setCabinClass}>
                    <SelectTrigger className="h-12 bg-gray-50 border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all rounded-xl text-gray-900 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-300">
                      <SelectItem value="economy" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Economy
                      </SelectItem>
                      <SelectItem value="premium" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Premium Economy
                      </SelectItem>
                      <SelectItem value="business" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        Business
                      </SelectItem>
                      <SelectItem value="first" className="text-gray-900 hover:bg-gray-100 focus:bg-gray-100">
                        First Class
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-6 p-3 rounded-xl bg-gray-50 border border-gray-300">
                <Checkbox
                  id="direct"
                  checked={directOnly}
                  onCheckedChange={(checked) => setDirectOnly(checked as boolean)}
                  className="border-gray-400 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                />
                <Label htmlFor="direct" className="text-gray-900 cursor-pointer font-medium text-sm">
                  Direct Flights Only
                </Label>
              </div>

              <div className="flex gap-3">
                <Button
                  size="lg"
                  onClick={handleSearch}
                  className="flex-1 h-12 bg-gradient-to-r from-gold via-[#f4d03f] to-gold hover:from-[#f4d03f] hover:to-gold text-black font-bold text-sm rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300"
                >
                  <Search className="mr-2 h-4 w-4" />
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
  className="h-12 px-6 bg-white text-black border-2 border-black 
             hover:bg-black hover:text-white 
             rounded-xl transition-all duration-300 text-sm"
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
