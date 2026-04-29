"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const { status } = useSession();
  const router = useRouter();

  return (
    <div className="flex w-[90%] m-3 text-white bg-gray-800 rounded-3xl mx-auto justify-between p-4 items-center sticky top-5 z-50">

      <Link href="/" onClick={handleClick}>
        <div className="flex items-center justify-center gap-2">
          <svg className="h-8 stroke-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 
              6.347A48.62 48.62 0 0 1 12 20.904a48.62 
              48.62 0 0 1 8.232-4.41 60.46 60.46 0 
              0 0-.491-6.347m-15.482 0a50.636 
              50.636 0 0 0-2.658-.813A59.906 59.906 
              0 0 1 12 3.493a59.903 59.903 0 0 1 
              10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 
              0A50.717 50.717 0 0 1 12 13.489a50.702 
              50.702 0 0 1 7.74-3.342M6.75 15a.75.75 
              0 1 0 0-1.5.75.75 0 0 0 0 
              1.5Zm0 0v-3.675A55.378 55.378 0 
              0 1 12 8.443m-7.007 11.55A5.981 
              5.981 0 0 0 6.75 15.75v-1.5"/>
          </svg>
          <span className="font-bold text-2xl md:text-4xl">Coursify</span>
        </div>
      </Link>

      <ul className="hidden md:flex gap-7 text-lg">
        <a href="#prog" className="cursor-pointer hover:text-blue-400">
          Programs
        </a>
        <a href="#why" className="cursor-pointer hover:text-blue-400">
          Why Coursify?
        </a>
        <a href="https://forms.gle/nkRjz5jU1nZZawHY8" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-400">
          Join as a coach
        </a>
        <a href="#que" className="cursor-pointer hover:text-blue-400">
          FAQ
        </a>
        <li
          className="cursor-pointer hover:text-blue-400"
          onClick={() => {
            if (status === "authenticated") {
              router.push("/dashboard");
            } else {
              router.push("/login");
            }
          }}
        >
          Login
        </li>

        <Link href="/about">
          <li className="cursor-pointer hover:text-blue-400">About Us</li>
        </Link>
      </ul>

      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-5 p-6 md:hidden rounded-b-2xl shadow-lg">
          <a href="#prog" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Programs
          </a>
          <a href="#why" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Why Coursify?
          </a>
          <li className="cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              if (status === "authenticated") {
                router.push("/dashboard");
              } else {
                router.push("/login");
              }
            }}>
            Login
          </li>
          <a href="https://forms.gle/nkRjz5jU1nZZawHY8" target="_blank" rel="noopener noreferrer" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            Join as a coach
          </a>
          <a href="#que" className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            <li className="cursor-pointer">About Us</li>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
