'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'

export default function HotelsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-900 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          >
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-12 max-w-2xl">
              <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Building2 className="w-12 h-12 text-amber-400" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Luxury <span className="text-amber-400">Hotels</span>
              </h1>
              
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Coming Soon
              </div>
              
              <p className="text-white/60 text-lg mb-8">
                Hotel listings are coming soon. We are curating the finest collection of luxury accommodations worldwide for your perfect stay.
              </p>
              
              <p className="text-white/40 text-sm">
                For hotel bookings, please contact us directly at{' '}
                <a href="mailto:bookings@tripfinitytravels.com" className="text-amber-400 hover:underline">
                  bookings@tripfinitytravels.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
