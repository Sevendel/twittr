import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import { FaHome } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Navbar() {
  return (
    <main className="bg-[#0a0a0a]">
      <nav className="font-geistMono flex justify-between items-center m-5 py-2 px-3 border border-slate-600 rounded-lg">
        <Link
          href="/"
          className="flex space-x-2 items-center font-bold font-geistSans text-xs md:text-xl"
        >
          <Image
            src={Logo}
            alt="Hoster Logo"
            className="w-8 h-8 lg:w-10 lg:h-10"
          />
          Hoster
        </Link>
        <ul className="flex space-x-6 lg:space-x-10">
          <Link
            href="/overview"
            className="flex space-x-2 items-center border border-slate-600 hover:bg-amber-800 py-1 px-2 rounded-md  text-sm"
          >
            <FaHome />
            <li className="hidden lg:block">Overview</li>
          </Link>

          <Link
            href="/scheduled-posts"
            className="flex space-x-2 items-center border border-slate-600 hover:bg-amber-800 py-1 px-2 rounded-md  text-sm"
          >
            <MdAccessTimeFilled />
            <li className="hidden lg:block">Scheduled Posts</li>
          </Link>

          <Link
            href="/tweet"
            className="flex space-x-2 items-center border border-slate-600 hover:bg-amber-800 py-1 px-2 rounded-md  text-sm"
          >
            <FaPen />
            <li className="hidden lg:block">Create</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
}
