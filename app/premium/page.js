"use client"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { Award, ArrowLeft, Sparkles, Zap, Crown, Rocket, Star, Gift, Bell } from "lucide-react"

export default function PremiumPage() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

        <Link href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-500/50 text-gray-300 hover:text-white transition-all mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold">Back to Dashboard</span>
        </Link>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-xl border border-amber-500/30">

          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 p-12 text-center">

            <div className="flex flex-col items-center gap-2 mb-5">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/30 mb-6 animate-pulse">
                <Crown className="w-12 h-12 text-amber-400" />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-400 uppercase tracking-wider">Coming Soon</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Premium Upgrade
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're crafting an exclusive premium experience just for you. Get ready for unlimited learning!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <FeatureCard
                icon={Rocket}
                title="Unlimited Access"
                description="Access all courses without limits" />
              <FeatureCard
                icon={Star}
                title="Priority Support"
                description="Get help faster with premium support" />
              <FeatureCard
                icon={Gift}
                title="Exclusive Content"
                description="Early access to new courses" />
            </div>

            <div className="max-w-xl mx-auto bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Bell className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold">Be the First to Know</h3>
              </div>

              <p className="text-gray-400 mb-6">
                Want to be notified when premium launches? We'll send you an email at:
              </p>

              <div className="flex items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 mb-6">
                <div className="flex-1 text-left">
                  <p className="text-sm text-gray-400">Your Email</p>
                  <p className="font-semibold text-white">{session?.user?.email || "Please login"}</p>
                </div>

              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                <Award className="w-4 h-4" />
                <span>You're on the waiting list!</span>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-2">Expected Launch</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Q2 2026
              </p>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

          <div className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">What to Expect</h3>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>All courses unlocked forever</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Download course materials</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Certificate of completion</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>Ad-free experience</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-lg border border-amber-500/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold">Early Bird Pricing</h3>
            </div>

            <div className="text-center mb-4">
              <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                ₹999
              </div>
              <p className="text-gray-400">per month</p>
              <p className="text-sm text-green-400 mt-2">Save 50% as an early adopter</p>
            </div>

            <div className="text-center text-xs text-gray-500">
              *Pricing subject to change at launch
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Continue your learning journey with our free courses
          </p>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
            <Rocket className="w-5 h-5" />
            Browse Free Courses
          </Link>
        </div>

      </div>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 p-6 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-amber-400" />
        </div>

        <h4 className="font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}