/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import Preview from "./TweetPreview";
import { FaEye, FaPen, FaXTwitter } from "react-icons/fa6";
import axios from "axios";

export default function Form() {
  const [tweet, setTweet] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newPost, setNewPost] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // const response = await axios.post("/api/tweets", { tweet });
      await axios.post("/api/tweets", { tweet });
      setSuccess("Tweet sent!");
      setTweet("");
    } catch (error) {
      setError("Tweet not sent. Try again!");
    }
    setTimeout(() => {
      setError(""); // use react toastify here instead
      setSuccess("");
    }, 3000);
  };

  return (
    <main className="px-4">
      <div className="mb-8 flex items-center justify-center">
        {isPreview ? (
          <button
            onClick={() => setIsPreview(false)}
            className="font-geistMono text-sm border border-slate-700 hover:bg-blue-800 hover:border-blue-800 py-1 px-2 rounded flex items-center gap-2"
          >
            <FaPen />
            Create
          </button>
        ) : (
          <button
            onClick={() => setIsPreview(true)}
            className="font-geistMono text-sm border border-slate-700 hover:bg-blue-800 hover:border-blue-800 py-1 px-2 rounded flex items-center gap-2"
          >
            <FaEye />
            Preview
          </button>
        )}
      </div>

      {!isPreview ? (
        // Form component
        <section className="p-4 flex flex-col items-center w-full max-w-2xl mx-auto bg-slate-900 shadow-md rounded-lg">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full space-y-4"
          >
            <textarea
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              className="bg-slate-600 w-full h-[100px] p-2 border border-slate-700 rounded"
              placeholder="What's happening?"
              required
            />
            <div className="mb-4">
              <input
                type="datetime-local"
                className="bg-slate-600 w-full p-2 border border-slate-700 rounded"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                name="scheduledTime"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="font-geistMono flex gap-2 items-center bg-blue-500 hover:bg-blue-800 text-white py-2 px-6 rounded"
              >
                <FaXTwitter />
                Tweet
              </button>
            </div>
          </form>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </section>
      ) : (
        // Preview component
        <section className="flex items-center justify-center">
          <Preview tweet={tweet} />
        </section>
      )}
    </main>
  );
}
