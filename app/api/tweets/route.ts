import { NextApiResponse, NextApiRequest } from "next";
import { TwitterApi } from 'twitter-api-v2';


export default async function TweetHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { tweet } = req.body;

    const client = new TwitterApi({
      appKey: process.env.AUTH_TWITTER_API_KEY as string,
      appSecret: process.env.AUTH_TWITTER_API_SECRET as string,
      accessToken: process.env.AUTH_TWITTER_TOKEN_KEY as string,
      accessSecret: process.env.AUTH_TWITTER_TOKEN_SECRET as string,
    });

    const rwClient = client.readWrite;

    try {
      const response = await rwClient.v2.tweet(tweet);
      return res.status(200).json({ success: true, data: response });
    } catch (error) {
      console.error('Error sending tweet:', error);
      return res.status(500).json({ success: false, error: 'Failed to send tweet.' });
    }
  } else {
    res.setHeader('Allow', ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
