import React from 'react';
import Footer from '@/Components/Footer';
import Image from 'next/image';
import profile from '../../Assets/profile.png';
import Link from 'next/link';
import google from '../../Assets/google.png';
import sm from '../../Assets/sm.png';
import seo from '../../Assets/seo.png';
import webd from '../../Assets/webd.png';


const Portfolio = () => {
  return (
    <div className='bg-[#0b0f13] font-reforma'>
      {/* Uncomment the Navbar if needed */}
      {/* <Navbar /> */}

      {/* First Div */}
      <div className="flex justify-center bg-[#292929] shadow-lg rounded-lg text-white mx-4 md:mx-10 lg:mx-20">
        {/* Text Div */}
        <div className="flex-1 p-4 portfolio-bg">    
          <h1 className='text-4xl mt-10 text-center md:text-left font-extrabold'>AYISHA ROOBI.V</h1>
          <h2 className='mt-3 text-center md:text-left'> DIGITAL MARKETING AND WEBSITE MAINTENANCE EXPERT IN ABU DHABI</h2>
          <Link href="/">
            <button className=" animate-bordera bg-gradient-to-r from-[#47bcc0] to-[#ae55c7] text-white py-2 px-4 rounded hover:bg-white hover:text-white transition-colors duration-300 mt-5 mx-auto block md:mx-0">
              WEBSITE
            </button>
          </Link>
        </div>
      </div>

      {/* Break div */}
      <div className="flex-1 p-4"></div>

      {/* Div-2 */}
      <div className="flex justify-center bg-black shadow-lg rounded-lg text-white mx-4 md:mx-10 lg:mx-20">
        {/* Image Div */}
        <div className="flex-1 h-42 overflow-hidden flex items-center justify-center">
          <Image 
            src={profile} 
            alt="Ayisha Roobi" 
            width={300}
            height={200}
            className="rounded-lg fancy-moving-effect object-contain zoomsec"
          />
        </div>
       
        {/* Text Div */}
        <div className="flex-1 p-4">
          <h1 className='text-gradient-to-r from-[#47bcc0] to-[#ae55c7] text-center md:text-left font-bold text-2xl tracking-[.3em] '>ABOUT ME</h1>
          <br/>
          <h2 className='text-gradient-to-r from-[#47bcc0] to-[#ae55c7] text-center md:text-left font-bold '>Digital Marketing & Website Management</h2>
          <p className="text-lg leading-relaxed">
            I am a dedicated Digital Marketing Lead with over 6 years of experience in SEO, web development, and client relationship management. Currently leading digital marketing at Milestones Coffee Group and al watan news paper, I specialize in enhancing brand visibility, driving engagement, and achieving growth through innovative marketing strategies.
          </p>
          <div className='flex gap-2'>
          <Link href="https://www.canva.com/design/DAGVH0Kcfk8/f3fiIpjrCT6RlJcTZ9Yn6g/view?utm_content=DAGVH0Kcfk8&utm_campaign=designshare&utm_medium=link&utm_source=editor">
            <button className=" bg-gradient-to-r from-[#47bcc0] to-[#ae55c7] text-black py-2 px-4 rounded hover:bg-white hover:text-white transition-colors duration-300 mt-5 mx-auto block md:mx-0">
              MORE ABOUT ME 
            </button>
          </Link>
          <Link href="https://www.canva.com/design/DAGXGYFIZsA/NVhkm-8ONCOF3e-hQdK7Zw/view?utm_content=DAGXGYFIZsA&utm_campaign=designshare&utm_medium=link&utm_source=editor">
          <button className=" animate-bordera bg-transparent text-white border border-white py-2 px-4 rounded  transition-colors duration-300 mt-5 mx-auto block md:mx-0">
  WORK
</button>

          </Link>
          </div>
        </div>  
      </div>
  
      {/* Break div */}
      <div className="flex-1 p-4"></div>

      {/* Div-3 */}
      <div className="flex justify-center shadow-lg rounded-lg text-white mx-4 md:mx-10 lg:mx-20">
        {/* Content Div */}
        <div className="flex flex-wrap justify-center w-full p-4">
          {[
            {
              src: webd,
              title: 'WEB DEVELOPMENT',
              description: 'Create engaging and user-friendly websites that effectively showcase your brand and streamline user experience.',
            },
            {
              src: seo,
              title: 'SEO',
              description: 'Enhance your online visibility and drive organic traffic through strategic SEO practices tailored to your business needs.',
            },
            {
              src: sm,
              title: 'SOCIAL MEDIA',
              description: 'Boost your brand’s presence and engagement with tailored social media strategies that connect you with your audience.',
            },
            {
              src: google,
              title: 'GOOGLE ADS',
              description: 'Skilled in designing and executing targeted paid advertising campaigns across platforms such as Google Ads and social media, effectively increasing brand visibility and driving customer engagement.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex-none w-[250px] h-[300px] bg-gradient-to-r from-[#47bcc0] to-[#625367] mx-4 flex flex-col items-center justify-center text-center mb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                className="rounded-lg fancy-moving-effect object-contain w-[200px] h-[100px]"
              />
              <h1 className="mt-4 font-bold text-lg">{item.title}</h1>
              <p className="mt-2 text-sm leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Break div */}
      <div className="flex-1 p-4"></div>

      {/* Div-4 */}
      {/* <div className="flex justify-center bg-black shadow-lg rounded-lg text-white mx-4 md:mx-10 lg:mx-20 portfolio2-bg p-4">
        <div className="flex-1 p-4">
          <h1 className='text-gradient-to-r from-[#47bcc0] to-[#ae55c7] text-center md:text-left mb-2'>ABOUT ME</h1>
          <p className="text-lg leading-relaxed">
            Step into my culinary experiment! I’m Ayisha Roobi, a passionate food enthusiast with a background in technology. In my family, I have a handsome husband and a lovely son. I officially identify as a techy; my true love is cooking and exploring the world with food. Inspired by my mom and mother-in-law, they are passionate chefs in my life. I started my cooking journey in my teens and loved to cook snacks and puddings. However, after my marriage, we shifted to the UAE. At that moment, I realized that cooking was not at all easy, like a simple snack or pudding. There are always cooking experiments happening in my kitchen. It's really a struggling period, but my husband motivated me. Still, my journey is continuing as an experiment.
          </p>
        </div>  
      </div> */}
  
      {/* Break div */}
      <div className="flex-1 p-4"></div>
 
 {/* Div-4 */}
 <div className="flex flex-col lg:flex-row justify-center bg-black shadow-lg rounded-lg text-white mx-4 md:mx-8 lg:mx-20 h-auto lg:h-[400px]">
  {/* Container for Text and Image */}
  <div className="flex-1 flex flex-col items-center space-y-6 relative p-4 lg:p-0">
    {/* Text Section */}
    <div className="flex-1 flex flex-col relative">
      <h2 className="text-gradient-to-r mt-6 lg:mt-10 from-[#47bcc0] to-[#ae55c7] text-center font-bold text-2xl md:text-3xl lg:text-4xl tracking-[.3em]">
        WORKS
      </h2>

      {/* Work Experience List */}
      <div className="flex flex-wrap text-sm font-light mt-4 px-2 lg:ml-6">
        {[
          "KELTRON - Software Engineer",
          "SEA MEDIA - SEO Specialist and Website Maintenance (2018-2019)",
          "Al Watan Newspaper Group – UAE Clinic & Emirates Online - Social Media & Website Coordinator (2022-2023)",
          "Milestones Coffee Group – Abu Dhabi, UAE - Digital Marketing Lead (2022 – Present)",
        ].map((work, index) => (
          <div key={index} className="flex items-center space-x-2">
            <p className="flex items-center">
              <span className="star">⭐</span>
              {work}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Image Section */}
    <div className="h-auto lg:h-[242px] overflow-visible flex items-center justify-center relative translate-y-6 bg-gradient-to-r text-white animate-border w-full">
      <div className="text-white max-w-4xl relative z-10 text-center">
        <h2 className="font-bold text-lg md:text-2xl tracking-wide mb-4 lg:mb-6">
          PREVIOUS COMPANIES
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 max-w-3xl mx-auto">
          {/* Buttons */}
          {[
            { name: "KELTRON", link: "https://ksg.keltron.in/" },
            { name: "SEAMEDIA", link: "https://www.seamedia.in/" },
            { name: "AL WATAN", link: "https://alwatan.ae/" },
            { name: "MILESTONES", link: "https://milestonescoffee.ae/" },
            { name: "SUBWAVE", link: "https://subwave.ae/" },
            { name: "TOMAHAWK", link: "https://tomahawkcaffe.ae/" },
            { name: "CBW", link: "https://coffeebeansworld.ae/en/" },
            { name: "CUCCINA", link: "https://cuccinaleggera.ae/ar/" },
          ].map((company, index) => (
            <Link href={company.link} key={index}>
              <button className="w-full border border-white text-xs md:text-sm text-white py-2 px-4 rounded-md hover:bg-[#47bcc0] hover:text-white transition-all duration-300">
                {company.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      {/* Extend gradient background beyond container */}
      <div className="bg-[#47bcc0] absolute inset-0 opacity-70 transform scale-[1.1] z-0"></div>
    </div>
  </div>

  {/* Main Text Section */}
  <div className="flex-1 p-4 mt-4 lg:mt-15 lg:ml-6 justify-center">
    <h1 className="text-2xl md:text-4xl bg-gradient-to-r from-[#ae55c7] to-[#47bcc0] bg-clip-text text-transparent text-center lg:text-left font-bold tracking-[.3em]">
      TECHNICAL SKILL
    </h1>

    <div className="inline-flex flex-wrap gap-4 mt-5">
      <div className="flex flex-col p-4 w-full md:w-auto">
        <p className="text-lg font-bold text-white mb-4 text-center uppercase tracking-wide">
          DIGITAL MARKETING
        </p>
        <div className="flex gap-4 mt-3 flex-wrap">
          {["SEO", "SMM", "GA", "EM"].map((skill, index) => (
            <div
              key={index}
              className="zoomsec p-2 w-12 h-12 bg-white border border-gray-300 flex items-center justify-center text-black text-sm font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 bg-transparent max-w-xs mx-auto">
        <h2 className="text-lg font-bold text-white mb-4 text-center uppercase tracking-wide">
          Coding Skills
        </h2>
        <ul className="space-y-2 text-white">
          {["Next.js", "Tailwind CSS", "WordPress", "HTML", "PHP"].map(
            (skill, index) => (
              <li key={index} className="text-sm font-light">
                {skill}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
    <h1 className="text-2xl bg-gradient-to-r ml-14 mt-2 from-[#ae55c7] to-[#47bcc0] bg-clip-text text-transparent text-center lg:text-left font-bold tracking-[.3em] mb-25">
  HOBBIES
</h1>

<div className="flex gap-4 flex-wrap justify-center lg:justify-start ml-14 mb-11 mt-2">
  {["Blog", "Video Editing", "Cooking"].map((hobby, index) => (
    <div
      key={index}
      className="p-2 w-22 h-12 border border-gray-300 flex items-center justify-center text-white text-sm font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:text-black transition-all duration-300"
    >
      {hobby}
    </div>
  ))}
</div>
  

  </div>
</div>



      {/* Break div */}
      <div className="flex-1 p-24"></div>

      

      <Footer/>
    </div>
  );
};

export default Portfolio;
