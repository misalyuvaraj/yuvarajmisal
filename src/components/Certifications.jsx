import { motion } from 'framer-motion';
import { FaCertificate, FaCalendarAlt, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Import certificate images
import capgeminiCert from '../assets/Capgemini-certificate.jpg';
import gptCert from '../assets/Gpt.png';
import bhagareCert from '../assets/bhagare.png';
import blindCodingCert from '../assets/blind-coding-certificate.jpg';
import codingCert from '../assets/Coding-certificate.jpg';

const Certifications = () => {
  const { certifications } = portfolioData;
  
  // Map image references to actual imported images
  const imageMap = {
    'Capgemini-certificate.jpg': capgeminiCert,
    'blind-coding-certificate.jpg': blindCodingCert,
    'Coding-certificate.jpg': codingCert
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
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
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 mx-auto mb-8 rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional certifications and recognition for my expertise in various technologies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-blue-100 dark:border-blue-900 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={imageMap[cert.image] || cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {cert.name}
                  </h3>
                  <FaCertificate className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    {cert.date}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>ID:</strong> {cert.credentialId}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center">
                  <FaExternalLinkAlt className="mr-2" />
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I believe in staying current with industry best practices and continuously expanding my knowledge. 
              These certifications represent my commitment to professional development and technical excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {certifications.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {certifications.reduce((acc, cert) => acc + cert.skills.length, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Skills Validated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {certifications.filter(cert => cert.date.includes('2023')).length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">This Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Commitment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
