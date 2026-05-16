"use client"
import { useState } from "react"

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="w-full bg-white px-8 py-3 flex items-center justify-center relative sticky border-b-2 border-deepernavy">
      <p className="text-deepnavy text-sm font-semibold text-center">
        Join us on Wednesday, May 20th to kick-off the campaign!{" "}
        <a href="#" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
          RSVP here
        </a>
        .
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 text-deepernavy hover:opacity-60 transition-opacity text-xl font-bold"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  )
}