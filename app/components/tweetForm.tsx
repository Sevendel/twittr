/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import Preview from "./TweetPreview";
import { FaXTwitter } from "react-icons/fa6";


export default function Form() {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweet }),
      });

      // let responseData;
      // if (response.headers.get("content-type")?.includes("application/json")) {
      //   responseData = await response.json();
      // }

      // const responseData = await response.json();

      if (response.ok) {
        setSuccess("Tweet successfully posted!");
        setTweet("");
      } else {
        setError("Failed to post tweet");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }

    setTimeout(() => {
      setError("");
      setSuccess("");
    }, 1000);
  };

  return (
    <section className="px-10 flex flex-col md:flex-row gap-y-5 md:gap-0 md:items-center justify-between">
      <form onSubmit={handleSubmit} className="flex flex-col w-[40rem] space-y-4">
        <textarea
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
          className="bg-slate-600 w-full p-2 border"
          placeholder="What's happening?"
          required
        />
        
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="flex gap-2 items-center bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded"
          >
            <FaXTwitter />
            Tweet
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>

      <Preview tweet={tweet} />
    </section>
  );
}
