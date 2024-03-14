import React from 'react'
import Header from './Header'
import Main from './Main'

const Landing = () => {
  return (
    // <div className="
    // flex h-full min-h-screen max-w-screen overflow-hidden w-full flex-col
    //  ">
    <div className='overflow-hidden flex flex-col min-h-screen'>
      <Header />
      <main className="flex flex-1">
        <Main />
      </main>
    </div>
  )
}

export default Landing