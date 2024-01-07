import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className='sticky top-0 py-7 mb-10 flex justify-around max-w-screen backdrop-blur-md z-50'>
            <div className='w-1/2 text-center'>
                <a className='text-4xl font-kaushanScript mr-10' href='/'>NishSpace</a>
            </div>
            <div className='pl-32 w-1/2 justify-end'>
                <ul className='flex justify-evenly'>
                    <li><Link href='#intro' className='text-transparentText hover:text-white'>Intro</Link></li>
                    <li><Link href='#projects' className='text-transparentText hover:text-white'>Projects</Link></li>
                    <li><Link href='#profile' className='text-transparentText hover:text-white'>About</Link></li>
                    <li><Link href='#contact' className='text-transparentText hover:text-white'>Contact</Link></li>
                </ul>
            </div>
            <div className='mr-1 w-11 h-fit text-center border-[1px] border-grey hover:bg-grey rounded-xl'>
                <span className='m-auto text-sm italic self-center text-center'>v 1.0</span>
            </div>
        </nav>
    )
}
