"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Packages", href: "/packages" },
      { label: "Flights", href: "#flights" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/contact" },
      { label: "FAQ", href: "/contact" },
    ],
    legal: [
      { label: "Terms of Service", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/Tripfinitytravels/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/Tripfinity_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/tripfinity_travels?igsh=MWozd3lvamJjd2kzOQ%3D%3D&utm_source=qr", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tripfinity-travels-india/", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
           <Image src="/tripfinity-logo.png" alt="Tripfinity Travels" width={240} height={80} className="h-16 w-auto scale-[2] origin-left" />
            <p className="text-white/60 mb-4">
              Your trusted partner for seamless flight bookings worldwide. Manifest. Travel. Repeat.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-black transition-all duration-300 glow-gold-hover"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Tripfinity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
