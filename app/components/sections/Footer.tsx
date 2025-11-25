'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <section id="footer" className='py-20 bg-gray-dark'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className='text-lg text-gray-light text-center font-hero'>&copy; 2025 Company, All right reserved.</div>
                </motion.div>
            </div>
        </section>
    );
}