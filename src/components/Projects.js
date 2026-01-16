import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Novi - AI Learning Platform',
    description: 'A full-stack EdTech application that transforms static PDF documents into interactive lessons using AI. Features secure JWT authentication, real-time quiz generation, and a seamless responsive UI.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/SihamNafie24/ai-learning-platform',
    live: '',
    tech: ['React', 'TypeScript', 'Django', 'Python', 'OpenAI API'],
  },
  {
    title: 'GetHome Store',
    description: 'A modern e-commerce platform offering a seamless shopping experience. Includes advanced product filtering, dynamic cart management, real-time search, and a mobile-first design.',
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/SihamNafie24/GetHome',
    live: '',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Context API'],
  },
  {
    title: 'WATSON Professional',
    description: 'A digital showcase for a premier Moroccan food service brand. Built to highlight commercial and domestic kitchen equipment with a focus on brand identity and responsive performance.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/SihamNafie24/watson-website.git',
    live: '',
    tech: ['React', 'Styled-Components', 'Tailwind CSS'],
  },
  {
    title: 'MediConnect Health',
    description: 'A streamlined healthcare management application designed to simplify doctor-patient interactions. Features a secure appointment booking system, dynamic schedule management for doctors, and a robust database for medical records.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/SihamNafie24/MediConnect-main-1-.git',
    live: '',
    tech: ['Laravel', 'PHP 8.2', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'GetJobs',
    description: 'A full-stack job board application allowing companies to post jobs and candidates to apply. Features include user authentication, profile management, and application tracking.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    link: '#',
    live: '',
    tech: ['React', 'Laravel', 'MySQL', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'SHMSTORE',
    description: 'SHMSTORE is a modern e-commerce web application focused on tech and gaming products. Built with React, Vite, and Tailwind CSS, it offers a sleek, responsive, and user-friendly experience for both customers and sellers.',
    image: 'https://www.ncsc.gov.uk/images/library/iStock-1334436084.jpg',
    link: 'https://github.com/SihamNafie24/SHMSTORE.git',
    live: '',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Axios', 'Node.js', 'REST API'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2544] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240] rounded-2xl shadow-xl overflow-hidden flex flex-col h-full group border border-cyan-900/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 bg-[#0a192f] p-3 rounded-full hover:bg-cyan-500 hover:text-white transition" title="GitHub">
                    <FaGithub size={22} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-300 bg-[#0a192f] p-3 rounded-full hover:bg-cyan-500 hover:text-white transition" title="Live Demo">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 