import { Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { PRICING_TIERS } from "@/lib/constants"
import { cn } from "@/lib/utils"

interface PricingTableProps {
  showHeading?: boolean
}

export function PricingTable({ showHeading = true }: PricingTableProps) {
  return (
    <SectionWrapper id="pricing">
      {showHeading && (
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Start free and upgrade when you need more.
          </p>
        </div>
      )}

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        {PRICING_TIERS.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              "relative",
              tier.highlighted && "border-primary shadow-md"
            )}
          >
            {tier.highlighted && (
              <Badge className="absolute -top-3 right-4">Most Popular</Badge>
            )}
            <CardHeader>
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-sm text-muted-foreground">
                  {" "}
                  / {tier.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {tier.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <a
                href={tier.href}
                className={buttonVariants({
                  variant: tier.highlighted ? "default" : "outline",
                  className: "w-full",
                })}
              >
                {tier.cta}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
