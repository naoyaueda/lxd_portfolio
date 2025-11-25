import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import { getPortfolioPages } from '@/lib/wordpress'; 

export default async function Home() {
  const pages = await getPortfolioPages();

  return (
    <main>
      <Hero />
      <Projects pages={pages} />
      <About />
      <Contact />
    </main>
  );
}
