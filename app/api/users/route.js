import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    // console.log("=== USER CREATION REQUEST ===")
    
    const data = await req.json()
    // console.log("Request data:", { name: data.name, email: data.email })

    if (!data.name || !data.email || !data.password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db("coursifyDb") 

    const existingUser = await db.collection("users").findOne({ 
      email: data.email 
    })

    if (existingUser) {
      // console.log("User already exists:", data.email)
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const newUser = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      purchasedCourses: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await db.collection("users").insertOne(newUser)

    // console.log("✅ User created successfully:", result.insertedId)

    const { password, ...userWithoutPassword } = newUser

    return NextResponse.json(
      { 
        success: true, 
        user: { 
          ...userWithoutPassword, 
          _id: result.insertedId 
        } 
      },
      { status: 201 }
    )

  } catch (err) {
    console.error("=== USER CREATION ERROR ===")
    console.error(err)
    
    return NextResponse.json(
      { error: err.message || "Failed to create user" },
      { status: 500 }
    )
  }
}

export async function GET(req) {
  try {
    // console.log("=== FETCH USERS REQUEST ===")
    
    const client = await clientPromise
    const db = client.db("coursify")

    const users = await db.collection("users")
      .find({})
      .project({ password: 0 }) 
      .toArray()

    // console.log(`✅ Fetched ${users.length} users`)

    return NextResponse.json(users, { status: 200 })

  } catch (err) {
    console.error("=== FETCH USERS ERROR ===")
    console.error(err)
    
    return NextResponse.json(
      { error: err.message || "Failed to fetch users" },
      { status: 500 }
    )
  }
}