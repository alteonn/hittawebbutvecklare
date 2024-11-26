import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, Globe, Laptop, LineChart, Lock, Rocket, Search, Zap, Star, Sparkles, CheckCircle2, XCircle, Code, Settings, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Skapa hemsida',
      description: 'Professionella hemsidor som passar ditt företag',
      color: 'text-blue-500 dark:text-blue-400',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Code2,
      title: 'Webbutveckling',
      description: 'Skräddarsydda webbapplikationer och system',
      color: 'text-purple-500 dark:text-purple-400',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Globe,
      title: 'E-handel',
      description: 'Kompletta e-handelslösningar för din verksamhet',
      color: 'text-green-500 dark:text-green-400',
      gradient: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: LineChart,
      title: 'SEO & Marketing',
      description: 'Digital marknadsföring och sökmotoroptimering',
      color: 'text-rose-500 dark:text-rose-400',
      gradient: 'from-rose-500/20 to-rose-600/20'
    },
    {
      icon: Lock,
      title: 'Support & Hosting',
      description: 'Säker hosting och teknisk support',
      color: 'text-amber-500 dark:text-amber-400',
      gradient: 'from-amber-500/20 to-amber-600/20'
    },
    {
      icon: Search,
      title: 'Konsultation',
      description: 'Expert rådgivning för digitala projekt',
      color: 'text-cyan-500 dark:text-cyan-400',
      gradient: 'from-cyan-500/20 to-cyan-600/20'
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: 'Snabb leverans',
      description: 'Vi levererar projekt i tid och inom budget',
      color: 'text-blue-500 dark:text-blue-400',
      gradient: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Lock,
      title: 'Säkerhet först',
      description: 'Högsta säkerhetsstandarder för alla projekt',
      color: 'text-purple-500 dark:text-purple-400',
      gradient: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Zap,
      title: 'Optimerad prestanda',
      description: 'Snabba och responsiva lösningar',
      color: 'text-green-500 dark:text-green-400',
      gradient: 'from-green-500/20 to-green-600/20'
    }
  ];

  const comparison = {
    custom: {
      title: 'Skräddarsydd utveckling',
      icon: Code,
      color: 'text-blue-500 dark:text-blue-400',
      gradient: 'from-blue-500/20 to-blue-600/20',
      pros: [
        'Helt anpassad efter dina behov',
        'Unik design och funktionalitet',
        'Bättre prestanda och SEO',
        'Full kontroll över källkoden',
        'Skalbar och flexibel lösning',
        'Inga månadskostnader för plugins'
      ]
    },
    cms: {
      title: 'WordPress / Squarespace',
      icon: Settings,
      color: 'text-purple-500 dark:text-purple-400',
      gradient: 'from-purple-500/20 to-purple-600/20',
      pros: [
        'Snabbare initial uppsättning',
        'Lägre startkostnad',
        'Enklare innehållshantering',
        'Många färdiga teman',
        'Stort utbud av plugins',
        'Bekant för många användare'
      ]
    }
  };

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
              <Star className="w-16 h-16 text-amber-500 dark:text-amber-400" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Våra tjänster
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Få hjälp av erfarna webbutvecklare och webbyråer i hela Sverige
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  Kom igång nu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white dark:bg-black">
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
              <Sparkles className="w-12 h-12 text-purple-500 dark:text-purple-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Alla tjänster</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi erbjuder ett brett utbud av webbutvecklingstjänster
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              <Shield className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Jämförelse av lösningar</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Välj den lösning som passar dina behov bäst
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(comparison).map((option, index) => (
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
                    className={`mb-6 p-4 rounded-full bg-gradient-to-br ${option.gradient}`}
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
                    <option.icon className={`w-8 h-8 ${option.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-6">{option.title}</h3>
                  <ul className="space-y-4">
                    {option.pros.map((pro, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle2 className={`w-5 h-5 mr-3 mt-0.5 ${option.color}`} />
                        <span>{pro}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-black">
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
              <Heart className="w-12 h-12 text-rose-500 dark:text-rose-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Varför välja oss?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi levererar högkvalitativa lösningar med fokus på resultat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-200 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(0,0,0,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(0,0,0,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(0,0,0,0.1) 0%, transparent 50%)',
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white dark:text-black mb-6">
                Redo att starta ditt nästa projekt?
              </h2>
              <p className="text-gray-300 dark:text-gray-700 text-xl mb-8 max-w-2xl mx-auto">
                Låt oss hjälpa dig att förverkliga din digitala vision
              </p>
              <Link to="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
                >
                  Kontakta oss idag
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;