import {
  Package,
  QrCode,
  Camera,
  Users,
  Search,
  MapPin,
} from "lucide-react"

export const APP_URL = "https://app.wiyb.app"
export const SUPPORT_EMAIL = "support@wiyb.app"
export const SITE_NAME = "What's In Your Box?"
export const SITE_DESCRIPTION =
  "The moving inventory app that tracks your boxes with QR codes and AI. Never lose track of your stuff again."

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export const PRO_LINKS = [
  { label: "Brokerages", href: "/brokerages" },
  { label: "Realtors", href: "/realtors" },
]

export const FEATURES = [
  {
    icon: Package,
    title: "Room & Box Management",
    description:
      "Organize by room with auto-generated box IDs. Create rooms, add boxes, and keep everything structured.",
  },
  {
    icon: QrCode,
    title: "QR Code Labels",
    description:
      "Print QR labels for every box. Scan with your phone to instantly see what's inside.",
  },
  {
    icon: Camera,
    title: "AI Photo Analysis",
    description:
      "Snap a photo of your packed box and let AI identify the items for you. No manual typing needed.",
  },
  {
    icon: Users,
    title: "Household Sharing",
    description:
      "Invite family members to collaborate. Everyone in your household can view and update all boxes.",
  },
  {
    icon: Search,
    title: "Full-Text Search",
    description:
      "Find any item across all your boxes instantly. Just type what you're looking for.",
  },
  {
    icon: MapPin,
    title: "Moving Planner",
    description:
      "Plan destinations for your boxes. Know exactly which boxes go to which room in your new home.",
  },
]

export const STEPS = [
  {
    step: "1",
    title: "Create rooms & boxes",
    description:
      "Set up rooms in your home and add boxes to each one. Each box gets a unique ID and QR label.",
  },
  {
    step: "2",
    title: "Scan, snap, or type",
    description:
      "Add items by scanning QR codes, snapping photos for AI detection, or typing them in manually.",
  },
  {
    step: "3",
    title: "Find anything instantly",
    description:
      "Search across all your boxes to find any item in seconds. No more opening box after box.",
  },
]

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need for a simple move.",
    features: [
      "1 room",
      "5 boxes",
      "10 AI scans per month",
      "QR code labels",
      "Household sharing",
      "Full-text search",
    ],
    cta: "Get Started Free",
    href: APP_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "one-time",
    description: "Unlimited everything for your entire move.",
    features: [
      "Unlimited rooms",
      "Unlimited boxes",
      "100 AI scans per month",
      "QR code labels",
      "Household sharing",
      "Full-text search",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    href: APP_URL,
    highlighted: true,
  },
]

export const PRICING_COMPARISON = [
  { feature: "Rooms", free: "1", pro: "Unlimited" },
  { feature: "Boxes", free: "5", pro: "Unlimited" },
  { feature: "AI photo scans", free: "10/month", pro: "100/month" },
  { feature: "QR code labels", free: "✓", pro: "✓" },
  { feature: "Household sharing", free: "✓", pro: "✓" },
  { feature: "Full-text search", free: "✓", pro: "✓" },
  { feature: "Moving destinations", free: "✓", pro: "✓" },
  { feature: "Priority support", free: "—", pro: "✓" },
]

export const FAQS = [
  {
    question: "What is What's In Your Box?",
    answer:
      "It's a moving inventory app that helps you track what items are packed in which boxes. Create rooms, add boxes with QR labels, and use AI photo analysis or manual entry to catalog your items.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes! The free plan gives you 1 room, 5 boxes, and 10 AI scans per month — enough for a small move. Upgrade to Pro for unlimited rooms and boxes.",
  },
  {
    question: "How does QR scanning work?",
    answer:
      "Print QR labels for your boxes, then scan them with the app's built-in scanner. Scanning a label instantly opens the box details so you can see everything inside.",
  },
  {
    question: "How does AI photo analysis work?",
    answer:
      "After adding a photo to a box, the app sends it to an AI model that identifies what it sees and suggests items to add. Just tap to confirm each one — no manual typing needed.",
  },
  {
    question: "Can I share with family members?",
    answer:
      "Yes. Go to your Household settings and invite anyone via email. They'll get a link to join and can view and update all your boxes.",
  },
  {
    question: "What platforms is it available on?",
    answer:
      "What's In Your Box? works on the web, iOS, and Android. Your data syncs across all platforms automatically.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your boxes and items are only visible to you and the members of your household. We don't sell or share your data.",
  },
  {
    question: "What happens after my move?",
    answer:
      "Your data stays in your account for as long as you need it. Use it as a home inventory, or start fresh for your next move.",
  },
]
