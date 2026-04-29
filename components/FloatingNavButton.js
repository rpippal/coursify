"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, LayoutDashboard, Sparkles } from "lucide-react"

export default function FloatingNavButton() {
  const pathname = usePathname()
  const getButtonConfig = () => {
    if (pathname === "/") {
      return {
        href: "/dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        gradient: "from-blue-500 to-purple-600"
      }
    } else if (pathname.startsWith("/dashboard")) {
      return {
        href: "/",
        icon: Home,
        label: "Home",
        gradient: "from-blue-500 to-purple-600"
      }
    } else if (pathname.startsWith("/educators") || pathname.startsWith("/courses")) {
      return {
        href: "/dashboard",
        icon: LayoutDashboard,
        label: "Dashboard",
        gradient: "from-blue-500 to-purple-600"
      }
    } else {
      return {
        href: "/",
        icon: Home,
        label: "Home",
        gradient: "from-indigo-500 to-blue-600"
      }
    }
  }

  const config = getButtonConfig()
  const Icon = config.icon

  return (
    <Link href={config.href} className="fixed top-6 right-6 z-50 group">
      <div className="relative">       
        <div className={`relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${config.gradient} rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110`}>
          <Icon className="w-5 h-5 text-white" />
          <span className="text-white font-bold text-sm">{config.label}</span>
        </div>
      </div>
    </Link>
  )
}