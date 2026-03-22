import { buttonVariants } from "@/components/ui/button-variants"
import { SIGNUP_URL } from "@/lib/constants"

export function CtaDownload() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to organize your next move?
        </h2>
        <p className="mt-4 text-primary-foreground/80">
          Start tracking your boxes for free. Available on Web, iOS, and
          Android.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SIGNUP_URL}
            className={buttonVariants({ size: "lg", variant: "secondary" })}
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  )
}
