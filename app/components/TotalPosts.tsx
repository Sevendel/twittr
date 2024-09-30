/* eslint-disable react/no-unescaped-entities */
import { MdOutlinePostAdd } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";

export default function TotalPosts() {
  const allPosts = 200;
  const dailyPosts = 5;
  const weeklyPosts = 20;
  const monthlyPosts = 50;
  const scheduledPosts = 10;
  const analytics = 150;
  return (
    <section className="flex flex-wrap gap-10 font-geistMono">
      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <MdOutlinePostAdd size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {allPosts}
        </p>
        <h1 className="text-base">Total Posts Created</h1>
      </div>

      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <MdOutlinePostAdd size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {dailyPosts}
        </p>
        <h1 className="text-base">Posts Created Today</h1>
      </div>

      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <MdOutlinePostAdd size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {weeklyPosts}
        </p>
        <h1 className="text-base">Posts Created This Week</h1>
      </div>

      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <MdOutlinePostAdd size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {monthlyPosts}
        </p>
        <h1 className="text-base">Posts Created This Month</h1>
      </div>

      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <MdAccessTime size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {scheduledPosts}
        </p>
        <h1 className="text-base">Scheduled Posts</h1>
      </div>

      <div className="border border-blue-600 w-60 h-32 flex flex-col gap-y-2 p-4">
        <IoAnalyticsSharp size={20} />
        <p className="text-xl xl:text-2xl font-semibold font-geistSans">
          {analytics}
        </p>
        <h1 className="text-base">Engagements</h1>
      </div>
    </section>
  );
}
