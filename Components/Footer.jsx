import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Youtube from '../Assets/youtube_icon1.png';
import Instagram from '../Assets/instagram_icon.png'
import Facebook from '../Assets/facebook_icon.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[black] py-5 item-center'>
      <Link href="/">
      <Image src={assets.logo} alt=' ' width={120}/> 
      </Link>
      <p className='text:sm text-white'>All right reserved. Copyright @rubyrelish</p>
      <div className='flex'>
        <Link href="https://www.instagram.com/ruby_relish/" target="_blank" rel="noopener noreferrer">
          <Image src={Instagram} width={40} height={40} alt="Instagram"/>
        </Link>
        <Link href="https://www.youtube.com/@Rubyrelish44" target="_blank" rel="noopener noreferrer">
          <Image src={Youtube} width={40} height={40} alt="Youtube"/>
        </Link>
        <Link href="https://www.facebook.com/Rubyrelish44/" target="_blank" rel="noopener noreferrer">
          <Image src={Facebook} width={40} height={40} alt="Facebook"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
