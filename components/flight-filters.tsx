"use client"

import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface FlightFiltersProps {
  filters: {
    priceRange: number[]
    stops: string
    departureTime: string
    airlines: string[]
    duration: number
  }
  setFilters: (filters: any) => void
}

export function FlightFilters({ filters, setFilters }: FlightFiltersProps) {
  const airlines = [
    { id: "emirates", name: "Emirates" },
    { id: "qatar", name: "Qatar Airways" },
    { id: "singapore", name: "Singapore Airlines" },
    { id: "etihad", name: "Etihad Airways" },
    { id: "lufthansa", name: "Lufthansa" },
  ]

  return (
    <Card className="glass-card border-white/10 p-6 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            setFilters({
              priceRange: [0, 2000],
              stops: "all",
              departureTime: "all",
              airlines: [],
              duration: 24,
            })
          }
          className="text-gold hover:text-gold/80"
        >
          Reset All
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <Label className="text-white mb-3 block">Price Range</Label>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
          max={2000}
          step={50}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-white/60">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      {/* Stops */}
      <div className="mb-6">
        <Label className="text-white mb-3 block">Stops</Label>
        <RadioGroup value={filters.stops} onValueChange={(value) => setFilters({ ...filters, stops: value })}>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="all" id="all-stops" className="border-white/30" />
            <Label htmlFor="all-stops" className="text-white/80 cursor-pointer">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="direct" id="direct-stops" className="border-white/30" />
            <Label htmlFor="direct-stops" className="text-white/80 cursor-pointer">
              Direct
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="1-stop" id="1-stop" className="border-white/30" />
            <Label htmlFor="1-stop" className="text-white/80 cursor-pointer">
              1 Stop
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2-stops" id="2-stops" className="border-white/30" />
            <Label htmlFor="2-stops" className="text-white/80 cursor-pointer">
              2+ Stops
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Departure Time */}
      <div className="mb-6">
        <Label className="text-white mb-3 block">Departure Time</Label>
        <RadioGroup
          value={filters.departureTime}
          onValueChange={(value) => setFilters({ ...filters, departureTime: value })}
        >
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="all" id="all-time" className="border-white/30" />
            <Label htmlFor="all-time" className="text-white/80 cursor-pointer">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="morning" id="morning" className="border-white/30" />
            <Label htmlFor="morning" className="text-white/80 cursor-pointer">
              Morning (6AM - 12PM)
            </Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem value="afternoon" id="afternoon" className="border-white/30" />
            <Label htmlFor="afternoon" className="text-white/80 cursor-pointer">
              Afternoon (12PM - 6PM)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="evening" id="evening" className="border-white/30" />
            <Label htmlFor="evening" className="text-white/80 cursor-pointer">
              Evening (6PM - 12AM)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Airlines */}
      <div className="mb-6">
        <Label className="text-white mb-3 block">Airlines</Label>
        <div className="space-y-2">
          {airlines.map((airline) => (
            <div key={airline.id} className="flex items-center space-x-2">
              <Checkbox
                id={airline.id}
                checked={filters.airlines.includes(airline.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setFilters({ ...filters, airlines: [...filters.airlines, airline.id] })
                  } else {
                    setFilters({ ...filters, airlines: filters.airlines.filter((a: string) => a !== airline.id) })
                  }
                }}
                className="border-white/30"
              />
              <Label htmlFor={airline.id} className="text-white/80 cursor-pointer">
                {airline.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-4">
        <Label className="text-white mb-3 block">Max Duration</Label>
        <Slider
          value={[filters.duration]}
          onValueChange={(value) => setFilters({ ...filters, duration: value[0] })}
          max={24}
          step={1}
          className="mb-2"
        />
        <div className="text-sm text-white/60">{filters.duration} hours</div>
      </div>
    </Card>
  )
}
