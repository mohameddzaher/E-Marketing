'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiAward, FiZap, FiBriefcase, FiMonitor } from 'react-icons/fi';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    icon: FiBriefcase,
    title: 'Merchandising',
    description: 'Strategic product placement and visual merchandising to maximize sales and brand visibility across retail environments.',
  },
  {
    icon: FiUsers,
    title: 'Field Promotion',
    description: 'Direct brand representation and customer engagement through trained field promoters at events and locations.',
  },
  {
    icon: FiZap,
    title: 'Product Sampling',
    description: 'Introduce your products through free trials, creating positive buzz and encouraging consumer purchases.',
  },
  {
    icon: FiTarget,
    title: 'Distribution',
    description: 'Comprehensive distribution solutions ensuring your products reach the right customers at the right time.',
  },
  {
    icon: FiAward,
    title: 'Brand Activation',
    description: 'Create immersive brand experiences that emotionally connect with your target audience and drive loyalty.',
  },
  {
    icon: FiMonitor,
    title: 'Digital Marketing',
    description: 'Multi-channel digital strategies leveraging social media, content, and modern marketing technologies.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

function ServiceCard({ icon: Icon, title, description, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)' }}
      className="group p-4 sm:p-6 bg-white border border-gray-100 rounded-lg hover:shadow-lg transition-all duration-300"
    >
      <motion.div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-primary/10 transition-all"
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>
      <h3 className="text-base sm:text-lg font-bold font-display text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-12 sm:py-16 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary font-semibold text-xs">OUR SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold font-display text-gray-900 mb-2 sm:mb-3">
            Comprehensive Marketing
            <br />
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            From brand activation to digital marketing, we deliver integrated services designed to elevate your business and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
