"use client";
import React from "react";

export default function ProfileCard() {
  const cards = [
    {
      img: "https://images.unsplash.com/photo-1716471081169-cb8528a395d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Karan Pant",
      role: "Web Developer",
    },
    {
      img: "https://images.unsplash.com/photo-1742483377314-b0faf3d9f86e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rohan Das",
      role: "Indian Flute Expert",
    },
    {
      img: "https://images.unsplash.com/photo-1731461298149-5c9c2da04741?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rashmika Mandanna",
      role: "Communication Skills",
    },
    {
      img: "https://images.unsplash.com/photo-1605089103010-bcba7ca9b10d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ujjwal Patel",
      role: "Youtuber",
    },
    {
      img: "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Abhishek Singh",
      role: "Nature Photographer",
    },
    {
      img: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Arijit Singh",
      role: "Singer",
    },
    {
      img: "https://images.unsplash.com/photo-1565784796667-98515d255f7d?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Micheal Jackson",
      role: "Dancer",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Mike Tyson",
      role: "Boxer",
    },
  ];

  return (
    <div className="w-full overflow-hidden p-4">
      <div className="flex w-max gap-5 animate-[marquee_50s_linear_infinite]">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-5">
            {cards.map((card, idx) => (
              <div key={idx} className="relative flex-shrink-0 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105"
                style={{
                  transform: `translateY(${idx % 2 === 0 ? "0px" : "40px"})`,
                  width: "350px",
                  height: "400px",
                }}>

                <div className="h-full w-full rounded-3xl overflow-hidden">
                  <img src={card.img} alt={card.name} className="h-full w-full object-cover rounded-3xl" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl"></div>

                <div className="absolute bottom-4 left-4 flex flex-col gap-2 pb-5">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{card.name}</h3>
                  <p className="text-sm text-white border border-white/50 p-2 rounded-3xl w-max inline-block bg-black/30">
                    {card.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
