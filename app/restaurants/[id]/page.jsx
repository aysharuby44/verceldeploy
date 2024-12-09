'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import Navbarnew from '@/Components/Navbarnew';

const Page = () => {
  const [data, setData] = useState(null);
  const params = useParams();
  const { id } = params || {}; // Destructure and ensure id exists

  // Function to fetch restaurant data by id from the database
  const fetchRestaurantData = async () => {
    try {
      const response = await axios.get('/api/restaurant', {
        params: { id: id } // Sending the id as a parameter to the API
      });
      setData(response.data); // Set the received data
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRestaurantData(); // Call the function to fetch data when id is available
    }
  }, [id]);

  // Show a loading message if data is not available yet
  if (!data) {
    return <p>Restaurant not found or still loading...</p>;
  }

  return (
    <>
      <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
          <Navbarnew />
        </div>
        <div className='text-center my-24'>
          <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
          <p className='mt-1 pb-2 text-lg max-w-[720px] mx-auto'>{data.author}</p>
        </div>
      </div>
      <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        {/* Use the next/image component properly */}
        <Image
          className='border-4 border-white'
          src={data.image} // Ensure data.image is a valid path or remote URL
          width={1280} // Adjust based on your layout
          height={720} // Adjust based on your layout
          alt='Restaurant Image'
          priority // Use priority if it's the main image on the page
        />
        <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
