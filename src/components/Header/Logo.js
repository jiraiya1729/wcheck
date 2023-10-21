import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import porfileImg from '@/public/profile-img.png'

const Logo = () => {
  return (
    <Link href="/" className='flex item-center text-dark dark:text-light'>
      <div className=' w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark  dark:border-light md:mr-4 mr-2'>
        <Image  src={porfileImg} alt="image" className='w-full h-auto rounded-full' sizes="33vw" priority/>
      </div>
      <span className='font-bold dark:font-semibold md:text-xl text-lg  ' >BoiDs</span>
    </Link>
  )
}

export default Logo
