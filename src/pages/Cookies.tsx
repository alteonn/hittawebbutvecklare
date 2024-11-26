import React from 'react';
import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import PolicySection from '../components/PolicySection';
import PolicyList from '../components/PolicyList';

const Cookies = () => {
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
              <Cookie className="w-16 h-16 text-amber-500 dark:text-amber-400" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cookie-policy
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Information om hur vi använder cookies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="policy-content px-4 sm:px-6 lg:px-8">
          <PolicySection title="Vad är cookies?" delay={0.1}>
            <p>
              Cookies är små textfiler som lagras på din dator eller mobila enhet när du besöker en webbplats. 
              De används för att förbättra din upplevelse och hjälper oss att förstå hur webbplatsen används.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Vilka typer av cookies använder vi?" delay={0.2}>
            <h3 className="text-2xl font-bold mb-4">Nödvändiga cookies</h3>
            <p className="mb-6">
              Dessa cookies är nödvändiga för att webbplatsen ska fungera och kan inte stängas av i våra system. 
              De lagrar inga personligt identifierbara uppgifter.
            </p>

            <h3 className="text-2xl font-bold mb-4">Analys cookies</h3>
            <p className="mb-6">
              Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla 
              in och rapportera information anonymt.
            </p>

            <h3 className="text-2xl font-bold mb-4">Marknadsföring cookies</h3>
            <p className="mb-6">
              Dessa cookies används för att visa relevant marknadsföring baserat på dina intressen. De kan 
              också användas för att begränsa antalet gånger du ser en annons.
            </p>

            <h3 className="text-2xl font-bold mb-4">Preferens cookies</h3>
            <p>
              Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du har gjort och tillhandahålla 
              förbättrade, mer personliga funktioner.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Hur länge sparas cookies?" delay={0.3}>
            <p>Vi använder två typer av cookies baserat på hur länge de sparas:</p>
            <PolicyList
              items={[
                'Sessionscookies: Dessa raderas när du stänger webbläsaren',
                'Permanenta cookies: Dessa finns kvar under en bestämd tidsperiod'
              ]}
              delay={0.4}
            />
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Hantera cookies" delay={0.5}>
            <p>
              Du kan när som helst ändra dina cookie-inställningar genom att klicka på "Hantera cookies" 
              längst ner på sidan. Du kan också ändra inställningarna i din webbläsare för att blockera 
              eller radera cookies.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Tredjepartscookies" delay={0.6}>
            <p>
              I vissa fall använder vi tjänster från tredje part som kan placera cookies på din enhet. 
              Vi har ingen direkt kontroll över dessa cookies.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Uppdateringar av cookie-policyn" delay={0.7}>
            <p>
              Vi kan komma att uppdatera denna cookie-policy från tid till tid. Eventuella ändringar 
              kommer att publiceras på denna sida.
            </p>
          </PolicySection>

          <p className="last-updated">
            Senast uppdaterad: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Cookies;