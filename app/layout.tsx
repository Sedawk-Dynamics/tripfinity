import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TripInfinity - Book Flights Worldwide at the Best Prices",
  description:
    "Search, compare, and book flights worldwide with TripInfinity. Get the best deals on flights to Dubai, London, Singapore, Bangkok, and more. Manifest. Travel. Repeat.",
  keywords: "flights, flight booking, cheap flights, international flights, travel, airline tickets",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <WhatsAppFloatingButton />
      </body>
    </html>
  )
}
