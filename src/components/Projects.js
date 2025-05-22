import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'MediConnect',
    description: 'MediConnect is a user-friendly web platform that simplifies communication between patients and doctors. It allows patients to book appointments and manage their health info, while doctors can organize their schedules and follow up with patients easily. The app aims to make healthcare more accessible and efficient for everyone.',
    image: 'https://badgut.org/wp-content/uploads/Image-Content-what-doctors-want.png',
    link: 'https://github.com/SihamNafie24/MediConnect-main-1-.git',
    live: '',
    tech: ['Laravel', 'PHP', 'Blade', 'JavaScript', 'CSS', 'SCSS'],
  },
  {
    title: 'Login Dashboard',
    description: `login_Dash is a Laravel-based authentication system featuring a modern login interface and a user-friendly dashboard. It's designed to help developers kickstart web applications with secure login mechanisms and elegant Blade templates.`,
    image: 'https://t4.ftcdn.net/jpg/02/70/23/67/360_F_270236770_C2sB7zP7AJx0ivHr5KUl2a46yMkqTTAW.jpg',
    link: 'https://github.com/SihamNafie24/login_Dash.git',
    live: '',
    tech: ['Laravel Framework', 'Blade Templating', 'PHP', 'Vue.js'],
  },
  {
    title: 'Watson Website',
    description: `WATSON is a Made in Morocco food service brand, created in 2020 by the MTC design office.`,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    link: 'https://github.com/SihamNafie24/watson-website.git',
    live: '',
    tech: ['React', 'Tailwind CSS', 'styled-components', 'react-router-dom', 'axios'],
  },
  {
    title: 'Hotel Royal Park',
    description: `hotel-Rayal-Park is a modern, responsive, and visually stunning landing page for a luxury hotel. Built with HTML, CSS, and JavaScript, this project showcases elegant design, smooth user experience, and premium features for a high-end hospitality brand.`,
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/163516837.jpg?k=dca29fce858176884185456c4edbca347de13f1f7d6ba3282969311825b1d157&o=&hp=1',
    link: 'https://github.com/SihamNafie24/hotel-Rayal-Park.git',
    live: '',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'E-commerce Website',
    description: `A modern, responsive e-commerce website built with React, featuring a beautiful UI, secure checkout process, and user-friendly features.`,
    image: 'https://www.lopinion.ma/photo/art/grande/87622106-62135471.jpg?v=1743593195',
    link: 'https://github.com/SihamNafie24/E-commerce-Website.git',
    live: '',
    tech: ['React.js', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'React Icons', 'React Hot Toast'],
  },
  {
    title: 'SHMSTORE',
    description: `SHMSTORE is a modern e-commerce web application focused on tech and gaming products. Built with React, Vite, and Tailwind CSS, it offers a sleek, responsive, and user-friendly experience for both customers and sellers.`,
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
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-cyan-900 text-cyan-200 rounded-full">
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