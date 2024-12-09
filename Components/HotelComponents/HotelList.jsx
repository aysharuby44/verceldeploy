"use client"; // Ensure this component can use hooks

import React, { useEffect, useState } from 'react';
import HotelItem from './HotelItem';

const HotelList = () => {
  const [hotels, setHotels] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching hotels from the API
  const fetchHotels = async () => {
    try {
      const response = await fetch('/api/hotel'); // Adjust the URL based on your API routing
      const data = await response.json();

      // If you're returning an object with a hotels property
      if (data.hotels) {
        setHotels(data.hotels); // Set the fetched hotels to state
      } else {
        console.error("No hotels found in response", data);
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchHotels(); // Call fetch function on component mount
  }, []);

  return (
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mt-16 xl:mx-24'>
      {loading ? (
        <p>Loading hotels...</p> // Show loading message
      ) : hotels.length > 0 ? (
        hotels.map((item) => (
          <HotelItem
            key={item._id} // Use unique id from MongoDB
            id={item._id} // Assuming MongoDB uses _id as the identifier
            image={item.image} // Ensure this exists in your data
            title={item.title} // Ensure this exists in your data
            description={item.description} // Ensure this exists in your data
            // Ensure this exists in your data
          />
        ))
      ) : (
        <p>No hotels available</p> // Fallback in case the array is empty
      )}
    </div>
  );
};

export default HotelList;
