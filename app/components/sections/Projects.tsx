'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { WordPressPage, getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress';

interface ProjectsProps {
  pages: WordPressPage[];
}

export default function Work({ pages }: ProjectsProps) {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hero text-center mb-12"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
            <Link href={`/projects/${page.slug}`} >
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <Image
                  src={getFeaturedImageUrl(page)}
                  alt={getFeaturedImageAlt(page)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold" dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
              <div className="mt-2 text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
