"use client"
import { signIn, useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import NormalNavbar from "@/components/NormalNavbar"

export default function LoginPage() {
  const { status } = useSession()
  const router = useRouter()
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard")
    }
  }, [status, router])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      if (isSignup) {
        const res = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await res.json()

        if (!res.ok) {
          setError(data.error || "Signup failed")
          setLoading(false)
          return
        }

        await signIn("credentials", {
          email,
          password,
          callbackUrl: "/dashboard",
        })

      } else {
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (res?.ok) {
          router.push("/dashboard")
        } else {
          setError("Invalid email or password")
        }
      }
    } catch (err) {
      setError("Something went wrong")
    }

    setLoading(false)
  }

  if (status === "loading") {
    return <div className="p-10 text-center">Loading...</div>
  }

  return (
    <>
      <NormalNavbar />

      <div className="flex min-h-screen items-center justify-center px-4">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="text-sm text-gray-500">
              {isSignup ? "Sign up to start learning" : "Please sign in to your account"}
            </p>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          {isSignup && (
            <div className="space-y-1">
              <label className="text-sm font-medium">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full rounded-lg border px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
          </div>

          <button type="submit" disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60">
            {loading ? isSignup ? "Creating account..." : "Signing in..." : isSignup ? "Sign Up" : "Sign In"}
          </button>

          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <button type="button" onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="w-full rounded-lg border border-gray-300 py-2.5 font-semibold transition hover:bg-gray-100">
            Sign in with GitHub
          </button>

          <p className="text-center text-sm text-gray-500">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup)
                setError("")
              }}
              className="text-blue-600 font-semibold">
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </>
  )
}