'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiArrowRight } from "react-icons/fi";

interface ProjectDetailProps {
  projectId: string;
}

const projectsData: any = {
  "1": {
    title: "Premium Brand Launch",
    category: "Brand Activation",
    client: "Luxury Goods Company",
    duration: "3 months",
    budget: "$150,000",
    description: "A comprehensive brand launch campaign that included market research, creative development, and multi-channel activation across the Saudi Arabian market.",
    challenges: [
      "Establishing brand presence in competitive market",
      "Reaching luxury segment audience",
      "Coordinating multiple stakeholders",
    ],
    solutions: [
      "Integrated marketing approach",
      "Premium event management",
      "Targeted digital strategy",
    ],
    images: [
      "https://i.pinimg.com/1200x/eb/c0/22/ebc0229e85bbb02ebf6303531ae7d68d.jpg",
      "https://i.pinimg.com/1200x/9e/1c/8e/9e1c8ef64ef1cc7668962ccea2899116.jpg",
      "https://i.pinimg.com/736x/25/8f/28/258f28a092a05e266a5cc301cb4fbfc3.jpg",
      "https://i.pinimg.com/736x/b0/41/ab/b041abab5f12ce21f693f0bf2e1f895b.jpg",
      "https://i.pinimg.com/1200x/ab/65/2c/ab652cf8128bcf33a4f077b167a214cc.jpg",
      "https://i.pinimg.com/1200x/d8/5d/5c/d85d5c5cd8081fb51a29d0ad6604764d.jpg"
    ],
    stats: {
      engagement: "+250%",
      reach: "50K+",
      revenue: "+$200K",
      satisfaction: "98%",
    },
  },
  "2": {
    title: "Event Management Success",
    category: "Events & Exhibitions",
    client: "Tech Innovations Group",
    duration: "2 months",
    budget: "$100,000",
    description: "End-to-end event management for a major tech conference including venue selection, logistics, speaker coordination, and media coverage.",
    challenges: [
      "Large-scale event coordination",
      "Budget constraints",
      "Last-minute changes",
    ],
    solutions: [
      "Experienced event team",
      "Flexible planning approach",
      "Real-time management system",
    ],
    images: [
      "https://i.pinimg.com/1200x/ab/65/2c/ab652cf8128bcf33a4f077b167a214cc.jpg",
      "https://i.pinimg.com/1200x/d8/5d/5c/d85d5c5cd8081fb51a29d0ad6604764d.jpg",
      "https://i.pinimg.com/1200x/82/c6/54/82c6546f920209c80e89182a6e1350e9.jpg",
      "https://i.pinimg.com/1200x/9c/a6/0d/9ca60da5a3a315ade76ed81d3ada2574.jpg",
      "https://i.pinimg.com/1200x/eb/c0/22/ebc0229e85bbb02ebf6303531ae7d68d.jpg",
      "https://i.pinimg.com/1200x/9e/1c/8e/9e1c8ef64ef1cc7668962ccea2899116.jpg"
    ],
    stats: {
      attendance: "5K+",
      engagement: "+180%",
      satisfaction: "98%",
      media: "500+ posts",
    },
  },
};

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const project = projectsData[projectId];

  if (!project) {
    return (
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">Project not found</p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Images Gallery */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-primary transition-colors mb-4 sm:mb-6 group"
          >
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-4 sm:mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative h-32 sm:h-40 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-gray-200 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={image} 
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 mb-3">
                Challenges
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge: string, index: number) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <FiCheck className="text-primary mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 mb-3">
                Solutions
              </h3>
              <ul className="space-y-2">
                {project.solutions.map((solution: string, index: number) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <FiArrowRight className="text-primary mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900 mb-6">
            Results & Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(project.stats).map(([key, value]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20"
              >
                <p className="text-primary font-bold text-base sm:text-lg">{value as string}</p>
                <p className="text-gray-600 text-xs capitalize">{key}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
