"use client"
import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import IonIcon from '@reacticons/ionicons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const InstagramIcon = () => {
    return <IoLogoInstagram size={25} />;
  };

  return (
    <>
      <div className="bg-gray-800 text-white">
        <div className="w-[90%] mx-auto">
          <div className="p-5 flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-center md:text-left">

            <div className="flex flex-col gap-2 md:w-2/6 w-full items-center md:items-start">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <svg className="h-10 stroke-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 
                    0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 
                    0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 
                    0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 
                    7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 
                    0 0 0 0 1.5Zm0 0v-3.675A55.378 
                    55.378 0 0 1 12 8.443m-7.007 
                    11.55A5.981 5.981 0 0 0 6.75 
                    15.75v-1.5"/>
                </svg>
                <span className="font-bold text-3xl">Coursify</span>
              </div>
              <p className="p-2 text-lg md:text-xl">Where Learning Never Stops</p>
            </div>

            <div className="flex flex-col gap-2 md:w-1/6 w-full">
              <h2 className="text-gray-400 font-semibold">Explore</h2>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer font-medium hover:text-blue-400">Programs</li>
                <li className="cursor-pointer font-medium hover:text-blue-400">Why Coursify?</li>
                <li className="cursor-pointer font-medium hover:text-blue-400">Join as a coach</li>
                <li className="cursor-pointer font-medium hover:text-blue-400">FAQ</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 md:w-1/6 w-full">
              <h2 className="text-gray-400 font-semibold">Socials</h2>
              <ul className="flex flex-col gap-2 items-center md:items-start">
                <li className="flex items-center gap-2 cursor-pointer hover:text-pink-400">
                  <IonIcon name="logo-instagram" size="medium" />
                  <span className="font-medium">Instagram</span>
                </li>
                <li className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
                  <IonIcon name="logo-linkedin" size="medium" />
                  <a href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer">
                  <span className="font-medium">LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 md:w-1/6 w-full items-center md:items-start">
              <h2 className="text-gray-400 font-semibold">Contact</h2>
              <p className="text-sm md:text-base">pippal.rochit09@gmail.com</p>
            </div>
          </div>

          <div className="bg-gray-700 h-0.5 w-full"></div>

          <footer className="w-full text-white flex items-center justify-center px-4 h-16 font-extralight text-sm md:text-base text-center">
            <p>Copyright &copy; {currentYear} Coursify.io - All rights reserved!</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
