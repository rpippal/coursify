"use client"
import React, { useState } from "react";
import { useSession } from "next-auth/react"
import FloatingNavButton from "@/components/FloatingNavButton"
import educators from "@/data/educators";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion";
import CreativeCircularFlow from "@/components/FlowChart";
import { Calendar, Hourglass, MicVocal, Loader2, Star, Users, Award, CheckCircle, Play, BookOpen, TrendingUp } from 'lucide-react';
import axios from "axios";
import useRazorpay from "@/hooks/useRazorpay";
import { useRouter } from "next/navigation";


export default function EducatorPage({ params }) {
    const { id } = React.use(params);
    const educator = educators.find(e => e.id === id);
    const razorpayLoaded = useRazorpay();
    const { data: session, status } = useSession();
    const [activeTab, setActiveTab] = useState('overview');
    const router = useRouter()

    if (!educator) {
        return <h1 className="text-center text-2xl mt-10">Educator not found</h1>;
    }

    const handlePayment = async () => {

        if (status === "unauthenticated") {
            alert("⚠️ Please login to purchase the course");
            router.push = ("/login")
            return;
        }

        if (!razorpayLoaded || !window.Razorpay) {
            alert("❌ Payment system is loading. Please wait a moment and try again.");
            return;
        }

        try {
            // console.log("Creating Razorpay order...");

            const { data } = await axios.post("/api/razorpay", {
                amount: 19900,
                courseId: educator.id,
                courseName: educator.heading[0]
            });

            // console.log("Order created:", data);

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency,
                name: "Coursify",
                description: `Course: ${educator.heading[0]}`,
                order_id: data.id,
                handler: async function (response) {
                    // console.log("=== PAYMENT SUCCESS ===");
                    // console.log("Payment response:", response);

                    try {

                        const paymentData = {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_signature: response.razorpay_signature,
                            courseId: educator.id,
                            courseName: educator.heading[0],
                        };

                        // console.log("Saving payment with data:", paymentData);

                        const saveResponse = await axios.post("/api/save-payment", paymentData);

                        // console.log("Payment saved successfully:", saveResponse.data);

                        alert("✅ Payment Successful! Redirecting to dashboard...");
                        window.location.href = "/dashboard";

                    } catch (err) {
                        console.error("Save payment failed:", err);
                        console.error("Error details:", err.response?.data);
                        alert("⚠️ Payment successful but failed to save. Please contact support with payment ID: " + response.razorpay_payment_id);
                    }
                },
                prefill: {
                    name: session?.user?.name || "Guest",
                    email: session?.user?.email || "",
                    contact: session?.user?.phone || "",
                },
                theme: {
                    color: "#3399cc"
                },
                modal: {
                    ondismiss: function () {
                        // console.log("Payment cancelled by user");
                    }
                }
            };

            // console.log("Opening Razorpay with options:", options);

            const rzp = new window.Razorpay(options);

            rzp.on('payment.failed', function (response) {
                console.error("Payment failed:", response.error);
                alert(`❌ Payment Failed: ${response.error.description}`);
            });

            rzp.open();

        } catch (err) {
            console.error("=== PAYMENT ERROR ===");
            console.error("Error:", err);
            console.error("Error response:", err.response?.data);
            alert(`❌ Payment Failed: ${err.response?.data?.error || err.message}`);
        }
    };

    return (
        <>
            <FloatingNavButton />

            <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 m-10 p-15 text-white">

                    <div className="max-w-7xl mx-auto mb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-sm font-medium">Top Rated Course</span>
                                </div>

                                <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    {educator.heading[0]}
                                    {educator.heading[1] && <><br />{educator.heading[1]}</>}
                                </h1>

                                <p className="text-2xl text-gray-300 leading-relaxed">
                                    {educator.about}
                                </p>

                                <div className="flex flex-wrap gap-6 pt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-blue-500/20 rounded-lg">
                                            <Users className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Students</p>
                                            <p className="text-lg font-bold">10,000+</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-purple-500/20 rounded-lg">
                                            <Star className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Rating</p>
                                            <p className="text-lg font-bold">4.8/5</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-2 bg-pink-500/20 rounded-lg">
                                            <Award className="w-5 h-5 text-pink-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">Completion</p>
                                            <p className="text-lg font-bold">89%</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button onClick={handlePayment} disabled={!razorpayLoaded}
                                        className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                                        {!razorpayLoaded ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-5 h-5" />
                                                Enroll Now - ₹199
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="relative">

                                <div className="relative w-full">
                                    <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-blue-500/20 border border-white/10 bg-slate-800/50 backdrop-blur-xl aspect-[3/4]">

                                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${educator.img})`, }} />

                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

                                        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="h-16 w-16 rounded-full border-4 border-blue-500 shadow-lg bg-cover bg-center" style={{ backgroundImage: `url(${educator.img})`, }} />
                                                <div>
                                                    <h2 className="font-bold text-2xl">{educator.name}</h2>
                                                    <p className="text-blue-400">{educator.sub || educator.role}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-400" />
                                                <span className="text-gray-300">Verified Expert Educator</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl z-20">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-6 h-6" />
                                            <div>
                                                <p className="text-xs opacity-90">Success Rate</p>
                                                <p className="text-xl font-bold">95%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="w-6 h-6" />
                                        <div>
                                            <p className="text-xs opacity-90">Success Rate</p>
                                            <p className="text-xl font-bold">95%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto mb-8">
                        <div className="flex gap-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
                            {['overview', 'curriculum', 'instructor'].map((tab) => (
                                <button key={tab} onClick={() => setActiveTab(tab)}
                                    className={`flex-1 px-6 py-3 rounded-xl font-semibold capitalize transition-all ${activeTab === tab ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-slate-700/50'}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeTab === 'curriculum' && (
                        <section id="learn" className="mb-16">
                            <div className="max-w-7xl mx-auto">
                                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-4xl font-bold">What You'll Learn</h2>
                                    </div>

                                    <Accordion type="single" collapsible className="w-full space-y-3">
                                        {educator.whatYouLearn.map((item, idx) => (
                                            <AccordionItem key={idx}
                                                value={`item-${idx}`}
                                                className="border border-slate-700/50 bg-slate-900/50 rounded-xl px-6 hover:border-blue-500/50 transition-all">
                                                <AccordionTrigger className="text-lg font-semibold hover:text-blue-400 transition-colors">
                                                    <div className="flex items-center gap-3">
                                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold">
                                                            {idx + 1}
                                                        </span>
                                                        {item.title}
                                                    </div>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-sm text-gray-300 pl-11">
                                                    {item.description}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeTab === 'instructor' && (
                        <section id="meet" className="mb-16">
                            <div className="max-w-7xl mx-auto">
                                <div className="border border-blue-500/30 rounded-3xl bg-slate-800/50 backdrop-blur-xl overflow-hidden">
                                    <div className="p-8 lg:p-12">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                            <div className="lg:col-span-2 space-y-6">
                                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                                                    <Award className="w-4 h-4 text-blue-400" />
                                                    <span className="text-sm font-medium">MEET YOUR MENTOR</span>
                                                </div>

                                                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                    {educator.name}
                                                </h1>

                                                <p className="text-xl text-gray-300 leading-relaxed">
                                                    {educator.para}
                                                </p>

                                                <p className="text-lg text-gray-400 leading-relaxed">
                                                    {educator.a}
                                                </p>
                                            </div>

                                            <div className="relative">
                                                <img className="w-full h-full object-cover rounded-2xl shadow-2xl" src={educator.img} alt={educator.name} />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                                            {[
                                                { value: '10,000+', label: 'Learner trained globally', icon: Users },
                                                { value: '250+ Hrs', label: 'of Curated Learning', icon: Hourglass },
                                                { value: '4.5/5', label: 'Average Course Rating', icon: Star },
                                                { value: '500+', label: 'Practice videos', icon: Play }
                                            ].map((stat, idx) => (
                                                <div
                                                    key={idx}
                                                    className="group hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer">
                                                    <div className="flex flex-col items-center text-center space-y-3">
                                                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                                                            <stat.icon className="w-6 h-6 text-blue-400" />
                                                        </div>
                                                        <div className="text-2xl font-extrabold group-hover:text-blue-400 transition-colors">
                                                            {stat.value}
                                                        </div>
                                                        <div className="text-sm font-medium text-gray-400">
                                                            {stat.label}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeTab === 'overview' && (
                        <>
                            <div className="max-w-7xl mx-auto mb-16">
                                <div className="border border-blue-500/30 rounded-3xl bg-slate-800/50 backdrop-blur-xl overflow-hidden">
                                    <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                                        <div className="lg:w-1/4 flex items-center justify-center">
                                            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl">
                                                <img className="h-24 w-24" src="https://cdn.prod.website-files.com/685e77a29e8f468a773de073/687762e914d4183071243316_bullseye.png" alt="Impact" />
                                            </div>
                                        </div>
                                        <div className="lg:w-3/4 space-y-4">
                                            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                Curated For Real Impact
                                            </h3>
                                            <p className="text-lg text-gray-300 leading-relaxed">
                                                We only bring what's been trusted, tested, and truly transformative. Every session is designed to be meaningful, focused, and worth your attention.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <section id="imp" className="mb-16">
                                <CreativeCircularFlow
                                    title={`${educator.name} – ${educator.role}`}
                                    checkpoints={educator.checkpoints} />
                            </section>
                        </>
                    )}

                    <section id="inc" className="sticky bottom-8 z-20">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border-2 border-blue-500/50 p-8 rounded-3xl shadow-2xl shadow-blue-500/20">
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-3xl font-bold">Start Learning Today!</h3>
                                        <p className="text-gray-300">
                                            Learn how to play flute melodies with proper technique and emotion from your very first note.
                                        </p>

                                        <div className="flex flex-wrap items-center gap-6">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                    ₹199
                                                </span>
                                                <span className="text-gray-500 text-xl line-through">₹399</span>
                                                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
                                                    50% OFF
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4 pt-2">
                                            {[
                                                { icon: Calendar, text: '1st October, 2025' },
                                                { icon: Hourglass, text: 'Duration: 90 Days' },
                                                { icon: MicVocal, text: 'English, Hindi' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <item.icon className="w-4 h-4 text-blue-400" />
                                                    {item.text}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button onClick={handlePayment} disabled={!razorpayLoaded} className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold text-xl hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap">
                                            {!razorpayLoaded ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Loading...
                                                </>
                                            ) : (
                                                <>
                                                    <Play className="w-5 h-5" />
                                                    Join Now
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-center text-gray-400">
                                            30-day money-back guarantee
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}