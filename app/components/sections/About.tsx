'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-hero mb-6">About Me</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nulla facilisi. Suspendisse tincidunt nunc sit amet lectus pellentesque, vel pharetra urna varius. Pellentesque ac ligula vel diam semper elementum. Donec consequat, dui quis rutrum interdum, enim turpis sagittis libero, at convallis leo augue nec ante. Fusce scelerisque nunc ligula, vitae venenatis elit sodales ac. Pellentesque ac maximus diam, nec dignissim eros.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-4">Skills</h3>
            {['UI/UX Design', 'Branding', 'Web Design', 'Prototyping', 'Figma', 'Adobe Creative Suite'].map((skill) => (
              <div key={skill} className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-dark h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="ml-4 text-gray-700">{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
