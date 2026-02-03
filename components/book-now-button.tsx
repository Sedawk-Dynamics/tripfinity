'use client'

import React, { useState } from 'react'
import { Phone } from 'lucide-react'
import { BookingContactForm } from '@/components/booking-contact-form'

interface BookNowButtonProps {
  packageName?: string
  packagePrice?: string
  duration?: string
  destination?: string
  className?: string
}

export function BookNowButton({
  packageName = 'Travel Package',
  packagePrice = '',
  duration = '',
  destination = '',
  className = '',
}: BookNowButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        {/* Call Now Button (Dialer) */}
        <a
          href="tel:+919220863958"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>

        {/* Book Now Button */}
        <button
          onClick={() => setIsFormOpen(true)}
          className={`flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${className}`}
        >
          <Phone className="w-5 h-5" />
          Book Now
        </button>
      </div>

      {/* Booking Form */}
      <BookingContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        flightDetails={{
          from: destination || 'Destination',
          to: 'Trip',
          date: duration || '',
          airline: packageName,
          price: packagePrice || 'Contact us',
        }}
      />
    </>
  )
}
