'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projectsData } from "@/lib/projectsData";

const projects = projectsData.map(project => ({
  ...project,
  stats: project.fullStats || project.stats,
}));

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/eb/c0/22/ebc0229e85bbb02ebf6303531ae7d68d.jpg"
            alt="Projects background"
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
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Explore our successful campaigns and initiatives that drive real results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-10 sm:py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
              Why Choose <span className="text-gradient">Energize</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              We combine creativity with strategy to deliver exceptional results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Innovation', desc: 'Cutting-edge strategies' },
              { title: 'Excellence', desc: 'Uncompromising quality' },
              { title: 'Results', desc: 'Measurable outcomes' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-gray-200 mb-3 cursor-pointer">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <FiArrowRight className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-white text-sm font-semibold">View Details</p>
                    </div>
                  </motion.div>
                </div>

                <div>
                  <p className="text-primary font-semibold text-xs mb-1">{project.category}</p>
                  <h3 className="text-base sm:text-lg font-bold font-display text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3">{project.description}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-primary font-bold text-sm">{value}</p>
                        <p className="text-gray-600 text-xs">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
