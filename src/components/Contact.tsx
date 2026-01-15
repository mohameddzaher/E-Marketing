"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "info@energize-sa.com",
      href: "mailto:info@energize-sa.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "0126825858",
      href: "tel:+966123456789",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Raihanat Al Jazirah, Al Faisaliyyah, Jeddah 23442",
      href: "https://maps.app.goo.gl/FVqNdPH9hCvacvtm6",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-10 sm:py-12 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-primary font-semibold text-xs">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
            Let&apos;s Work
            <br />
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
            Have a project in mind? Contact us today and let&apos;s discuss how
            we can help elevate your brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Information Cards - Left Side */}
          <div className="lg:col-span-1 space-y-4 flex flex-col">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5 }}
                  className="block p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all group flex-1"
                >
                  <div className="flex items-center space-x-4 h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <h3 className="text-sm font-bold text-gray-900 mb-1">
                        {info.label}
                      </h3>
                      <p className="text-gray-600 text-sm hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg flex flex-col"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 flex flex-col flex-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-900 font-semibold text-sm mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <label className="block text-gray-900 font-semibold text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-1 w-full px-3 py-2.5 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none min-h-[120px]"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl mt-auto"
              >
                <span>Send Message</span>
                <FiSend className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
