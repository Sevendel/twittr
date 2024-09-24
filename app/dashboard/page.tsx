import Logout from "../components/Logout";
import TweetForm from "../components/tweetForm";

export default function Dashboard() {
  return (
    <>
      <div className="px-10 my-10">
        <p className="text-4xl font-medium">Welcome, User</p>
      </div>

      <TweetForm />

      <div className="px-10 flex fixed bottom-5">
        <Logout />
      </div>
    </>
  );
}
