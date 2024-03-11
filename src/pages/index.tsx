import Image from "next/image";
import { Inter } from "next/font/google";
import Login from '@/components/Login'
import Chat from '@/components/Chat'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <Login/> */}
      <Chat/>
    </div>
  );
}
