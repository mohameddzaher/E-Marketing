"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiSmartphone,
  FiImage,
  FiFilm,
  FiCalendar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import Link from "next/link";

const serviceDetails: any = {
  "digital-marketing": {
    icon: FiSmartphone,
    title: "Digital Marketing",
    description:
      "Comprehensive digital strategies including SEO, SEM, social media, and content marketing",
    features: [
      "Social Media Management",
      "Content Strategy",
      "Analytics & Reporting",
    ],
    fullDescription:
      "Our digital marketing services help businesses establish a strong online presence and drive measurable results. We combine data-driven strategies with creative execution to maximize your ROI across all digital channels.",
  },
  "brand-design": {
    icon: FiImage,
    title: "Brand Design",
    description:
      "Creative brand identity design including logos, guidelines, and visual systems",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
    fullDescription:
      "We create compelling brand identities that resonate with your target audience. Our design team develops comprehensive visual systems that communicate your brand's values and differentiate you from competitors.",
  },
  "video-production": {
    icon: FiFilm,
    title: "Video Production",
    description:
      "Professional video content creation for marketing campaigns and brand storytelling",
    features: ["Commercial Ads", "Corporate Videos", "Social Media Content"],
    fullDescription:
      "From concept to final cut, we produce high-quality video content that tells your brand's story. Our videos are optimized for various platforms and designed to engage and convert your audience.",
  },
  "event-management": {
    icon: FiCalendar,
    title: "Event Management",
    description:
      "Full-scale event planning and execution for launches, conferences, and exhibitions",
    features: ["Event Planning", "Venue Management", "Media Coordination"],
    fullDescription:
      "We handle every aspect of your event, from initial planning to post-event follow-up. Our team ensures seamless execution and creates memorable experiences that leave lasting impressions.",
  },
  "market-research": {
    icon: FiTrendingUp,
    title: "Market Research",
    description:
      "In-depth market analysis and consumer insights to drive strategic decisions",
    features: ["Competitor Analysis", "Consumer Insights", "Market Trends"],
    fullDescription:
      "Our market research services provide actionable insights that inform your business strategy. We analyze market trends, consumer behavior, and competitive landscapes to help you make data-driven decisions.",
  },
  "campaign-strategy": {
    icon: FiZap,
    title: "Campaign Strategy",
    description:
      "Strategic campaign planning and execution across all marketing channels",
    features: ["Campaign Planning", "Execution", "Performance Tracking"],
    fullDescription:
      "We develop integrated marketing campaigns that align with your business objectives. Our strategic approach ensures consistent messaging across all touchpoints and maximizes campaign effectiveness.",
  },
};

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const service = serviceDetails[params.id];
  const Icon = service?.icon || FiSmartphone;

  if (!service) {
    return (
      <main>
        <Header />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/ab/65/2c/ab652cf8128bcf33a4f077b167a214cc.jpg"
            alt="Service background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4 sm:mb-6 group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
              {service.title}
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
              About This Service
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 mb-4">
              Key Features
            </h3>
            <div className="space-y-3">
              {service.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
