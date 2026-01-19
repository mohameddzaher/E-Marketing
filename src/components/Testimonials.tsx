'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiBarChart2, FiUsers, FiLayers } from 'react-icons/fi';
import Link from 'next/link';

const marketingHighlights = [
  {
    icon: FiBarChart2,
    title: 'Data-Driven Strategy',
    description: 'We leverage analytics and insights to create marketing strategies that deliver measurable results and ROI.',
  },
  {
    icon: FiUsers,
    title: 'Precise Targeting',
    description: 'Reach the right audience at the right time with our advanced targeting and segmentation techniques.',
  },
  {
    icon: FiLayers,
    title: 'Innovative Solutions',
    description: 'Stay ahead of the competition with cutting-edge marketing technologies and creative approaches.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-semibold text-xs">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
            Marketing Excellence
            <span className="text-gradient"> That Works</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto">
            We combine creativity, strategy, and technology to deliver marketing solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Marketing Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {marketingHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Services</span>
              <FiArrowRight className="w-3 h-3" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
