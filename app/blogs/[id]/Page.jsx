'use client';
import { assets } from '@/Assets/assets';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';
import axios from 'axios';

const Page = ({ params }) => {
  const [data, setData] = useState(null); // Initializing with null to detect loading state
  const [loading, setLoading] = useState(true); // Loading state for better user feedback
  const [error, setError] = useState(null); // State to capture any error during the fetch

  // Memoized fetch function
  const fetchBlogData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/blog', {
        params: { id: params.id },
      });
      setData(response.data);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error('Failed to fetch blog data:', err);
      setError('Failed to fetch blog data. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  // Fetch data on mount or params.id change
  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  // Loading state rendering
  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // Error state rendering
  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  // Main content rendering
  return data ? (
    <>
      <div className="bg-[#2a664e] py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={assets.logofull}
              width={180}
              alt="Full Logo"
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <Link href="/">
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
              Get Started
              <Image src={assets.arrow} alt="Arrow Icon" />
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
            alt={`${data.author} profile`}
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
          alt={data.title}
          style={{ width: '800px', height: '400px' }}
        />
        <div className="blog-content">
          {data.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="my-24">
          <p className="text-base font-semibold my-4">Share this article on social media</p>
          <div className="flex gap-3">
            <Image src={assets.facebook_icon} width={50} alt="Share on Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Share on Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Share on Google Plus" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div className="text-center py-20">No data available.</div>
  );
};

export default Page;
