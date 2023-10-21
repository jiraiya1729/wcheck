import React from 'react'
import Tag from '../Elements/Tag'
import Link from 'next/link'
import Image from 'next/image'

const BlogLayoutOne = ({blog}) => {
  return (
    <div className='inline-block overflow-hidden rounded-xl'>
        <div  className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0'/>
    
            <Image  src ={blog.image.replace("../../public/","/")}
            alt={blog.title}
            width={500}
            height={500}
            
            className='w-full h-full object-center object-cover rounded-3xl'
            
            />
            <div className='w-full absolute bottom-0  p-4 xs:p-6 sm:p-10'>
                {/* <Link href={`/categories/${blog.tags[0]}`}> {blog.tags}</Link> */}
                <Tag  link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}/>
            <Link href={blog.url} className='mt-6'> 
            <h1 className='font-bold capitalize text-4xl sm:text-xl md:text-2xl xs:text-base test-sm text-light'>
              <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100px_6px] bg-left-bottom bg-no-repeat transition-[background-size ] duration-500'>

              {blog.title}
              </span>
            </h1>
            </Link>
            <p className='inline-block mt-4 text-xl font-in'>
              {blog.description}
            </p>
            </div>
    </div>
  )
}

export default BlogLayoutOne
