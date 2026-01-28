"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Values from "@/components/Values";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTrendingUp, FiZap } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
              About <span className="text-gradient">Us</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Learn about Energize - your partner in creative marketing
              solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Separator Section - Creative Design */}
      <section className="relative py-10 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Lines */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-center"
          >
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Our <span className="text-gradient">Commitment</span>
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Delivering excellence in every project, every time
            </p>
          </motion.div>
        </div>
      </section>
      <About />

      <Values />

      {/* Mission & Vision Section */}
      <section className="relative py-10 sm:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1682687221080-5cb261c645cb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mission vision background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To empower businesses with innovative marketing solutions that
                drive growth and create lasting impact in the Middle East and
                beyond.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To be the leading marketing agency in the region, recognized for
                creativity, excellence, and transformative business results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Stats - Light & Simple */}
      <section className="py-10 sm:py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-2">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              A dedicated team of experts working together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: FiUsers, label: "Expert Team", value: "50+" },
              { icon: FiAward, label: "Years Experience", value: "10+" },
              { icon: FiTrendingUp, label: "Projects Delivered", value: "500+" },
              { icon: FiZap, label: "Client Satisfaction", value: "98%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-4 sm:p-5 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-xs">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
              Awards & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              Recognized for excellence in marketing and brand activation
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              "Best Marketing Agency 2023",
              "Excellence in Brand Activation",
              "Top Digital Campaign",
              "Client Choice Award",
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200"
              >
                <p className="text-gray-900 text-xs sm:text-sm font-semibold">
                  {award}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
