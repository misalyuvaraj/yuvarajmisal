import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  // Visit counter state
  const [visits, setVisits] = useState(null);
  const [visitsLoading, setVisitsLoading] = useState(true);

  useEffect(() => {
    // Increment and fetch visit count with fallback providers
    const namespace = 'yuvaraj-portfolio';
    const key = 'site-visits-total';

    const providers = [
      // Primary: official CountAPI (.xyz)
      `https://api.countapi.xyz/hit/${namespace}/${key}`,
      // Fallback: alternative domain (.dev)
      `https://api.countapi.dev/hit/${namespace}/${key}`
    ];

    (async () => {
      for (const url of providers) {
        try {
          const response = await fetch(url);
          if (!response.ok) continue;
          const data = await response.json();
          if (typeof data?.value === 'number') {
            setVisits(data.value);
            break;
          }
        } catch (_) {
          // try next provider
        }
      }
      setVisitsLoading(false);
    })();
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: social.github, label: 'GitHub' },
    { icon: <FaLinkedin />, url: social.linkedin, label: 'LinkedIn' },
    { icon: <FaXTwitter />, url: social.twitter, label: 'Twitter' },
    { icon: <FaInstagram />, url: social.instagram, label: 'Instagram' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {personal.name}
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                {personal.bio}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>{personal.location}</p>
              <p>
                <a href={`mailto:${personal.email}`} className="hover:text-blue-400 transition-colors">{personal.email}</a>
              </p>
              <p>{personal.phone}</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} {personal.name}. All rights reserved.
            </motion.div>

            {/* Made with Love */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-sm"
            >
              Made with <FaHeart className="text-red-500 mx-1" /> using React & Tailwind
            </motion.div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
            >
              Back to Top
            </button>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
              title="Total site visits"
            >
              {visitsLoading ? 'Visits: ...' : `Visits: ${visits ?? '0'}`}
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;