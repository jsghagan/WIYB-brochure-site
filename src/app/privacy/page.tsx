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
      <div className="mx-auto max-w-3xl prose prose-neutral prose-sm">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: March 2026</p>

        <h2 className="mt-8 text-xl font-semibold">1. Information We Collect</h2>
        <p className="text-muted-foreground">
          When you create an account, we collect your email address and display name.
          When you use the app, we store the rooms, boxes, items, and photos you create.
          We also collect usage data such as AI scan counts to enforce plan limits.
        </p>

        <h2 className="mt-8 text-xl font-semibold">2. How We Use Your Information</h2>
        <p className="text-muted-foreground">
          Your data is used solely to provide and improve the What&apos;s In Your Box? service.
          We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2 className="mt-8 text-xl font-semibold">3. Data Storage & Security</h2>
        <p className="text-muted-foreground">
          Your data is stored securely using Supabase with row-level security policies.
          Photos are stored in private, household-scoped storage buckets.
          All data is transmitted over HTTPS.
        </p>

        <h2 className="mt-8 text-xl font-semibold">4. Household Sharing</h2>
        <p className="text-muted-foreground">
          When you invite members to your household, they can view and modify all boxes,
          items, and photos within that household. You can manage household membership at any time.
        </p>

        <h2 className="mt-8 text-xl font-semibold">5. AI Photo Analysis</h2>
        <p className="text-muted-foreground">
          When you use the AI photo analysis feature, your photos are sent to a third-party
          AI provider for processing. Photos are not stored by the AI provider beyond the
          duration of the analysis request.
        </p>

        <h2 className="mt-8 text-xl font-semibold">6. Data Deletion</h2>
        <p className="text-muted-foreground">
          You can delete your boxes, items, and photos at any time through the app.
          To delete your account entirely, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline">
            {SUPPORT_EMAIL}
          </a>.
        </p>

        <h2 className="mt-8 text-xl font-semibold">7. Contact</h2>
        <p className="text-muted-foreground">
          If you have questions about this privacy policy, contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground underline">
            {SUPPORT_EMAIL}
          </a>.
        </p>
      </div>
    </SectionWrapper>
  )
}
