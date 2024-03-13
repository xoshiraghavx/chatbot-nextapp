import React, { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from "@heroicons/react/outline";


const DarkMode = () => {

  const [dark, setDark] = useState(false);
  useEffect(() => {
    // getting if there any mode set by user
    if (localStorage.getItem("chatbot_dark") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  function changeTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
      localStorage.setItem("payon_dark", "light");
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
      localStorage.setItem("payon_dark", "dark");
    }
  }
  return (
    <div>
        <button onClick={changeTheme} className="transition active:scale-90">
          {/* show svg after checking if page is dark or light  */}
          {dark ? (
            <SunIcon className="h-8 stroke-[1.5]" />
          ) : (
            <MoonIcon className="h-8 stroke-[1.5]" />
          )}
        </button>
    </div>
  )
}

export default DarkMode