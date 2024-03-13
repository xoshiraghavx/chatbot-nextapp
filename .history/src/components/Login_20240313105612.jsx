import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Chat from '@/components/Chat'
import Nav from '@/components/Nav'
import Google from 'next-auth/providers/google'


const Login = ({children}) => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-white min-h-screen flex">
      <Nav />
    <div className="chat flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
        {/* logged in {session.user.email} */}
      </div
    </div>
    )
  }
  return (
    <div className='w-screen h-screen flex items-center'>
      <div className='text-center w-full'>
        {/* Not signed in <br /> */}
        <button onClick={() => signIn('google')} className='border border-white text-white bg-white bg-opacity-15 border-2 py-1 px-4 rounded-lg'>Sign in</button>
      </div>
    </div>
  )

}

export default Login