import type { Metadata } from "next"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for What's In Your Box?",
}

export default function PrivacyPage() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Effective Date: March 5, 2025
        </p>
        <p className="mt-1 text-sm text-muted-foreground">Operator: OneMotion</p>

        <h2 className="mt-10 text-xl font-semibold">1. Information Collected</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The service collects only essential data:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Account information:</strong> Email
            and password via Supabase Auth
          </li>
          <li>
            <strong className="text-foreground">Household data:</strong> Rooms,
            boxes, destinations, and item names you create
          </li>
          <li>
            <strong className="text-foreground">Photos:</strong> Images uploaded to
            boxes in secure cloud storage
          </li>
          <li>
            <strong className="text-foreground">Usage data:</strong> Basic activity
            logs for debugging purposes
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          We do not collect payment information, location data, or any data beyond
          what you explicitly provide.
        </p>

        <h2 className="mt-10 text-xl font-semibold">2. Data Usage</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Information is used to:
        </p>
        <ul className="mt-2 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground">
          <li>Operate and maintain the service</li>
          <li>Generate AI-based item suggestions from box photos</li>
          <li>Enable household member collaboration on shared boxes</li>
          <li>Address support requests</li>
          <li>Enhance reliability and fix bugs</li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          We do not use your data for advertising, and we do not sell or rent it to
          third parties.
        </p>

        <h2 className="mt-10 text-xl font-semibold">3. AI Photo Analysis</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Photos sent for AI analysis go to Anthropic solely for item suggestions.
          Images are not stored by the AI provider and are not used to train their
          models beyond what is permitted under their terms of service. Photo
          analysis is always optional and user-initiated.
        </p>

        <h2 className="mt-10 text-xl font-semibold">4. Third-Party Services</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-6 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Supabase:</strong> Database,
            authentication, file storage
          </li>
          <li>
            <strong className="text-foreground">Anthropic:</strong> AI model for
            photo-based suggestions
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Each provider has independent privacy policies. We select providers
          meeting high security standards.
        </p>

        <h2 className="mt-10 text-xl font-semibold">5. Data Sharing</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Your data is shared only within your household (with members you
          explicitly invite) and with the third-party providers listed above as
          required to operate the service.
        </p>

        <h2 className="mt-10 text-xl font-semibold">6. Data Retention</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Data persists while your account is active. Deleted boxes are permanently
          removed. To request full account deletion, email us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-foreground underline"
          >
            {SUPPORT_EMAIL}
          </a>{" "}
          and we will action it within 30 days.
        </p>

        <h2 className="mt-10 text-xl font-semibold">7. Security</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Industry-standard measures include HTTPS encryption, database row-level
          security, and secure credential storage.
        </p>

        <h2 className="mt-10 text-xl font-semibold">
          8. Children&apos;s Privacy
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          This service is not directed at children under 13. We do not knowingly
          collect data from minors.
        </p>

        <h2 className="mt-10 text-xl font-semibold">9. Policy Updates</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Updates will be noted by revising the effective date. Continued use of
          the service constitutes acceptance of the updated policy.
        </p>

        <h2 className="mt-10 text-xl font-semibold">10. Contact</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          For questions about this privacy policy, contact us at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-foreground underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </div>
    </SectionWrapper>
  )
}
