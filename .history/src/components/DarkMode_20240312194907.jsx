import React, { useState } from 'react'

const DarkMode = () => {
    // const [darkMode, setDarkMode] = useState(false);

    // const toggleDarkMode = () => {
    //     setDarkMode(!darkMode);
    //   };
  return (
    <div 
    // className={`${darkMode && "dark"}`}
    >
        <button
            className="absolute w-14 h-14 top-5 right-8 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
            // onClick={toggleDarkMode}
            >
            {/* {darkMode ? "LHT" : "DRK"} */}
        </button>
    </div>
  )
}

export default DarkMode