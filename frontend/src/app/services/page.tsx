"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ServiceShowcase from "@/components/ServiceShowcase";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/82/c6/54/82c6546f920209c80e89182a6e1350e9.jpg"
            alt="Services background"
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
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold font-display text-white mb-2 sm:mb-3">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our comprehensive marketing and branding services
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* Stats Section */}
      <section className="relative py-10 sm:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/9c/a6/0d/9ca60da5a3a315ade76ed81d3ada2574.jpg"
            alt="Stats background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "200+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceShowcase />

      {/* Process Section */}
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
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your needs",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Crafting the perfect plan",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Bringing ideas to life",
              },
              {
                step: "04",
                title: "Optimization",
                desc: "Continuous improvement",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
