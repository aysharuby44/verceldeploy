// About.js
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const About = () => {
  const textRef = useRef(null);
  const [scrolling, setScrolling] = useState(false); // Track scrolling state

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (textRef.current) {
        textRef.current.style.transition = 'transform 1s ease'; // Set the transition for the text movement
        textRef.current.style.transform = 'translateY(50px)'; // Move the text down by 50px
        setScrolling(true); // Indicate that scrolling is happening

        // Clear any existing timeout and set a new one
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // After scrolling has stopped, return the text to its original position
          if (textRef.current) {
            textRef.current.style.transition = 'transform 0.5s ease'; // Set the transition for returning to original position
            textRef.current.style.transform = 'translateY(0px)'; // Reset to original position
          }
          setScrolling(false); // Reset the scrolling state
        }, 100); // Delay to check when scrolling has stopped
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); // Clear the timeout on cleanup
    };
  }, []);

  return (
    <div className='
     text-white min-h-[500px] flex flex-col justify-center about-bg items-center p-4 md:flex-row font-alegreya'>
      <div className='max-w-md text-center p-6'>
        <h1 className='text-4xl font-bold mb-4 animate__animated animate__fadeInDown'>About Me</h1>
        <p
          ref={textRef}
          className='text-lg mb-6 animate__animated animate__fadeIn animate__delay-1s'
          style={{ transition: 'transform 1s ease' }} // Smooth transition for the text movement
        >
          Step into my culinary experiment!! I’m Ayisha Roobi, a passionate food enthusiast with a background in technology. My true love is cooking and exploring the world with food.
        </p>

        <Link href="/Aboutus">
          <button className='bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300'>
            READ MORE
          </button>

        </Link>
      </div>

      <div className='mt-6 md:mt-0 md:ml-6 animate__animated animate__fadeIn'>
        <img
          src='/about.png'  // Referencing from the public folder
          alt="About Us"
          className='zoomsec w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'
        />
      </div>
    </div>
  );
};

export default About;
