import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { FEATURES } from "@/lib/constants"

export function Features() {
  return (
    <SectionWrapper id="features" className="bg-muted/40">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to organize your move
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          From packing your first box to finding your favorite mug in your new
          home.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <Card key={feature.title} className="border-border/60">
            <CardContent className="pt-6">
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
