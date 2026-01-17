'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/servicesData";

export default function ServicePage({ params }: { params: { id: string } }) {
  const { id } = params;
  const service = servicesData.find(s => s.id === id);

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/82/c6/54/82c6546f920209c80e89182a6e1350e9.jpg"
            alt="Service background"
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
            {service ? (
              <>
                <p className="text-primary font-semibold text-xs mb-2">OUR SERVICES</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
                  {service.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                  {service.shortDescription}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
                  Service <span className="text-gradient">Details</span>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                  View detailed information about our services
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <ServiceDetail serviceId={id} />
      <Footer />
    </main>
  );
}
