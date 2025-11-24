import Hero from './components/sections/Hero';
import Work from './components/sections/Work';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { getPortfolioPosts } from '@/lib/wordpress';

export default async function Home() {
  const posts = await getPortfolioPosts();

  return (
    <main>
      <Hero />
      <Work posts={posts} />
      <About />
      <Contact />
    </main>
  );
}
