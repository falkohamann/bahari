import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, itemVariants } from '../motion';
import { SparklesIcon, LeafIcon } from './icons';
import { IMAGES } from '../images';

const TreasureChamber: React.FC = () => {
  return (
    <motion.section
      id="schatzkammer"
      className="py-20 bg-bahari-stone relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Boutique</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown mb-6">Unsere Schatzkammer</h3>
            <p className="text-bahari-dark/65 leading-relaxed mb-8 text-lg font-sans">
              Entdecken Sie in unserer kleinen, feinen Schatzkammer ausgewählte Accessoires, die Ihr Herz höher schlagen lassen.
              Wir legen großen Wert auf Qualität und Herkunft.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <SparklesIcon className="text-bahari-orange w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif text-bahari-dark mb-1">Ausgewählte Accessoires</h4>
                  <p className="text-bahari-dark/55 text-sm font-sans">Schmuckstücke, Tücher und kleine Geschenke für Sie und Ihre Liebsten.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <LeafIcon className="text-bahari-green w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-serif text-bahari-dark mb-1">Fair Trade</h4>
                  <p className="text-bahari-dark/55 text-sm font-sans">Ein Teil unseres Sortiments stammt aus fairem Handel. Schön für Sie, gut für die Welt.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div className="md:w-1/2 relative" variants={itemVariants}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={IMAGES.treasureChamber.left}
                alt="Ausgewählte Accessoires in der Schatzkammer"
                loading="lazy"
                className="rounded-lg shadow-sm transform translate-y-8"
              />
              <img
                src={IMAGES.treasureChamber.right}
                alt="Fair Trade Schmuck und Accessoires"
                loading="lazy"
                className="rounded-lg shadow-sm transform -translate-y-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TreasureChamber;