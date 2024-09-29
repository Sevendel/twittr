import { Metadata } from 'next';
import TotalPosts from '../components/TotalPosts';
import RecentPosts from '../components/RecentPosts';
 
export const metadata: Metadata = {
  title: 'Hoster | User Dashboard',
};

export default function Home() {
    return (
        <main className='pt-24 mx-5'>
        <TotalPosts />
        <RecentPosts />
        </main>
    )
}