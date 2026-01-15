'use client';

import { motion } from "framer-motion";
import { FiTarget, FiZap, FiUsers, FiTrendingUp } from "react-icons/fi";

const values = [
  {
    title: "Innovation",
    description: "We stay ahead of trends and constantly innovate to deliver cutting-edge solutions",
    icon: FiZap,
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from strategy to execution",
    icon: FiTarget,
  },
  {
    title: "Collaboration",
    description: "We believe in strong partnerships, working closely with clients every step of the way",
    icon: FiUsers,
  },
  {
    title: "Growth",
    description: "We focus on sustainable growth and long-term success for all our partners",
    icon: FiTrendingUp,
  },
];

export default function Values() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-gray-900 mb-2 sm:mb-3">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <Icon className="text-xl sm:text-2xl text-primary mb-3" />
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
