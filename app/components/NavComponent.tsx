"use client"
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";


export default function Nav() {
    const pathname = usePathname();
    return pathname !== "/" && <Navbar />
}
