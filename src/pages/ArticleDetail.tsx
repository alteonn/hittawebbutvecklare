import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { articles } from '../data/articles';
import HeroAnimation from '../components/HeroAnimation';
import ReactMarkdown from 'react-markdown';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel hittades inte</h1>
          <Link 
            to="/articles" 
            className="text-primary-light dark:text-primary-dark hover:underline inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till artiklar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <HeroAnimation />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-black/5 dark:bg-white/5 rounded-full text-sm font-medium mb-6"
            >
              {article.category}
            </motion.span>

            <motion.h1 
              className="text-4xl sm:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {article.title}
            </motion.h1>

            <motion.div 
              className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/articles')}
              className="mb-8 flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group"
            >
              <motion.span
                className="inline-flex items-center"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tillbaka till artiklar
              </motion.span>
            </button>

            <div className="relative aspect-w-16 aspect-h-9 mb-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="article-content">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-8 mt-12 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mb-6 mt-12">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mb-4 mt-8">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 space-y-3 text-gray-600 dark:text-gray-300">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 space-y-3 list-decimal list-inside text-gray-600 dark:text-gray-300">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="flex items-start text-lg">
                      <span className="mr-2 mt-2">•</span>
                      <span className="flex-1">{children}</span>
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-200 dark:border-gray-700 pl-4 my-6 italic text-gray-600 dark:text-gray-300">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6 overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a 
                      href={href}
                      className="text-primary-light dark:text-primary-dark hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src}
                      alt={alt}
                      className="rounded-lg my-8 w-full"
                    />
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Relaterade artiklar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map(relatedArticle => (
                <motion.article
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="group bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link to={`/articles/${relatedArticle.id}`} className="block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <span className="inline-block px-3 py-1 bg-white/90 dark:bg-black/90 rounded-full text-sm font-medium">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{relatedArticle.readTime}</span>
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
    </div>
  );
};

export default ArticleDetail;