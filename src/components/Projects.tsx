"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Auto-slide every 3 seconds with animation
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) =>
        prev === projectsData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projectsData[(currentIndex + i) % projectsData.length]);
    }
    return visible;
  };

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-primary font-semibold text-xs">
              RECENT WORK
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold font-display text-gray-900 mb-3">
            Our Latest
            <br />
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Discover the successful campaigns and events we&apos;ve executed for
            leading brands.
          </p>
        </motion.div>

        {/* Projects Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {getVisibleProjects().map((project, index) => (
              <motion.div
                key={`${project.id}-${currentIndex}-${index}`}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </div>

                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]/80 flex flex-col items-center justify-center space-y-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white transition-all shadow-lg"
                    >
                      <FiArrowRight size={20} />
                    </motion.div>
                    <p className="text-white/90 text-xs font-medium">
                      View Project
                    </p>
                  </motion.div>
                </div>

                {/* Project Info */}
                <Link href={`/projects/${project.id}`}>
                  <div className="pt-4 cursor-pointer">
                    <p className="text-primary font-semibold text-xs mb-1.5">
                      {project.category}
                    </p>
                    <h3 className="text-sm sm:text-base font-bold font-display text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-primary font-bold text-sm sm:text-base">
                            {value}
                          </p>
                          <p className="text-gray-600 text-xs capitalize">
                            {key.replace(/([A-Z])/g, " $1")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col items-center gap-4 mt-8 sm:mt-12">
            <div className="flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full bg-white border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                <FiChevronLeft size={20} />
              </motion.button>

              {/* Indicators */}
              <div className="flex gap-2">
                {projectsData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-all shadow-lg"
              >
                <FiChevronRight size={20} />
              </motion.button>
            </div>

            {/* View All Projects Button */}
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl"
              >
                <span>View All Projects</span>
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
