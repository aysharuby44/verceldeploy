// src/components/Restaurant/RestaurantItem.jsx
"use client"; // Declare the component as a client component

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/Assets/assets'; // Adjust path as necessary

const RestaurantItem = ({ title, description, image, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`max-w-[330px] sm:max-w-[300px] bg-white border border-white hover:shadow-[-7px_7px_0px_#000000] transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '300px', cursor: 'pointer' }} // Adjust width as needed
    >
      <Link href={`/restaurants/${id}`}>
        <Image src={image} alt={title} width={400} height={200} className='border-b border-black' />
      </Link>
      {/* <p className='ml-5 mt-5 text-white px-1 inline-block bg-[#20201f] text-sm'>{category}</p> */}
      <div className='p-5'>
        <h5 className='mt-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}></p>
        <Link href={`/restaurants/${id}`}>
          <div className='inline-flex items-center py-2 font-semibold text-center'>
            View Details <Image src={assets.arrow} className='ml-2' alt='' width={12} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantItem;
