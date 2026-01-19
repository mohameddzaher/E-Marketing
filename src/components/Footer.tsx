"use client";

import { motion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaYoutube, FaSnapchat, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { FiCheck } from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: any) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };
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

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Merchandising", href: "/services#merchandising" },
        { label: "Brand Activation", href: "/services#brand-activation" },
        { label: "Event Management", href: "/services#event-management" },
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "for more", href: "/services", isHighlight: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
        { label: "Career", href: "/career" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/white-logo.png"
                alt="Energize Logo"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming brands and driving growth through innovative
              marketing solutions.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => {
                  const linkHref = typeof link === "string" ? "#" : (typeof link === "object" ? link.href : "#");
                  const linkLabel =
                    typeof link === "string" ? link : (typeof link === "object" ? link.label : "");
                  const isHighlight = typeof link === "object" && link.isHighlight;
                  return (
                    <li key={i}>
                      <a
                        href={linkHref}
                        className={`${isHighlight ? "text-primary font-semibold inline-flex items-center space-x-1 group" : "text-gray-400 hover:text-primary"} transition-colors text-sm`}
                      >
                        <span>{linkLabel}</span>
                        {isHighlight && (
                          <FiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter & Contact Info - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h4 className="text-white font-semibold text-sm mb-3">
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={subscribed}
                className="px-3 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-semibold transition-all disabled:opacity-50 flex items-center justify-center"
              >
                {subscribed ? <FiCheck className="w-4 h-4" /> : "→"}
              </motion.button>
            </form>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@energize-sa.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <FiMail className="w-4 h-4 group-hover:text-primary" />
                <span>info@energize-sa.com</span>
              </a>
              <a
                href="tel:0126825858"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors text-sm group"
              >
                <FiPhone className="w-4 h-4 group-hover:text-primary" />
                <span>0126825858</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <FiMapPin className="w-4 h-4" />
                <span>Jeddah, Saudi Arabia</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2024 Energize Your Business. All rights reserved.
          </p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
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
                  whileHover={{ scale: 1.2, color: "#DC2626" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-white hover:bg-primary/20 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center shadow-lg transition-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
