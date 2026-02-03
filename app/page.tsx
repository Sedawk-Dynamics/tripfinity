import { Hero } from "@/components/hero"
import { FlightSearch } from "@/components/flight-search"
import { FebruaryDhamaka } from "@/components/february-dhamaka"
import { ServicesSection } from "@/components/services-section"
import { CuratedJourneys } from "@/components/curated-journeys"
import { DestinationCarousel } from "@/components/destination-carousel"
import { TrendingDestinations } from "@/components/trending-destinations"
import { SpiritualJourneys } from "@/components/spiritual-journeys"
import { VacationPackages } from "@/components/vacation-packages"
import { PopularDestinations } from "@/components/popular-destinations"
import { HotelBrands } from "@/components/hotel-brands"
import { OurAssociations } from "@/components/our-associations"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { DealsOffers } from "@/components/deals-offers"
import { ImageGallery } from "@/components/image-gallery"
import { VideoShowcase } from "@/components/video-showcase"
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
        <FebruaryDhamaka />
        <ServicesSection />
        <CuratedJourneys />
        <DestinationCarousel />
        <TrendingDestinations />
        <SpiritualJourneys />
        <VacationPackages />
        <PopularDestinations />
        <HotelBrands />
        <OurAssociations />
        <StatsSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <DealsOffers />
        <ImageGallery />
        {/* <ArticlesSection /> */}
      </main>
      <Footer />
    </div>
  )
}
