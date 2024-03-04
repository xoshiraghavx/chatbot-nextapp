"use client";
import React, { useState } from 'react'
import { useChat } from 'ai/react';


const RightSection = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({api: '/api/ai'});

    return (
        <div>
            <div className='flex text-2xl my-10 lg:my-5 mx-7'>
                <p><b>Communic</b>AI</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-1.5 mx-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            </div>
            {
                messages.length > 0 ? 
                <div className='flex justify-center'>
                <ul className='bg-gray-100 w-auto mx-6 lg:w-1/2 p-5 h-1/3 absolute overflow-auto  rounded-lg'>{messages.map((m, index) => (
                    <li key={index} className='m-1 '>
                        {m.role === 'user' ? 'You: ' : <b>AI: </b>}
                        {m.content}
                    </li>))}
                </ul>
                </div>
                    :
                    <div className='text-center mt-56 lg:mt-24'>
                        <div>
                            <h1 className=' text-6xl lg:text-7xl font-bold'>Talk to AI</h1>
                            <p className='text-3xl lg:text-4xl font-light mt-3'>that get you ;)</p>
                        </div>
                        {/* <div>
                            <div>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                            <div>
                                <h2>Recommend activities</h2>
                                <p>psychology behind decision-making</p>
                            </div>
                        </div> */}

                    </div>
            }

            <div className='flex justify-center 
            absolute inset-x-0 bottom-0 mb-10
            '>
                <form onSubmit={handleSubmit}>

                    <input type='text' placeholder='Chat here ....'
                        value={input} onChange={handleInputChange} 
                        className='border border-black border-2 w-56 lg:w-96 p-2 rounded-md'
                    />
                    <button type='submit' className='mx-2 absolute mt-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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