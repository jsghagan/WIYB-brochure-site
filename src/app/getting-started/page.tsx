import type { Metadata } from "next"
import Link from "next/link"
import {
  UserPlus,
  Home,
  Package,
  QrCode,
  Camera,
  Search,
  CheckCircle2,
  Monitor,
  Smartphone,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button-variants"
import { SIGNUP_URL, APP_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Learn how to set up What's In Your Box? — create your account, set up rooms, print QR labels, and find anything in seconds.",
}

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Create your account",
    description:
      "Sign up for free on the web or download the app on iOS or Android. The free plan gives you 1 room, 5 boxes, and 10 AI scans per month — enough to get started right away.",
    tips: [
      "No credit card required",
      "Works on web, iOS, and Android",
      "Your data syncs across all devices automatically",
    ],
  },
  {
    number: "2",
    icon: Home,
    title: "Set up your rooms",
    description:
      "Start by creating rooms that match your home — Kitchen, Living Room, Bedroom, Garage, and so on. Rooms keep your boxes organized and make it easy to find things later.",
    tips: [
      'Tap "Rooms" in the bottom nav and hit the + button',
      "Name rooms after your current home or your destination",
      "You can rename or reorganize rooms at any time",
    ],
  },
  {
    number: "3",
    icon: Package,
    title: "Add boxes to each room",
    description:
      "Once you have rooms, add boxes to them. Each box gets a unique ID (like KT-01 for Kitchen box 1) that you'll use to identify it later.",
    tips: [
      "Give boxes short, descriptive names — e.g. \"Pots & Pans\", \"Books\"",
      "You can add as many boxes as you need per room",
      "Box IDs are auto-generated — no need to type them",
    ],
  },
  {
    number: "4",
    icon: QrCode,
    title: "Print your QR labels",
    description:
      "This is the key step. Print QR labels for your boxes and stick them on before you start packing. Each label links directly to that box in the app — just scan it to see what's inside.",
    highlight: true,
    highlightNote: "Printing works best from a desktop browser",
    tips: [
      'Go to app.wiyb.app and open "Print QR Labels" from the home screen',
      "Print all boxes at once or room by room",
      "Stick labels on the outside of the box where they\'re easy to scan",
      "Use tape or a label sheet — any standard paper works",
    ],
  },
  {
    number: "5",
    icon: Camera,
    title: "Pack and catalogue your items",
    description:
      "As you pack each box, add items to it in the app. You can scan the QR label to open the box, snap a photo and let AI identify items automatically, or type items in manually.",
    tips: [
      "Snap a photo of your packed box before closing it — AI will suggest items",
      "Review and confirm the AI suggestions, then tap Save",
      "You can also type items manually if you prefer",
      "Add a photo even after packing — just open the box, snap, and close it again",
    ],
  },
  {
    number: "6",
    icon: Search,
    title: "Find anything, instantly",
    description:
      "Once your items are catalogued, you can search across all your boxes at any time. Type what you're looking for and the app tells you exactly which box it's in.",
    tips: [
      'Use the Search tab to find items across all rooms and boxes',
      "Scan a box\'s QR label to instantly see everything inside",
      "Share your household with family so everyone can search too",
    ],
  },
]

const proTips = [
  {
    icon: QrCode,
    title: "Label first, pack second",
    body: "Print and stick your QR labels before you start filling boxes. It's much easier than trying to label a sealed box.",
  },
  {
    icon: Camera,
    title: "Photo before you seal",
    body: "Snap a photo of the open box before you tape it shut. The AI works best when it can see everything at once.",
  },
  {
    icon: Monitor,
    title: "Print from desktop",
    body: "The print labels page is optimized for desktop browsers. Open app.wiyb.app on your computer to get the best results.",
  },
  {
    icon: Smartphone,
    title: "Keep the app handy",
    body: "Download the app on your phone so you can scan QR codes and look up items on moving day — no login required after setup.",
  },
]

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-14 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <Package className="h-8 w-8 text-foreground" />
        </div>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Getting started
        </h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          From sign-up to your first move in six easy steps. The whole process
          takes about 10 minutes to set up — then you&apos;re ready to pack.
        </p>
        <div className="mt-6">
          <a href={SIGNUP_URL} className={buttonVariants({ size: "lg" })}>
            Create your free account
          </a>
        </div>
      </div>

      {/* Steps */}
      <div className="mb-16 space-y-10">
        {steps.map(({ number, icon: Icon, title, description, tips, highlight, highlightNote }) => (
          <div key={number} className="flex gap-5">
            {/* Step number */}
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {number}
              </div>
              {/* Connector line */}
              {number !== "6" && (
                <div className="mt-2 w-px flex-1 bg-border" />
              )}
            </div>

            {/* Content */}
            <div className="pb-10">
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">{title}</h2>
              </div>
              <p className="mb-4 text-muted-foreground">{description}</p>

              {highlight && highlightNote && (
                <div className="mb-4 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
                  <span className="font-medium">Tip: </span>
                  {highlightNote}.{" "}
                  <a
                    href={`${APP_URL}/print`}
                    className="font-medium underline underline-offset-4"
                  >
                    Open Print Labels on the web →
                  </a>
                </div>
              )}

              <ul className="space-y-1.5">
                {tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Pro tips */}
      <div className="mb-14">
        <h2 className="mb-5 text-xl font-semibold">Tips for moving day</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {proTips.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="bg-muted/50">
              <CardContent className="pt-5 pb-5">
                <Icon className="mb-2 h-5 w-5 text-muted-foreground" />
                <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                <p className="text-xs text-muted-foreground">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
        <h2 className="mb-2 text-xl font-semibold">Ready to get started?</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Create your free account and have your first room set up in minutes.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={SIGNUP_URL} className={buttonVariants({ size: "lg" })}>
            Create free account
          </a>
          <Link
            href="/support"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            Get help
          </Link>
        </div>
      </div>
    </div>
  )
}
