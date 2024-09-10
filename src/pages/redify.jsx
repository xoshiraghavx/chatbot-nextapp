import React from 'react'
import Login from "@/components/Login";
import '../styles/globals.css'
import Image from 'next/image'
import ChatWithPDF from '../components/ChatWithPDF';


const redify = () => {
  return (
    <>
    <Login>
      <ChatWithPDF />
    </Login>
    </>
  )
}

export default redify