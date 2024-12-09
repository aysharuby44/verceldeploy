import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import HotelList from '@/Components/HotelComponents/HotelList';
const Hotel = () => {
  return (
    <div>
      <Navbar />
      <div className='py-5 px-5 md:px-12 lg:px-28 text-white  restaurent-bg'>
      <h1 className='text-xl sm:text-5xl font-medium mt-9'>Local Hotel Guides</h1> 
      <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base moving-text ml-0'> Are you looking for a cozy and comfortable hotel? Yes, this is the right place to find out! </p> </div>
    <div>
      <HotelList/>
      </div>

      <Footer />
    </div>
  );
};

export default Hotel;
