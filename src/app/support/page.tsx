import type { Metadata } from "next"
import { Mail, Package, MessageCircle, HelpCircle, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with What's In Your Box? Contact our support team.",
}

const faqs = [
  {
    q: "How do I activate a box?",
    a: "Scan the QR code on your box label with the app, or type the box ID (like BR-01) directly into the search bar. If the box hasn't been set up yet, you'll be prompted to activate it and assign it to a room.",
  },
  {
    q: "How does the AI item detection work?",
    a: "After adding a photo to a box, tap the Items tab and look for the AI Analysis section. The app sends your photo to an AI model that identifies what it sees and suggests items to add — just tap to confirm each one.",
  },
  {
    q: "Can I share my boxes with family members?",
    a: "Yes. Go to Account → Household and invite anyone via email. They'll get a link to join your household and can view and update all your boxes.",
  },
  {
    q: "How do I print QR labels?",
    a: "On the web app, go to Print QR Labels from the home screen. You can print labels for individual rooms or all your boxes at once.",
  },
  {
    q: "What happens if I delete a box?",
    a: "Deleting a box removes it along with all its photos and items. This action cannot be undone, so make sure you're done with it before deleting.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your boxes and items are only visible to you and the members of your household. We don't sell or share your data.",
  },
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <Package className="h-8 w-8 text-foreground" />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          How can we help?
        </h1>
        <p className="text-muted-foreground">
          Support for What&apos;s In Your Box?
        </p>
      </div>

      {/* Contact card */}
      <Card className="mb-10">
        <CardContent className="pt-6 pb-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-base font-semibold">Email Support</h2>
              <p className="mb-3 text-sm text-muted-foreground">
                Send us a message and we&apos;ll get back to you as soon as we
                can.
              </p>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Card className="bg-muted/50">
          <CardContent className="pt-5 pb-5">
            <Zap className="mb-2 h-5 w-5 text-muted-foreground" />
            <h3 className="mb-1 text-sm font-semibold">Getting started</h3>
            <p className="text-xs text-muted-foreground">
              Create a room first, then scan or type your box IDs to activate
              them. Add photos and let AI handle the item list.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-muted/50">
          <CardContent className="pt-5 pb-5">
            <Users className="mb-2 h-5 w-5 text-muted-foreground" />
            <h3 className="mb-1 text-sm font-semibold">Household sharing</h3>
            <p className="text-xs text-muted-foreground">
              Invite your partner or family from the Account tab. Everyone in
              your household can view and update all boxes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div>
        <div className="mb-5 flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-lg font-semibold">Frequently asked questions</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map(({ q, a }) => (
            <div key={q} className="py-5">
              <p className="mb-1.5 text-sm font-medium">{q}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-10 text-center text-sm text-muted-foreground">
        Still have questions?{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-medium text-foreground hover:underline"
        >
          Email us
        </a>{" "}
        and we&apos;ll be happy to help.
      </div>
    </div>
  )
}
