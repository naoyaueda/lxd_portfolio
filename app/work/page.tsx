import Work from '../components/sections/Work';
import { getPortfolioPosts } from '@/lib/wordpress';

export default async function WorkPage() {
  const posts = await getPortfolioPosts();

  return (
    <main className="pt-16">
      <Work posts={posts} />
    </main>
  );
}
