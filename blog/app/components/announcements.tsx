"use client"
import { useState } from "react"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="w-full bg-deepnavy px-12 py-2.5 flex items-center justify-center relative">
      <p className="text-white text-sm sm:text-base text-center">
        Join us on Wednesdays for our campaign call!{" "}
        <a href="/events" className="font-bold text-sun underline underline-offset-2 hover:opacity-80">
          RSVP
        </a>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-2 w-11 h-11 flex items-center justify-center text-white/80 hover:text-white text-xl font-bold"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  )
}
