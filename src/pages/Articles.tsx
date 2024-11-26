import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen, Clock } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Articles = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <HeroAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="flex justify-center mb-8"
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
              <BookOpen className="w-16 h-16" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Artiklar & Resurser
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ta del av våra senaste artiklar om webbutveckling, trender och bästa praxis
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Link to={`/articles/${article.id}`} className="block">
                  <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <span className="inline-block px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full text-sm font-medium mb-2">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{article.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                        </div>
                      </div>
                      <motion.div
                        className="text-primary-light dark:text-primary-dark"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-black rounded-2xl shadow-xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">Håll dig uppdaterad</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Prenumerera på vårt nyhetsbrev för att få de senaste artiklarna direkt i din inkorg
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Prenumerera
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;