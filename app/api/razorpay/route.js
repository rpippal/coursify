import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
    try {
        const { amount, courseId, courseName } = await req.json();

        if (!amount || amount < 100) {
            return NextResponse.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }

        const razorpay = new Razorpay({
            key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const order = await razorpay.orders.create({
            amount: amount, 
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
            notes: {
                courseId: courseId || "",
                courseName: courseName || "",
            },
        });

        return NextResponse.json(order);

    } catch (error) {
        console.error("Razorpay order creation failed:", error);
        return NextResponse.json(
            { error: error.message || "Order creation failed" },
            { status: 500 }
        );
    }
}