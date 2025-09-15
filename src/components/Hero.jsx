import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaBriefcase } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profileImg from '../assets/profile.png';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { data, loading } = usePortfolio();
  const personal = data?.personal || { name: '—', title: '', bio: '' };
  const social = data?.social || {};
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: social.github, label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <FaXTwitter size={20} />, url: social.twitter, label: 'Twitter' },
    { icon: <FaInstagram size={20} />, url: social.instagram, label: 'Instagram' },
    { icon: <FaEnvelope size={20} />, url: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">{personal.name}</span>
            </h1>
            <div className="flex flex-col gap-3 items-center md:items-start mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-400">
                {personal.title}
              </h2>
              {personal.openToOpportunity && (
                <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 rounded-full border border-green-300 dark:border-green-800">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Open To New Opportunity
                </span>
              )}
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              {loading ? 'Loading...' : personal.bio}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>

          {/* Image and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-800">
                <img src={profileImg} alt={`${personal.name} profile`} className="w-full h-full object-cover" />
              </div>

              {/* Social Icons */}
              <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target={link.url && link.url.startsWith('mailto:') ? undefined : "_blank"}
                      rel={link.url && link.url.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      aria-label={link.label}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
