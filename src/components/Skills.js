import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiFigma, SiDocker, SiAmazonaws, SiNextdotjs, SiDjango } from 'react-icons/si';

const skillCategories = [
  { id: 'all', name: 'All Skills' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'devops', name: 'DevOps & Tools' },
];

const skillsData = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    icon: <FaReact className="text-5xl text-cyan-400" />,
    category: 'frontend',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    icon: <SiNextdotjs className="text-5xl text-white" />,
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <SiTypescript className="text-5xl text-blue-600" />,
    category: 'frontend',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-5xl text-cyan-500" />,
    category: 'frontend',
  },
  {
    id: 'html',
    name: 'HTML5',
    icon: <FaHtml5 className="text-5xl text-orange-500" />,
    category: 'frontend',
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: <FaCss3Alt className="text-5xl text-blue-500" />,
    category: 'frontend',
  },

  // Backend
  {
    id: 'node',
    name: 'Node.js',
    icon: <FaNodeJs className="text-5xl text-green-500" />,
    category: 'backend',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    icon: <FaLaravel className="text-5xl text-red-500" />,
    category: 'backend',
  },
  {
    id: 'django',
    name: 'Django',
    icon: <SiDjango className="text-5xl text-[#44B78B]" />,
    category: 'backend',
  },
  {
    id: 'python',
    name: 'Python',
    icon: <FaPython className="text-5xl text-blue-400" />,
    category: 'backend',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: <FaPhp className="text-5xl text-blue-300" />,
    category: 'backend',
  },

  // Database
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <SiMysql className="text-5xl text-blue-400" />,
    category: 'database',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: <SiMongodb className="text-5xl text-green-500" />,
    category: 'database',
  },

  // DevOps & Tools
  {
    id: 'docker',
    name: 'Docker',
    icon: <SiDocker className="text-5xl text-blue-400" />,
    category: 'devops',
  },
  {
    id: 'git',
    name: 'Git',
    icon: <FaGitAlt className="text-5xl text-orange-500" />,
    category: 'devops',
  },
  {
    id: 'aws',
    name: 'AWS',
    icon: <SiAmazonaws className="text-5xl text-yellow-400" />,
    category: 'devops',
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: <SiFigma className="text-5xl text-purple-400" />,
    category: 'devops',
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => {
        if (activeCategory === 'devops' && (skill.category === 'devops' || skill.category === 'tools')) return true;
        return skill.category === activeCategory;
      });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0a192f] to-[#0d2544] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">My technical expertise</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm'
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/30 transition-all duration-300 group hover:bg-gray-800/60"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
