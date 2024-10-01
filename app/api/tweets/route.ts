import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi({
  appKey: process.env.AUTH_TWITTER_API_KEY ?? "",
  appSecret: process.env.AUTH_TWITTER_API_SECRET ?? "",
  accessToken: process.env.AUTH_TWITTER_TOKEN_KEY ?? "",
  accessSecret: process.env.AUTH_TWITTER_TOKEN_SECRET ?? "",
});

export async function POST(req: Request) {
  try {
    const { tweet, scheduledTime} = await req.json();

    if (!tweet || tweet.trim() === "") {
      return new Response(
        JSON.stringify({ msg: "Tweet content is required" }),
        { status: 400 }
      );
    }

    // Post the tweet using the Twitter API
    await twitterClient.v2.tweet(tweet, scheduledTime);

    return new Response(
      JSON.stringify({ message: "Tweet posted successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Failed to post tweet:", error);
    return new Response(JSON.stringify({ msg: "Failed to post tweet" }), {
      status: 500,
    });
  }
}
