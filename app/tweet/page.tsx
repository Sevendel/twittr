/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import Form from "../components/TweetForm";
import Logout from "../components/Logout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Hoster | Schedule Twitter Post",
  description: "Create a scheduled Twitter post"
}

const Dashboard = async () => {
  // const session = await auth();

  // if (!session?.user) redirect("/");
  // {session?.user?.name}

  return (
    <main className="pt-24">
      <div className="px-10">
        {/* <p className="text-4xl font-medium"> Welcome, user</p> */}
      </div>
      <div className="">
        <Form />
      </div>

      <div className="px-10 flex fixed bottom-5">
        <Logout />
      </div>
    </main>
  );
};

export default Dashboard;
