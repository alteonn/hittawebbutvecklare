import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, CheckCircle2 } from 'lucide-react';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [cookieRotation, setCookieRotation] = useState(0);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true, // Always true and can't be changed
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('cookieSettings');
    if (!savedSettings) {
      setIsVisible(true);
    } else {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleAccept = (acceptAll: boolean) => {
    const newSettings: CookieSettings = {
      necessary: true,
      analytics: acceptAll,
      marketing: acceptAll,
      preferences: acceptAll,
    };
    localStorage.setItem('cookieSettings', JSON.stringify(newSettings));
    setSettings(newSettings);
    setIsVisible(false);
    setShowManage(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setIsVisible(false);
    setShowManage(false);
  };

  const toggleSetting = (key: keyof Omit<CookieSettings, 'necessary'>) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {(isVisible || showManage) && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]" />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="flex items-center space-x-3"
                    onHoverStart={() => setCookieRotation(cookieRotation + 360)}
                  >
                    <motion.div
                      animate={{ rotate: cookieRotation }}
                      transition={{ duration: 0.5 }}
                    >
                      {showManage ? (
                        <Settings className="w-8 h-8 text-primary-light dark:text-primary-dark" />
                      ) : (
                        <Cookie className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                      )}
                    </motion.div>
                    <h3 className="text-xl font-bold">
                      {showManage ? 'Hantera cookies' : 'Nu kom du in här och tänkte att det här kommer vara väldigt dyrt!'}
                    </h3>
                  </motion.div>
                  <button
                    onClick={() => {
                      setIsVisible(false);
                      setShowManage(false);
                    }}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {showManage ? (
                  <div className="space-y-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      Hantera dina cookie-inställningar. Nödvändiga cookies kan inte inaktiveras eftersom de krävs för webbplatsens funktion.
                    </p>

                    <div className="space-y-4">
                      {/* Necessary Cookies - Always enabled */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div>
                          <h4 className="font-semibold mb-1">Nödvändiga cookies</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Krävs för webbplatsens grundläggande funktioner
                          </p>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div>
                          <h4 className="font-semibold mb-1">Analys cookies</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Hjälper oss förstå hur besökare använder webbplatsen
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSetting('analytics')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            settings.analytics ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"
                            animate={{ x: settings.analytics ? 24 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </motion.button>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div>
                          <h4 className="font-semibold mb-1">Marknadsföring cookies</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Används för att visa relevant marknadsföring
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSetting('marketing')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            settings.marketing ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"
                            animate={{ x: settings.marketing ? 24 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </motion.button>
                      </div>

                      {/* Preferences Cookies */}
                      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <div>
                          <h4 className="font-semibold mb-1">Preferens cookies</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sparar dina inställningar och preferenser
                          </p>
                        </div>
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSetting('preferences')}
                          className={`w-12 h-6 rounded-full relative transition-colors ${
                            settings.preferences ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-700'
                          }`}
                        >
                          <motion.div
                            className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5"
                            animate={{ x: settings.preferences ? 24 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleSaveSettings}
                        className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Spara inställningar
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Men där har du fel. Det är billigare än du tror!
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      (Och ja, vi behöver också fråga om cookies 🍪)
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccept(true)}
                        className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Acceptera alla
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAccept(false)}
                        className="px-6 py-2 bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Endast nödvändiga
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowManage(true)}
                        className="px-6 py-2 bg-white dark:bg-black text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Hantera
                      </motion.button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;