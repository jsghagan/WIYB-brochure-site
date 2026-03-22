import type { Metadata } from "next"
import { UserCheck, QrCode, TrendingUp, ShoppingBag } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "For Realtors",
  description:
    "Give your clients a moving tool they'll thank you for. Your branding on every QR label, track client engagement, and stay top-of-mind.",
}

const valueProps = [
  {
    icon: UserCheck,
    title: "Invite Clients Directly",
    description:
      "Send personalized invites to your clients with a single tap. They get instant access to the full moving tool.",
  },
  {
    icon: QrCode,
    title: "Your Brand on Every Label",
    description:
      "Your name, photo, and brokerage logo appear on every QR label your clients print. Your brand moves with them — literally.",
  },
  {
    icon: TrendingUp,
    title: "Track Client Engagement",
    description:
      "See which clients have accepted your invite, how many boxes they're tracking, and stay informed throughout their move.",
  },
  {
    icon: ShoppingBag,
    title: "Buy Additional Invites",
    description:
      "Need more client invites? Purchase additional invite packs anytime directly from your dashboard.",
  },
]

const steps = [
  {
    step: "1",
    title: "Get set up",
    description:
      "Your brokerage invites you to the platform, or reach out to us directly. Upload your profile photo to personalize the experience.",
  },
  {
    step: "2",
    title: "Invite your clients",
    description:
      "Enter your client's name and email. They receive a branded invite and can start tracking their move immediately.",
  },
  {
    step: "3",
    title: "Stay top-of-mind",
    description:
      "Your branding appears throughout their moving experience — on QR labels, in the app, and on printed materials.",
  },
]

export default function RealtorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-medium text-muted-foreground">
            For Realtors
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Give your clients a moving tool
            <br />
            they&apos;ll thank you for
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Help your clients organize their move with What&apos;s In Your Box?
            Your name and branding stay with them every step of the way.
          </p>
          <div className="mt-10">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Realtor Inquiry`}
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
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
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
            Ready to wow your clients?
          </h2>
          <p className="mt-4 text-primary-foreground/80">
            Talk to your brokerage about getting set up, or contact us directly.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Realtor Inquiry`}
              className={buttonVariants({ size: "lg", variant: "secondary" })}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
