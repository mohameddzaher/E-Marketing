'use client';

import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Marketing Word Display Component with Pins
type Pin = {
  label: string;
  x: number;
  lineDir: "up" | "down";
  lineLen: number;
};

const topPins: Pin[] = [
  { label: "ADVERTISING", x: 10, lineDir: "down", lineLen: 35 },  // short
  { label: "ENGAGEMENT", x: 35, lineDir: "down", lineLen: 60 },   // long
  { label: "INNOVATION", x: 60, lineDir: "down", lineLen: 35 },   // short
  { label: "NETWORKING", x: 85, lineDir: "down", lineLen: 60 },   // long
];

const bottomPins: Pin[] = [
  { label: "RESEARCH", x: 10, lineDir: "up", lineLen: 60 },    // long
  { label: "STRATEGY", x: 35, lineDir: "up", lineLen: 35 },    // short
  { label: "GROWTH", x: 60, lineDir: "up", lineLen: 60 },      // long
  { label: "TARGETING", x: 85, lineDir: "up", lineLen: 35 },   // short
];

function PinItem({ label, x, lineDir, lineLen, index }: Pin & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: lineDir === "down" ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      className="absolute flex flex-col items-center"
      style={{ left: `${x}%`, transform: 'translateX(-50%)' }}
    >
      {lineDir === "down" ? (
        <>
          {/* Label above */}
          <span className="whitespace-nowrap text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.15em] text-zinc-400/90 mb-1">
            {label}
          </span>
          {/* Dot */}
          <span className="block h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
          {/* Line down */}
          <span
            className="w-px bg-gradient-to-b from-primary/60 to-transparent"
            style={{ height: `${lineLen}px` }}
          />
        </>
      ) : (
        <>
          {/* Line up */}
          <span
            className="w-px bg-gradient-to-t from-primary/60 to-transparent"
            style={{ height: `${lineLen}px` }}
          />
          {/* Dot */}
          <span className="block h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(220,38,38,0.4)]" />
          {/* Label below */}
          <span className="whitespace-nowrap text-[7px] sm:text-[9px] md:text-[10px] tracking-[0.15em] text-zinc-400/90 mt-1">
            {label}
          </span>
        </>
      )}
    </motion.div>
  );
}

function MarketingWordDisplay() {
  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Top pins row */}
      <div className="relative h-[25%] w-full">
        {topPins.map((p, idx) => (
          <PinItem key={idx} {...p} index={idx} />
        ))}
      </div>

      {/* Center - MARKETING word */}
      <div className="relative h-[50%] w-full flex items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-extrabold tracking-[0.08em] text-zinc-200/95 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          MARKETING
        </motion.h2>
        {/* Subtle glow behind text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[60%] bg-primary/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Bottom pins row */}
      <div className="relative h-[25%] w-full flex items-end">
        {bottomPins.map((p, idx) => (
          <PinItem key={idx} {...p} index={idx + 4} />
        ))}
      </div>
    </div>
  );
}

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

          {/* Right Side - Marketing Word with Pins */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[300px] sm:h-[350px] lg:h-[400px]"
          >
            <MarketingWordDisplay />
          </motion.div>
        </div>

        {/* Scroll Indicator - Centered in full section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-19 left-1/2 transform -translate-x-1/2 flex justify-center"
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
