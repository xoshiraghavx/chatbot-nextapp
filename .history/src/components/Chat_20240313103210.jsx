"use client";
import React, { useState } from 'react'
import { useChat } from 'ai/react';
import DarkMode from '@/components/DarkMode'
import Image from 'next/image'


const RightSection = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({api: '/api/ai'});
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    return (
        <div className=''>
          <div>
            {
                messages.length > 0 ? 
                <div className='flex justify-center text-black'>
                <ul className='bg-black bg-opacity-5 w-auto my-8 lg:w-2/3 p-5 h-3/4 absolute overflow-auto rounded-lg'>{messages.map((m, index) => (
                    <li key={index} className='m-1 whitespace-pre-wrap'>
                        {m.role === 'user' ? 'You: ' : <b>AI: </b>}
                        {m.content}
                    </li>))}
                </ul>
                </div>
                    :
                    <div className='items-center flex flex-col '>
                        {/* <div> */}
                            <Image
                                src="/chatbot.svg"
                                width={400}
                                height={400}
                                alt="Picture of the author"
                                className=''
                            />
                        {/* </div> */}
                        <div className='text-black text-center dark:text-red-300 '>
                            <h1 className=' text-6xl lg:text-5xl font-bold '>Talk to AI</h1>
                            <p className='text-3xl lg:text-3xl font-light'>that get you ;)</p>
                        </div>

                    </div>
            }
          </div>
          <div></div>
          <a
            className="absolute w-10 top-6 right-8"
            href='www.google.com'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <DarkMode/>


            <div className='fixed bottom-0 w-3/4 mb-10 ml-4 '>
                <form onSubmit={handleSubmit} className='text-black flex justify-center'>

                    <input type='text' placeholder='Chat here ....'
                        value={input} onChange={handleInputChange} 
                        className='border border-gray-400 border-2 w-56 lg:w-1/2 p-2 rounded-md focus:outline-none'
                    />
                    <button type='submit' className='mx-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>

                    </button>

                </form>
                {/* <p>ChatGPT can make mistakes. Consider checking important information.</p> */}
            </div>
        </div>
    )
}

export default RightSection