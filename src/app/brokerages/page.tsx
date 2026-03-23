import type { Metadata } from "next"
import {
  Building2,
  Users,
  BarChart3,
  Palette,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "For Brokerages",
  description:
    "Offer What's In Your Box? to your clients as a branded moving tool. White-label branding, realtor seat management, and client engagement metrics.",
}

const valueProps = [
  {
    icon: Palette,
    title: "White-Label Branding",
    description:
      "Your brokerage logo appears on QR labels, the app, and all client-facing touchpoints. Clients see your brand throughout their entire move.",
  },
  {
    icon: Users,
    title: "Realtor Seat Management",
    description:
      "Invite your realtors to the platform and allocate client invite quotas. Each realtor gets their own dashboard to manage their clients.",
  },
  {
    icon: BarChart3,
    title: "Client Engagement Metrics",
    description:
      "Track how many clients your realtors are inviting, how actively they're using the tool, and measure the value you're providing.",
  },
  {
    icon: Building2,
    title: "Subscription Pricing",
    description:
      "Simple per-seat pricing for your brokerage. No per-client fees — your realtors can invite as many clients as their quota allows.",
  },
]

const steps = [
  {
    step: "1",
    title: "Subscribe your brokerage",
    description:
      "Choose a plan based on the number of realtor seats you need. Upload your brokerage logo and branding.",
  },
  {
    step: "2",
    title: "Invite your realtors",
    description:
      "Send invites to your team. Each realtor gets a personal dashboard and a quota of client invites.",
  },
  {
    step: "3",
    title: "Realtors invite clients",
    description:
      "Your realtors send branded invites to their clients. Each client gets the full WIYB experience with your branding.",
  },
  {
    step: "4",
    title: "Clients love the tool",
    description:
      "Clients track their move with your branded app. Your brokerage stays top-of-mind throughout the entire moving process.",
  },
]

export default function BrokeragesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            For Real Estate Brokerages
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            A better moving experience
            <br />
            for your clients
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Offer What&apos;s In Your Box? as a branded moving tool for your
            clients. Strengthen relationships, differentiate your brokerage, and
            stay top-of-mind during every move.
          </p>
          <div className="mt-10">
            <a
              href={"https://app.wiyb.app/for-brokerages"}
              className={buttonVariants({ size: "lg" })}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
      <SectionWrapper className="bg-muted/40">
        <div className="grid gap-6 sm:grid-cols-2">
          {valueProps.map((prop) => (
            <Card key={prop.title} className="border-border/60">
              <CardContent className="pt-6">
                <prop.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{prop.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
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

      {/* CTA */}
      <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to stand out?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Give your clients a moving tool they&apos;ll actually use — with
            your brand front and center.
          </p>
          <div className="mt-8">
            <a
              href={"https://app.wiyb.app/for-brokerages"}
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
