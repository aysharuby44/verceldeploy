// components/Navbar.jsx
"use client"; // Client component directive

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo2.png'; // Adjust the path according to your project structure

const Navbarnew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-[#161615] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src={logo} 
                alt="Your Logo" 
                width={100} // Adjust width as needed
                height={40} // Adjust height as needed
                className="object-contain" // Optional: Maintain aspect ratio
              />
            </Link>
          </div>
          <h1 className="text-2xl text-center text-white uppercase tracking-wide pb-2 hidden md:block moving-text">
          </h1>
          <div className="hidden md:flex md:space-x-4">
            <Link href="/" className="hover:bg-white px-3 py-2 rounded font-bold ">
              HOME
            </Link>
            <Link href="/Aboutus" className="hover:bg-white  px-3 py-2 rounded ">
              ABOUT US
            </Link>
            <Link href="/Restaurant" className="hover:bg-white  px-3 py-2 rounded ">
              RESTAURANT
            </Link>
            <Link href="/Hotel" className="hover:bg-white  px-3 py-2 rounded ">
              HOTEL
            </Link>
            {/* <Link href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
              Contact Us
            </Link> */}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#d3ad3c]`}>
          <Link href="/" className="block hover:bg-gray-700 px-3 py-2 rounded font-bold">
            Home
          </Link>
          <Link href="/aboutus" className="block hover:bg-gray-700 px-3 py-2 rounded font-bold">
            About Us
          </Link>
          {/* <Link href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded">
            Contact Us
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbarnew;
