import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Hotel = () => {
  const textRef = useRef(null);
  const [scrolling, setScrolling] = useState(false); // Track scrolling state

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (textRef.current) {
        textRef.current.style.transition = 'transform 1s ease'; // Set the transition for the text movement
        textRef.current.style.transform = 'translateY(50px)'; // Move the text down by 50px
        setScrolling(true); // Indicate that scrolling is happening

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (textRef.current) {
            textRef.current.style.transition = 'transform 0.5s ease'; // Set the transition for returning to original position
            textRef.current.style.transform = 'translateY(0px)'; // Reset to original position
          }
          setScrolling(false); // Reset the scrolling state
        }, 100); // Delay to check when scrolling has stopped
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); // Clear the timeout on cleanup
    };
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto p-4 font-alegreya">
      {/* Left Half Div */}
      <div
        ref={textRef}
        style={{ transition: 'transform 2s ease' }}
        className="flex-1 flex flex-col items-center justify-center lg:h-screen w-full lg:w-1/2 p-4 mb-4 lg:mb-0"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4 w-full">
          {/* First Image Div */}
          <div className="w-full lg:w-1/3 p-2 flex items-center justify-center hotel-bg rounded-lg mt-4 lg:mb-0">
            {/* Image content */}
          </div>

          {/* Second Image Div */}
          <div className="w-full lg:w-1/3 p-2 flex items-center justify-center hotel-bg1 rounded-lg mt-10 lg:mb-0">
            {/* Image content */}
          </div>

          {/* Third Image Div */}
          <div className="w-full lg:w-1/3 p-2 flex items-center justify-center hotel-bg2 rounded-lg mt-14 lg:mb-0">
            {/* Image content */}
          </div>
        </div>
      </div>

      {/* Right Half Div */}
      <div className="text-center text-white w-full lg:w-1/2 p-4">
        <div className="relative inline-block">
          <div className="rounded-full border-4 border-white overflow-hidden w-24 h-24 rotating-ht-container mx-auto object-cover animate-spin-slow">
            <p>HOTEL</p>
          </div>
        </div>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">
          TAKE A BREAK FROM HECTIC MOMENTS
        </h1>

        <p className="text-sm lg:text-lg leading-relaxed text-black">
          <span className="font-semibold">
            Are you looking for a cozy and comfortable hotel?
          </span>{' '}
          Are you looking for a cozy and comfortable hotel? Yes, this is the right place to find out! Here, you can find all the necessary details for a perfect staycation, luxurious amenities, comfortable space, or great service, you will get it from here.  You can get a wide list of hotels, Each has unique behaviors and experiences to suit your requirements. Discover and explore your next getaway!
          <span className="font-semibold">
            Discover and explore your next getaway!
          </span>
        </p>

        <div className="flex items-center justify-center my-4">
          <span className="text-[#d3ad3c] text-2xl">★ ★</span>
          <div className="h-1 bg-[#d3ad3c] w-1/2 mx-2"></div>
          <span className="text-[#d3ad3c] text-2xl">★ ★</span>
        </div>

        <Link href="/Hotel">
          <button className="border border-[#d3ad3c] text-gray-800 py-2 px-4 rounded hover:bg-[#d3ad3c] hover:text-white transition-colors duration-300 mt-5">
            HOTELS LIST
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hotel;
