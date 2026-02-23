import React from 'react';
import { motion } from 'framer-motion';

const SunIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);

const LeafIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Philosophy: React.FC = () => {
  return (
    <motion.section
      id="philosophie"
      className="py-20 bg-bahari-stone relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-bahari-sand/50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-bahari-green/20 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Unsere Philosophie</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Zwei Welten, eine Harmonie</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* African Side */}
          <motion.div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-b-4 border-bahari-orange group hover:shadow-lg transition-all duration-300" variants={cardVariants}>
            <div className="w-16 h-16 bg-bahari-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-bahari-orange/20 transition-colors">
              <SunIcon className="text-bahari-orange w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif text-bahari-brown mb-4">Afrikanisches Ambiente</h4>
            <p className="text-gray-600 leading-relaxed mb-6 font-sans">
              Erleben Sie die Wärme und Lebendigkeit der Savanne. Unsere klassischen Kosmetikbehandlungen sind inspiriert von der natürlichen Schönheit Afrikas. Warme Farben und pflegende Rituale lassen Sie äußerlich strahlen.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full"></span>
                Reinigungsbehandlungen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full"></span>
                Tiefenpflege
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full"></span>
                Warme Erdtöne
              </li>
            </ul>
          </motion.div>

          {/* Asian Side */}
          <motion.div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border-b-4 border-bahari-green group hover:shadow-lg transition-all duration-300" variants={cardVariants}>
            <div className="w-16 h-16 bg-bahari-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-bahari-green/20 transition-colors">
              <LeafIcon className="text-bahari-green w-8 h-8" />
            </div>
            <h4 className="text-2xl font-serif text-bahari-brown mb-4">Asiatische Balance</h4>
            <p className="text-gray-600 leading-relaxed mb-6 font-sans">
              Finden Sie Ihre innere Mitte in unserer Oase der Ruhe. Mit Elementen aus Fernost, wie Akupressur und Meridian-Stimulation, bringen wir Ihren Energiefluss wieder ins Gleichgewicht.
            </p>
            <ul className="space-y-2 text-sm text-gray-500 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full"></span>
                Ganzheitliche Massagen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full"></span>
                TCM Elemente
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full"></span>
                Innere Ruhe
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Philosophy;