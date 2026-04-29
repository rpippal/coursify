"use client"
import educators, { getEducatorImages } from "@/data/educators"
import Link from "next/link"
import { GraduationCap, Users, Star, Clock, ArrowRight } from "lucide-react"
import FloatingNavButton from "@/components/FloatingNavButton"

export default function CoursesPage() {
  const educatorImages = getEducatorImages()

  const fallbackImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop"

  return (
    <>
      <FloatingNavButton />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 p-8">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  All Courses
                </h1>
                <p className="text-slate-400 text-lg mt-1">Discover knowledge from expert educators</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{educators.length}</p>
                  <p className="text-sm text-slate-400">Expert Educators</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Star className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">4.8/5</p>
                  <p className="text-sm text-slate-400">Average Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Clock className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">90 Days</p>
                  <p className="text-sm text-slate-400">Access Duration</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educators.map((course) => (
              <div key={course.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-[460px] bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">

                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${educatorImages[course.id] || fallbackImage})`, }} />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20" />

                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium border border-white/20 shadow-lg">
                      {course.role}
                    </span>

                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ₹199
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors line-clamp-2">
                        {course.heading[0]}
                      </h2>

                      <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                        {course.about}
                      </p>

                      <div className="flex items-center gap-3 p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-sm font-bold shadow-lg">
                          {course.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold">
                            {course.name}
                          </p>
                          <p className="text-xs text-gray-400">Expert Educator</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>90 Days</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>4.8</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>10k+</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/educators/${course.id}`} className="block w-full  bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                      <div className="flex justify-center text-center">
                        View Course <span><ArrowRight size={25} /></span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}