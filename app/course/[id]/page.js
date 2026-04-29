"use client"
import React from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import educators from "@/data/educators"
import { Clock, BookOpen, ArrowLeft, CheckCircle, Bell, Calendar } from "lucide-react"
import Link from "next/link"

export default function CoursePage({ params }) {
    const { id } = React.use(params)
    const { data: session, status } = useSession()
    const router = useRouter()
    const educator = educators.find(e => e.id === id)

    if (!educator) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
                    <Link href="/dashboard" className="text-blue-400 hover:text-blue-300">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">

                <Link  href="/dashboard" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                </Link>

                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">

                    <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                        <div  className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{backgroundImage: `url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070)`,}}/>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-4 animate-pulse">
                                    <Clock className="w-10 h-10" />
                                </div>
                                <h1 className="text-4xl font-bold">Coming Soon!</h1>
                                <p className="text-lg opacity-90 mt-2">Course content is being prepared</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 lg:p-12">
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-4">
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span className="text-sm font-medium">You're Enrolled</span>
                            </div>

                            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {educator.heading[0]}
                            </h2>

                            <p className="text-gray-300 text-lg mb-6">
                                {educator.about}
                            </p>

                            <div className="flex items-center gap-4 p-4 bg-slate-700/50 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-xl font-bold">
                                    {educator.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold">{educator.name}</p>
                                    <p className="text-sm text-gray-400">{educator.role}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 mb-8">
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-blue-400" />
                                What's Coming
                            </h3>

                            <div className="space-y-4">
                                {[
                                    "High-quality video lessons",
                                    "Downloadable resources and materials",
                                    "Interactive exercises and quizzes",
                                    "Live Q&A sessions with instructors",
                                    "Community discussion forum",
                                    "Certificate of completion"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            </div>
                                        </div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-500/20 rounded-xl">
                                    <Bell className="w-6 h-6 text-blue-400" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-2">Get Notified</h4>
                                    <p className="text-gray-300 mb-4">
                                        We're working hard to bring you the best learning experience. 
                                        You'll receive an email notification as soon as the course content is ready!
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        <span>You'll be notified at: <strong className="text-white">{session?.user?.email}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href="/dashboard" className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg">
                                Back to Dashboard
                            </Link>
                            <Link href="/courses" className="flex-1 bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold text-center hover:bg-white/20 transition-all border border-white/20">
                                Explore More Courses
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>Expected launch: <strong className="text-white">March 2026</strong></p>
                    <p className="mt-2">Questions? Contact us at <a href="mailto:support@coursify.com" className="text-blue-400 hover:text-blue-300">support@coursify.com</a></p>
                </div>
            </div>
        </div>
    )
}