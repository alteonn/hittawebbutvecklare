import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import HeroAnimation from '../components/HeroAnimation';
import PolicySection from '../components/PolicySection';
import PolicyList from '../components/PolicyList';

const Terms = () => {
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
              <FileText className="w-16 h-16 text-primary-light dark:text-primary-dark" />
            </motion.div>

            <motion.h1 
              className="text-5xl sm:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Användarvillkor
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Villkor för användning av vår tjänst
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="policy-content px-4 sm:px-6 lg:px-8">
          <PolicySection title="1. Acceptans av villkor" delay={0.1}>
            <p>
              Genom att använda hittawebbutvecklare.se accepterar du dessa användarvillkor i sin helhet. 
              Om du inte accepterar villkoren ska du inte använda tjänsten.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="2. Tjänstebeskrivning" delay={0.2}>
            <p>
              hittawebbutvecklare.se är en förmedlingstjänst som kopplar samman företag och organisationer 
              med kvalificerade webbutvecklare. Vi garanterar inte specifika resultat av användningen av tjänsten.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="3. Användaransvar" delay={0.3}>
            <p>Som användare av tjänsten ansvarar du för:</p>
            <PolicyList
              items={[
                'Att all information du anger är korrekt och sanningsenlig',
                'Att du har rätt att dela den information du uppger',
                'Att du använder tjänsten på ett ansvarsfullt sätt',
                'Att du inte missbrukar tjänsten eller skadar andra användare'
              ]}
              delay={0.4}
            />
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="4. Priser och betalning" delay={0.5}>
            <p>
              Det är kostnadsfritt att skicka förfrågningar via vår tjänst. Eventuella kostnader för projekt 
              överenskommes direkt mellan kund och utvecklare.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="5. Immateriella rättigheter" delay={0.6}>
            <p>
              Allt innehåll på webbplatsen, inklusive men inte begränsat till text, grafik, logotyper, 
              bilder och programvara, är skyddat av upphovsrätt och andra immateriella rättigheter.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="6. Ansvarsbegränsning" delay={0.7}>
            <p>Vi ansvarar inte för:</p>
            <PolicyList
              items={[
                'Kvaliteten på utförda tjänster av förmedlade webbutvecklare',
                'Eventuella tvister mellan kund och utvecklare',
                'Indirekta skador eller följdskador',
                'Förlust av data eller affärsmöjligheter'
              ]}
              delay={0.8}
            />
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="7. Ändringar i villkoren" delay={0.9}>
            <p>
              Vi förbehåller oss rätten att när som helst ändra dessa villkor. Väsentliga ändringar 
              kommer att meddelas via webbplatsen.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="8. Tillämplig lag" delay={1.0}>
            <p>
              Dessa villkor ska tolkas i enlighet med svensk lag, och eventuella tvister ska avgöras 
              av svensk domstol.
            </p>
          </PolicySection>

          <div className="section-divider" />

          <PolicySection title="9. Kontakt" delay={1.1}>
            <p>
              Vid frågor om dessa användarvillkor, vänligen kontakta oss via kontaktformuläret på vår webbplats.
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

export default Terms;