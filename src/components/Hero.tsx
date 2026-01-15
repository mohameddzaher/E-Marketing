'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A]">
        {/* Animated Blur Circles */}
        <motion.div
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '-10%',
          }}
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-red-600/5 rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '-10%',
          }}
          animate={{
            x: -mousePosition.x * 0.03,
            y: -mousePosition.y * 0.03,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 md:space-y-5 text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-semibold text-xs">Welcome to Energize</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight">
                Energize Your
                <br />
                <span className="text-gradient">Business Growth</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed"
            >
              Transform your brand with innovative marketing strategies, impactful events, and professional event management solutions that drive real results in the Middle East and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-2 pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm"
              >
                <span>Explore Services</span>
                <FiArrowRight className="w-3 h-3" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-semibold transition-all text-xs sm:text-sm"
              >
                Watch Demo
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Images - Vertical Stack with Circular Cut */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[300px] lg:h-[400px] flex items-center justify-center"
          >
            {/* Container for vertical stacked images */}
            <div className="relative w-full h-full flex flex-col items-center justify-center">
              {/* SVG Definitions for circular clips */}
              <svg className="absolute opacity-0 pointer-events-none" width="0" height="0">
                <defs>
                  <clipPath id="clipTopCircle" clipPathUnits="objectBoundingBox">
                    <rect x="0" y="0" width="1" height="0.85" />
                    <circle cx="0.15" cy="0.85" r="0.15" />
                  </clipPath>
                  <clipPath id="clipBottomCircle" clipPathUnits="objectBoundingBox">
                    <circle cx="0.15" cy="0.15" r="0.15" />
                    <rect x="0" y="0.15" width="1" height="0.85" />
                  </clipPath>
                </defs>
              </svg>

              {/* Image 1 - Top (cut from bottom with circular cut) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full h-[33.33%] rounded-t-lg overflow-visible"
                style={{ marginBottom: '-30px', zIndex: 1 }}
              >
                <div className="relative w-full h-full rounded-t-lg overflow-hidden shadow-lg">
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                    <defs>
                      <mask id="maskTop">
                        <rect x="0" y="0" width="100%" height="100%" fill="white" />
                        <circle cx="30" cy="100%" r="30" fill="black" />
                      </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="white" mask="url(#maskTop)" />
                  </svg>
                  <img
                    src="https://i.pinimg.com/1200x/eb/c0/22/ebc0229e85bbb02ebf6303531ae7d68d.jpg"
                    alt="Business growth"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 30px), 0% calc(100% - 30px), 0% 100%, 30px 100%, 30px calc(100% - 15px), 0% calc(100% - 15px))' }}
                  />
                </div>
                {/* Circular cut indicator */}
                <div className="absolute bottom-0 left-0 w-[30px] h-[30px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0A0A0A] border-2 border-primary z-10"></div>
              </motion.div>

              {/* Image 2 - Middle (no cut, full) */}
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative w-full h-[33.33%] overflow-visible z-20"
                style={{ marginTop: '-30px', marginBottom: '-30px' }}
              >
                <div className="relative w-full h-full overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circular cut indicators on both sides */}
                <div className="absolute top-0 left-0 w-[30px] h-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A0A0A] border-2 border-primary z-10"></div>
                <div className="absolute bottom-0 left-0 w-[30px] h-[30px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0A0A0A] border-2 border-primary z-10"></div>
              </motion.div>

              {/* Image 3 - Bottom (cut from top with circular cut) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative w-full h-[33.33%] rounded-b-lg overflow-visible"
                style={{ marginTop: '-30px', zIndex: 1 }}
              >
                <div className="relative w-full h-full rounded-b-lg overflow-hidden shadow-lg">
                  <img
                    src="https://i.pinimg.com/1200x/9e/1c/8e/9e1c8ef64ef1cc7668962ccea2899116.jpg"
                    alt="Marketing success"
                    className="w-full h-full object-cover"
                    style={{ clipPath: 'polygon(0% 30px, 30px 30px, 30px 15px, 0% 15px, 0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                  />
                </div>
                {/* Circular cut indicator */}
                <div className="absolute top-0 left-0 w-[30px] h-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0A0A0A] border-2 border-primary z-10"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered in full section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-primary opacity-10 text-6xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary opacity-10 text-6xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
      >
        ✦
      </motion.div>
    </section>
  );
}
