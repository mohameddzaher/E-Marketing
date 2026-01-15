'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectDetail from "@/components/ProjectDetail";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/projectsData";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projectsData.find(p => p.id === parseInt(id));

  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-10 sm:pb-12 overflow-hidden">
        {/* Image Background */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/9e/1c/8e/9e1c8ef64ef1cc7668962ccea2899116.jpg"
            alt="Project background"
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
            {project ? (
              <>
                <p className="text-primary font-semibold text-xs mb-2">{project.category}</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
                  {project.title}
                </h1>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                  {project.description}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white mb-2 sm:mb-3">
                  Project <span className="text-gradient">Details</span>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                  View detailed information about our projects
                </p>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <ProjectDetail projectId={id} />
      <Footer />
    </main>
  );
}
