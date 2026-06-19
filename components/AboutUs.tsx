import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { sectionVariants, itemVariants } from '../motion';
import { SparklesIcon, HeartIcon, GiftIcon } from './icons';
import { IMAGES } from '../images';

const TEAM_MEMBERS = [
  {
    name: CONTACT_INFO.owner.replace('Inh. ', ''),
    role: 'Inhaberin',
    image: IMAGES.team.owner,
    alt: 'Nadin Kästner — Inhaberin Bahari Kosmetikstudio',
  },
  {
    name: 'Mitarbeiterin',
    role: 'Kosmetikerin',
    image: IMAGES.team.member2,
    alt: 'Kosmetikerin im Bahari Kosmetikstudio',
  },
  {
    name: 'Mitarbeiterin',
    role: 'Kosmetikerin',
    image: IMAGES.team.member3,
    alt: 'Kosmetikerin im Bahari Kosmetikstudio',
  },
];

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

        {/* Features */}
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
            {TEAM_MEMBERS.map((member) => (
              <motion.div key={member.alt} className="group" variants={itemVariants}>
                <div className="relative aspect-[3/4] mb-5 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h4 className="text-xl font-serif text-bahari-dark">{member.name}</h4>
                <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;