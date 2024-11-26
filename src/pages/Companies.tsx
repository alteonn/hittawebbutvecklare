import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Shield, Clock, Users, ArrowRight, Check, Target, Lock, Star, Sparkles, Heart, Zap, Rocket, CheckCircle2, Settings, Globe, XCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../components/HeroAnimation';

const Companies = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    orgNumber: '',
    contactPerson: '',
    phone: '',
    email: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const benefits = [
    {
      icon: Shield,
      title: "Kvalificerade leads",
      description: "Få tillgång till seriösa förfrågningar från potentiella kunder",
      color: "text-blue-500 dark:text-blue-400",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: Target,
      title: "Målgruppsanpassat",
      description: "Vi matchar dig med projekt som passar din expertis",
      color: "text-purple-500 dark:text-purple-400",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Clock,
      title: "Flexibelt system",
      description: "Välj antal förfrågningar och typ av leads som passar er",
      color: "text-green-500 dark:text-green-400",
      gradient: "from-green-500/20 to-green-600/20"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Inga startavgifter",
      description: "Betala endast för de leads du är intresserad av",
      color: "text-amber-500 dark:text-amber-400",
      gradient: "from-amber-500/20 to-amber-600/20"
    },
    {
      icon: Users,
      title: "Begränsad delning",
      description: "Varje förfrågan delas med max fem företag",
      color: "text-rose-500 dark:text-rose-400",
      gradient: "from-rose-500/20 to-rose-600/20"
    },
    {
      icon: Lock,
      title: "GDPR-säkrat",
      description: "Alla förfrågningar behandlas enligt GDPR",
      color: "text-cyan-500 dark:text-cyan-400",
      gradient: "from-cyan-500/20 to-cyan-600/20"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20475824/2rdv83x/', {
        method: 'POST',
        body: JSON.stringify({
          data: formData,
          timestamp: new Date().toISOString()
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'no-cors'
      });

      setSubmitStatus('success');
      setFormData({
        companyName: '',
        orgNumber: '',
        contactPerson: '',
        phone: '',
        email: '',
        description: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const closeNotification = () => {
    setSubmitStatus('idle');
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
              <Building2 className="w-16 h-16 text-primary-light dark:text-primary-dark" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Gå med i vårt nätverk
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Är du ett företag med speciell kompetens inom ert område? Vill ni få fler kunder? 
              Anslut ert företag till vår tjänst och börja få fler uppdrag redan idag.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
            <h2 className="text-4xl font-bold mb-4">Fördelar med vårt nätverk</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi hjälper er att växa och nå ut till fler kunder
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

      {/* Features Section */}
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
            <h2 className="text-4xl font-bold mb-4">Vårt erbjudande</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Vi erbjuder en flexibel och effektiv lösning för att hitta nya kunder
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

      {/* Registration Form */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]" />
            <div className="relative">
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
                className="flex justify-center mb-8"
              >
                <Rocket className="w-12 h-12 text-primary-light dark:text-primary-dark" />
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-8 text-center">Registrera ert företag</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Företagsnamn</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organisationsnummer</label>
                    <input
                      type="text"
                      name="orgNumber"
                      value={formData.orgNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Kontaktperson</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">E-post</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Beskriv er verksamhet</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Skickar...' : 'Skicka ansökan'}</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success/Error Notification */}
      <AnimatePresence>
        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className={`
              px-6 py-4 rounded-xl shadow-lg flex items-center space-x-4
              ${submitStatus === 'success' ? 'bg-green-50 dark:bg-green-900/30' : 'bg-red-50 dark:bg-red-900/30'}
            `}>
              <div className={`
                p-2 rounded-full
                ${submitStatus === 'success' ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'}
              `}>
                {submitStatus === 'success' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                )}
              </div>
              <div className="flex-1">
                <p className={`font-medium ${
                  submitStatus === 'success' ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                }`}>
                  {submitStatus === 'success'
                    ? 'Tack för din ansökan!'
                    : 'Något gick fel'}
                </p>
                <p className={`text-sm ${
                  submitStatus === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                }`}>
                  {submitStatus === 'success'
                    ? 'Vi återkommer till dig så snart som möjligt'
                    : 'Försök igen senare eller kontakta oss direkt'}
                </p>
              </div>
              <button
                onClick={closeNotification}
                className={`p-1 rounded-full hover:bg-opacity-80 transition-colors ${
                  submitStatus === 'success'
                    ? 'hover:bg-green-200 dark:hover:bg-green-800'
                    : 'hover:bg-red-200 dark:hover:bg-red-800'
                }`}
              >
                <X className={`w-5 h-5 ${
                  submitStatus === 'success'
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                }`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Companies;