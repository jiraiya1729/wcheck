import { sortBlogs } from '../../../utils'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Tag from '../Elements/Tag';
// import w from '../../../../public/blogs/'

const HomeCoverSection = ({blogs}) => {
    const sortedBlogs = sortBlogs(blogs);
    const blog = sortedBlogs[0];
    console.log(blog.image.replace("../../public/","/"))
  return (
    <div className='w-full inline-block'>

    <div className='flex flex-col items-start justify-end  sm:mx-10 mx-5 
    relative sm:h-[85vh] h-[60vh] '>
      <div  className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0'/>
      {/* <Image 
                src={blog.image.filePath.replace("../public", "")}
                placeholder='blur'  
                blurDataURL={blog.image.blurDataURL}
                alt={blog.title}
                layout="fill"
                className='w-full h-full object-center object-cover rounded-3xl'
              /> */}
            <Image  src ={blog.image.replace("../../public/","/")}
            alt={blog.title}
            
            fill
            className='w-full h-full object-center object-cover rounded-3xl'
            size='100vw'
            priority
            />
            <div className=' w-full lg:w-3/4 lg:p-16 md:p-12 sm:p-8 p-6 flex flex-col items-start justify-center z-0 text-light'>
                {/* <Link href={`/categories/${blog.tags[0]}`}> {blog.tags}</Link> */}
                <Tag  link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}/>
            <Link href={blog.url} className='mt-6'>
            <h1 className='font-bold capitalize  text-lg sm:text-xl md:text-3xl lg:text-4xl'>
              <span className='bg-gradient-to-r   bg-[length:0px_6px] hover:bg-[length:100px_6px] bg-left-bottom bg-no-repeat transition-[background-size ] duration-500'>

              {blog.title}
              </span>
            </h1>
            </Link>
            <p className='hidden   mt-4 md:text-lg lg:text-xl font-in'>
              {blog.description}
            </p>
            </div>
    </div>
            </div>
  )
}

export default HomeCoverSection
