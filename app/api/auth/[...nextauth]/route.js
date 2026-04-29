// import NextAuth from "next-auth"
// import GitHubProvider from "next-auth/providers/github"
// import CredentialsProvider from "next-auth/providers/credentials"
// import clientPromise from "@/lib/mongodb"
// import bcrypt from "bcryptjs"

// const handler = NextAuth({
//   providers: [

//     GitHubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),

//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {


//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing credentials")
//         }

//         const client = await clientPromise
//         const db = client.db("coursifyDb")

//         const user = await db.collection("users").findOne({
//           email: credentials.email,
//         })

//         if (!user) {
//           throw new Error("No user found")
//         }

//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         )

//         if (!isValid) {
//           throw new Error("Invalid password")
//         }

//         return {
//           id: user._id.toString(),
//           name: user.name,
//           email: user.email,
//         }
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt",
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// })

// export { handler as GET, handler as POST }

import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"

// ✅ STEP 1: EXPORT authOptions
export const authOptions = {
  providers: [

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials")
        }

        const client = await clientPromise
        const db = client.db("coursifyDb")

        const user = await db.collection("users").findOne({
          email: credentials.email,
        })

        if (!user) {
          throw new Error("No user found")
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isValid) {
          throw new Error("Invalid password")
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
}

// ✅ STEP 2: USE it here
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }