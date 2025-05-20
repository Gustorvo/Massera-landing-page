"use client"

import { useState } from "react"

export function useLogoPath() {
  // Always return the black logo since we're only using light mode
  const [logoPath] = useState("/logo_black.webp")
  return logoPath
}
