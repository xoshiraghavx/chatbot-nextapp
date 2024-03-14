import React from 'react'
import Header from './Header'
import Main from './Main'

const Landing = () => {
  return (
    // <div className="
    // flex h-full min-h-screen max-w-screen overflow-hidden w-full flex-col
    //  ">
    <div className='min-h-screen h-full w-full max-w-screen flex flex-col overflow-hidden'>
      <Header />
      <main className=" flex">
        <Main />
      </main>
    </div>
  )
}

export default Landing