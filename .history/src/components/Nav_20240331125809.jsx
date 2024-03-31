import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { ChatAltIcon, DocumentTextIcon, MenuAlt4Icon } from '@heroicons/react/outline';
import Image from "next/image";
import { useState } from 'react';



const Nav = () => {
    const {data:session} = useSession();
    console.log({session});
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink +' text-white bg-white bg-opacity-20 rounded-lg px-4 py-2';
    const router = useRouter();
    const {pathname} = router;

    const [menuOpen, setMenuOpen] = Use

    const handelNav= ()=>{

    }
  return (
    <aside className=' p-4 w-1/5 '>
        <nav className='flex flex-col place-content-between	h-full py-4 '>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold mb-4'>
                AIConnect
                </h1>

                <div>
                    <div onClick={handelNav} className='md:hidden cursor-pointer'>
                    <MenuAlt4Icon className='w-6'/>
                    </div>
                </div>

                <Link href={'/'} className={pathname ==='/' ? activeLink : inactiveLink}>
                <ChatAltIcon className='w-6 '/>
                CommunicAI
                </Link>
                <Link href={'/redify'} className={pathname.includes('/redify') ? activeLink : inactiveLink}>
                <DocumentTextIcon className='w-6'/>
                Readify
                </Link>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className="text-white flex gap-2 px-1">
                    <div className="rounded-full overflow-hidden">
                        <img 
                        referrerPolicy="no-referrer" 
                        src={session?.user.image} 
                        // width={4}
                        // height={4}
                        className="w-8 h-8" 
                        alt='img'/>
                    </div>
                    <div className='mt-1'>
                        <b>{session?.user?.name}</b>
                    </div>      
                </div>
                <div className='bg-white dark:bg-black bg-opacity-10 py-2 rounded-lg hover:bg-opacity-20 text-center'>
                    <button onClick={() => signOut()} >Sign out</button>
                </div>
            </div>
         </nav>
    </aside>
  )
}

export default Nav