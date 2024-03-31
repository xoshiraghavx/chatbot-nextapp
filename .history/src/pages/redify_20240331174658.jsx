import React from 'react'
import Login from "@/components/Login";
import '../styles/globals.css'
import Image from 'next/image'


const redify = () => {
  return (
    <>
    <Login>
      <div className='text-black comingsoon'>
        <div className='text-center mb-5 text-xl font-semibold '>
        <span className='bg-[#3A3A3A] bg-opacity-30 rounded-lg py-2 px-3'>COMING SOON!</span>
        </div>
        <div className='md:text-4xl text-2xl font-bold'>
          Our new feature is on it&apos;s way.
        </div>
        <div className='justify-center flex'>
        <Image
          src="/comingSoon.svg"
          width={400}
          height={400}
          alt="Picture of the author"
      />
        </div>
      </div>
    </Login>
    </>
  )
}

export default redify