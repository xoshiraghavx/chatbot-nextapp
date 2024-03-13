import Image from "next/image";
import picture from "../../../public/lady-with-book.jpg";
import { LightBulbIcon} from "@heroicons/react/outline";
import {signIn } from "next-auth/react"


export default function Hero() {
  const hero_content = {
    title: ["Enter the World of", "Smart Conversations"],
    description:
      "Organizes work so teams know what to do, why it matters, and how to get it done.",
    play_button: "View Demo",
  };
  return (
    <section className="relative flex min-h-full w-full flex-col  place-content-center px-4">
      {/* Patterns */}
     

      {/* Content */}
      <div className="z-10 mx-auto flex w-full max-w-[1080px] flex-col space-y-8 text-white">
        <h1 className="flex max-w-2xl flex-col space-y-1 text-3xl font-bold sm:text-5xl xl:text-6xl">
          {hero_content?.title &&
            hero_content?.title.map((item, i) => <span key={i}>{item}</span>)}
        </h1>
        <p className="max-w-lg text-lg xl:max-w-2xl xl:text-xl">
          {hero_content?.description}
        </p>
        {/* Buttons */}
        <div className="flex flex-row items-center space-x-10 transition">
          {/* <button className="rounded-lg bg-red-300 px-8 py-4 font-bold text-black hover:bg-red-300/80">
            {hero_content?.button}
          </button> */}
          <button onClick={() => signIn('google')} className='rounded-lg bg-black bg-opacity-50 px-8 py-4 font-bold text-white hover:bg-red-300/80 '>Get Started</button>
          <button className="group flex flex-row items-center space-x-4">
            <div className="rounded-full bg-white bg-opacity-60 p-4 group-hover:bg-black/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-bold">{hero_content?.play_button}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
