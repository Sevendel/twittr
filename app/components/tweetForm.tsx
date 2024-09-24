"use client";
import { useState } from "react";
import Preview from "./TweetPreview";


export default function Form() {
  const [tweet, setTweet] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

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

        <Preview tweet={tweet} />
      </section>
    </>
  );
}
