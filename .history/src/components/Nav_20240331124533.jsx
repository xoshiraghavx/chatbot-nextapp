import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { ChatAltIcon, DocumentTextIcon } from '@heroicons/react/outline';
import Image from "next/image";



const Nav = () => {
    const {data:session} = useSession();
    console.log({session});
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink +' text-white bg-white bg-opacity-20 rounded-lg px-4 py-2';
    const router = useRouter();
    const {pathname} = router;
  return (
    <aside className=' p-4 w-1/5 '>
        <nav className='flex flex-col place-content-between	h-full py-4 '>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold mb-4'>
                AIConnect
                </h1>
                <Link href={'/'} className={pathname ==='/' ? activeLink : inactiveLink}>
                <ChatAltIcon className='w-6 '/>
                CommunicAI
                </Link>
                <Link href={'/redify'} className={pathname.includes('/redify') ? activeLink : inactiveLink}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg> */}
                <DocumentTextIcon className='w-6'/>
                Readify
                </Link>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className="text-white flex gap-2 px-1">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> */}
                    <div className="rounded-full overflow-hidden">
                        <Image 
                        referrerPolicy="no-referrer" 
                        src={session?.user.image} 
                        width= '4' height='4' 
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