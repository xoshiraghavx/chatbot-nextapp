import React from 'react'
import Login from "@/components/Login";
import '../styles/globals.css'

const redify = () => {
  return (
    <Login>
      <div className='text-black comingsoon'>
        <div className='text-center mb-5'>
        <span className='bg-[#3A3A3A] py-2 px-3'>COMING SOON!</span>
        </div>
        <div className='text-5xl'>
          Our new feature is on it's way.
        </div>
      </div>
    </Login>
  )
}

export default redify