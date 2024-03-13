import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";



const Nav = () => {
    const {data:session} = useSession();
    console.log({session});
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink +' text-white bg-white bg-opacity-20 rounded-lg px-4 py-2';
    const router = useRouter();
    const {pathname} = router;
  return (
    <aside className=' p-4 w-1/5 '>
        <nav className='flex flex-col place-content-between	h-full py-7 '>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl bold'>
                AIConnect
                </h1>
                <Link href={'/'} className={pathname ==='/' ? activeLink : inactiveLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                CommunicAI
                </Link>
                <Link href={'/redify'} className={pathname.includes('/redify') ? activeLink : inactiveLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                Readify
                </Link>
            </div>
            <div className='flex gap-3 flex-col'>
                <div className="text-white flex gap-2 px-1">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg> */}
                    <div className="rounded-full overflow-hidden">
                        <img referrerPolicy="no-referrer" src={session?.user.image} className="w-8 h-8"/>
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