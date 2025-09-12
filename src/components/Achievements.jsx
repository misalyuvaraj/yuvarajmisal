import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaStar, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'professional excellence':
        return <FaTrophy className="text-yellow-500" />;
      case 'innovation':
        return <FaMedal className="text-blue-500" />;
      case 'community':
        return <FaStar className="text-green-500" />;
      case 'speaking':
        return <FaAward className="text-purple-500" />;
      case 'leadership':
        return <FaTrophy className="text-orange-500" />;
      default:
        return <FaAward className="text-blue-500" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'professional excellence':
        return 'border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20';
      case 'innovation':
        return 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20';
      case 'community':
        return 'border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20';
      case 'speaking':
        return 'border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20';
      case 'leadership':
        return 'border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20';
      default:
        return 'border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Milestones and recognition that mark my journey in technology and development
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 overflow-hidden hover:shadow-2xl transition-all duration-300 ${getCategoryColor(achievement.category)}`}
            >
              {/* Achievement Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <FaCalendarAlt className="mr-1" />
                      {achievement.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FaTag className="mr-1" />
                      {achievement.category}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Achievement Footer */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Issuer:</strong> {achievement.issuer}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < 5 ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Celebrating Success & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Each achievement represents a milestone in my professional journey, from technical excellence 
              to community contribution and leadership. These recognitions motivate me to continue pushing 
              boundaries and delivering exceptional value.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {achievements.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {new Set(achievements.map(a => a.category)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {achievements.filter(a => a.date.includes('2023')).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Motivation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
