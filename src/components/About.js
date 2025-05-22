import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaUsers, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      title: "GetJobs - Full-Stack Web App",
      company: "Projet de fin d'études",
      period: "2023 - 2024",
      description: "Application web full stack permettant aux entreprises de publier des offres d'emploi et aux utilisateurs de postuler facilement.",
      highlights: [
        "Développement frontend avec React",
        "Backend avec Laravel",
        "Bases de données MySQL et MongoDB",
        "Interface utilisateur intuitive et responsive"
      ]
    },
    {
      title: "Application de Recherche de Voyages",
      company: "Projet Personnel",
      period: "2023",
      description: "Application web de recherche des voyages en autobus et gestion des abonnements.",
      highlights: [
        "Développement avec Laravel",
        "Interface utilisateur avec JQuery et Bootstrap",
        "Système de recherche et filtrage",
        "Gestion des réservations et abonnements"
      ]
    },
    {
      title: "Système de Gestion Bancaire",
      company: "Projet Académique",
      period: "2023",
      description: "Système de gestion des transactions bancaires avec interface moderne.",
      highlights: [
        "Développement backend avec Java/JEE",
        "Interface utilisateur React",
        "Intégration JQuery et Bootstrap",
        "Gestion sécurisée des transactions"
      ]
    },
    {
      title: "Développement Web",
      company: "Projets Divers",
      period: "2022 - 2023",
      description: "Programmation de sites web dynamiques avec diverses technologies.",
      highlights: [
        "Développement full-stack avec HTML, CSS, PHP",
        "Bases de données MySQL",
        "JavaScript et Python",
        "Intégration Bootstrap pour le design responsive"
      ]
    },
    {
      title: "Plateforme Web Multimédia",
      company: "Projet Personnel",
      period: "2022",
      description: "Création d'une plateforme web de contenu multimédia dynamique.",
      highlights: [
        "Backend avec Java Spring Boot",
        "Intégration de l'API Pixabay",
        "Interface utilisateur moderne",
        "Gestion de contenu multimédia"
      ]
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-8">
            {/* Enhanced Horizontal Intro Paragraph */}
            <div className="flex-1 text-left">
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a passionate full-stack developer with a strong foundation in web development and a keen eye for creating elegant, user-friendly applications. My journey in tech has been driven by a constant desire to learn and innovate.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  I'm always excited to take on new challenges, collaborate with others, and contribute to projects that make a real impact. <span className="text-cyan-400 font-bold">Let's build something amazing together!</span>
                </p>
                <div className="flex justify-start">
                  <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">Contact Me</a>
                </div>
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
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="px-3 py-1 bg-gray-700 text-cyan-300 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <FaArrowRight className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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