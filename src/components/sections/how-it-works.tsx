import { SectionWrapper } from "@/components/shared/section-wrapper"
import { STEPS } from "@/lib/constants"

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Get organized in three simple steps.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.step} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {step.step}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
