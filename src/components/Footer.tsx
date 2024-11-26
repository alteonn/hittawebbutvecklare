import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code2 className="h-8 w-8" />
              </motion.div>
              <span className="font-bold text-xl">hittawebbutvecklare.se</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Din portal för att hitta kvalificerade webbutvecklare i Sverige. Vi hjälper dig att hitta rätt utvecklare för ditt projekt.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Snabblänkar</h3>
            <ul className="space-y-4">
              {[
                { name: 'Hem', path: '/' },
                { name: 'Hur fungerar det?', path: '/hur-fungerar-det' },
                { name: 'Tjänster', path: '/tjanster' },
                { name: 'Artiklar', path: '/artiklar' },
                { name: 'Kontakt', path: '/kontakt' }
              ].map((link) => (
                <motion.li key={link.path} whileHover={{ x: 5 }}>
                  <Link 
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors inline-flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">Företag</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  to="/anslut-foretag"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Anslut företag
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link 
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Om oss
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-gray-900">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} hittawebbutvecklare.se. Alla rättigheter förbehållna.
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Integritetspolicy
                </Link>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Användarvillkor
                </Link>
                <Link to="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;