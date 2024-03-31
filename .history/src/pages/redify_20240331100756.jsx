import React from 'react'
import Login from "@/components/Login";
import '../styles/globals.css'

const redify = () => {
  return (
    <Login>
      <div className='text-black comingsoon'>
        <div className='bg-red-200  py-2 px-3 align-center flex'>
        COMING SOON!
        </div>
        <div>
          Our new feature is on it's way.
        </div>
      </div>
    </Login>
  )
}

export default redify