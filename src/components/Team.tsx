'use client';

import { motion } from "framer-motion";
import { FiUser, FiBriefcase, FiCode, FiPenTool } from "react-icons/fi";

const team = [
  {
    name: "Ahmed Mansour",
    role: "Creative Director",
    icon: FiBriefcase,
    bio: "10+ years of creative excellence",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Strategy Lead",
    icon: FiUser,
    bio: "Expert in brand positioning",
  },
  {
    name: "Mohammed Saud",
    role: "Digital Innovator",
    icon: FiCode,
    bio: "Tech-savvy marketing solutions",
  },
  {
    name: "Layla Al-Otaibi",
    role: "Creative Designer",
    icon: FiPenTool,
    bio: "Design thinking visionary",
  },
];

export default function Team() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-gray-900 mb-2 sm:mb-3">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8 }}
              className="text-center p-4 sm:p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-3">
                <member.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-semibold text-xs mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-xs mb-3">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
