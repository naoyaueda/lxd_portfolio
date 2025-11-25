// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation';

interface Page {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

async function getPageBySlug(slug: string): Promise<Page | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?slug=${slug}&_embed`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const pages = await res.json();
  return pages.length > 0 ? pages[0] : null;
}

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages?per_page=100`
  );
  const pages: Page[] = await res.json();

  return pages.map(page => ({
    slug: page.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  console.log('Params slug:', slug);
  const page = await getPageBySlug(slug);
  console.log('Fetched page:', page);

  if (!page) {
    notFound();
  }

  return (
    <main className="pt-32 max-w-4xl mx-auto px-4 py-20 prose prose-lg">
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </main>
  );
}
