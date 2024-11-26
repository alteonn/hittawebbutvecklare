import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    description: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20475824/2rdj1ga/', {
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
        service: '',
        location: '',
        description: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const closeNotification = () => {
    setSubmitStatus('idle');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-black rounded-2xl shadow-xl p-8 relative overflow-hidden max-w-2xl mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent dark:from-white/[0.02]" />
      <div className="relative">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Tjänst</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
              >
                <option value="">Välj tjänst</option>
                <option value="webbutveckling">Webbutveckling</option>
                <option value="webbdesign">Webbdesign</option>
                <option value="e-handel">E-handel</option>
                <option value="seo">SEO</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Plats</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ort eller region"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Beskrivning av projekt</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Beskriv ditt projekt..."
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">E-post</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Din e-postadress"
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
                placeholder="Ditt telefonnummer"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Skickar...' : 'Skicka förfrågan'}
          </motion.button>
        </form>

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
                      ? 'Tack för din förfrågan!'
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
    </motion.div>
  );
};

export default ContactForm;