"use client"
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";


export default function Nav() {
    const pathname = usePathname();
    return pathname !== "/" && <div className="fixed w-screen bg-[#0a0a0a] h-16"><Navbar /></div>
}
