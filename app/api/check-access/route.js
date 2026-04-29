import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session) {
            return NextResponse.json({ hasAccess: false }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const courseId = searchParams.get("courseId");

        if (!courseId) {
            return NextResponse.json({ hasAccess: false }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("coursifyDb");

        const user = await db.collection("users").findOne({
            email: session.user.email,
            "purchasedCourses.courseId": courseId
        });

        return NextResponse.json({ hasAccess: !!user });

    } catch (error) {
        console.error("Access check error:", error);
        return NextResponse.json({ hasAccess: false }, { status: 500 });
    }
}