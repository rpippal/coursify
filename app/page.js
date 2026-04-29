"use client"
import { MoveRight, ChevronsDown } from 'lucide-react';
import { useState } from 'react';
import ProfileCard from '@/components/ProfileCard';
import FAQ from '@/components/FAQ';
import Block from '@/components/Block';
import Why from '@/components/Why';
import Navbar from '@/components/Navbar';

export default function Home() {


  const [currentIndex, setCurrentIndex] = useState(0);

  const buttons = [
    "Tech",
    "Flute Mastery",
    "Dancer",
    "Singer",
    "Youtuber",
    "Online Coatching",
    "Photographer",
    "Boxer"
  ];

  return (
    <>
      <Navbar />

      <div className="w-[95%] md:w-[80%] mx-auto m-5 p-5 flex flex-col md:flex-row gap-7 items-center justify-center">
        <div className="w-full md:w-7/12 font-bold text-3xl sm:text-4xl md:text-6xl text-white text-center md:text-left">
          Skills That Change Your Life - <span className="text-blue-500">Learn From The Best</span>
        </div>
        <div className="w-full md:w-2/5 text-base sm:text-lg md:text-xl text-white flex flex-col justify-center gap-4 text-center md:text-left">
          From business to parenting, fitness to coding - Learn from India's most impactful mentors. Every educator on Coursify is handpicked by Rochit Pippal to help you learn what truly matters.
          <a href="#prog" className='w-full'>
            <button className="w-full flex gap-2 justify-center font-medium text-black bg-blue-500 rounded-3xl p-2 text-lg sm:text-xl cursor-pointer">
              Start Learning <ChevronsDown />
            </button>
          </a>
        </div>
      </div>

      <ProfileCard />

      <div className="text-white font-extrabold flex items-center justify-center text-2xl sm:text-3xl md:text-4xl w-[90%] md:w-[70%] mx-auto m-5 p-5 text-center">
        Let Your Learning Journey Start With The Right Mentor
      </div>

      <div className="text-white flex flex-wrap gap-4 sm:gap-6 md:gap-8 w-[95%] md:w-[80%] mx-auto items-center justify-center text-base sm:text-lg md:text-2xl">
        {buttons.map((btn, idx) => (
          <button key={idx} onClick={() => setCurrentIndex(idx)}
            className={`cursor-pointer border border-gray-500 rounded-2xl md:rounded-4xl px-4 py-2 md:p-5 transition-all duration-500 ${currentIndex === idx ? "bg-blue-600 scale-105 shadow-lg" : "bg-gray-900 hover:bg-gray-700"}`}>
            {btn}
          </button>
        ))}
      </div>

      <section id='prog'>
        <Block currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      </section>

      <section id="why">
        <Why />
      </section>

      <section id="que">
        <FAQ />
      </section>

      <div className="m-9">
        <div className="bg-blue-500 text-black h-auto w-[95%] md:w-[80%] mx-auto rounded-2xl md:rounded-3xl">
          <div className='flex flex-col gap-5'>
            <div className="text-3xl sm:text-4xl md:text-6xl p-5 mx-auto text-center font-extrabold w-[90%] md:w-[67%]">
              Revolutionizing Education <br />
              <div className="text-center">One learner At A Time</div>
            </div>
            <div className='p-5'>
              <a href="#prog">
                <button id='prog' className="bg-black flex items-center mx-auto gap-2 justify-center cursor-pointer text-base sm:text-lg md:text-xl font-semibold w-48 sm:w-60 h-12 sm:h-15 text-white rounded-xl md:rounded-2xl">
                  Start Learning Today <MoveRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
