import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import clientPromise from "@/lib/mongodb";
import crypto from "crypto";

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { 
            razorpay_payment_id, 
            razorpay_order_id, 
            razorpay_signature, 
            courseId, 
            courseName 
        } = body;

        const generatedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        if (generatedSignature !== razorpay_signature) {
            return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("coursifyDb"); 

        await db.collection("payments").insertOne({
            userId: session.user.id || session.user.email,
            userEmail: session.user.email,
            userName: session.user.name,
            courseId,
            courseName,
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature,
            amount: 199,
            status: "completed",
            createdAt: new Date(),
        });

        const existingUser = await db.collection("users").findOne({
            email: session.user.email
        });

        if (existingUser) {

            const alreadyPurchased = existingUser.purchasedCourses?.some(
                course => course.courseId === courseId
            );

            if (!alreadyPurchased) {
                
                await db.collection("users").updateOne(
                    { email: session.user.email },
                    {
                        $push: {
                            purchasedCourses: {
                                courseId: String(courseId), 
                                courseName,
                                purchasedAt: new Date(),
                                progress: 0,
                                lastAccessed: new Date(),
                            }
                        },
                        $set: {
                            updatedAt: new Date()
                        }
                    }
                );
            }
        } else {
            
            await db.collection("users").insertOne({
                name: session.user.name,
                email: session.user.email,
                image: session.user.image || "",
                purchasedCourses: [{
                    courseId: String(courseId), 
                    courseName,
                    purchasedAt: new Date(),
                    progress: 0,
                    lastAccessed: new Date(),
                }],
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }

        return NextResponse.json({ 
            success: true, 
            message: "Payment saved and course access granted"
        });

    } catch (error) {
        console.error("Save payment error:", error);
        return NextResponse.json({ 
            error: error.message || "Failed to save payment" 
        }, { status: 500 });
    }
}