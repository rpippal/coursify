"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { LayoutDashboard, BookOpen, TrendingUp, LogOut, GraduationCap, Award, Sparkles } from "lucide-react"

export default function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      label: "My Courses",
      href: "/dashboard/my-courses",
      icon: BookOpen,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      label: "All Courses",
      href: "/courses",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-500"
    },
    {
      label: "Progress",
      href: "/progress",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500"
    },
  ]

  return (
    <aside className="relative w-72 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-white/10 px-6 py-8 flex flex-col overflow-hidden">

      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

      <Link href="/" className="group relative z-10">
        <div className="flex items-center gap-3 mb-10 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300">

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50">
              <svg className="h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-wide ">
              Coursify
            </h2>
            <p className="text-xs text-gray-400">Learn & Grow</p>
          </div>
        </div>
      </Link>

      {session && (
        <div className="relative z-10 mb-8 p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10">
          <div className="flex items-center gap-3">

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-md opacity-50"></div>
              {session.user?.image ? (
                <img src={session.user.image} alt={session.user.name || "User"} className="relative w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
              ) : (
                <div className="relative w-12 h-12 rounded-full border-2 border-white/20 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                  {session.user?.name?.charAt(0) || "U"}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                {session.user?.name || "User"}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {session.user?.email}
              </p>
            </div>
          </div>
        </div>
      )}

      <nav className="relative z-10 flex-1 space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-4">
          Menu
        </p>

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <SidebarLink key={item.href} label={item.label} href={item.href} icon={Icon} gradient={item.gradient} isActive={isActive} />
          )
        })}
      </nav>

      <div className="relative z-10 mb-6 p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span className="text-sm font-bold text-amber-400">Go Premium</span>
          </div>
          <p className="text-xs text-gray-300 mb-3">
            Unlock all courses and get unlimited access
          </p>
          <Link
            href="/premium"
            className="block w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg text-white text-sm font-semibold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/30 text-center">
            Upgrade Now
          </Link>
        </div>
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="relative z-10 flex items-center gap-3 rounded-2xl px-4 py-3 text-red-400 hover:bg-red-500/10 transition-all duration-300 border border-transparent hover:border-red-500/30 group">
        <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-semibold">Logout</span>
      </button>
    </aside>
  )
}

function SidebarLink({ label, href, icon: Icon, gradient, isActive }) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${isActive ? 'bg-white/10 shadow-lg' : 'hover:bg-white/5'}`}>

      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-r-full"></div>
      )}

      <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl ${isActive ? `bg-gradient-to-br ${gradient}` : 'bg-white/5 group-hover:bg-white/10'} transition-all duration-300 group-hover:scale-110`}>
        {isActive && (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-md opacity-50`}></div>
        )}
        <Icon className={`relative w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
          } transition-colors`} />
      </div>

      <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
        {label}
      </span>

      {/* {isActive && (
        <div className="ml-auto">
          
        </div>
      )} */}
    </Link>
  )
}