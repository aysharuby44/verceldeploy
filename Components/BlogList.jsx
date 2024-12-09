'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';
import Image from 'next/image';
import GrpfImage from '../Assets/fgr.png';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="relative"> {/* Add relative positioning to the parent div */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-rotate z-10 w-96 h-96"> {/* Center the image */}
        <Image
          src={GrpfImage} // Display the flower image
          alt="Flower"
          width={400} // Adjust width
          height={400} // Adjust height
        />
      </div>

      <div className='flex justify-center gap-6 my-10 font-alegreya'>
        <button 
          onClick={() => setMenu('All')} 
          className={`py-1 px-4 rounded-sm ${menu === 'All' ? 'bg-[#2a664e] text-white' : 'bg-transparent text-black hover:bg-[#2a664e] hover:text-white'}`}
        >
          All
        </button>
        <button 
          onClick={() => setMenu('Pudding')} 
          className={`py-1 px-4 rounded-sm ${menu === 'Pudding' ? 'bg-[#2a664e] text-white' : 'bg-transparent text-black hover:bg-[#2a664e] hover:text-white'}`}
        >
          PUDDING
        </button>
        <button 
          onClick={() => setMenu('Snacks')} 
          className={`py-1 px-4 rounded-sm ${menu === 'Snacks' ? 'bg-[#2a664e] text-white' : 'bg-transparent text-black hover:bg-[#2a664e] hover:text-white'}`}
        >
          SNACKS
        </button>
        <button 
          onClick={() => setMenu('Cakes')} 
          className={`py-1 px-4 rounded-sm ${menu === 'Cakes' ? 'bg-[#2a664e] text-white' : 'bg-transparent text-black hover:bg-[#2a664e] hover:text-white'}`}
        >
          CAKES
        </button>
      </div>

      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blogs
          .filter((item) => {
            const category = item.category ? item.category.trim().toLowerCase() : '';
            const currentMenu = menu.toLowerCase();
            return menu === 'All' || category === currentMenu;
          })
          .map((item, index) => (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
