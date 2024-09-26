"use client";
import { doTwitterLogin } from "@/app/actions";
// import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";


export default function Homet() {
  const handleClick = () => {
    alert("You clicked a button");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen font-geistMono">
        <h1 className="text-xl md:text-2xl mb-5 font-bold font-geistSans">
          Choose a platform to connect to:
        </h1>
        <div className="flex gap-x-5">
            <form action={doTwitterLogin}>
              <button
                name="action"
                value="twitter"
                className="py-8 w-40 gap-y-3 hover:border-amber-500 border flex flex-col justify-center items-center"
              >
                <FaXTwitter size={40} />
                <span>Post</span>
              </button>
            </form>

          <button
            onClick={handleClick}
            className="py-8 w-40 gap-y-3 hover:border-amber-500 border flex flex-col justify-center items-center"
          >
            <SiFacebook size={40} />
            <span>Page / Group</span>
          </button>
        </div>
      </div>
    </>
  );
}
