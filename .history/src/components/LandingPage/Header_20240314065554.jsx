import React from "react";
import Link from "next/link";
import {signIn } from "next-auth/react"

export default function Header() {
  const header_content = {
    logo: "AIConnect",
    button: "Sign in",
  };
  return (
    <header className="z-20 text-white bg-white bg-opacity-50">
      {/* Nav Bar */}
      <nav className="flex items-center justify-around p-4">
        {/* Logo */}
        <Link href="/" className="">
          <span className="text-2xl font-bold">{header_content?.logo}</span>
          <span className="absolute -right-2 top-0 text-[8px]">TM</span>
        </Link>
        {/* Nav Items */}
          <div className=''>
        {/* Not signed in <br /> */}
        <button onClick={() => signIn('google')} className='cursor-pointer rounded-lg bg-white bg-opacity-20 px-5 py-2 font-medium text-white hover:bg-opacity-50'>Sign in</button>
        </div>
      </nav>
    </header>
  );
}
