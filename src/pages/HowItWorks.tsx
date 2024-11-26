import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Code, Search, Zap, Plus, Minus, ArrowRight, Link as LinkIcon, CheckCircle2, Settings, Shield, Target, Heart, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const processSteps = [
    {
      icon: Search,
      title: "Beskriv ditt projekt",
      description: "Berätta om dina behov och mål",
      color: "text-blue-500 dark:text-blue-400",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Target,
      title: "Vi matchar dig",
      description: "Vi hittar rätt utvecklare för ditt projekt",
      color: "text-purple-500 dark:text-purple-400",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: CheckCircle2,
      title: "Jämför offerter",
      description: "Välj den bästa lösningen för dig",
      color: "text-green-500 dark:text-green-400",
      gradient: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Rocket,
      title: "Starta projektet",
      description: "Kom igång med ditt projekt direkt",
      color: "text-rose-500 dark:text-rose-400",
      gradient: "from-rose-500/20 to-rose-600/20"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Säkert & Tryggt",
      description: "Alla utvecklare är verifierade och kontrollerade",
      color: "text-cyan-500 dark:text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: Settings,
      title: "Skräddarsytt",
      description: "Få lösningar anpassade efter dina behov",
      color: "text-amber-500 dark:text-amber-400",
      gradient: "from-amber-500/20 to-amber-600/20"
    },
    {
      icon: Heart,
      title: "Personlig service",
      description: "Vi hjälper dig genom hela processen",
      color: "text-pink-500 dark:text-pink-400",
      gradient: "from-pink-500/20 to-pink-600/20"
    }
  ];

  const faqs = [
    {
      question: 'Hur fungerar hittawebbutvecklare.se',
      answer: 'Om du behöver hjälp med en tjänst, kan du beskriva vad du behöver hjälp med genom att fylla i formuläret. Din förfrågan kommer att matchas med upp till fem företag som är anslutna till oss. På så sätt kan du få mer kunskap, jämföra priser och spara pengar. Observera att din förfrågan är inte bindande och helt kostnadsfri.'
    },
    {
      question: 'Är det gratis att skicka en förfrågan om offert',
      answer: 'Det kostar ingenting att skicka en förfrågan. Tjänsten är helt gratis och inte bindande för dig som söker webbyråer och webbutvecklare.'
    },
    {
      question: 'Hur hanterar ni mina kontaktuppgifter',
      answer: 'Dina kontaktuppgifter blir endast synliga för företag som vill lämna en offert till dig. Dina kontaktuppgifter hanteras med sekretess och lämnas aldrig ut offentligt eller till tredje part.'
    },
    {
      question: 'Hur lång tid tar de innan jag får svar?',
      answer: 'Vi går dagligen nya förfrågningar och matcha din förfrågan med intresserade företag inom 1-2timmar (vardagar) Så fort vi godkänt förfrågan kan företag ta kontakt med dig.'
    },
    {
      question: 'Är alla era partners kontrollerade?',
      answer: 'Våra anslutna företag är kontrollerade och vi ställer krav på vilka som får ansluta sig till oss. Vi kontrollerar F-skatt momsregistrering, ser över omdömen och kontrollerar att de inte har skulder hos kronofogden.'
    },
    {
      question: 'Får jag en färdig offert?',
      answer: 'Du blir kontaktad av företag som vill hjälpa dig med ditt uppdrag. Beroende på omfattningen om uppdraget brukar vi rekommendera att fortsätta dialogen via e-post eller telefon för att säkerhetsställa så alla moment ni efterfrågan finns med i offerten.'
    },
    {
      question: 'Bör jag tänka på något innan jag anlitar ett företag?',
      answer: 'Vi rekommenderar att du säkerhetsställer så du fått med all viktig information du vill ha hjälp med. Det är alltid bra att fråga efter referens jobb. Skriv ett avtal där ni tydligt specificerar detaljerna kring vad som ska göras.'
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
              <Code2 className="w-16 h-16" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hur fungerar det?
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vi hjälper dig att välja den bästa lösningen baserat på dina behov och mål
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
              <Link to="/tjanster">
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

      {/* Process Steps */}
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
              <Star className="w-12 h-12 text-amber-500 dark:text-amber-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Så här går det till</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              En enkel process för att hitta rätt utvecklare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <motion.div 
                    className={`mb-6 p-6 rounded-full bg-gradient-to-br ${step.gradient} relative group`}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
                </div>
                {index < 3 && (
                  <motion.div 
                    className="hidden md:block absolute top-16 right-0 w-full h-[2px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 transform translate-x-1/2"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  />
                )}
              </motion.div>
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
            <h2 className="text-4xl font-bold mb-4">Fördelar med vår tjänst</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi gör det enkelt att hitta rätt utvecklare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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
                    className={`mb-6 p-4 rounded-full bg-gradient-to-br ${benefit.gradient}`}
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
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <LinkIcon className="w-12 h-12 text-cyan-500 dark:text-cyan-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">Vanliga frågor</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Här hittar du svar på de vanligaste frågorna
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left group"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </motion.div>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
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

export default HowItWorks;