import Link from "next/link"
import { Package } from "lucide-react"
import { SUPPORT_EMAIL } from "@/lib/constants"

const footerLinks = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Professionals: [
    { label: "Brokerages", href: "/brokerages" },
    { label: "Realtors", href: "/realtors" },
  ],
  Company: [
    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 font-semibold">
              <Package className="h-5 w-5 text-primary" />
              WIYB
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Track what&apos;s in every moving box.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground"
            >
              {SUPPORT_EMAIL}
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-medium">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} What&apos;s In Your Box? All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
