"use client";
// import { signIn } from "next-auth/react";
import { doSocialLogin } from "@/app/actions";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-black">Twitterer</h1>
        <form action={doSocialLogin}>
          <button
            // onClick={() => signIn("twitter")}
            name="action"
            value="twitter"
            className="mt-5 border py-2 px-4 rounded"
          >
            Sign In with Twitter
          </button>
        </form>
      </div>
    </>
  );
}
