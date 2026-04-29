"use client";
import React, { useEffect } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import educators, { getEducatorImages } from "@/data/educators"

export default function Block({ currentIndex, setCurrentIndex }) {
    const blocks = educators.map(educator => ({
        id: educator.id,
        img: educator.image,
        name: educator.name,
        role: educator.role,
        heading: educator.heading[0],
        about: educator.about,
        subtitle: educator.sub,
        number: `${educator.students?.toLocaleString() || '0'}+ Students`,
    }));
    const educatorImages = getEducatorImages()
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % blocks.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [blocks.length, setCurrentIndex]);

    return (
        <div className="pt-8 text-white flex justify-center items-center overflow-hidden">
            <div className="relative w-[80%] flex justify-center items-center">
                <div
                    className="flex transition-transform duration-900 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}%)`, width: `${blocks.length * 100}%`,}}>
                    {blocks.map((block, idx) => (
                        <div
                            key={idx} className="flex-shrink-0 w-full flex justify-center items-center">
                            <div className={`relative w-full h-[500px] rounded-3xl overflow-hidden shadow-xl transform transition-all duration-700 ${idx === currentIndex ? "scale-105 z-20" : "scale-90 opacity-70"}`}>
                             
                                <img src={block.img} className="h-[600px] w-full object-fill rounded-4xl"/>

                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-4xl"></div>

                                <div className="absolute bottom-9 left-9 z-10 w-[70%] flex flex-col gap-3">
                                    <div className="border border-white rounded-4xl px-3 py-1 w-max text-sm">
                                        {block.role}
                                    </div>
                                    <h1 className="text-3xl font-bold">{block.heading}</h1>
                                    <p className="text-sm">{block.about}</p>

                                    <Link href={`/educators/${block.id}`}>
                                        <button className="bg-white cursor-pointer text-lg font-semibold rounded-4xl px-4 py-2 text-black w-max flex items-center gap-2">
                                            Learn more <MoveRight />
                                        </button>
                                    </Link>
                                </div>

                                <div className="absolute bottom-9 right-9 text-white w-max">
                                    <div className="text-black px-3 py-2 bg-white rounded-t-2xl">
                                        <h1 className="text-lg font-semibold">{block.name}</h1>
                                        <p className="text-sm">{block.subtitle}</p>
                                    </div>
                                    <h2 className="px-2 py-1 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl">
                                        {block.number}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

