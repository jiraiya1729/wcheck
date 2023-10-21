"use client"
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon } from '@/project files/Icons'
import { useThemeSwitch } from '../Hooks/useThemeSwitch'
import { cx } from '@/utils'
import siteMetadata from '@/project files/siteMetaData'



const Header = () => { 
  const [mode,setMode] = useThemeSwitch();
  const [click,setClick] = useState();
const toggle = () =>{
  setClick(!click)
}
  return (

    <div className='w-full p-4 px-5 sm:px-10 flex item-center justify-between'>
        <Logo />
        <button className='inline-block sm:hidden z-50' onClick={toggle}>
          <div className='w-6 cursor-pointer transition-all ease duration-300'>
             <div className='relative'>
             <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
             style={{
                transform: click ? "rotate(-45deg) translateY(0)":"rotate(0deg) translateY(6px)"
             }}
             >&nbsp;</span>
            <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
            style={{
              opacity: click?  0: 1
            }}
            >&nbsp;</span>
            <span className='absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200'
            style={{
              transform: click? "rotate(45deg) translateY(0)":"rotate(0deg) translateY(-6px)"
           }}
            >&nbsp;</span>
            
             </div>

          </div>
        </button>
        <nav className='w-max py-3  px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center
        sm:hidden flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 
        transition-all ease duration-300
        '
        style={{
          top: click? "1rem":"-5rem"
        }}
        >
          <Link href='/' className='mr-2'>Home</Link>
          <Link href='/about' className='mx-2'>About</Link>
          <Link href='/contact' className='mx-2'>Contact</Link>
          <button onClick={() => setMode(mode==="light"? "dark":"light")}
          className={cx("w-6 h-6 ease ml-2 flex item-center justify-center rounded-full p-1", mode==="light"? "bg-dark text-light": "bg-light text-dark")

          }
          >
            {
              mode ==="light"? <MoonIcon className={"fill-dark"}/> : <SunIcon className={"fill-dark"}/>
            }
            
          </button>

        </nav>
        <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 sm:flex hidden
        '>
          <Link href='/' className='mr-2'>Home</Link>
          <Link href='/about' className='mx-2'>About</Link>
          <Link href='/contact' className='mx-2'>Contact</Link>
          <button onClick={() => setMode(mode==="light"? "dark":"light")}
          className={cx("w-6 h-6 ease ml-2 flex item-center justify-center rounded-full p-1", mode==="light"? "bg-dark text-light": "bg-light text-dark")

          }
          >
            {
              mode ==="light"? <MoonIcon className={"fill-dark"}/> : <SunIcon className={"fill-dark"}/>
            }
            
          </button>

        </nav>
        <div className='sm:flex item-center hidden '>
          <a href={siteMetadata.linkedin} className='inline-block w-6 h-6 mr-4 '><LinkedinIcon className="hover:scale-125 transition-all ease duration-200"/> </a>
          <a href={siteMetadata.github} className='inline-block w-6 h-6 mr-4 '><GithubIcon className="hover:scale-125 transition-all ease duration-200"/> </a>
        </div>
    </div>
  )
}

export default Header
