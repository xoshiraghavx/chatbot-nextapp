import React from 'react'
import Login from "@/components/Login";

const redify = () => {
  return (
    <Login>
      <div className=' text-black items-center flex flex-col'>
        <div className='bg-red-200 w-fit py-2 px-3'>
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