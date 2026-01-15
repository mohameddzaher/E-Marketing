'use client';

import { motion } from "framer-motion";
import { FiArrowRight, FiSmartphone, FiImage, FiFilm, FiCalendar, FiTrendingUp, FiZap } from "react-icons/fi";
import Link from "next/link";

const serviceDetails = [
  {
    id: "digital-marketing",
    icon: FiSmartphone,
    title: "Digital Marketing",
    description: "Comprehensive digital strategies including SEO, SEM, social media, and content marketing",
    features: ["Social Media Management", "Content Strategy", "Analytics & Reporting"],
  },
  {
    id: "brand-design",
    icon: FiImage,
    title: "Brand Design",
    description: "Creative brand identity design including logos, guidelines, and visual systems",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
  {
    id: "video-production",
    icon: FiFilm,
    title: "Video Production",
    description: "Professional video content creation for marketing campaigns and brand storytelling",
    features: ["Commercial Ads", "Corporate Videos", "Social Media Content"],
  },
  {
    id: "event-management",
    icon: FiCalendar,
    title: "Event Management",
    description: "Full-scale event planning and execution for launches, conferences, and exhibitions",
    features: ["Event Planning", "Venue Management", "Media Coordination"],
  },
  {
    id: "market-research",
    icon: FiTrendingUp,
    title: "Market Research",
    description: "In-depth market analysis and consumer insights to drive strategic decisions",
    features: ["Competitor Analysis", "Consumer Insights", "Market Trends"],
  },
  {
    id: "campaign-strategy",
    icon: FiZap,
    title: "Campaign Strategy",
    description: "Strategic campaign planning and execution across all marketing channels",
    features: ["Campaign Planning", "Execution", "Performance Tracking"],
  },
];

export default function ServiceShowcase() {
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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold font-display text-gray-900 mb-2 sm:mb-3">
            Our Services In Detail
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Complete marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {serviceDetails.map((service, index) => (
            <Link key={index} href={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ translateY: -8 }}
                className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-2 group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs mb-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-3 space-y-1">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-gray-600 text-xs flex items-center">
                      <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-xs font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More <FiArrowRight className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
