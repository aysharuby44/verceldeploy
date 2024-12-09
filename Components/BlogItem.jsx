import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {assets, blog_data } from '@/Assets/assets'



const BlogItem = ({title,description,category,image,id}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
  className={`max-w-[330px] sm:max-w-[300px] bg-white border border-white hover:shadow-[-7px_7px_0px_#2a664e] transition-transform duration-300 ${isHovered ? 'transform scale-105' : ''}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{ width: '300px', cursor: 'pointer' }} // Adjust width as needed
>
       <Link href={`/blogs/${id}`}> 
       <Image src={image} alt='' width={400} height={400} style={{ width: '400px', height: '200px' }} className='border-b border-black' />
       </Link>
       <p className='ml-5 mt-5 text-white px-1 inline-block bg-[#2a664e] text-sm'>{category}</p>
       <div className='p-5'>
         <h5 className='mt-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
         <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{__html:description.slice(0,120)}}></p>
         <Link href={`/blogs/${id}`}>
         <div className='inline-flex items-center py-2 font-semibold text-center'>
           Read more<Image src={assets.arrow} className='ml-2' alt='' width={12} /> 
         </div>
         </Link>
       </div>
    </div>
  )
}

export default BlogItem

