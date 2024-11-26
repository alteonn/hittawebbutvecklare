import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, Code, Rocket, Search, Zap, Laptop, Globe, LineChart, Lock, CheckCircle2, Sparkles, Users, Building2, Star, Heart, Lightbulb, Target, Shield, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import ProcessStep from '../components/ProcessStep';

const Home = () => {
  const steps = [
    {
      icon: Search,
      title: "Skicka förfrågan",
      description: "Beskriv ditt projekt och dina behov i vårt enkla formulär"
    },
    {
      icon: Users,
      title: "Bli matchad",
      description: "Vi matchar dig med kvalificerade utvecklare som passar dina krav"
    },
    {
      icon: CheckCircle2,
      title: "Välj utvecklare",
      description: "Jämför offerter och välj den utvecklare som passar dig bäst"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Kostnadsfritt",
      description: "Det kostar dig ingenting att skicka en förfrågan och jämföra olika utvecklare"
    },
    {
      icon: Sparkles,
      title: "Bästa pris",
      description: "Utvecklare vet att du jämför priser och ger därför sina bästa erbjudanden"
    },
    {
      icon: Users,
      title: "Kvalificerade utvecklare",
      description: "Bli matchad med erfarna och kvalificerade utvecklare som passar ditt projekt"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Säkert & Tryggt",
      description: "Alla utvecklare är noggrant kontrollerade och verifierade"
    },
    {
      icon: Target,
      title: "Skräddarsytt",
      description: "Få offerter som är anpassade efter dina specifika behov"
    },
    {
      icon: Heart,
      title: "Personlig service",
      description: "Vi hjälper dig genom hela processen"
    },
    {
      icon: Lightbulb,
      title: "Expert rådgivning",
      description: "Få hjälp att välja rätt lösning för ditt projekt"
    },
    {
      icon: Star,
      title: "Kvalitetsgaranti",
      description: "Vi står för kvalitet i alla led"
    },
    {
      icon: Coins,
      title: "Prisvärt",
      description: "Konkurrensutsatta priser genom vår tjänst"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              <Code2 className="w-16 h-16" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hitta rätt webbutvecklare
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Spara tid och pengar genom att jämföra offerter från professionella webbyråer och webbutvecklare i Sverige
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
              <Link to="/hur-fungerar-det">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Läs mer
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Så här fungerar det</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              En enkel process för att hitta rätt utvecklare för ditt projekt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Fördelar med vår tjänst</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi hjälper dig hitta rätt utvecklare för ditt projekt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg"
              >
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-full inline-block">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Varför välja oss?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi erbjuder en komplett lösning för ditt projekt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl"
              >
                <motion.div
                  className="mb-6"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <feature.icon className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Våra tjänster</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Få hjälp av erfarna webbutvecklare och webbyråer i hela Sverige
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Laptop}
              title="Skapa hemsida"
              description="Professionella hemsidor som passar ditt företag"
            />
            <ServiceCard
              icon={Code2}
              title="Webbutveckling"
              description="Skräddarsydda webbapplikationer och system"
            />
            <ServiceCard
              icon={Globe}
              title="E-handel"
              description="Kompletta e-handelslösningar för din verksamhet"
            />
            <ServiceCard
              icon={LineChart}
              title="SEO & Marketing"
              description="Digital marknadsföring och sökmotoroptimering"
            />
            <ServiceCard
              icon={Lock}
              title="Support & Hosting"
              description="Säker hosting och teknisk support"
            />
            <ServiceCard
              icon={Code}
              title="Konsultation"
              description="Expert rådgivning för digitala projekt"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Starta ditt projekt</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Beskriv dina behov och få offerter från kvalificerade utvecklare
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Web Agency CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-black to-gray-900 dark:from-white dark:to-gray-200 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-center mb-8"
              >
                <Building2 className="w-16 h-16 text-white dark:text-black" />
              </motion.div>

              <h2 className="text-4xl font-bold text-white dark:text-black mb-6">
                Är du en webbyrå eller webbutvecklare?
              </h2>
              <p className="text-gray-300 dark:text-gray-700 text-xl mb-8 max-w-3xl mx-auto">
                Anslut ditt företag till hittawebbutvecklare.se och få tillgång till nya kunder. Vi matchar dig med relevanta uppdrag och hjälper dig att öka din kundbas.
              </p>
              <Link to="/companies">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white dark:bg-black text-black dark:text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
                >
                  Anslut ditt företag
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

export default Home;