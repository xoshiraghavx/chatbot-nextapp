import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Chat from '@/components/Chat'


const Login = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br /> */}
        <Chat/>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

}

export default Login