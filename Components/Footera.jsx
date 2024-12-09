import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Youtube from '../Assets/youtube_icon.png';
import Instagram from '../Assets/linked.png'
import Facebook from '../Assets/face.png'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[#0a1616] py-5 item-center'>
      <Link href="/">
      <Image src={assets.logo2} alt=' ' width={120}/> 
      </Link>
      <p className='text:sm text-white'>All right reserved. Copyright @rubyrelish</p>
      <div className='flex'>
        <Link href="https://www.instagram.com/ruby_relish/" target="_blank" rel="noopener noreferrer">
          <Image src={Instagram} width={30} height={30} style={{ marginRight: '10px' }} alt="Instagram"/>
        </Link>
        <Link href="https://www.youtube.com/@Rubyrelish44" target="_blank" rel="noopener noreferrer">
          <Image src={Youtube} width={30} height={30} style={{ marginRight: '10px' }}  alt="Youtube"/>
        </Link>
        <Link href="https://www.facebook.com/Rubyrelish44/" target="_blank" rel="noopener noreferrer">
          <Image src={Facebook} width={35} height={35} style={{ marginBottom: '10px' }}  alt="Facebook"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
