import { Hero } from "@/components/hero"
import { FlightSearch } from "@/components/flight-search"
import { ServicesSection } from "@/components/services-section"
import { CuratedJourneys } from "@/components/curated-journeys"
import { DestinationCarousel } from "@/components/destination-carousel"
import { TrendingDestinations } from "@/components/trending-destinations"
import { SpiritualJourneys } from "@/components/spiritual-journeys"
import { PopularDestinations } from "@/components/popular-destinations"
import { HotelBrands } from "@/components/hotel-brands"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { DealsOffers } from "@/components/deals-offers"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FlightSearch />
        <ServicesSection />
        <CuratedJourneys />
        <DestinationCarousel />
        <TrendingDestinations />
        <SpiritualJourneys />
        <PopularDestinations />
        <HotelBrands />
        <StatsSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <DealsOffers />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  )
}
