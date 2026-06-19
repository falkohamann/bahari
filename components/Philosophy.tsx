import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, itemVariants, leftSlideVariants, rightSlideVariants } from '../motion';
import { SunIcon, LeafIcon } from './icons';

const Philosophy: React.FC = () => {
  return (
    <motion.section
      id="philosophie"
      className="bg-bahari-stone py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Unsere Philosophie</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Zwei Welten, eine Harmonie</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* African Side */}
          <motion.div
            className="bg-bahari-sand px-10 py-12 md:px-14 md:py-16"
            variants={leftSlideVariants}
          >
            <SunIcon className="text-bahari-orange w-8 h-8 mb-6" />
            <h4 className="text-2xl font-serif text-bahari-brown mb-4">Afrikanisches Ambiente</h4>
            <p className="text-bahari-dark/70 leading-relaxed mb-6 font-sans">
              Erleben Sie die Wärme und Lebendigkeit der Savanne. Unsere klassischen Kosmetikbehandlungen sind inspiriert von der natürlichen Schönheit Afrikas. Warme Farben und pflegende Rituale lassen Sie äußerlich strahlen.
            </p>
            <ul className="space-y-2 text-sm text-bahari-dark/55 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full shrink-0"></span>
                Reinigungsbehandlungen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full shrink-0"></span>
                Tiefenpflege
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-orange rounded-full shrink-0"></span>
                Warme Erdtöne
              </li>
            </ul>
          </motion.div>

          {/* Asian Side */}
          <motion.div
            className="bg-bahari-green/20 px-10 py-12 md:px-14 md:py-16 border-t-2 border-bahari-green/30 md:border-t-0 md:border-l-2 md:border-bahari-green/20"
            variants={rightSlideVariants}
          >
            <LeafIcon className="text-bahari-green w-8 h-8 mb-6" />
            <h4 className="text-2xl font-serif text-bahari-brown mb-4">Asiatische Balance</h4>
            <p className="text-bahari-dark/70 leading-relaxed mb-6 font-sans">
              Finden Sie Ihre innere Mitte in unserer Oase der Ruhe. Mit Elementen aus Fernost, wie Akupressur und Meridian-Stimulation, bringen wir Ihren Energiefluss wieder ins Gleichgewicht.
            </p>
            <ul className="space-y-2 text-sm text-bahari-dark/55 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full shrink-0"></span>
                Ganzheitliche Massagen
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full shrink-0"></span>
                TCM Elemente
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-bahari-green rounded-full shrink-0"></span>
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