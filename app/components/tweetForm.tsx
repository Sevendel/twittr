"use client";
import { useState } from "react";
import Preview from "./TweetPreview";
import { FaXTwitter } from "react-icons/fa6";


export default function Form() {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [scheduledTime, setScheduledTime] = useState("");

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   await fetch("/api/tweet", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ tweet }),
  //   });
  // };

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/tweet", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ tweet }),
  //     });
  
  //     // Check if response body exists and is JSON
  //     let responseData;
  //     if (response.headers.get("content-type")?.includes("application/json")) {
  //       responseData = await response.json();
  //     }
  
  //     if (response.ok) {
  //       alert("Tweet successfully posted!");
  //       setTweet(""); // Clear the tweet after successful post
  //     } else {
  //       alert(`Failed to post tweet: ${responseData?.error || 'Unknown error'}`);
  //     }
  //   } catch (error) {
  //     alert(`Error: ${error}`);
  //   }
  // };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tweetData: tweet }),
      });

      let responseData;
      if (response.headers.get("content-type")?.includes("application/json")) {
        responseData = await response.json();
      }

      if (response.ok) {
        setSuccess("Tweet successfully posted!");
        setTweet("");
      } else {
        setError(responseData?.error || "Failed to post tweet");
      }
    } catch (error) {

    }
  };
  

  return (
    <>
      <section className="px-10 flex flex-col md:flex-row gap-y-5 md:gap-0 md:items-center justify-between">
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
          {/* <input
            type="datetime-local"
            value={scheduledTime}
            onChange={(e) => setScheduledTime(e.target.value)}
            className="w-full p-2 border"
            required
          /> */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex gap-2 items-center bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded"
            >
              <FaXTwitter />
              Tweet
            </button>
          </div>
        </form>

        <Preview tweet={tweet} />

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </section>
    </>
  );
}
