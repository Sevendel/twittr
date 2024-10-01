import { Queue } from 'bullmq';
import Redis from 'ioredis';

const redisConnection = new Redis(process.env.REDIS_URL ?? 'redis://localhost:6379');
const tweetQueue = new Queue('tweetQueue', { connection: redisConnection });

export async function POST(req: Request) {
  try {
    const { tweet, scheduledTime } = await req.json();

    if (!tweet || tweet.trim() === '') {
      return new Response(
        JSON.stringify({ msg: 'Tweet content is required' }),
        { status: 400 }
      );
    }

    // Parse the scheduled time
    const delay = new Date(scheduledTime).getTime() - Date.now();

    if (delay <= 0) {
      return new Response(
        JSON.stringify({ msg: 'Scheduled time must be in the future' }),
        { status: 400 }
      );
    }

    // Add the tweet to the queue with a delay
    await tweetQueue.add('postTweet', { tweet }, { delay });

    return new Response(JSON.stringify({ message: 'Tweet scheduled successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Failed to schedule tweet:', error);
    return new Response(JSON.stringify({ msg: 'Failed to schedule tweet' }), {
      status: 500,
    });
  }
}
