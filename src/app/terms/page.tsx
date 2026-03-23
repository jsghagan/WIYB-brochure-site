import type { Metadata } from "next"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for What's In Your Box?",
}

export default function TermsPage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl prose prose-neutral prose-sm">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: March 2026</p>

        <h2 className="mt-8 text-xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground">
          By accessing or using What&apos;s In Your Box? (&quot;the Service&quot;), you agree to be
          bound by these Terms of Service. If you do not agree, do not use the Service.
        </p>

        <h2 className="mt-8 text-xl font-semibold">2. Description of Service</h2>
        <p className="text-muted-foreground">
          What&apos;s In Your Box? is a moving inventory tracking application that allows users
          to organize items in boxes, generate QR labels, and use AI-powered photo analysis.
          The Service is available on web, iOS, and Android.
        </p>

        <h2 className="mt-8 text-xl font-semibold">3. Accounts</h2>
        <p className="text-muted-foreground">
          You are responsible for maintaining the confidentiality of your account credentials.
          You are responsible for all activities that occur under your account.
        </p>

        <h2 className="mt-8 text-xl font-semibold">4. Subscriptions &amp; Auto-Renewal</h2>
        <p className="text-muted-foreground">
          The Service offers free and paid plans. Free plans have usage limits on rooms, boxes,
          and AI scans.
        </p>
        <p className="mt-3 text-muted-foreground">
          Paid plans are offered as auto-renewing subscriptions at the following intervals:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground">
          <li><strong className="text-foreground">Monthly:</strong> $4.99 USD per month</li>
          <li><strong className="text-foreground">Annual:</strong> $49.99 USD per year</li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          Payment is charged to your Apple App Store account, Google Play Store account, or
          payment method on file (via Stripe on the web) at confirmation of purchase.
          Subscriptions automatically renew at the end of each billing period at the same
          price unless you cancel at least 24 hours before the end of the current period.
        </p>
        <p className="mt-3 text-muted-foreground">
          You can manage or cancel your subscription at any time:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6 text-muted-foreground">
          <li><strong className="text-foreground">iOS:</strong> Settings &gt; Apple ID &gt; Subscriptions</li>
          <li><strong className="text-foreground">Android:</strong> Google Play Store &gt; Subscriptions</li>
          <li><strong className="text-foreground">Web:</strong> Account settings within the app</li>
        </ul>
        <p className="mt-3 text-muted-foreground">
          Cancellation takes effect at the end of the current billing period. No refunds are
          provided for partial billing periods. Free trial periods, if offered, will be
          forfeited upon purchasing a subscription before the trial ends.
        </p>

        <h2 className="mt-8 text-xl font-semibold">5. User Content</h2>
        <p className="text-muted-foreground">
          You retain ownership of all content you create through the Service, including box items,
          photos, and room configurations. You grant us a limited license to store and process
          this content solely to provide the Service.
        </p>

        <h2 className="mt-8 text-xl font-semibold">6. Acceptable Use</h2>
        <p className="text-muted-foreground">
          You agree not to misuse the Service, including but not limited to: attempting to access
          other users&apos; data, interfering with the Service&apos;s operation, or using the AI
          features for purposes unrelated to moving inventory.
        </p>

        <h2 className="mt-8 text-xl font-semibold">7. Limitation of Liability</h2>
        <p className="text-muted-foreground">
          The Service is provided &quot;as is&quot; without warranties of any kind. We are not liable
          for any damages arising from your use of the Service, including but not limited to lost
          or damaged items during a move.
        </p>

        <h2 className="mt-8 text-xl font-semibold">8. Changes to Terms</h2>
        <p className="text-muted-foreground">
          We may update these Terms from time to time. Continued use of the Service after changes
          constitutes acceptance of the new Terms.
        </p>

        <h2 className="mt-8 text-xl font-semibold">9. Contact</h2>
        <p className="text-muted-foreground">
          For questions about these Terms, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline">
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </div>
    </SectionWrapper>
  )
}
