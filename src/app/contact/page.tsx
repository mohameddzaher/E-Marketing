"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaSnapchat, FaWhatsapp, FaTiktok } from "react-icons/fa";

const socialLinks = [
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/company/energize-your-business",
    label: "LinkedIn",
  },
  {
    icon: FiInstagram,
    href: "https://www.instagram.com/energizebusksa/",
    label: "Instagram",
  },
  {
    icon: FaSnapchat,
    href: "https://www.snapchat.com/@energizebusksa",
    label: "Snapchat",
  },
  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@energizebusksa",
    label: "TikTok",
  },
  {
    icon: FiFacebook,
    href: "https://www.facebook.com/EnergizeBusKSA",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@EnergizeBusKSA",
    label: "YouTube",
  },
  {
    icon: FaWhatsapp,
    href: "https://tr.ee/Z6xrJKnbrl",
    label: "WhatsApp",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629757509637-7c99379d6d26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact background"
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
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Ready to elevate your brand? Let&apos;s talk about how we can help
              your business grow
            </p>
          </motion.div>
        </div>
      </section>

      <Contact />

      {/* Social Media Section */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
              Follow Us On <span className="text-gradient">Social Media</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Stay connected with us on our social media platforms
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto px-8 sm:px-12 py-6 sm:py-8 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 hover:border-primary flex items-center justify-center text-gray-700 hover:text-primary transition-all shadow-sm hover:shadow-md"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Working Hours & Location Section */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  Working Hours
                </h3>
              </div>
              <p className="text-gray-600 text-xs">
                Sun - Thu: 9:00 AM - 6:00 PM
              </p>
            </motion.div>

            {/* Our Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg bg-gray-50 border border-gray-200 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  Our Location
                </h3>
              </div>
              <p className="text-gray-600 text-xs">
                Raihanat Al Jazirah, Al Faisaliyyah, Jeddah 23442
              </p>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-200 border border-gray-300">
              <iframe
                src="https://www.google.com/maps?q=Energize+Your+Business,+Raihanat+Al+Jazirah,+Al+Faisaliyyah,+Jeddah+23442&output=embed"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Energize Your Business - Office Location"
              ></iframe>
            </div>
            <div className="text-center">
              <a
                href="https://maps.app.goo.gl/dCjJ52mncRA9pWq7A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark text-sm font-semibold transition-colors"
              >
                <span>View on Google Maps</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
