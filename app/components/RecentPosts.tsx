import React from "react";

export default function RecentPosts() {
  const posts = [
    { post: "New Feature Release", platform: "Facebook", date: "2024-09-25" },
    { post: "Blog Announcement", platform: "Twitter", date: "2024-09-26" },
    { post: "Live Stream", platform: "Instagram", date: "2024-09-28" },
  ];

  return (
    <div className="container mx-auto mt-12 font-geistMono">
        <h1 className="text-2xl font-bold font-geistSans">Recent Scheduled Posts</h1>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-geistSans">Post</th>
            <th className="px-4 py-2 text-left font-geistSans">Platform</th>
            <th className="px-4 py-2 text-left font-geistSans">Scheduled Date</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{post.post}</td>
              <td className="px-4 py-2">{post.platform}</td>
              <td className="px-4 py-2">{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};