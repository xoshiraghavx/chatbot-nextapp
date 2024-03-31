"use client";
import React, { useState } from 'react'
import { useChat } from 'ai/react';
import Image from 'next/image'


const RightSection = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({api: '/api/ai'});
     return (
        <div className=''>
          <div>
            {
                messages.length > 0 ? 
                <div className='flex justify-center text-black'>
                <ul className='bg-black bg-opacity-5 w-80%] my-14 mx-2 lg:my-10 lg:w-2/3 p-5 h-3/4 absolute overflow-auto rounded-lg'>{messages.map((m, index) => (
                    <li key={index} className='m-1 whitespace-pre-wrap'>
                        {m.role === 'user' ? 'You: ' : <b>AI: </b>}
                        {m.content}
                    </li>))}
                </ul>
                </div>
                    :
                    <div className='items-center flex flex-col lg:mt-12 mt-36'>
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
          


            <div className='fixed bottom-0 w-full lg:w-3/4 mb-8 lg:ml-4 '>
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