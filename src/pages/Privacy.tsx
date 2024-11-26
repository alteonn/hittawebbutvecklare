import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import PolicySection from '../components/PolicySection';
import PolicyList from '../components/PolicyList';

const Privacy = () => {
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
              <Shield className="w-16 h-16 text-primary-light dark:text-primary-dark" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Integritetspolicy
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Din integritet är viktig för oss
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="policy-content px-4 sm:px-6 lg:px-8">
          <PolicySection title="Insamling av information" delay={0.1}>
            <p>
              Vi samlar in information när du registrerar dig på vår webbplats, fyller i ett formulär 
              eller skickar en offertförfrågan. Den insamlade informationen kan inkludera ditt namn, 
              e-postadress, telefonnummer och företagsinformation.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Användning av information" delay={0.2}>
            <p>Den information vi samlar in används för att:</p>
            <PolicyList
              items={[
                'Matcha dig med relevanta webbutvecklare och webbyråer',
                'Förbättra vår kundservice och hantera dina förfrågningar effektivare',
                'Optimera och förbättra användarupplevelsen på vår webbplats',
                'Skicka e-post angående din förfrågan och eventuella uppdateringar'
              ]}
              delay={0.3}
            />
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Cookies" delay={0.4}>
            <p>
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. Cookies hjälper 
              oss att förstå hur du använder webbplatsen och att optimera våra tjänster. Du kan välja 
              att stänga av cookies i din webbläsare, men detta kan påverka webbplatsens funktionalitet.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Delning av information" delay={0.5}>
            <p>
              Vi säljer, handlar eller överför inte på annat sätt din personligt identifierbara information 
              till utomstående parter. Detta inkluderar inte pålitliga tredje parter som hjälper oss att 
              driva vår webbplats eller bedriva vår verksamhet, förutsatt att dessa parter samtycker till 
              att hålla denna information konfidentiell.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Dina rättigheter" delay={0.6}>
            <p>Du har rätt att:</p>
            <PolicyList
              items={[
                'Begära tillgång till de personuppgifter vi har om dig',
                'Begära rättelse av felaktiga eller ofullständiga uppgifter',
                'Begära radering av dina personuppgifter, om det är tillåtet enligt lag',
                'Invända mot behandling av dina personuppgifter för specifika ändamål',
                'Begära begränsning av behandlingen av dina uppgifter i vissa fall'
              ]}
              delay={0.7}
            />
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Kontakta oss" delay={0.8}>
            <p>
              Har du några frågor om denna integritetspolicy? Vänligen kontakta oss via kontaktformuläret 
              på vår webbplats. Vi besvarar gärna dina frågor.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="Uppdateringar" delay={0.9}>
            <p>
              Denna integritetspolicy kan komma att uppdateras från tid till tid för att reflektera 
              förändringar i våra rutiner eller lagkrav. Vi kommer att meddela dig om väsentliga 
              ändringar genom att publicera den uppdaterade policyn på denna sida. Vi rekommenderar 
              att du regelbundet kontrollerar denna sida för att hålla dig informerad.
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

export default Privacy;