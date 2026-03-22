import type { Metadata } from "next"
import { PricingTable } from "@/components/sections/pricing-table"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { PRICING_COMPARISON } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for What's In Your Box? Start free and upgrade when you need more.",
}

export default function PricingPage() {
  return (
    <>
      <PricingTable />

      {/* Feature comparison table */}
      <SectionWrapper className="bg-muted/40">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Compare plans
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-4 py-3 text-left font-medium">Feature</th>
                <th className="px-4 py-3 text-center font-medium">Free</th>
                <th className="px-4 py-3 text-center font-medium">Monthly</th>
                <th className="px-4 py-3 text-center font-medium">Annual</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-center">{row.free}</td>
                  <td className="px-4 py-3 text-center font-medium">
                    {row.pro}
                  </td>
                  <td className="px-4 py-3 text-center font-medium">
                    {row.annual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>
    </>
  )
}
