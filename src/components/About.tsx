'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck } from 'react-icons/fi';

const highlights = [
  'Innovative Marketing Strategies',
  'Professional Event Management',
  'Data-Driven Results',
  'Expert Team of Professionals',
  'Regional Market Expertise',
  'Comprehensive Solutions',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-primary font-semibold text-xs">ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4 leading-tight">
              Energize Your
              <br />
              Success Story
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              Energize Your Business is a leading marketing agency dedicated to driving growth and success for our clients across the Middle East region. With a team of experienced professionals and deep market expertise, we deliver innovative solutions tailored to your unique business needs.
            </p>

            <div className="space-y-2 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 border border-primary">
                      <FiCheck className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <span className="text-gray-200 font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 sm:h-96"
          >
            {/* Image Container */}
            <div className="absolute inset-0 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Energize"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
