import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {format} from 'date-fns'
const BlogLayoutThree = ({blog}) => {
  return (
    <div className=' group flex flex-col items-center text-dark dark:text-light'>
        <Link href={blog.url}className='col-span-4 h-full rounded-xl overflow-hidden group-hover:scale-105 transition-all ease duration-300'>
            
            <Image  
            src ={blog.image.replace("../../public/","/")}
            alt={blog.title}
            width={500}
            height={500}
            
            className='aspect-[4/3] w-full h-full object-cover object-center '
            sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
            
            
            />
        </Link>

        <div className='flex flex-col w-full mt-4'>
            <span className='uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm'>
                    {blog.tags[0]}</span>
                <Link href={blog.url} className='inline-block my-1'>
                <h2 className='font-semibold capitalize text-base sm:text-lg'>
                    <span className='bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/60 dark:to-accentDark/60 bg-[length:0px_6px]
                    group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                    '>
                        {blog.title}
            </span>

                </h2>
                </Link>
                <span className='capitalize text-dark/50 dark:text-light/50 font-semibold  text-sm sm:text-base'>
                    {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
                </span>
        </div>
      
    </div>
  )
}

export default BlogLayoutThree
