import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython, FaPhp, FaLaravel, FaCloud } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiFirebase, SiPostgresql, SiFigma, SiAdobephotoshop, SiJira, SiDocker, SiAzure, SiGraphql, SiGithub, SiGitlab, SiBitbucket, SiAmazonaws, SiGooglecloud, SiGithubactions, SiJenkins, SiPrometheus, SiGrafana, SiElasticstack } from 'react-icons/si';

const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
  },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'database', name: 'Database' },
  { id: 'devops', name: 'DevOps' },
  { id: 'tools', name: 'Tools & Others' },
];

const skillsData = [
  {
    id: 'html',
    name: 'HTML5',
    icon: <FaHtml5 className="text-4xl text-orange-500" />,
    category: 'frontend',
    years: '4+ years',
    projects: 30,
    proficiency: 95,
    description: 'Semantic HTML, Accessibility, SEO best practices',
  },
  {
    id: 'css',
    name: 'CSS3',
    icon: <FaCss3Alt className="text-4xl text-blue-500" />,
    category: 'frontend',
    years: '4+ years',
    projects: 30,
    proficiency: 90,
    description: 'Responsive design, Animations, Flexbox/Grid',
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: <FaJs className="text-4xl text-yellow-400" />,
    category: 'frontend',
    years: '4+ years',
    projects: 25,
    proficiency: 90,
    description: 'ES6+, DOM manipulation, Async/Await',
  },
  {
    id: 'react',
    name: 'React',
    icon: <FaReact className="text-4xl text-cyan-400" />,
    category: 'frontend',
    years: '3+ years',
    projects: 20,
    proficiency: 90,
    description: 'Hooks, Context, Redux, Performance optimization',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: <SiTypescript className="text-4xl text-blue-600" />,
    category: 'frontend',
    years: '1+ years',
    projects: 10,
    proficiency: 70,
    description: 'Type safety, Interfaces, Generics',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-4xl text-cyan-500" />,
    category: 'frontend',
    years: '2+ years',
    projects: 4,
    proficiency: 60,
    description: 'Utility-first CSS, Custom configurations',
  },
  {
    id: 'node',
    name: 'Node.js',
    icon: <FaNodeJs className="text-4xl text-green-500" />,
    category: 'backend',
    years: '3+ years',
    projects: 9,
    proficiency: 85,
    description: 'Express.js, REST APIs, Authentication',
  },
  {
    id: 'python',
    name: 'Python',
    icon: <FaPython className="text-4xl text-blue-400" />,
    category: 'backend',
    years: '4+ years',
    projects: 15,
    proficiency: 80,
    description: 'Django, FastAPI, Data processing',
  },
  {
    id: 'php',
    name: 'PHP',
    icon: <FaPhp className="text-4xl text-blue-300" />,
    category: 'backend',
    years: '4+ years',
    projects: 15,
    proficiency: 75,
    description: 'Laravel, RESTful APIs, MVC pattern',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    icon: <FaLaravel className="text-4xl text-red-500" />,
    category: 'backend',
    years: '3+ years',
    projects: 18,
    proficiency: 80,
    description: 'Eloquent ORM, Blade templating, Authentication',
  },
  {
    id: 'microservices',
    name: 'Microservices',
    icon: <svg className="text-4xl text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    category: 'backend',
    years: '2+ years',
    projects: 7,
    proficiency: 70,
    description: 'Distributed systems, REST APIs, Docker, Spring Boot',
  },
  // Databases
  {
    id: 'sql',
    name: 'SQL',
    icon: <SiMysql className="text-4xl text-blue-400" />,
    category: 'database',
    years: '3+ years',
    projects: 12,
    proficiency: 85,
    description: <span className="flex items-center gap-2">MySQL <SiMysql className="inline text-lg text-blue-400" /> &nbsp; PostgreSQL <SiPostgresql className="inline text-lg text-blue-500" /></span>,
  },
  {
    id: 'nosql',
    name: 'NoSQL',
    icon: <SiMongodb className="text-4xl text-green-500" />,
    category: 'database',
    years: '2+ years',
    projects: 8,
    proficiency: 80,
    description: <span className="flex items-center gap-2">MongoDB <SiMongodb className="inline text-lg text-green-500" /> &nbsp; Firebase <SiFirebase className="inline text-lg text-yellow-400" /></span>,
  },
  // API Development
  {
    id: 'api',
    name: 'API Development',
    icon: <SiGraphql className="text-4xl text-pink-500" />,
    category: 'database',
    years: '3+ years',
    projects: 15,
    proficiency: 90,
    description: <span className="flex items-center gap-2">RESTful APIs <span className="inline-block w-2 h-2 bg-cyan-300 rounded-full" /> &nbsp; GraphQL <SiGraphql className="inline text-lg text-pink-500" /></span>,
  },
  // DevOps
  {
    id: 'version-control',
    name: 'Version Control',
    icon: <FaGitAlt className="text-4xl text-orange-500" />,
    category: 'devops',
    years: '3+ years',
    projects: 20,
    proficiency: 90,
    description: <span className="flex items-center gap-2">Git <FaGitAlt className="inline text-lg text-orange-500" /> GitHub <SiGithub className="inline text-lg text-gray-200" /> GitLab <SiGitlab className="inline text-lg text-orange-400" /> Bitbucket <SiBitbucket className="inline text-lg text-blue-400" /></span>,
  },
  {
    id: 'containerization',
    name: 'Containerization',
    icon: <SiDocker className="text-4xl text-blue-400" />,
    category: 'devops',
    years: '2+ years',
    projects: 10,
    proficiency: 80,
    description: <span className="flex items-center gap-2">Docker <SiDocker className="inline text-lg text-blue-400" /></span>,
  },
  {
    id: 'cloud-providers',
    name: 'Cloud Providers',
    icon: <SiAmazonaws className="text-4xl text-yellow-400" />,
    category: 'devops',
    years: '2+ years',
    projects: 8,
    proficiency: 75,
    description: <span className="flex items-center gap-2">AWS <SiAmazonaws className="inline text-lg text-yellow-400" /> Azure <FaCloud className="inline text-lg text-blue-500" /> GCP <SiGooglecloud className="inline text-lg text-blue-300" /></span>,
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: <SiGithubactions className="text-4xl text-green-400" />,
    category: 'devops',
    years: '2+ years',
    projects: 10,
    proficiency: 80,
    description: <span className="flex items-center gap-2">GitHub Actions <SiGithubactions className="inline text-lg text-green-400" /> GitLab CI <SiGitlab className="inline text-lg text-orange-400" /> Jenkins <SiJenkins className="inline text-lg text-red-500" /></span>,
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Logging',
    icon: <SiPrometheus className="text-4xl text-orange-500" />,
    category: 'devops',
    years: '1+ years',
    projects: 5,
    proficiency: 70,
    description: <span className="flex items-center gap-2">Prometheus <SiPrometheus className="inline text-lg text-orange-500" /> Grafana <SiGrafana className="inline text-lg text-orange-400" /> ELK <SiElasticstack className="inline text-lg text-yellow-500" /></span>,
  },
  {
    id: 'photoshop',
    name: 'Adobe Photoshop',
    icon: <SiAdobephotoshop className="text-4xl text-blue-400" />,
    category: 'tools',
    years: '3+ years',
    projects: 15,
    proficiency: 85,
    description: 'Image editing, Photo manipulation, UI design elements',
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: <SiFigma className="text-4xl text-purple-400" />,
    category: 'tools',
    years: '2+ years',
    projects: 12,
    proficiency: 80,
    description: 'UI/UX design, Prototyping, Component libraries, Collaboration',
  },
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    icon: <svg className="text-4xl text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
    category: 'tools',
    years: '4+ years',
    projects: 30,
    proficiency: 95,
    description: 'Mobile-first design, Media queries, Flexible layouts, Cross-device compatibility',
  },
  {
    id: 'npm',
    name: 'npm',
    icon: <svg className="text-4xl text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm.118 1.882h20.24v20.24H1.88V1.882zM6.144 6.144v11.712h2.882v-5.76h2.882v5.76h2.882V6.144H6.144z"/></svg>,
    category: 'tools',
    years: '4+ years',
    projects: 40,
    proficiency: 90,
    description: 'Package management, Script automation, Dependency management',
  },
  {
    id: 'git',
    name: 'Git',
    icon: <FaGitAlt className="text-4xl text-orange-500" />,
    category: 'devops',
    years: '4+ years',
    projects: 50,
    proficiency: 95,
    description: 'Version control, Branch management, Merge strategies, Git workflows',
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <SiGithub className="text-4xl text-gray-200" />,
    category: 'devops',
    years: '4+ years',
    projects: 45,
    proficiency: 90,
    description: 'Repository management, Pull requests, Code review, GitHub Actions',
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    icon: <SiGitlab className="text-4xl text-orange-400" />,
    category: 'devops',
    years: '3+ years',
    projects: 20,
    proficiency: 85,
    description: 'CI/CD pipelines, Issue tracking, Project management, GitLab CI',
  },
  // Add more skills for backend, database, devops, tools, etc. as needed
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  // Find the featured skill for frontend and backend
  const featuredSkill =
    activeCategory === 'frontend'
      ? filteredSkills.find((skill) => skill.id === 'css')
      : activeCategory === 'backend'
      ? filteredSkills.find((skill) => skill.id === 'node')
      : null;
  const otherSkills =
    (activeCategory === 'frontend' && featuredSkill)
      ? filteredSkills.filter((skill) => skill.id !== 'css')
      : (activeCategory === 'backend' && featuredSkill)
      ? filteredSkills.filter((skill) => skill.id !== 'node')
      : filteredSkills;

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
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A comprehensive overview of my technical expertise and professional capabilities</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Featured Skill */}
        {featuredSkill && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-gray-800 rounded-xl shadow-inner">
                  {featuredSkill.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                    {featuredSkill.name}
                  </h3>
                  <p className="text-gray-400 text-lg">
                    {featuredSkill.years} • {featuredSkill.projects} projects
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${featuredSkill.proficiency}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full"
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{featuredSkill.description}</p>
            </div>
          </motion.div>
        )}

        {/* Other Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400">
                    {skill.years} • {skill.projects} projects
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5 mb-5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
                