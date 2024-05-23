import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";
import { ChatAltIcon, DocumentTextIcon } from '@heroicons/react/outline';
import Image from "next/image";
import { XIcon } from '@heroicons/react/outline';


const Nav = ({menuOpen, toggle}) => {
    const {data:session} = useSession();
    console.log({session});
    const inactiveLink = 'flex gap-1 p-1';
    const activeLink = inactiveLink +' text-white bg-white bg-opacity-20 rounded-lg px-4 py-2';
    const router = useRouter();
    const {pathname} = router;

    
  return (
    <aside className={`${menuOpen ? 'fixed' : 'hidden'} md:block h-screen z-10 bg-[#3E3E3E] top-0 left-0 w-full md:relative p-4 md:w-1/5 `}>
        <nav className='flex flex-col place-content-between	h-full py-4 w-full '>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-bold mb-4 flex items-center justify-between'>
                {/* AIConnect */} PromptX
                <button onClick={()=>toggle()} className='md:hidden cursor-pointer'>
              <XIcon className='w-6 text-white'/>
            </button>
                </h1>
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