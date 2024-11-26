import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Star, Sparkles, Heart, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Snabbt svar",
      description: "Vi återkommer inom 24 timmar",
      color: "text-blue-500 dark:text-blue-400",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Star,
      title: "Kvalificerade utvecklare",
      description: "Noggrant utvalda och verifierade",
      color: "text-purple-500 dark:text-purple-400",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Heart,
      title: "Personlig service",
      description: "Vi hjälper dig genom hela processen",
      color: "text-rose-500 dark:text-rose-400",
      gradient: "from-rose-500/20 to-rose-600/20"
    }
  ];

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
              <MessageSquare className="w-16 h-16 text-purple-500 dark:text-purple-400" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kontakta oss
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vi hjälper dig hitta rätt utvecklare för ditt projekt
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
              className="inline-block mb-4"
            >
              <Sparkles className="w-12 h-12 text-amber-500 dark:text-amber-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Varför välja oss?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi gör det enkelt att hitta rätt utvecklare för ditt projekt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <motion.div 
                    className={`mb-6 p-4 rounded-full bg-gradient-to-br ${feature.gradient}`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
              className="inline-block mb-4"
            >
              <Rocket className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl font-bold mb-4">Skicka förfrågan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Beskriv ditt projekt så hjälper vi dig hitta rätt utvecklare
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;