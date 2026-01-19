'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { servicesData } from "@/lib/servicesData";

interface ServiceDetailProps {
  serviceId: string;
}

// Service images mapping
const serviceImages: { [key: string]: string[] } = {
  'merchandising': [
    'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=600&h=400&fit=crop',
  ],
  'field-promotion': [
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
  ],
  'product-sampling': [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
  ],
  'distribution': [
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    'https://plus.unsplash.com/premium_photo-1661302828763-4ec9b91d9ce3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  'brand-activation': [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop',
  ],
  'mystery-shopper': [
    'https://images.unsplash.com/photo-1556742208-999815fca738?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556740772-1a741367b93e?w=600&h=400&fit=crop',
  ],
  'reporting-system': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
  ],
  'research-surveys': [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=600&h=400&fit=crop',
  ],
  'video-production': [
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop',
  ],
  'branding': [
    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
  ],
  'digital-marketing': [
    'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop',
  ],
  'creative-campaigns': [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
  ],
  'media-production': [
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
  ],
  'photography': [
    'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&h=400&fit=crop',
  ],
  'video-shooting': [
    'https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1579566346927-c68383817a25?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=600&h=400&fit=crop',
  ],
  'technical-services': [
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop',
  ],
};

// Default images if service doesn't have specific ones
const defaultImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
];

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const service = servicesData.find(s => s.id === serviceId);
  const images = serviceImages[serviceId] || defaultImages;

  if (!service) {
    return (
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-4">Service not found</p>
          <Link href="/services" className="text-primary hover:underline">
            Back to Services
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Back Button & Overview */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-6 sm:mb-8 group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Services</span>
          </Link>

          {/* Service Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 sm:mb-14 p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>

          {/* Service Images Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 sm:mb-14"
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${service.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <FiCheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/30 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
              Interested in this service?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Contact us today to discuss how our services can help your business grow and achieve its goals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
              Other Services You May Like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {servicesData
                .filter(s => s.id !== serviceId)
                .slice(0, 3)
                .map((relatedService, index) => (
                  <Link key={relatedService.id} href={`/services/${relatedService.id}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="p-5 sm:p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer h-full"
                    >
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {relatedService.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {relatedService.shortDescription}
                      </p>
                      <div className="flex items-center space-x-2 text-primary font-semibold text-xs group-hover:translate-x-1 transition-transform">
                        <span>View Details</span>
                        <FiArrowRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
