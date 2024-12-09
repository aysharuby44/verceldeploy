import React from 'react';
import Navbara from '@/Components/Navbara';
import Footera from '@/Components/Footera';
import Image from 'next/image';
import profile from '../../Assets/profile.png';
import insta from '../../Assets/insta.png';
import fb from '../../Assets/face.png';
import lkdn from '../../Assets/linked.png';
import Link from 'next/link';
import cake from '../../Assets/cakes.jpg';
import pudding from '../../Assets/pudding.jpg';

const Aboutus = () => {
  return (
    <div>
      <Navbara />
      <main className="py-5 px-5 md:px-12 lg:px-28 text-white bg-[#0a1616]">
        {/* Main Content Section */}
        <section className="mb-10">
          <div className="flex flex-col justify-center items-center bg-[#101f26] text-white w-full rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              {/* Profile Image */}
              <div className="flex-1 h-42 overflow-hidden flex items-center justify-center mb-4 md:mb-0">
                <Image 
                  src={profile} 
                  alt="Ayisha Roobi"
                  width={300}
                  height={200}
                  className="rounded-lg fancy-moving-effect object-contain"
                />
              </div>

              {/* About Me Text */}
              <div className="flex-1 p-4">
                <h3 className="text-xl sm:text-5xl font-medium mb-8 text-[#88765d] zoomsec">About Me</h3> 
                <p className="text-lg leading-relaxed mt-5">
                  It&apos;s my journey... I am Ayisha Roobi. I can&apos;t say I am a professional chef, but I am passionate about experimenting with new food items and love to know the history of food. In my teenage years, I loved cooking snacks and pudding. I used to wait for Ramadan because that&apos;s when my main experiments would happen as schools finished early. My main pudding experiments were always during Eid.
                  <br /><br />
                  When I moved to the UAE, I realized I didn&apos;t know much about cooking. From that moment, I started studying everyday food items. The first attempts were flops, but my husband has been incredibly supportive. He still supports me today.
                  <br /><br />
                  I learned a lot from my mom, grandmother, mother-in-law, sisters-in-law, and aunties. All of these wonderful people have influenced my cooking journey. Love you all for that!
                </p>
                <Link href="/Portfolio">
                  <button
                    className="border-2 border-[#88765d] text-[#88765d] py-2 px-4 rounded hover:bg-[#88765d] hover:text-white transition-transform duration-300 mt-5 mx-auto block md:mx-0 transform hover:scale-105 hover:shadow-lg"
                  >
                    PORTFOLIO
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <div className="bg-[#101f26] p-6 rounded-lg my-8">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Instagram */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.instagram.com/ayisha_roobi/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={insta}
                  alt="Instagram Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
              <p className="text-white text-sm">Search the username Ayisha Roobi to find me!</p>
            </div>

            {/* Facebook */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.facebook.com/ayisha.roobi" target="_blank" rel="noopener noreferrer">
                <Image
                  src={fb}
                  alt="Facebook Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-white mb-2">Facebook</h3>
              <p className="text-white text-sm">Find Ayisha Roobi on Facebook!</p>
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-lg flex flex-col items-center text-center">
              <Link href="https://www.linkedin.com/in/ayisha-roobi-v-051719224/" target="_blank" rel="noopener noreferrer">
                <Image
                  src={lkdn}
                  alt="LinkedIn Profile"
                  width={30}
                  height={20}
                  className="object-cover rounded-md mb-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg zoomsec"
                />
              </Link>
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-white text-sm">Connect with me on LinkedIn!</p>
            </div>
          </div>
        </div>

        {/* Last Section */}
        <section className="bg-[#101f26] p-6 rounded-lg my-8">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left: Cake Description */}
            <div className="flex-1 p-4">
              <h3 className="text-xl sm:text-3xl font-medium text-white mb-6">The Cake History</h3>
              <p className="text-white leading-relaxed text-sm">
                Cake originated in Egypt, where honey was used to sweeten bread. Over time, Greeks and Romans refined the recipe to create a lighter texture by adding eggs and butter. This discovery paved the way for modern cakes!
              </p>
            </div>

            {/* Right: Cake Image */}
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
                src={cake}
                alt="Cake History"
                width={200}
                height={250}
                className="rounded-t-full shadow-lg object-contain"
              />
            </div>
          </div>

          {/* Pudding Section */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex-1 p-4 flex items-center justify-center animate-bordera">
              <Image
                src={pudding}
                alt="Pudding Journey"
                width={200}
                height={250}
                className="rounded-tr-full shadow-lg object-contain"
              />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-xl sm:text-3xl font-medium text-white mb-6">Did You Know About Pudding?</h3>
              <p className="text-white leading-relaxed text-sm">
                Cooking is my creative outlet! From experimenting with puddings to mastering savory dishes, this journey has been about growth, mistakes, and passion. Let&apos;s explore together!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footera />
    </div>
  );
};

export default Aboutus;
