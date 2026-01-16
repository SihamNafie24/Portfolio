import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaUsers, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: "Full Stack Web Developer Intern",
      company: "HB DEVELOPMENT | Tétouan (Hybrid)",
      period: "Oct 2025 - Present",
      description: "Collaborating on the development of full-stack web solutions using modern frameworks. Contributing to frontend interface design and backend logic implementation.",
      tech: ["React", "Laravel", "Node.js", "MySQL"]
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed | Remote",
      period: "Nov 2024 - Sep 2025",
      description: "Delivered custom web applications for clients using Laravel and React.js. Developed responsive WordPress themes and plugins to meet specific client needs. Managed full project lifecycles from requirement gathering to deployment.",
      tech: ["Laravel", "React.js", "WordPress", "PHP"]
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Oubaba S.A.R.L. | El Jadida (Hybrid)",
      period: "Apr 2024 - May 2024",
      description: "Assisted in the maintenance and development of internal web tools. Gained hands-on experience in a professional agile environment.",
      tech: ["HTML/CSS", "PHP", "JavaScript", "MySQL"]
    }
  ];

  const education = [
    {
      degree: "Diplôme Développeur Web Full Stack",
      school: "OFPPT - Développement Digital",
      period: "2022 - 2024",
      location: "Settat, Maroc",
      description: "Formation intensive en développement web full stack, couvrant les technologies frontend et backend modernes.",
      achievements: [
        "Développement d'applications web complètes",
        "Maîtrise des frameworks modernes",
        "Projets pratiques en conditions réelles"
      ]
    },
    {
      degree: "Deux ans de spécialisation en biologie",
      school: "Université des sciences Shuaib Doukkali",
      period: "2020 - 2022",
      location: "El Jadida, Maroc",
      description: "Formation approfondie en sciences biologiques avec focus sur la recherche et l'analyse.",
      achievements: [
        "Études théoriques et pratiques en biologie",
        "Travaux de recherche en laboratoire",
        "Analyse de données scientifiques"
      ]
    },
    {
      degree: "Baccalauréat Science La vie et la Terre",
      school: "Lycée du 30 juillet",
      period: "2019 - 2020",
      location: "Sidi Bennour, Maroc",
      description: "Formation générale avec spécialisation en sciences de la vie et de la terre.",
      achievements: [
        "Diplôme obtenu avec mention",
        "Projets scientifiques",
        "Fondations en sciences naturelles"
      ]
    }
  ];

  const skills = [
    // Technical Skills data removed and will be moved to Skills.js
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2544] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">About Me</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 text-center">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                I am a Full Stack Developer specialized in building robust web applications using <span className="text-cyan-400 font-semibold">React.js, Node.js, and Laravel</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                With a background in Scientific Research, I bring an analytical approach to coding—treating every bug like a hypothesis to be tested and every project like a complex system to be optimized.
              </p>

              <div className="flex justify-center">
                <a
                  href="#projects"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gray-800 rounded-xl mr-4">
                <FaBriefcase className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                    <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
                      <span className="text-cyan-400 font-medium">{exp.company}</span>
                      <span className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Badge System */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold bg-cyan-900/50 text-cyan-200 border border-cyan-700/50 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gray-800 rounded-xl mr-4">
                <FaGraduationCap className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <p className="text-cyan-400 font-medium">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm">
                        {edu.period}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <FaArrowRight className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 