"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import Link from "next/link"
import Sidebar from "@/components/Sidebar"
import educators, { getEducatorImages } from "@/data/educators"
import { BookOpen, Clock, ChevronRight, Loader2, TrendingUp, Award, Target, Zap, Calendar, Star, PlayCircle } from "lucide-react"
import FloatingNavButton from "@/components/FloatingNavButton"

export default function Dashboard() {
  const educatorImages = getEducatorImages()
  const { data: session, status } = useSession()
  const [time, setTime] = useState("")
  const [date, setDate] = useState("")
  const [greeting, setGreeting] = useState("")
  const [purchasedCourses, setPurchasedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
      setDate(now.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short", year: "numeric" }))
      const h = now.getHours()
      if (h < 12) setGreeting("Good Morning")
      else if (h < 18) setGreeting("Good Afternoon")
      else setGreeting("Good Evening")
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    if (status === "authenticated") {
      fetchPurchasedCourses()
    } else if (status === "unauthenticated") {
      setLoading(false)
    }
  }, [status])

  const fetchPurchasedCourses = async () => {
    try {
      const { data } = await axios.get("/api/my-courses")

      const coursesWithDetails = data.courses.map(course => {
        const courseIdStr = String(course.courseId)
        const educator = educators.find(e => String(e.id) === courseIdStr)

        return {
          ...course,
          educator,
          image: educatorImages[courseIdStr] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
          displayName: educator?.heading?.[0] || course.courseName || "Course",
          educatorName: educator?.name || "Coursify",
          educatorRole: educator?.role || "Educator"
        }
      })

      setPurchasedCourses(coursesWithDetails)
      setError(null)

    } catch (error) {
      console.error("Error fetching courses:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

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
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Please Login</h2>
          <Link href="/login" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <FloatingNavButton />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="flex min-h-screen">
          <Sidebar />

          <main className="flex-1 p-10 space-y-8 overflow-y-auto">

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">Dashboard</span>
                </div>

                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {greeting}, {session?.user?.name?.split(" ")[0] || "Learner"}!
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    {date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    {time}
                  </div>
                </div>

                <p className="text-gray-400 italic flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-400" />
                  "Small progress every day beats motivation."
                </p>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Enrolled Courses"
                value={purchasedCourses.length.toString()}
                icon={BookOpen}
                gradient="from-blue-500 to-cyan-500"
                iconBg="bg-blue-500/20"/>
              <StatCard
                title="Total Courses"
                value={educators.length.toString()}
                icon={Award}
                gradient="from-purple-500 to-pink-500"
                iconBg="bg-purple-500/20"/>
              <StatCard
                title="Learning Time"
                value="18 hrs"
                icon={TrendingUp}
                gradient="from-orange-500 to-red-500"
                iconBg="bg-orange-500/20"/>
            </section>

            <section>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Continue Learning
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Pick up where you left off</p>
                </div>
                {purchasedCourses.length > 0 && (
                  <Link href="/dashboard/my-courses" className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                    View All
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>

              {loading ? (
                <div className="flex items-center justify-center py-20 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">
                  <div className="text-center">
                    <Loader2 className="w-10 h-10 animate-spin text-blue-500 mx-auto mb-4" />
                    <p className="text-gray-400">Loading your courses...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="rounded-3xl bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-lg border border-red-500/30 p-12 text-center">
                  <p className="text-red-400 mb-4 text-lg font-semibold">❌ Error loading courses</p>
                  <p className="text-gray-400 text-sm mb-6">{error}</p>
                  <button onClick={fetchPurchasedCourses} className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all">
                    Try Again
                  </button>
                </div>
              ) : purchasedCourses.length === 0 ? (
                <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No Courses Yet</h3>
                  <p className="text-gray-400 mb-6">Start your learning journey by purchasing a course</p>
                  <Link href="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                    <PlayCircle className="w-5 h-5" />
                    Browse Courses
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedCourses.map((course) => (
                    <div key={course.courseId} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-300 h-[380px]">
                 
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ backgroundImage: `url(${course.image})` }}/>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                      <div className="relative h-full flex flex-col justify-end p-6 text-white">

                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            Enrolled
                          </span>
                        </div>

                        <div className="space-y-3">

                          <h3 className="text-xl font-bold leading-tight group-hover:text-blue-300 transition-colors line-clamp-2">
                            {course.displayName}
                          </h3>

                          <p className="text-sm text-gray-300 line-clamp-2">
                            {course.educator?.about || "Start learning today"}
                          </p>

                          <div className="flex items-center gap-3 p-3 bg-slate-900/80 backdrop-blur-sm rounded-2xl">
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-md opacity-50"></div>
                              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                {course.educatorName?.charAt(0) || "C"}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold">{course.educatorName}</p>
                              <p className="text-xs text-gray-300">{course.educatorRole}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-gray-400">
                            <Calendar className="w-3 h-3" />
                            Purchased {new Date(course.purchasedAt).toLocaleDateString()}
                          </div>
                        </div>

                        <Link href={`/course/${course.courseId}`} className="mt-4 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                          <PlayCircle className="w-5 h-5" />
                          Continue Learning
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Explore All Courses
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Discover new skills and knowledge</p>
                </div>
                <Link href="/courses" className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-0.5">
                  View All
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {educators.slice(0, 4).map((educator) => (
                  <div key={educator.id} className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300">

                    <div className="relative h-48">
                      <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500" style={{ backgroundImage: `url(${educatorImages[educator.id]})` }}/>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-md rounded-full text-xs font-bold border border-purple-400/30">
                          {educator.role}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-lg font-bold leading-tight line-clamp-2 group-hover:text-purple-300 transition-colors">
                        {educator.heading[0]}
                      </h3>

                      <p className="text-xs text-gray-400 line-clamp-2">
                        {educator.about}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-500">by {educator.name}</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          ₹199
                        </span>
                      </div>

                      <Link href={`/educators/${educator.id}`} className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </>
  )
}

function StatCard({ title, value, icon: Icon, gradient, iconBg }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 hover:scale-105">
     
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
          <div className={`p-3 ${iconBg} rounded-2xl`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </h3>
      </div>
    </div>
  )
}