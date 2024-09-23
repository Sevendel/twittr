"use client"
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-black">Twitterer</h1>
        <button 
        onClick={() => signIn("twitter")}
        className="mt-5 border py-2 px-4 rounded">Sign In with Twitter</button>
      </div>
    </>
  );
}
