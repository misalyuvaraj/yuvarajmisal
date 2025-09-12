import React from 'react';
import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { data } = usePortfolio();
  const skillsOverview = data?.skillsOverview || [];
  const analytics = data?.analytics || [];
  const tools = data?.tools || [];

  const skillCategories = [
    { title: "Technology", skills: skillsOverview, color: "blue" },
    { title: "Analytics", skills: analytics, color: "green" },
    { title: "Tools", skills: tools, color: "red" }
  ];

  const getColorClasses = (color, isHover = false) => {
    const colors = {
      blue: isHover ? "hover:border-blue-500 hover:text-blue-600" : "border-blue-200 dark:border-blue-700",
      green: isHover ? "hover:border-green-500 hover:text-green-600" : "border-green-200 dark:border-green-700",
      purple: isHover ? "hover:border-purple-500 hover:text-purple-600" : "border-purple-200 dark:border-purple-700",
      orange: isHover ? "hover:border-orange-500 hover:text-orange-600" : "border-orange-200 dark:border-orange-700",
      red: isHover ? "hover:border-red-500 hover:text-red-600" : "border-red-200 dark:border-red-700",
      indigo: isHover ? "hover:border-indigo-500 hover:text-indigo-600" : "border-indigo-200 dark:border-indigo-700"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive tech stack designed for impact, efficiency, and scale.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`group p-4 border rounded-xl text-center transition duration-300 transform bg-gray-50 dark:bg-gray-800 hover:shadow-lg ${getColorClasses(category.color)} ${getColorClasses(category.color, true)}`}
                  >
                    <p className="text-sm font-semibold text-gray-800 dark:text-white group-hover:text-current transition-colors">
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              From traditional web technologies to cutting-edge AI and blockchain solutions, I'm passionate about 
              expanding my skill set and delivering innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
