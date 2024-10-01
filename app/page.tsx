"use client";
import { doTwitterLogin } from "@/app/actions";
import Image from "next/image";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { motion } from "framer-motion";
import Logo from "@/public/logo-blue.svg";
import { FaXTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";


export default function Home() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleAnimationEnd = () => {
    setIsSplashVisible(false);
  };
  return (
    <>
      <main>
        {isSplashVisible && (
          <SplashScreen onAnimationEnd={handleAnimationEnd} />
        )}
        <motion.section
          className={`min-h-screen flex items-center justify-center transition-opacity ${
            isSplashVisible ? "opacity-0" : "opacity-100"
          }`}
          animate={{ opacity: isSplashVisible ? 0 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-1/2 hidden lg:flex flex-col justify-center items-center text-center border border-transparent border-r-slate-700">
            <Image src={Logo} alt="Hoster Logo" className="w-48 h-48" />
            <h1 className="text-4xl -mt-10 mb-3 font-bold font-geistSans">
              Hoster
            </h1>
            <p className="text-lg md:text-xl mb-5 font-bold font-geistSans">
              Social Media Scheduler
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-col items-center justify-center h-screen font-geistMono">
            <div className="flex flex-col justify-center items-center lg:hidden">
              <Image src={Logo} alt="Hoster Logo" className="w-16 h-16" />
              <h1 className="text-3xl md:text-5xl mb-3 font-bold font-geistSans">
                Hoster
              </h1>
              <p className="text-lg md:text-xl mb-5 font-bold font-geistSans">
                Social Media Scheduler
              </p>
            </div>

            <h1 className="text-lg md:text-xl mb-5 font-bold font-geistSans">
              Choose a platform to connect to:
            </h1>
            <div className="flex gap-x-5">
              <form action={doTwitterLogin}>
                <button
                  name="action"
                  value="twitter"
                  className="py-4 w-36 text-xs lg:text-sm lg:py-5 lg:w-40 gap-y-3 hover:border-blue-500 border border-slate-700 flex flex-col justify-center items-center"
                >
                  <FaXTwitter className="w-6 h-6 lg:w-10 lg:h-10" />
                  <span>Post</span>
                </button>
              </form>

              <button className="relative overflow-hidden py-4 w-36 text-xs lg:text-sm lg:py-5 lg:w-40 gap-y-3 hover:border-blue-500 border border-slate-700 flex flex-col justify-center items-center">
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-blue-900">
                  Soon
                </span>
                <SiFacebook className="w-6 h-6 lg:w-10 lg:h-10" />
                <span>Page / Group</span>
              </button>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
