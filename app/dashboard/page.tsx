/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import Photo from "@/public/blockchain.jpg";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiShare2Line } from "react-icons/ri";
import Logout from "../components/Logout";

export default function Dashboard() {

  const [tweet, setTweet] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  // if (!session) {
  //   return <p>Loading...</p>;
  // }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await fetch("/api/tweet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tweet, scheduledTime }),
    });
  };

  return (
    <>
      <div className="px-10 my-10">
        <p className="text-4xl font-medium">Welcome, User</p>
      </div>

      <section className="px-10 flex items-center justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[40rem] space-y-4"
        >
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            className="bg-slate-600 w-full p-2 border"
            placeholder="What's happening?"
            required
          />
          <input
            type="datetime-local"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            className="w-full p-2 border"
            required
          />
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded"
            >
              Tweet
            </button>
          </div>
        </form>

        {/* Preview component */}
        <div className="ml-10 p-4 w-[590px] bg-[#000] border">
          <div className="flex items-start">
            {/* <div className="w-12 h-12 bg-blue-700 rounded-full mr-3"></div> */}
            <Image src={Photo} alt="" className="w-12 h-12 mr-3 rounded-full" />

            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-bold">Papa Johns</p>
                <p className="text-gray-400">@papajohns</p>
                <span className="text-gray-400">· 1m</span>
              </div>

              <p className="mt-1 text-lg break-words max-w-[44ch]">
                {tweet || "What's happening?"}
              </p>

              <div className="flex justify-between mt-4 text-gray-400">
                <FaRegComment className="cursor-pointer hover:text-blue-500" />
                <FaRetweet className="cursor-pointer hover:text-green-500" />
                <IoIosHeartEmpty className="cursor-pointer hover:text-red-500" />
                <IoStatsChartOutline className="cursor-pointer hover:text-yellow-500" />
                <span className="flex gap-4">
                  <FaRegBookmark className="cursor-pointer hover:text-blue-500" />
                  <RiShare2Line className="cursor-pointer hover:text-blue-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-10 flex fixed bottom-5">
        {/* <button
          onClick={() => signOut()}
          className="mt-5 border border-red-500 hover:bg-red-500 hover:text-white py-2 px-4 rounded text-base hover:text-lg"
        >
          Logout
        </button> */}
        <Logout />
      </div>
    </>
  );
}