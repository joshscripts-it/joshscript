"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "XenYou",
      description:
        "An AI-powered platform that revolutionizes student housing by seamlessly connecting students with trusted landlords. Find your perfect match in seconds.",
      tags: [
        "Next.js",
        "React",
        "Javascript",
        "TypeScript",
        "Chakra UI",
        "Python",
        "Postgres",
        "FastAPI",
      ],
      image: "/images/xenyou.png",
      github: "https://github.com/joshscripts-it/xenyou",
      link: "https://xenyou.vercel.app/",
    },
    {
      id: 1,
      title: "SaaS Analytics Dashboard",
      description:
        "Real-time analytics dashboard for tracking application metrics and user behavior.",
      tags: [
        "React",
        "Javascript",
        "TypeScript",
        "Chakra UI",
        "High-charts",
        "Vite.js",
      ],
      image: "/images/dashboard.png",
      github: "https://github.com/joshscripts-it/LYT_dash",
      link: "https://lyt-dashboard-two.vercel.app",
    },
    {
      id: 2,
      title: "Mobile Fitness App",
      description:
        "Cross-platform fitness tracking app with workout planning and progress analytics.",
      tags: ["React Native", "React", "TypeScript", "Expo", "Redux"],
      image: "/images/fitgo.png",
      github: "https://github.com/joshscripts-it/fitgo",
      link: "https://www.upwork.com/freelancers/~01e654819a1555e31b?p=1822239975209050112",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce platform with payment integration and inventory management.",
      tags: ["Next.js", "Stripe", "React", "Tailwind", "Shad-cn"],
      image: "/images/ecommerce.png",
      github: "https://github.com/joshscripts-it/Xclusive-cart",
      link: "https://www.upwork.com/freelancers/~01e654819a1555e31b?p=1699531368420610048",
    },
    {
      id: 4,
      title: "User Onboarding",
      description:
        "Intuitive, responsive and modern customer onboarding section for Tublian.com",
      tags: [
        "React",
        "Node.js",
        "Express.js",
        "Chakra UI",
        "MongoDB",
        "Stripe",
        "Auth",
        "Vite.js",
      ],
      image: "/images/onboarding.png",
      github: "https://github.com/joshscripts-it/tublian-challenge",
      link: "https://tublian-challenge-vert.vercel.app/",
    },
    {
      id: 5,
      title: "Modern Wallet Design",
      description:
        "Modern Crypto Wallet to Seamlessly and Efficiently Store and Manage crypto-currencies with user-friendly interface.",
      tags: ["React Native", "React", "Typescript", "Javascript", "Charts"],
      image: "/images/wallet.png",
      github: "https://github.com/joshscripts-it/krypto-b",
      link: "https://www.upwork.com/freelancers/~01e654819a1555e31b?p=1705461284832276480",
    },
    {
      id: 6,
      title: "Rare Eat",
      description:
        "Modern Food ordering app. Manage order, make payment and more...",
      tags: ["React-native", "Expo", "TypeScript", "React"],
      image: "/images/rare-eat.png",
      github: "https://github.com/joshscripts-it/tobams-test",
      link: "https://www.upwork.com/freelancers/~01e654819a1555e31b?p=1750908550083485696",
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
                {typeof project.image === "string" &&
                project.image.startsWith("http") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <Image
                    src={
                      typeof project.image === "string"
                        ? project.image
                        : String(project.image)
                    }
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
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
            href="https://github.com/joshscripts-it"
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
