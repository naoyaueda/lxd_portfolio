'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { WordPressPost, getFeaturedImageUrl, getFeaturedImageAlt } from '@/lib/wordpress';

interface WorkProps {
  posts: WordPressPost[];
}

export default function Work({ posts }: WorkProps) {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-hero text-center mb-12"
        >
          My Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                <Image
                  src={getFeaturedImageUrl(post)}
                  alt={getFeaturedImageAlt(post)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div className="mt-2 text-gray-600 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
