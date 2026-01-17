'use client';

import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiAward, FiZap, FiBriefcase, FiMonitor, FiCameraOff, FiBarChart2, FiSearch, FiFilm, FiTrendingUp, FiLayers, FiImage, FiCamera, FiCheckCircle } from 'react-icons/fi';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';

const iconMap: { [key: string]: any } = {
  'merchandising': FiBriefcase,
  'field-promotion': FiUsers,
  'product-sampling': FiZap,
  'distribution': FiTarget,
  'brand-activation': FiAward,
  'mystery-shopper': FiCameraOff,
  'reporting-system': FiBarChart2,
  'research-surveys': FiSearch,
  'video-production': FiFilm,
  'branding': FiTrendingUp,
  'digital-marketing': FiMonitor,
  'creative-campaigns': FiLayers,
  'media-production': FiFilm,
  'photography': FiImage,
  'video-shooting': FiCamera,
  'technical-services': FiCheckCircle,
};

function ServiceCard({ id, title, shortDescription, index }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = iconMap[id] || FiBriefcase;

  return (
    <Link href={`/services/${id}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)' }}
        className="group p-4 sm:p-6 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-lg hover:bg-white hover:border-primary/30 transition-all duration-300 cursor-pointer h-full"
      >
        <motion.div
          className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-primary/10 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
        <h3 className="text-base sm:text-lg font-bold font-display text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{shortDescription}</p>
        <motion.div
          className="mt-4 flex items-center space-x-2 text-primary font-semibold text-xs"
          whileHover={{ x: 5 }}
        >
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </motion.div>
    </Link>
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
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            From brand activation to digital marketing, we provide integrated services designed to elevate your business and deliver measurable results.
          </p>
        </motion.div>

        {/* Services Grid - 16 services: 1 col mobile, 2 cols tablet, 4 cols desktop = always equal rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              id={service.id}
              title={service.title}
              shortDescription={service.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
