"use client"

import { Package, Book, Coffee, Archive, Camera, Star } from "lucide-react"

const ITEMS = [
  { Icon: Book,    color: "#6366f1", tx: "-140%", ty: "-260%", delay: "0ms"    },
  { Icon: Coffee,  color: "#f59e0b", tx:  "120%", ty: "-230%", delay: "260ms"  },
  { Icon: Archive, color: "#10b981", tx: "-90%",  ty: "-310%", delay: "520ms"  },
  { Icon: Camera,  color: "#ef4444", tx:  "150%", ty: "-290%", delay: "780ms"  },
  { Icon: Star,    color: "#8b5cf6", tx:  "10%",  ty: "-350%", delay: "1040ms" },
]

export function LogoMark() {
  return (
    <span className="relative inline-flex items-center justify-center w-5 h-5">
      {ITEMS.map(({ Icon, color, tx, ty, delay }, i) => (
        <span
          key={i}
          className="absolute inset-0 flex items-center justify-center logo-item"
          style={{ "--tx": tx, "--ty": ty, animationDelay: delay } as React.CSSProperties}
        >
          <Icon className="w-3.5 h-3.5" style={{ color }} />
        </span>
      ))}
      <span className="relative z-10 logo-box">
        <Package className="h-5 w-5 text-primary" />
      </span>
    </span>
  )
}
