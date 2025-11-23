'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Side - Text Content */}
          <div className="md:text-right">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-hero text-7xl md:text-7xl text-gray-dark mb-6"
            >
              Hi, I'm <span className="text-gray-dark"><br/>Your Name</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-light mb-8"
            >
              Empathy, Evidence, Design.<br/>Learning that <span className='text-accent-dark'>grows</span> - and bridges cultures.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex md:flex-row-reverse gap-4"
            >
              <a
                href="#work"
                className="px-8 py-3 bg-gray-dark text-white rounded-lg hover:bg-accent-dark transition-colors duration-200 font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-gray-dark text-gray-dark rounded-lg hover:bg-gray-dark hover:text-white transition-colors duration-200 font-medium"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-photo2_gray.png"
                alt="Designer Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Optional decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
