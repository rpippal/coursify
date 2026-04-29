import React from "react";
import { Sparkles, Laptop, Users, BanknoteArrowUp, Globe, Ribbon } from 'lucide-react';

export default function Why() {
    return (
        <div className="text-white pt-10">
            <div className="bg-gray-800 w-[95%] md:w-[80%] p-5 md:p-10 mx-auto rounded-3xl">
                
                <h1 className="mx-auto text-3xl md:text-5xl font-bold text-center pb-9">Why Coursify?</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><Sparkles /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Exclusive</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Curated By Rochit Pippal</h1>
                        <p className="text-sm md:text-base">Choose your learning style: bite-sized videos, live sessions, downloadable resources – all at your pace.</p>
                    </div>
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><Laptop /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Anytime, Anywhere</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Flexible Learning Formats</h1>
                        <p className="text-sm md:text-base">Each course is hand-selected by Dhruv to ensure it delivers unmatched quality, depth, and transformation.</p>
                    </div>
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><Users /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Community Driven</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Real Learning Communities</h1>
                        <p className="text-sm md:text-base">Go beyond passive learning. Interact with peers, get feedback, and be part of an engaged learner ecosystem.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><BanknoteArrowUp /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Certified</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Certified Growth</h1>
                        <p className="text-sm md:text-base">Earn certificates that reflect real expertise – valued by top companies and perfect for professional portfolios.</p>
                    </div>
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><Globe /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Outcome Driven</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Real World Relevance</h1>
                        <p className="text-sm md:text-base">Learn skills that translate directly into your life, career, and goals.</p>
                    </div>
                    
                    <div className="group transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full md:w-1/3 border border-transparent hover:border-gray-500 p-5 flex flex-col gap-4 rounded-2xl">
                        <div className="flex justify-between">
                            <span className="border border-gray-400 rounded-full flex items-center justify-center h-10 w-10 group-hover:bg-blue-500 group-hover:text-black transition duration-300"><Ribbon /></span>
                            <span className="border border-gray-400 rounded-2xl p-2 flex items-center justify-center group-hover:border-blue-500 transition duration-300">Quality Assured</span>
                        </div>
                        <h1 className="text-lg md:text-xl font-bold">Creator Access & Safe Guidance</h1>
                        <p className="text-sm md:text-base">Learn directly from the creators in a judgment-free space so your learning journey always feels personal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
