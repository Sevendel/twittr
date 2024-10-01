import { Queue, Worker } from 'bullmq';
import Redis from 'ioredis';

const redis = new Redis();
const tweetQueue = new Queue('tweetQueue', { connection: redis });

export const addTweetJob = (message: string, delay: number) => {
  tweetQueue.add('tweetJob', { message }, { delay });
};

new Worker('tweetQueue', async (job) => {
  console.log('Tweeting:', job.data.message);
}, { connection: redis });
