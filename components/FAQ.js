"use client"
import React, { useState } from "react";
import { ChevronDown } from "lucide-react"

export default function FAQ() {
    const faqs = [
        {
            question: "Why Coursify",
            answer: "Coursify is a premium learning platform curated by Rochit Pippal, bringing together exclusive, handpicked courses taught by India’s top creators across business, tech, parenting, music, fitness, and more."
        },
        {
            question: "Which classes are right for me?",
            answer: "Each course clearly mentions who it’s for. Whether you’re a beginner, enthusiast, or professional, you’ll find options tailored to your level and learning goals."
        },
        {
            question: "Where can I watch the lessons?",
            answer: "Anywhere, anytime - on your phone, tablet, or desktop. All lessons are available through the Edarya platform and mobile app with synced progress."
        },
        {
            question:"What is the cost of a course or membership?",
            answer: "Each course is individually priced by the creator. You pay once and get access - no hidden charges."
        },
        {
            question: "What skill level is required to start?",
            answer: "No prior experience needed unless specified. Most courses are beginner-friendly and include step-by-step guidance to help you progress confidently."
        },
        {
            question: "Will more courses be added in the future?",
            answer: "Absolutely. More courses and coaches will be added soon!"
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-[83%] mx-auto p-5">
            <h2 className="text-5xl font-bold mb-10 text-center text-white">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-900 rounded-2xl bg-gray-800 text-white">
                        <button className="w-full flex justify-between items-center p-4 text-left" onClick={() => toggleFAQ(index)}>
                            <span className="font-medium">{faq.question}</span>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "" }`} />
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"}`}>
                            <p className="text-gray-300">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}