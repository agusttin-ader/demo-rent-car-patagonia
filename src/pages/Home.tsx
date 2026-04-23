import { Benefits } from '../sections/Benefits'
import { ContactFormMap } from '../sections/ContactFormMap'
import { FinalCta } from '../sections/FinalCta'
import { Footer } from '../sections/Footer'
import { ClientReviews } from '../sections/ClientReviews'
import { Hero } from '../sections/Hero'
import { HowItWorks } from '../sections/HowItWorks'
import { SiteCards } from '../sections/SiteCards'
import { Vehicles } from '../sections/Vehicles'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Vehicles />
      <SiteCards />
      <Benefits />
      <ContactFormMap />
      <ClientReviews />
      <FinalCta />
      <Footer />
    </>
  )
}
