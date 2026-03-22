import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { PricingTable } from "@/components/sections/pricing-table"
import { Faq } from "@/components/sections/faq"
import { CtaDownload } from "@/components/sections/cta-download"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PricingTable />
      <Faq />
      <CtaDownload />
    </>
  )
}
