import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Image1 from '../Assets/im1.png';
import Image2 from '../Assets/im2.png';
import Image3 from '../Assets/im3.png';
import Image4 from '../Assets/im4.png';
import FlowerImage from '../Assets/bagef.png';
import Link from 'next/link';

const images = [Image1, Image2];
const images2 = [Image3, Image4];

const ImageSlider = () => {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [fade, setFade] = useState(true);

  // First image animation
  useEffect(() => {
    const interval1 = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage1((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval1);
  }, []);

  // Second image animation
  useEffect(() => {
    const interval2 = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage2((prev) => (prev + 1) % images2.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval2);
  }, []);

  useEffect(() => {
    // Add Google Fonts link
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Clean up to avoid duplication
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-cover bg-center h-auto min-h-screen flex items-center justify-center relative moving-text-container px-4 flex-col md:flex-row">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-20">
        {/* First Image */}
        <div className={`relative w-full h-64 md:w-1/2 md:h-auto transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} hover:opacity-90`}>
          <Image
            src={images[currentImage1]}
            alt={`Slide ${currentImage1 + 1}`}
            layout="responsive"
            width={800}
            height={600}
            objectFit="cover"
            quality={90}
            priority
          />
        </div>

        {/* Second Image */}
        <div className={`relative w-full h-64 md:w-1/2 md:h-auto transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'} hover:opacity-90 mt-4 md:mt-0`} style={{  marginTop: '200px' }}
        >
          <Image
            src={images2[currentImage2]}
            alt={`Slide ${currentImage2 + 1}`}
            layout="responsive"
            width={800}
            height={600}
            objectFit="cover"
            quality={90}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="text-white w-full md:w-3/5 p-5 z-10 font-alegreya relative text-center md:text-left mt-4 md:mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          EXPLORE TOP RESTAURANTS: YOUR ULTIMATE DINING GUIDE
        </h1>
        <div className="flex items-center justify-center my-4">
          <span className="text-[#d3ad3c] text-2xl">★ ★</span>
          <div className="h-1 bg-[#d3ad3c] w-1/2 mx-2"></div>
          <span className="text-[#d3ad3c] text-2xl">★ ★</span>
        </div>
        <p className="text-sm md:text-lg">
          Whether you are looking for a variety of food spots or top-rated restaurants, we will help you find them. Ruby Relish blog will provide genuine reviews.
          <br />
          <strong>Explore the foods:</strong> Explore the variety of foods around the world.
          <br />
          <strong>Ambiance and Experience:</strong> This blog will describe the restaurant atmosphere, service quality, and overall experience.
        </p>

        {/* Link to Restaurant page */}
        <Link href="/Restaurant" className="mt-4 inline-block text-[#d3ad3c] text-lg font-bold hover:underline font-greatvibes italic">
          Explore Restaurants
        </Link>
      </div>

      {/* Flower Image Positioned in the Bottom Corner */}
      <div className="absolute bottom-0 right-0 mb-10 mr-10 rotating-img-container">
        <Image
          src={FlowerImage}
          alt="Flower"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
