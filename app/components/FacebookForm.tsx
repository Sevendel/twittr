/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useState } from "react";



export default function FacebookForm() {
  return (
    <>
      <form className="border p-6 flex flex-col gap-y-4 md:w-[400px]">
        <div className="flex flex-col gap-y-3">
          <label>Post Title</label>
          <input
            type="text"
            name="text"
            placeholder="Enter your post title"
            className="bg-slate-600 w-full p-2 border"
          />
        </div>

        <div className="flex flex-col gap-y-3">
          <label>Post Content</label>
          <input
            type="text"
            name="text"
            placeholder="Enter your facebook post"
            className="bg-slate-600 w-full py-4 px-2 border"
          />
        </div>

        <div className="flex justify-center">
          <button className="border border-slate-700 py-2 px-4 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
