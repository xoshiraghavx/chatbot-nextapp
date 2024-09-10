"use client";
import React, { useState } from 'react'
import { useChat } from 'ai/react';
import Image from 'next/image'
import extractTextFromPDF from "pdf-parser-client-side";
import { marked } from 'marked';


const RightSection = () => {
    const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat({api: '/api/ai'});
    const handleFileChange = async (e, variant) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (file) {
          try {
            const text = await extractTextFromPDF(file, variant);
            setMessages([...messages, { 
                role: 'system',
                content: `Contents of ${file.name}: ${text}`
             },{
                role: 'assistant',
                content: `You can now chat to me anything about ${file.name}`
             }]);
          } catch (error) {
            console.error("Error extracting text from PDF:", error);
          }
        }
      };
     return (
       <div className="">
         <div>
           {messages.length > 0 ? (
             <div className="flex justify-center text-black">
               <ul className="bg-black bg-opacity-5 w-[90%] my-14 mx-2 lg:my-10 lg:w-2/3 p-5 h-3/4 absolute overflow-auto rounded-lg">
                 {messages.map((m, index) =>
                   m.role === "data" || m.role === "system" ? null : (
                     <li key={index} className="m-1 whitespace-pre-wrap">
                       {m.role === "user" ? "You: " : <b>AI: </b>}
                       <div
                         dangerouslySetInnerHTML={{
                           __html: m.content ? marked.parse(m.content) : "",
                         }}
                       ></div>
                     </li>
                   )
                 )}
               </ul>
             </div>
           ) : (
             <div className="items-center h-[60vh] flex flex-col  justify-center items-center lg:mt-12 mt-36">
               <form className="text-black flex justify-center">
                 <label
                   htmlFor="pdf-upload"
                   className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                 >
                   Upload PDF
                 </label>
                 <input
                   id="pdf-upload"
                   type="file"
                   accept=".pdf"
                   className="hidden"
                   onChange={(e) => handleFileChange(e, "clean")}
                 />
               </form>
             </div>
           )}
         </div>

         {messages.length > 0 && (
           <div className="fixed bottom-0 w-full lg:w-3/4 mb-8 lg:ml-4 ">
             <form
               onSubmit={handleSubmit}
               className="text-black flex justify-center"
             >
               <input
                 type="text"
                 placeholder="Chat here ...."
                 value={input}
                 onChange={handleInputChange}
                 className="border border-gray-400 w-56 lg:w-1/2 p-2 rounded-md focus:outline-none"
               />
               <button type="submit" className="mx-2">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth={1.5}
                   stroke="currentColor"
                   className="w-6 h-6 text-gray-500"
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                   />
                 </svg>
               </button>
             </form>
             {/* <p>ChatGPT can make mistakes. Consider checking important information.</p> */}
           </div>
         )}
       </div>
     );
}

export default RightSection