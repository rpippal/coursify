// "use client"
// import { useEffect, useState } from "react"
// import { useSession } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import axios from "axios"
// import Link from "next/link"
// import Sidebar from "@/components/Sidebar"
// import educators from "@/data/educators"
// import { 
//   BookOpen, 
//   Clock, 
//   Loader2, 
//   ArrowLeft, 
//   Calendar, 
//   TrendingUp,
//   Award,
//   PlayCircle,
//   Star,
//   GraduationCap,
//   CheckCircle
// } from "lucide-react"
// import FloatingNavButton from "@/components/FloatingNavButton"

// export default function MyCoursesPage() {
//   const { data: session, status } = useSession()
//   const router = useRouter()
//   const [purchasedCourses, setPurchasedCourses] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const educatorImages = {
//     "1": "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "2": "https://images.unsplash.com/photo-1742483377314-b0faf3d9f86e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "3": "https://images.unsplash.com/photo-1565784796667-98515d255f7d?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "4": "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "5": "https://images.unsplash.com/photo-1605089103010-bcba7ca9b10d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "6": "https://images.unsplash.com/photo-1731461298149-5c9c2da04741?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "7": "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "8": "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   }

//   useEffect(() => {
//     if (status === "authenticated") {
//       fetchPurchasedCourses()
//     } else if (status === "unauthenticated") {
//       router.push("/login")
//     }
//   }, [status, router])

//   const fetchPurchasedCourses = async () => {
//     try {
//       const { data } = await axios.get("/api/my-courses")

//       const coursesWithDetails = data.courses.map(course => {
//         const courseIdStr = String(course.courseId)
//         const educator = educators.find(e => String(e.id) === courseIdStr)

//         return {
//           ...course,
//           educator,
//           image: educatorImages[courseIdStr] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
//           displayName: educator?.heading?.[0] || course.courseName || "Course",
//           educatorName: educator?.name || "Coursify",
//           educatorRole: educator?.role || "Educator"
//         }
//       })

//       setPurchasedCourses(coursesWithDetails)
//     } catch (error) {
//       console.error("Failed to fetch courses:", error)
//       setError(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (status === "loading" || loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
//           <p className="text-white">Loading your courses...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <FloatingNavButton />

//       <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
//         <div className="flex min-h-screen">
//           <Sidebar />

//           <main className="flex-1 p-10 space-y-8 overflow-y-auto">

//             <div className="space-y-6">
//               <Link 
//                 href="/dashboard"
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all"
//               >
//                 <ArrowLeft className="w-4 h-4" />
//                 <span className="font-semibold">Back to Dashboard</span>
//               </Link>

//               <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 p-8">

//                 <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

//                 <div className="relative z-10">
//                   <div className="flex items-center gap-2 mb-4">
//                     <GraduationCap className="w-6 h-6 text-purple-400" />
//                     <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">My Learning</span>
//                   </div>

//                   <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
//                     My Courses
//                   </h1>

//                   <p className="text-gray-400">
//                     All your enrolled courses in one place • Keep learning, keep growing
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <StatCard 
//                 title="Total Enrolled" 
//                 value={purchasedCourses.length.toString()} 
//                 icon={BookOpen}
//                 gradient="from-blue-500 to-cyan-500"
//                 iconBg="bg-blue-500/20"
//               />
//               <StatCard 
//                 title="In Progress" 
//                 value={purchasedCourses.length.toString()} 
//                 icon={TrendingUp}
//                 gradient="from-purple-500 to-pink-500"
//                 iconBg="bg-purple-500/20"
//               />
//               <StatCard 
//                 title="This Month" 
//                 value={purchasedCourses.filter(c => {
//                   const purchaseDate = new Date(c.purchasedAt)
//                   const now = new Date()
//                   return purchaseDate.getMonth() === now.getMonth() && 
//                          purchaseDate.getFullYear() === now.getFullYear()
//                 }).length.toString()}
//                 icon={Calendar}
//                 gradient="from-green-500 to-emerald-500"
//                 iconBg="bg-green-500/20"
//               />
//             </div>

//             <section>
//               <div className="mb-6">
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
//                   Your Learning Journey
//                 </h2>
//                 <p className="text-gray-400">Continue where you left off</p>
//               </div>

//               {/* Courses Grid */}
//               {error ? (
//                 <div className="rounded-3xl bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-lg border border-red-500/30 p-12 text-center">
//                   <p className="text-red-400 mb-4 text-lg font-semibold">❌ Error loading courses</p>
//                   <p className="text-gray-400 text-sm">{error}</p>
//                 </div>
//               ) : purchasedCourses.length === 0 ? (
//                 <div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-12 text-center">
//                   <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
//                     <BookOpen className="w-10 h-10 text-gray-400" />
//                   </div>
//                   <h3 className="text-2xl font-bold mb-2">No Courses Yet</h3>
//                   <p className="text-gray-400 mb-6">Start your learning journey by purchasing a course</p>
//                   <Link 
//                     href="/courses" 
//                     className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1"
//                   >
//                     <PlayCircle className="w-5 h-5" />
//                     Browse Courses
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {purchasedCourses.map((course) => (
//                     <div
//                       key={course.courseId}
//                       className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-purple-500/50"
//                     >

//                       <div className="relative h-48">
//                         <div
//                           className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                           style={{ backgroundImage: `url(${course.image})` }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

//                         <div className="absolute top-4 right-4 z-10">
//                           <span className="flex items-center gap-1 px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-xs font-bold shadow-lg">
//                             <CheckCircle className="w-3 h-3" />
//                             Enrolled
//                           </span>
//                         </div>

//                         <div className="absolute top-4 left-4 z-10">
//                           <span className="px-3 py-1.5 bg-blue-500/90 backdrop-blur-md rounded-full text-xs font-bold shadow-lg">
//                             {course.progress || 0}% Complete
//                           </span>
//                         </div>
//                       </div>

//                       <div className="p-6 bg-slate-900/90 backdrop-blur-sm space-y-4">

//                         <h3 className="text-xl font-bold leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
//                           {course.displayName}
//                         </h3>

//                         <div className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
//                           <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-md opacity-50"></div>
//                             <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
//                               {course.educatorName?.charAt(0) || "C"}
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <p className="text-sm font-semibold">{course.educatorName}</p>
//                             <p className="text-xs text-gray-400">{course.educatorRole}</p>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-2 text-xs text-gray-500">
//                           <Calendar className="w-3 h-3" />
//                           Purchased {new Date(course.purchasedAt).toLocaleDateString('en-US', { 
//                             year: 'numeric', 
//                             month: 'short', 
//                             day: 'numeric' 
//                           })}
//                         </div>

//                         <div className="space-y-1">
//                           <div className="flex justify-between text-xs text-gray-400">
//                             <span>Progress</span>
//                             <span className="font-semibold">{course.progress || 0}%</span>
//                           </div>
//                           <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
//                             <div 
//                               className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300 rounded-full"
//                               style={{ width: `${course.progress || 0}%` }}
//                             />
//                           </div>
//                         </div>

//                         <Link
//                           href={`/course/${course.courseId}`}
//                           className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
//                         >
//                           <PlayCircle className="w-5 h-5" />
//                           Continue Learning
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </section>

//             {purchasedCourses.length > 0 && (
//               <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 p-12">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
//                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>

//                 <div className="relative z-10 text-center">
//                   <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500/20 to-pink-500/20 flex items-center justify-center">
//                     <Award className="w-8 h-8 text-orange-400" />
//                   </div>

//                   <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
//                     Want to learn more?
//                   </h3>

//                   <p className="text-gray-400 mb-8 max-w-md mx-auto">
//                     Explore our catalog of amazing courses and continue your journey to mastery
//                   </p>

//                   <Link
//                     href="/courses"
//                     className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-orange-600 hover:to-pink-700 transition-all shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-1"
//                   >
//                     <GraduationCap className="w-5 h-5" />
//                     Browse All Courses
//                   </Link>
//                 </div>
//               </section>
//             )}

//           </main>
//         </div>
//       </div>
//     </>
//   )
// }

// function StatCard({ title, value, icon: Icon, gradient, iconBg }) {
//   return (
//     <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
//       <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

//       <div className="relative z-10">
//         <div className="flex items-center justify-between mb-4">
//           <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
//           <div className={`p-3 ${iconBg} rounded-2xl group-hover:scale-110 transition-transform`}>
//             <Icon className="w-6 h-6 text-white" />
//           </div>
//         </div>

//         <h3 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
//           {value}
//         </h3>
//       </div>
//     </div>
//   )
// }

"use client"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link"
import Sidebar from "@/components/Sidebar"
import educators, { getEducatorImages } from "@/data/educators"
import {BookOpen, Clock, Loader2, ArrowLeft, Calendar, TrendingUp, Award, PlayCircle, Star, GraduationCap, CheckCircle} from "lucide-react"
import FloatingNavButton from "@/components/FloatingNavButton"

export default function MyCoursesPage() {
  const educatorImages = getEducatorImages()
  const { data: session, status } = useSession()
  const router = useRouter()
  const [purchasedCourses, setPurchasedCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (status === "authenticated") {
      fetchPurchasedCourses()
    } else if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

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
    } catch (error) {
      console.error("Failed to fetch courses:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
          <p className="text-white">Loading your courses...</p>
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

            <div className="space-y-6">
              <Link href="/dashboard" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white transition-all">
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">Back to Dashboard</span>
              </Link>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10 backdrop-blur-xl border border-white/10 p-8">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">My Learning</span>
                  </div>

                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                    My Courses
                  </h1>

                  <p className="text-gray-400">
                    All your enrolled courses in one place . Keep learning, keep growing
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Total Enrolled"
                value={purchasedCourses.length.toString()}
                icon={BookOpen}
                gradient="from-blue-500 to-cyan-500"
                iconBg="bg-blue-500/20"/>
              <StatCard
                title="In Progress"
                value={purchasedCourses.length.toString()}
                icon={TrendingUp}
                gradient="from-purple-500 to-pink-500"
                iconBg="bg-purple-500/20"/>
              <StatCard
                title="This Month"
                value={purchasedCourses.filter(c => {
                  const purchaseDate = new Date(c.purchasedAt)
                  const now = new Date()
                  return purchaseDate.getMonth() === now.getMonth() &&
                    purchaseDate.getFullYear() === now.getFullYear()
                }).length.toString()}
                icon={Calendar}
                gradient="from-green-500 to-emerald-500"
                iconBg="bg-green-500/20"/>
            </div>

            <section>
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Your Learning Journey
                </h2>
                <p className="text-gray-400">Continue where you left off</p>
              </div>

              {error ? (
                <div className="rounded-3xl bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-lg border border-red-500/30 p-12 text-center">
                  <p className="text-red-400 mb-4 text-lg font-semibold">❌ Error loading courses</p>
                  <p className="text-gray-400 text-sm">{error}</p>
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
                      
                      <div className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-60 transition-opacity duration-500" style={{ backgroundImage: `url(${course.image})` }}/>

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />

                      <div className="relative h-full flex flex-col justify-end p-6 text-white">

                        <div className="absolute top-4 right-4">
                          <span className="flex items-center gap-1 px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-xs font-bold shadow-lg">
                            <CheckCircle className="w-3 h-3" />
                            Enrolled
                          </span>
                        </div>

                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-blue-500/90 backdrop-blur-md rounded-full text-xs font-bold shadow-lg">
                            {course.progress || 0}% Complete
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
                            Purchased {new Date(course.purchasedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-xs text-gray-300">
                              <span>Progress</span>
                              <span className="font-semibold">{course.progress || 0}%</span>
                            </div>
                            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 rounded-full" style={{ width: `${course.progress || 0}%` }}/>
                            </div>
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

            {purchasedCourses.length > 0 && (
              <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 p-12">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>

                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Want to learn more?
                  </h3>

                  <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Explore our catalog of amazing courses and continue your journey to mastery
                  </p>

                  <Link href="/courses" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1">
                    <GraduationCap className="w-5 h-5" />
                    Browse All Courses
                  </Link>
                </div>
              </section>
            )}

          </main>
        </div>
      </div>
    </>
  )
}

function StatCard({ title, value, icon: Icon, gradient, iconBg }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
          <div className={`p-3 ${iconBg} rounded-2xl group-hover:scale-110 transition-transform`}>
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