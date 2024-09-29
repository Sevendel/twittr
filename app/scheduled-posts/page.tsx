import { Metadata } from 'next';
import ScheduledPosts from '../components/ScheduledPosts';
 
export const metadata: Metadata = {
  title: 'My Scheduled Posts',
};

export default function Page() {
    return(
        <main className='pt-24 mx-5'>
        <ScheduledPosts />
        </main>
    )
}