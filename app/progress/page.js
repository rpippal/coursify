"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Sidebar from "@/components/Sidebar"
import FloatingNavButton from "@/components/FloatingNavButton"
import { ArrowLeft, TrendingUp, Wrench, Loader2,Clock,Sparkles} from "lucide-react"

export default function ProgressPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-white">Loading...</p>
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    router.push("/login")
    return null
  }

  return (
    <>
      <FloatingNavButton />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 p-10 space-y-8 overflow-y-auto">
            
            <Link  href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold">Back to Dashboard</span>
            </Link>

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-xl border border-white/10 p-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Progress</span>
                </div>
                
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Track Your Progress
                </h1>
                
                <p className="text-gray-400">
                  Monitor your learning journey and achievements
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center py-20">
              <div className="max-w-2xl w-full">
                <div className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-12 text-center">
                  
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6">
                    <Wrench className="w-10 h-10 text-green-400" />
                  </div>

                  <h2 className="text-3xl font-bold mb-4">We're Working On It!</h2>

                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Our team is building an awesome progress tracking feature. Soon you'll be able to see detailed analytics of your learning journey.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <Sparkles className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Course Completion</p>
                        <p className="text-sm text-gray-400">Track your progress in each course</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <Sparkles className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Learning Streaks</p>
                        <p className="text-sm text-gray-400">See your daily learning habits</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <Sparkles className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Achievements</p>
                        <p className="text-sm text-gray-400">Earn badges for milestones</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <Sparkles className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold mb-1">Time Analytics</p>
                        <p className="text-sm text-gray-400">View your learning time stats</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4" />
                    <span>Expected launch: March 2025</span>
                  </div>

                  <Link href="/dashboard" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/50">
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </>
  )
}