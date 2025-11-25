import Projects from '../components/sections/Projects';
import { getPortfolioPages } from '@/lib/wordpress';

export default async function ProjectsPage() {
  const pages = await getPortfolioPages();

  return (
    <main className="pt-16">
      <Projects pages={pages} />
        <div className='p-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat, mi vel sagittis egestas, lacus nibh fermentum lorem, quis finibus urna lorem vel nibh. Mauris vehicula enim condimentum efficitur pharetra. Donec aliquet orci a sapien pellentesque, ut luctus purus rhoncus. Curabitur in augue eleifend, elementum libero in, vehicula nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque aliquam sapien ac ligula sodales, a gravida tortor semper. Vestibulumsuscipit venenatis ligula, eu molestie felis porta id. Aliquam tempus venenatis mi quis tincidunt. Etiam ac massa egestas, pretium nulla a, vulputate ante. Mauris luctus pretium aliquet. Etiam efficitur ornare erat et rhoncus. Mauris in nulla eget felis interdum accumsan sit amet ac tortor. Mauris at ornare elit. Suspendisse mollis eros tellus, quis aliquam risus malesuada eget. Vivamus vel mi placerat enim pharetra tristique ut sit amet metus.
        </div>
    </main>
  );
}
