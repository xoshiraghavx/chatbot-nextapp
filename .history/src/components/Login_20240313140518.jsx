import React from 'react'
import { useSession } from "next-auth/react"
import Chat from '@/components/Chat'
import Nav from '@/components/Nav'
import DarkMode from '@/components/DarkMode'

import Google from 'next-auth/providers/google'
import Landing from './LandingPage/Landing'


const Login = ({children}) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-white min-h-screen flex">
      <Nav />
    <div className="chat flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
        {/* logged in {session.user.email} */}
      </div>
      <div className="absolute w-15 top-6 grid  grid-cols-2 gap-2 right-8">
            <a href='https://github.com/xoshiraghavx' >
            background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
                </a>
                <DarkMode/>
      </div>
    </div>
    )
  }
  return (
    <div className=''>
      <Landing/>
    </div>
  )

}

export default Login