'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Ordered list of clients as specified
const clients = [
  { name: 'Saudia Airlines', logo: '/images/clients/Saudia Group-.png' },
  { name: 'Cheil', logo: '/images/clients/Cheil-.webp' },
  { name: 'Philips', logo: '/images/clients/Philips-.png' },
  { name: 'Abbott', logo: '/images/clients/Abbott-.png' },
  { name: 'GACA', logo: '/images/clients/GACA-.png' },
  { name: 'Jedco', logo: '/images/clients/jedco-.png' },
  { name: 'Savola', logo: '/images/clients/savola-.png' },
  { name: 'Mobil1', logo: '/images/clients/Mobil1-.png' },
  { name: 'Damac', logo: '/images/clients/Damac-.png' },
  { name: 'Nahdi', logo: '/images/clients/Nahdi.png' },
  { name: 'Al Watan', logo: '/images/clients/Alwatan.png' },
  { name: 'Nice', logo: '/images/clients/nice-.png' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/1200x/82/c6/54/82c6546f920209c80e89182a6e1350e9.jpg"
          alt="Clients background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/75" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Trusted by Leading
            <span className="text-gradient"> Brands</span>
          </h2>
        </motion.div>

        {/* Clients Slider */}
        <div 
          className="relative flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-6 sm:space-x-8 overflow-hidden w-full">
            {/* Animated infinite scroll */}
            <div
              className="flex space-x-6 sm:space-x-8 min-w-max"
              style={{
                animation: isPaused ? 'none' : 'slide 60s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden hover:shadow-lg transition-all flex items-center justify-center p-2"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
