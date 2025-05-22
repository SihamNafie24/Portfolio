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
          <span className="text-cyan-300 text-lg sm:text-xl font-medium">Hi, my name is</span>
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mt-2 mb-2 tracking-tight relative z-10">
              SIHAM NAFIE
            </h1>
            <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-transparent rounded-full blur-2xl z-0 animate-pulse"></span>
          </div>
          <TypeAnimation
            sequence={[
              "I'm a Full Stack Developer.",
              2000,
              
            ]}
            wrapper="h2"
            speed={50}
            className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6 animate-pulse"
            repeat={Infinity}
          />
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 drop-shadow-lg">
            I'm a passionate full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications that solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-cyan-400 hover:to-blue-600 hover:shadow-cyan-400/40 transition-all duration-200 border-2 border-transparent group focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
              View Work
              <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/SihamNafie24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 p-3 rounded-full hover:text-cyan-400 text-2xl transition-colors duration-200 shadow-lg"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/siham-nafie"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 p-3 rounded-full hover:text-cyan-400 text-2xl transition-colors duration-200 shadow-lg"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 