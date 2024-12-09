'use client';
import React, { useRef } from 'react';
import Header from "../Components/Header";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import About from "@/Components/About";
import Hotel from "@/Components/Hotel";
import ImageSlider from "@/Components/ImageSlider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import CustomCursor from "@/Components/CustomCursor"; // Make sure the path is correct
// import StarsAnimation from '@/Components/StarsAnimation';

export default function Home() {
  const blogListRef = useRef(null); // Create a ref for BlogList

  // Handler to scroll to BlogList when "Get Started" is clicked
  const handleGetStartedClick = () => {
    if (blogListRef.current) {
      blogListRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to BlogList
    }
  };

  return (
    <>
     
      <ToastContainer theme="dark" />

      {/* <CustomCursor/> */}
      
      {/* Pass the handler to Header */}
      <Header onGetStartedClick={handleGetStartedClick} />
       {/* BlogList component with a ref */}
       <div ref={blogListRef}> 
        <BlogList />
      </div>
      
      <ImageSlider />
      <Hotel />
      <About />
      <Footer />
    </>
  );
}
