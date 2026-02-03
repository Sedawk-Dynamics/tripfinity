'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, MapPin, Wifi, Waves, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Hotel {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  image: string
  amenities: string[]
}

export function HotelCard({ hotel }: { hotel: Hotel }) {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'WiFi':
        return <Wifi className="w-4 h-4" />
      case 'Pool':
        return <Waves className="w-4 h-4" />
      case 'Restaurant':
        return <Utensils className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden hover:border-amber-400/50 transition-all duration-300 group cursor-pointer h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={hotel.image || "/placeholder.svg"}
          alt={hotel.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-amber-400 text-black px-3 py-1 rounded-full font-bold flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          {hotel.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
          {hotel.name}
        </h3>
        
        <div className="flex items-center gap-1 text-white/60 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          {hotel.location}
        </div>

        <div className="text-white/60 text-xs mb-4">
          ({hotel.reviews} reviews)
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 2).map((amenity) => (
            <span
              key={amenity}
              className="text-xs bg-slate-700/50 text-white/80 px-2 py-1 rounded border border-slate-600"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="mt-auto pt-4 border-t border-slate-700">
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="text-white/60 text-sm">From</span>
              <div className="text-2xl font-bold text-amber-400">${hotel.price}</div>
              <span className="text-white/60 text-xs">per night</span>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold">
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
