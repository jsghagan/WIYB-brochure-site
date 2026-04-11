import type { Metadata } from "next"
import { Trash2, Smartphone, Mail, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SUPPORT_EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Delete Account",
  description: "Request deletion of your What's In Your Box? account and associated data.",
}

export default function DeleteAccountPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <Trash2 className="h-8 w-8 text-foreground" />
        </div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Delete Your Account</h1>
        <p className="text-muted-foreground">
          You can delete your account and all associated data at any time.
        </p>
      </div>

      {/* What gets deleted */}
      <Card className="mb-8 border-destructive/30 bg-destructive/5">
        <CardContent className="pt-6 pb-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
            <div>
              <h2 className="mb-2 text-base font-semibold">What will be deleted</h2>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>Your account and login credentials</li>
                <li>All rooms, boxes, and items you have created</li>
                <li>All photos associated with your boxes</li>
                <li>Any households you own with no other members</li>
              </ul>
              <p className="mt-3 text-sm font-medium text-destructive">
                This action is permanent and cannot be undone.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Option 1 — in-app */}
      <div className="mb-6">
        <h2 className="mb-4 text-lg font-semibold">Option 1 — Delete in the app</h2>
        <Card>
          <CardContent className="pt-6 pb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                <Smartphone className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold">From the Account tab</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  The fastest way to delete your account is directly in the app.
                </p>
                <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Open What&apos;s In Your Box?</li>
                  <li>Tap the <strong>Account</strong> tab</li>
                  <li>Scroll to the bottom and tap <strong>Delete Account</strong></li>
                  <li>Confirm the deletion when prompted</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Option 2 — email */}
      <div className="mb-10">
        <h2 className="mb-4 text-lg font-semibold">Option 2 — Request via email</h2>
        <Card>
          <CardContent className="pt-6 pb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                <Mail className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-semibold">Email us</h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  If you no longer have access to the app, send us an email from the address
                  associated with your account and we will delete it within 30 days.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Questions about your data?{" "}
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="font-medium text-foreground hover:underline"
        >
          Contact support
        </a>
      </div>
    </div>
  )
}
