import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import RestaurantList from '@/Components/RestaurantComponents/RestaurantList';
const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <div className='py-5 px-5 md:px-12 lg:px-28 text-white  restaurent-bg'>
      <h1 className='text-xl sm:text-5xl font-medium mt-9'>Local Restaurant Guides</h1> 
      <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base moving-text ml-0'>Discover the best dining experiences with Local Restaurant Guides! Whether you are searching for a cozy cafe, a family-friendly eatery, or a hidden gem in your neighborhood, we have got you covered.</p>   
      </div>
      <div>
      <RestaurantList/>
      </div>

      <Footer />
    </div>
  );
};

export default Restaurant;
