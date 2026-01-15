'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'Abbott', logo: '/images/clients/Abbott-.png' },
  { name: 'Ajmal', logo: '/images/clients/Ajmal-.png' },
  { name: 'AlBalad Dev Company', logo: '/images/clients/AlBalad Dev Company-.png' },
  { name: 'AlSalamah Hosp', logo: '/images/clients/AlSalamah Hosp-.png' },
  { name: 'Alwatan', logo: '/images/clients/Alwatan.png' },
  { name: 'Aviation Academy', logo: '/images/clients/Avaition Academy-.png' },
  { name: 'Cheil', logo: '/images/clients/Cheil-.webp' },
  { name: 'Communion', logo: '/images/clients/Communion-.png' },
  { name: 'Core', logo: '/images/clients/Core-.png' },
  { name: 'Damac', logo: '/images/clients/Damac-.png' },
  { name: 'Fakeeh Medical', logo: '/images/clients/Fakeeh Medical-.webp' },
  { name: 'flyadeal', logo: '/images/clients/flyadeal-.png' },
  { name: 'GACA', logo: '/images/clients/GACA-.png' },
  { name: 'Galderma', logo: '/images/clients/Galderma-.png' },
  { name: 'Gillette', logo: '/images/clients/Gillette-.png' },
  { name: 'jedco', logo: '/images/clients/jedco-.png' },
  { name: 'MG', logo: '/images/clients/MG-.png' },
  { name: 'Mobil1', logo: '/images/clients/Mobil1-.png' },
  { name: 'Nahdi', logo: '/images/clients/Nahdi.png' },
  { name: 'nice', logo: '/images/clients/nice-.png' },
  { name: 'Ogilvy', logo: '/images/clients/Ogilvy-.png' },
  { name: 'panda', logo: '/images/clients/panda-.png' },
  { name: 'Petro Rabigh', logo: '/images/clients/Petro Rabigh-.png' },
  { name: 'Philips', logo: '/images/clients/Philips-.png' },
  { name: 'PIF', logo: '/images/clients/PIF-.png' },
  { name: 'Rixos', logo: '/images/clients/Rixos-.png' },
  { name: 'sael', logo: '/images/clients/sael-.png' },
  { name: 'Samsung', logo: '/images/clients/Samsung-.png' },
  { name: 'SARED', logo: '/images/clients/SARED-.png' },
  { name: 'SASO', logo: '/images/clients/SASO-.png' },
  { name: 'Saudia Group', logo: '/images/clients/Saudia Group-.png' },
  { name: 'Saudia Technic', logo: '/images/clients/Saudia Technic-.png' },
  { name: 'savola', logo: '/images/clients/savola-.png' },
  { name: 'SGS', logo: '/images/clients/SGS-.png' },
  { name: 'SNB', logo: '/images/clients/SNB-.png' },
  { name: 'StarzPlay', logo: '/images/clients/StarzPlay-.png' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
        <div className="relative flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 sm:space-x-8 overflow-hidden w-full">
            {/* Animated infinite scroll */}
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              className="flex space-x-6 sm:space-x-8 min-w-max"
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
