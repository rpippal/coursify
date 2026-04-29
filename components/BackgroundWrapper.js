"use client"

import { usePathname } from "next/navigation"

export default function BackgroundWrapper({ children }) {
  const pathname = usePathname()

  const customBgPages = ["/courses", "/dashboard"]

  const hasCustomBg = customBgPages.some((path) =>
    pathname.startsWith(path)
  )

  const defaultBg =
    "bg-gradient-to-br from-slate-800 via-gray-900 to-black"

  return (
    <div className={hasCustomBg ? "" : defaultBg}>
      {children}
    </div>
  )
}
