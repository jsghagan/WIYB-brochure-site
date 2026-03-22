import Link from "next/link"
import { buttonVariants } from "@/components/ui/button-variants"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-32">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Go Home
      </Link>
    </div>
  )
}
