import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#0d2544] relative overflow-hidden">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-8 py-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <div className="mb-4">
            <span className="text-cyan-400 text-lg sm:text-xl font-medium tracking-wide">Hi, my name is</span>
          </div>
          <div className="relative inline-block mb-4">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight relative z-10">
              SIHAM NAFIE
            </h1>
            <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-cyan-400/20 via-blue-400/10 to-transparent rounded-full blur-2xl z-0"></span>
          </div>

          <div className="mb-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-200">
              I'm a Full Stack Developer.
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            I'm a passionate full-stack developer (React, Node.js, Laravel) specializing in building exceptional digital experiences. Currently, I'm focused on building responsive, high-performance web applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 text-lg font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-200 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a192f]"
            >
              View Work
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/SihamNafie24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-200 p-2"
              >
                <FaGithub size={28} />
              </motion.a>
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/siham-nafie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-200 p-2"
              >
                <FaLinkedin size={28} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 