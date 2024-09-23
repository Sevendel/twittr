// import cron from "node-cron";
// import { getSession } from "next-auth/react";
// import { TwitterApi } from "twitter-api-v2";

// export default async function handler(req, res) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ message: "Not authenticated" });
//   }

//   const { tweet, scheduledTime } = req.body;

//   const twitterClient = new TwitterApi(session.accessToken);

//   const scheduleJob = cron.schedule(new Date(scheduledTime), async () => {
//     try {
//       await twitterClient.v1.tweet(tweet);
//     } catch (error) {
//       console.error(error);
//     }
//   });

//   res.status(200).json({ message: "Tweet scheduled" });
// }


// import axios from 'axios';
import { getSession } from 'next-auth/react';

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const { status } = req.body;

  try {
    const response = await axios.post(
      'https://api.twitter.com/2/tweets',
      { text: status },
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response.data });
  }
};
