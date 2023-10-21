import { sortBlogs } from '@/utils';
import Link from 'next/link';
import React from 'react'
import BlogLayoutThree from '../Blog/BlogLayoutThree';

const RecentPosts = ({blogs}) => {
    console.log(blogs)
    // const sortedBlogs=blogs
    const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col item-center jusitify-center'>
        <div className='w-full flex justify-between'>

      <h2 className='w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light '>Recent Posts</h2>
<Link href="/categories/all" className='inline-block font-medium text-accent dark:text-accentDark underline undeline-offset-2  text-base md:text-lg  '>
  View all
</Link>
        </div>
    <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-16  mt-16'>
    {
    sortedBlogs.slice(1,7).map((blog, index) => {
        return <article key={blog.id} className='col-span-1 row-span-1 relative'> 
        <BlogLayoutThree  blog={blog}/>
        </article>
    })
}
    </div>
    </section>
   
  );
};

export default RecentPosts
