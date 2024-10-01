import { Worker } from 'bullmq';
import Redis from 'ioredis';
import { TwitterApi } from 'twitter-api-v2';

const redisConnection = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379');

const twitterClient = new TwitterApi({
  appKey: process.env.AUTH_TWITTER_API_KEY ?? '',
  appSecret: process.env.AUTH_TWITTER_API_SECRET ?? '',
  accessToken: process.env.AUTH_TWITTER_TOKEN_KEY ?? '',
  accessSecret: process.env.AUTH_TWITTER_TOKEN_SECRET ?? '',
});

// Worker to process the tweets
const worker = new Worker(
  'tweetQueue',
  async (job) => {
    const { tweet } = job.data;

    try {
      // Post the tweet using the Twitter API
      await twitterClient.v2.tweet(tweet);
      console.log(`Tweet posted: ${tweet}`);
    } catch (error) {
      console.error('Failed to post tweet:', error);
    }
  },
  { connection: redisConnection }
);

worker.on('failed', (job, err) => {
  console.error(`Job failed with id ${(job as any).id}`, err);
});


console.log('Tweet worker is running...');
