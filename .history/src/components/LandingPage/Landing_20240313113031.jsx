import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Landing = () => {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-gradient-to-b from-yellow-50/20 via-amber-100/60 to-yellow-50/40">
      <Header />
      <main className="flex  flex-1 ">
        <Main />
      </main>
    </div>
  )
}

export default Landing