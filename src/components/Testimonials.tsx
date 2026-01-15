'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Ahmed Hassan',
    company: 'Tech Innovations',
    text: 'Energize transformed our brand presence. Incredible results!',
    rating: 5,
  },
  {
    name: 'Sara Al-Rashid',
    company: 'Retail Plus',
    text: 'Professional team, amazing execution. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Mohammad Ibrahim',
    company: 'Finance Solutions',
    text: 'Best marketing agency we have worked with in the region.',
    rating: 5,
  },
  {
    name: 'Fatima Al-Kaabi',
    company: 'Luxury Brands',
    text: 'Exceeded our expectations in every way. Thank you!',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-gray-900">
            What Our
            <span className="text-gradient"> Clients Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="p-4 sm:p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-gray-600 text-sm sm:text-base mb-4">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-primary text-xs sm:text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
