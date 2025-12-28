"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SaaS Analytics Dashboard",
      description:
        "Real-time analytics dashboard for tracking application metrics and user behavior.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking app with workout planning and progress analytics.",
      tags: ["React Native", "TypeScript", "Firebase", "Redux"],
      image:
        "https://images.unsplash.com/photo-1512941691920-25bda61d09b0?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with payment integration and inventory management.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "React", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4e565db1d?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 4,
      title: "Task Management Tool",
      description:
        "Collaborative task management app with real-time updates and team features.",
      tags: ["React", "Node.js", "WebSocket", "MongoDB", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 5,
      title: "AI Content Generator",
      description:
        "Smart content generation tool powered by OpenAI with user-friendly interface.",
      tags: ["Next.js", "OpenAI API", "React", "Tailwind CSS", "NextAuth"],
      image:
        "https://images.unsplash.com/photo-1677442d019cecf8313412f1b791b95b82ef07d8?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Showcase",
      description:
        "Modern portfolio website built with Next.js showcasing creative projects.",
      tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      github: "#",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in fullstack
            development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Interested in seeing more?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          >
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
