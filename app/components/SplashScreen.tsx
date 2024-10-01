"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function SplashScreen({ onAnimationEnd }: { onAnimationEnd: () => void }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      onAnimationEnd();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  if (!showSplash) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="text-center">
        <motion.img
          src="/logo-blue.svg"
          alt="Hoster Logo"
          className="w-32 mx-auto"
          initial={{ scale: 1 }}
          animate={{ scale: 0.8 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.h1
          className="font-geistSans text-4xl font-bold -mt-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.7 }}
        >
          Hoster
        </motion.h1>
      </div>
    </motion.div>
  );
}
