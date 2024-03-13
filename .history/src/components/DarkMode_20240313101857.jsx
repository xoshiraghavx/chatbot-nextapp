import React, { useState, useEffect } from 'react'

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    // getting if there any mode set by user
    if (localStorage.getItem("chatbot_dark") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }

    if (localStorage.getItem("payon-web-user")) {
      // check if user is on homepage - if it is on homepage then no logout button will be shown
      if (!(currentRoute.pathname === "/")) {
        setLogout(true);
      }
    }
  }, [currentRoute.pathname]);
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
    <div 
    className={`${darkMode && "dark"}`}
    >
        <button
            className="absolute w-14 h-14 top-5 right-8 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
            onClick={toggleDarkMode}
            >
            {darkMode ? "LHT" : "DRK"}
        </button>
    </div>
  )
}

export default DarkMode