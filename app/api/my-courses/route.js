import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db("coursifyDb"); 

        const user = await db.collection("users").findOne(
            { email: session.user.email },
            { projection: { purchasedCourses: 1 } }
        );

        if (!user) {
            return NextResponse.json({ courses: [] });
        }

        return NextResponse.json({ 
            courses: user.purchasedCourses || [] 
        });

    } catch (error) {
        console.error("Fetch courses error:", error);
        return NextResponse.json({ 
            error: error.message || "Failed to fetch courses" 
        }, { status: 500 });
    }
}