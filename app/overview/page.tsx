import { Metadata } from 'next';
import TotalPosts from '../components/TotalPosts';
import RecentPosts from '../components/RecentPosts';
 
export const metadata: Metadata = {
  title: 'Hoster | Overview',
  description: 'An overview of all the posts made by the user and their analytics'
};

export default function Home() {
    return (
        <main className='pt-24 mx-5'>
        <TotalPosts />
        <RecentPosts />
        </main>
    )
}