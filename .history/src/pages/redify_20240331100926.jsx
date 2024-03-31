import React from 'react'
import Login from "@/components/Login";
import '../styles/globals.css'

const redify = () => {
  return (
    <Login>
      <div className='text-black comingsoon'>
        <div className='text-center'>
        <span>COMING SOON!</span>
        </div>
        <div className='text-4xl'>
          Our new feature is on it's way.
        </div>
      </div>
    </Login>
  )
}

export default redify