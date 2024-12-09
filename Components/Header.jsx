import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import GreenImage from '../Assets/bg9.png';
import Navbar from './Navbar';

const Header = ({ onGetStartedClick }) => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

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
    <div className='relative font-reforma h-screen'>
      {/* Video background */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <video autoPlay loop muted className='object-cover w-full h-full'>
          <source src="/bgv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background color overlay */}
      <div className='absolute bg-[#090a0a] w-1/2 lg:w-1/2 h-full top-0 right-0 z-0 opacity-90'>
        <Image src={GreenImage} alt="Flower" className='object-cover w-full h-full' />
      </div>

      {/* Main content */}
      <Navbar />
      <div className='relative z-10 py-10 px-8 md:px-16 lg:px-36 text-white'>
        <div className='text-center my-12'>
          <h1 className='text-4xl sm:text-6xl lg:text-7xl font-semibold font-alegreya moving-text'>
            LATEST BLOG
          </h1>
          <p className='mt-12 max-w-2xl mx-auto text-sm sm:text-lg lg:text-xl moving-text'>
            <span className='font-greatvibes italic'>
              Delicious Easy Recipes | Local Restaurant Guides | Your Ultimate Travel Companion
            </span>
          </p>

          {/* Subscribe Form */}
          <form onSubmit={onSubmitHandler} className='flex justify-center mt-12 max-w-lg mx-auto border border-[#2a664e] rounded overflow-hidden hover:scale-105 transition-transform'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              placeholder='Enter your email'
              className='w-3/4 p-4 text-lg outline-none bg-white text-black'
            />
            <button type='submit' className='w-1/4 bg-[#2a664e] text-white text-lg p-4 hover:bg-green-700 transition-colors'>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
