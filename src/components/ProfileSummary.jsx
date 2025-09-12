import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaRocket, FaAward } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const ProfileSummary = () => {
  const { stats, personal } = portfolioData;

  const summaryItems = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Projects Completed",
      value: `${stats.projectsCompleted}+`,
      description: "Successfully delivered projects",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Clients Served",
      value: `${stats.clientsServed}+`,
      description: "Happy clients worldwide",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Years Experience",
      value: `${stats.yearsExperience}+`,
      description: "Professional development",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: <FaAward className="text-3xl" />,
      title: "Technologies",
      value: `${stats.technologies}+`,
      description: "Modern tech stack",
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-100 dark:bg-orange-900/20"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A quick overview of my professional journey and achievements
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {summaryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className={`${item.bgColor} ${item.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {item.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCode className="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Technical Excellence
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Deep expertise in modern web technologies with a focus on clean, maintainable code
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-2xl text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Client Focus
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Strong communication skills and commitment to delivering value that exceeds expectations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaRocket className="text-2xl text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Innovation Driven
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Always exploring new technologies and approaches to solve complex problems
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Quick Facts
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Based in:</span>
                <br />
                <span className="font-semibold text-gray-800 dark:text-white">{personal.location}</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Experience:</span>
                <br />
                <span className="font-semibold text-gray-800 dark:text-white">{stats.yearsExperience}+ years</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Commitments:</span>
                <br />
                <span className="font-semibold text-gray-800 dark:text-white">{stats.certifications} certifications</span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Code commits:</span>
                <br />
                <span className="font-semibold text-gray-800 dark:text-white">{stats.codeCommits}+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfileSummary;
