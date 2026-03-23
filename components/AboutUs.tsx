import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const SparklesIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 9h4"/><path d="M3 5h4"/></svg>
);

const HeartIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const GiftIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 4.9 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
);

const ease = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease, staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const AboutUs: React.FC = () => {
  return (
    <motion.section
      id="ueber-uns"
      className="py-20 bg-gradient-to-b from-white to-bahari-stone/30 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Das Team</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown mb-6">Über Uns</h3>
          <p className="max-w-3xl mx-auto text-bahari-dark/65 font-sans leading-relaxed text-lg">
            Im Bahari Kosmetikstudio vereinen wir Professionalität mit Leidenschaft.
            Seit über einem Jahrzehnt ist es unser Ziel, Ihnen einen Ort der Ruhe und Schönheit zu bieten,
            an dem Sie den Alltag hinter sich lassen können.
          </p>
        </motion.div>

        {/* Features — flat, no cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mb-20">
          <motion.div variants={itemVariants}>
            <SparklesIcon className="text-bahari-orange w-6 h-6 mb-4" />
            <h4 className="text-lg font-serif text-bahari-brown mb-2">Unsere Produkte</h4>
            <p className="text-bahari-dark/60 text-sm leading-relaxed font-sans">
              Wir vertrauen auf die Kraft des Meeres und nutzen hochwertige Produkte von <strong>BIOMARIS</strong>.
              Diese stehen für Verträglichkeit und sichtbare Pflegeergebnisse.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GiftIcon className="text-bahari-orange w-6 h-6 mb-4" />
            <h4 className="text-lg font-serif text-bahari-brown mb-2">Gutscheine</h4>
            <p className="text-bahari-dark/60 text-sm leading-relaxed font-sans">
              Verschenken Sie Entspannung! Unsere Gutscheine sind das perfekte Geschenk für jeden Anlass.
              Erhältlich direkt bei uns im Studio.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <HeartIcon className="text-bahari-green w-6 h-6 mb-4" />
            <h4 className="text-lg font-serif text-bahari-brown mb-2">Inhaberin geführt</h4>
            <p className="text-bahari-dark/60 text-sm leading-relaxed font-sans">
              Persönlichkeit steht bei uns an erster Stelle. Inhaberin {CONTACT_INFO.owner.replace('Inh. ', '')} und ihr Team kümmern sich individuell um Ihre Wünsche.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-3xl font-serif text-bahari-brown mb-12">Unser Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
                  alt="Nadin Kästner — Inhaberin Bahari Kosmetikstudio"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif text-bahari-dark">{CONTACT_INFO.owner.replace('Inh. ', '')}</h4>
              <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">Inhaberin</p>
            </motion.div>

            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
                  alt="Kosmetikerin im Bahari Kosmetikstudio"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif text-bahari-dark">Mitarbeiterin</h4>
              <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">Kosmetikerin</p>
            </motion.div>

            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
                  alt="Kosmetikerin im Bahari Kosmetikstudio"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif text-bahari-dark">Mitarbeiterin</h4>
              <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">Kosmetikerin</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutUs;
