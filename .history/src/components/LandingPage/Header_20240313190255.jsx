import React from "react";
import Link from "next/link";
import {signIn } from "next-auth/react"


export default function Header() {
  const header_content = {
    logo: "AIConnect",
    // nav_items: ["Product", "Solutions", "Resources", "Pricing"],
    button: "Sign in",
  };
  return (
    <header className="z-20 text-white bg-white bg-opacity-50">
      {/* Nav Bar */}
      <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="relative">
          <span className="text-2xl font-bold">{header_content?.logo}</span>
          <span className="absolute -right-2 top-0 text-[8px]">TM</span>
        </Link>
        {/* Nav Items */}
        <div className=" ">
          <ul className="hidden  space-x-6 font-medium sm:flex">
            {header_content?.nav_items &&
              header_content?.nav_items.map((item, i) => (
                <li
                  key={i}
                  className="flex cursor-pointer flex-row items-center space-x-2"
                >
                  <span>{item}</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </li>
              ))}
          </ul>
          <div className=''>
        {/* Not signed in <br /> */}
        <button onClick={() => signIn('google')} className='cursor-pointer rounded-lg bg-white bg-opacity-20 px-5 py-2 font-medium text-white hover:bg-opacity-50'>Sign in</button>
      </div>
        </div>
      </nav>
    </header>
  );
}
