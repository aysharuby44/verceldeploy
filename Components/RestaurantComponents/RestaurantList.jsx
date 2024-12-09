"use client"; // Ensure this component can use hooks

import React, { useEffect, useState } from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching restaurants from the API
  const fetchRestaurants = async () => {
    try {
      const response = await fetch('/api/restaurant'); // Adjust the URL based on your API routing
      const data = await response.json();

      // If you're returning an object with a restaurants property
      if (data.restaurants) {
        setRestaurants(data.restaurants); // Set the fetched restaurants to state
      } else {
        console.error("No restaurants found in response", data);
      }
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchRestaurants(); // Call fetch function on component mount
  }, []);

  return (
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mt-16 xl:mx-24'>
      {loading ? (
        <p>Loading restaurants...</p> // Show loading message
      ) : restaurants.length > 0 ? (
        restaurants.map((item) => (
          <RestaurantItem
            key={item._id} // Use unique id from MongoDB
            id={item._id} // Assuming MongoDB uses _id as the identifier
            image={item.image} // Ensure this exists in your data
            title={item.title} // Ensure this exists in your data
            description={item.description} // Ensure this exists in your data
          />
        ))
      ) : (
        <p>No restaurants available</p> // Fallback in case the array is empty
      )}
    </div>
  );
};

export default RestaurantList;
