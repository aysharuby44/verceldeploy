'use client';
import { assets } from '@/Assets/assets';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = ({ params }) => {
  const [data, setData] = useState(null);

  // Memoize the fetch function to prevent recreation on every render
  const fetchBlogData = useCallback(async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: {
          id: params.id,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch blog data:', error);
    }
  }, [params.id]);

  // Trigger the fetch when the component mounts or params.id changes
  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  return data ? (
    <>
      <div className="bg-[#2a664e] py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={assets.logofull} width={180} alt="logo" className="w-[130px] sm:w-auto" />
          </Link>
          <Link href="/">
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
              Get Started
              <Image src={assets.arrow} alt="arrow" />
            </button>
          </Link>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="author"
          />
          <p className="mt-1 pb-2 text-lg max-w-[720px] mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt="blog"
          style={{ width: '800px', height: '400px' }}
        />
        <div className="blog-content">
          {data.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="my-24">
          <p className="text-base font-semibold my-4">Share this article on social media</p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google Plus" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
