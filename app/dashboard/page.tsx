import Form from "../components/TweetForm";
import Logout from "../components/Logout";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");

  return (
    <>
      <div className="px-10 my-10">
        <p className="text-4xl font-medium"> Welcome, {session?.user?.name}</p>
      </div>
      <div className="">
        <Form />
      </div>

      <div className="px-10 flex fixed bottom-5">
        <Logout />
      </div>
    </>
  );
};

export default Dashboard;
