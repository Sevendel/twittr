/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
// import { useState } from "react";
import Image from "next/image";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStatsChartOutline } from "react-icons/io5";
import { RiShare2Line } from "react-icons/ri";
import Photo from "@/public/blockchain.jpg";
import Handle from "./UserHandle";


export default function Preview({ tweet }: { tweet: string }) {
  return (
    <>
      <div className="p-4 w-full md:w-[590px] bg-[#000] border">
        <div className="flex items-start">
          {/* <div className="w-12 h-12 bg-blue-700 rounded-full mr-3"></div> */}
          <Image src={Photo} alt="" className="w-12 h-12 mr-3 rounded-full" />

          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <p className="font-bold">Papa Johns</p>
              {/* <Handle /> */}
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
    </>
  );
}
