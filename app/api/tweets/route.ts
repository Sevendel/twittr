/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiResponse, NextApiRequest } from "next";
import { TwitterApi } from 'twitter-api-v2';

// Twitter API configuration
const twitterConfig = {
  appKey: process.env.AUTH_TWITTER_API_KEY as string,
  appSecret: process.env.AUTH_TWITTER_API_SECRET as string,
  accessToken: process.env.AUTH_TWITTER_TOKEN_KEY as string,
  accessSecret: process.env.AUTH_TWITTER_TOKEN_SECRET as string,
};

// Create a reusable Twitter API client
const twitterClient = new TwitterApi(twitterConfig);
const rwClient = twitterClient.readWrite;

export default async function TweetHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { tweet }: { tweet: string } = req.body;

    // Basic validation
    if (!tweet || tweet.length > 280) {
      return res.status(400).json({ success: false, error: 'Invalid tweet length' });
    }

    try {
      const response = await rwClient.v2.tweet(tweet);
      return res.status(200).json({ success: true, data: response });
    } catch (error: any) {
      console.error('Error sending tweet:', error);
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}