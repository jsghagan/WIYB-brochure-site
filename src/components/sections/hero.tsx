import Link from "next/link"
import { buttonVariants } from "@/components/ui/button-variants"
import { SIGNUP_URL } from "@/lib/constants"

export function Hero() {
  return (
    <section className="px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Know exactly what&apos;s
          <br />
          in every box.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          The moving inventory app that tracks your boxes with QR codes and AI.
          Never lose track of your stuff again.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={SIGNUP_URL} className={buttonVariants({ size: "lg" })}>
            Get Started Free
          </a>
          <Link
            href="/getting-started"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            See How It Works
          </Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Available on Web, iOS, and Android
        </p>
      </div>
    </section>
  )
}
