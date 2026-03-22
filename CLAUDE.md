@AGENTS.md

# WIYB Brochure Site

Marketing/brochure website for "What's In Your Box?" — a moving inventory tracker.

## Tech Stack

- Next.js 16 (App Router) with `output: 'export'` (static site)
- React 19, TypeScript 5
- Tailwind CSS v4 with `@tailwindcss/postcss`
- shadcn/ui v4 (base-nova style, neutral base, Lucide icons)
- `@base-ui/react` (shadcn v4 uses base-ui, NOT radix primitives)

## Key Conventions

- **No `asChild` prop** — base-ui uses `render` prop instead. For link buttons, use `buttonVariants` from `@/components/ui/button-variants` (server-safe) and apply to `<a>` or `<Link>` tags directly.
- **Server components by default** — only add `"use client"` when needed for interactivity.
- Theme tokens are in `src/app/globals.css` using oklch colors.
- Font: Geist Sans + Geist Mono via `next/font/google`.
- Light mode only.

## Commands

- `npm run dev` — start dev server
- `npm run build` — build static export to `out/`
- `npm run lint` — run ESLint

## Domain

- Marketing site: `wiyb.app`
- App: `app.wiyb.app`
