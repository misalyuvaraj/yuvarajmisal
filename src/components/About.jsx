import { motion } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';

const About = () => {
  const { data } = usePortfolio();
  const personal = data?.personal || { about: '' };
  const tech = data?.skillsOverview || [];
  const analytics = data?.analytics || [];
  const tools = data?.tools || [];
  const allSkills = [...tech, ...analytics, ...tools];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mb-8 rounded-full" />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-12 items-stretch">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col h-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Who am I?</h3>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                {personal.about}
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-6">
                🚀 Ready to collaborate? <a href="#contact" className="underline">Let's connect</a> and build something impactful.
              </p>
            </div>
          </motion.div>

          {/* Skills list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex flex-col h-full"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Skills</h3>
              <div className="flex flex-wrap gap-3 mt-auto">
                {allSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, boxShadow: '0 4px 14px 0 rgba(59,130,246,0.15)' }}
                    className="px-4 py-2 bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100 rounded-full font-semibold shadow-sm transition-transform cursor-pointer border border-blue-300 dark:border-blue-700 hover:bg-blue-300 dark:hover:bg-blue-700"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;