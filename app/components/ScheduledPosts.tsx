// import Image from "next/image";


export default function ScheduledPosts() {
    const posts = [
      {
        title: "New Feature Release",
        platform: "Facebook",
        date: "2023-10-15",
        // image: "https://via.placeholder.com/50",
      },
      {
        title: "Weekly Tips",
        platform: "Twitter",
        date: "2023-10-20",
        // image: "https://via.placeholder.com/50",
      },
      {
        title: "Event Promotion",
        platform: "Instagram",
        date: "2023-10-22",
        // image: "https://via.placeholder.com/50",
      },
    ];
  
    return (
      <div className="pt-6 font-geistMono">
        <h3 className="text-2xl md:text-3xl font-bold mb-5 font-geistSans">Upcoming Scheduled Posts</h3>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-xl md:text-2xl font-semibold font-geistSans">Post</th>
              <th className="text-left text-xl md:text-2xl font-semibold font-geistSans">Platform</th>
              <th className="text-left text-xl md:text-2xl font-semibold font-geistSans">Schedule Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={index}>
                <td className="flex items-center space-x-2 mb-8">
                  {/* <Image src={post.image} alt={post.title} className="w-8 h-8 rounded-full" /> */}
                  <span>{post.title}</span>
                </td>
                <td className="mb-8">{post.platform}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }  