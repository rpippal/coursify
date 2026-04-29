"use client";
import React, { useEffect, useRef, useState } from "react";

export default function CreativeCircularFlow({ title, checkpoints }) {
  const [progress, setProgress] = useState(0);
  const [activeCheckpoint, setActiveCheckpoint] = useState(-1);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let value = 0;
          const interval = setInterval(() => {
            value += 2;
            setProgress(value);

            const checkpointIndex = Math.floor(
              (value / 360) * checkpoints.length
            );
            if (checkpointIndex < checkpoints.length) {
              setActiveCheckpoint(checkpointIndex);
            }

            if (value >= 360) clearInterval(interval);
          }, 40);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }
  }, [checkpoints]);

  return (
    <div className="flex flex-col items-center justify-center py-20  text-white">
     
      <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
        {title}
      </h2>

      <div className="relative w-96 h-96" ref={circleRef}>
        <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="6" fill="none"/>
          <circle cx="50" cy="50" r="45" stroke="url(#grad)" strokeWidth="6" fill="none"
            strokeLinecap="round" strokeDasharray={2 * Math.PI * 45} strokeDashoffset={2 * Math.PI * 45 * (1 - progress / 360)} transform="rotate(-90 50 50)" className={progress >= 360 ? "animate-pulse" : ""}/>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            {title}
          </p>
        </div>

        {checkpoints.map((point, i) => {
          const angle = (i / checkpoints.length) * 2 * Math.PI;
          const x = 50 + 43 * Math.cos(angle - Math.PI / 2);
          const y = 50 + 43 * Math.sin(angle - Math.PI / 2);

          return (
            <div
              key={i}
              className={`absolute flex flex-col items-center justify-center w-14 h-14 rounded-full shadow-lg backdrop-blur-md border cursor-pointer group ${
                activeCheckpoint >= i
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-cyan-400 shadow-cyan-500/50"
                  : "bg-slate-800 text-gray-400 border-slate-600"
              } transition-all duration-500`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",}}>
              {point.icon}
              {activeCheckpoint === i && (
                <div className="absolute -bottom-10 text-xs bg-black px-2 py-1 rounded-md opacity-90 whitespace-nowrap animate-fadeIn">
                  {point.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {activeCheckpoint >= 0 && (
        <div className="mt-10 text-center">
          <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-fadeIn">
            {checkpoints[activeCheckpoint].label}
          </p>
        </div>
      )}
    </div>
  );
}
