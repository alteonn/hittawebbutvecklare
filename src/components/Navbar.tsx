import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { Sun, Moon, Code2, Menu, Home, HelpCircle, Briefcase, Building2, BookOpen, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Hem', path: '/', icon: Home },
    { name: 'Hur fungerar det?', path: '/hur-fungerar-det', icon: HelpCircle },
    { name: 'Tjänster', path: '/tjanster', icon: Briefcase },
    { name: 'Anslut företag', path: '/anslut-foretag', icon: Building2 },
    { name: 'Artiklar', path: '/artiklar', icon: BookOpen },
    { name: 'Kontakt', path: '/kontakt', icon: Mail }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg z-50 border-b border-gray-100 dark:border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
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
              <Code2 className="h-8 w-8 text-black dark:text-white" />
            </motion.div>
            <span className="font-bold text-xl">hittawebbutvecklare.se</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link 
                  to={item.path}
                  className={`relative px-3 py-2 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-black dark:text-white bg-black/5 dark:bg-white/5'
                      : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? 
                <Sun className="h-5 w-5 text-white" /> : 
                <Moon className="h-5 w-5 text-black" />
              }
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute w-full bg-white dark:bg-black border-b border-gray-100 dark:border-gray-900"
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-black dark:text-white bg-black/5 dark:bg-white/5'
                    : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="h-5 w-5" />
                  <span>Ljust läge</span>
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  <span>Mörkt läge</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;