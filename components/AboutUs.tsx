import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const SparklesIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 9h4"/><path d="M3 5h4"/></svg>
);

const UserIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const HeartIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const GiftIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.9 4.9 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutUs: React.FC = () => {
  return (
    <motion.section
      id="ueber-uns"
      className="py-20 bg-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-bahari-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-bahari-green/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Das Team</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown mb-6">Über Uns</h3>
          <p className="max-w-3xl mx-auto text-gray-600 font-sans leading-relaxed text-lg">
            Im Bahari Kosmetikstudio vereinen wir Professionalität mit Leidenschaft. 
            Seit über einem Jahrzehnt ist es unser Ziel, Ihnen einen Ort der Ruhe und Schönheit zu bieten, 
            an dem Sie den Alltag hinter sich lassen können.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Feature 1: Products */}
          <motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-400" variants={itemVariants}>
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <SparklesIcon className="text-blue-500 w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif text-bahari-brown mb-3">Unsere Produkte</h4>
            <p className="text-gray-600 mb-4">
              Wir vertrauen auf die Kraft des Meeres und nutzen hochwertige Produkte von <strong>BIOMARIS</strong>. 
              Diese stehen für Verträglichkeit und sichtbare Pflegeergebnisse.
            </p>
          </motion.div>

           {/* Feature 2: Vouchers */}
           <motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-bahari-orange" variants={itemVariants}>
            <div className="w-12 h-12 bg-bahari-orange/10 rounded-full flex items-center justify-center mb-6">
              <GiftIcon className="text-bahari-orange w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif text-bahari-brown mb-3">Gutscheine</h4>
            <p className="text-gray-600 mb-4">
              Verschenken Sie Entspannung! Unsere Gutscheine sind das perfekte Geschenk für jeden Anlass. 
              Erhältlich direkt bei uns im Studio.
            </p>
          </motion.div>

          {/* Feature 3: Owner */}
          <motion.div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-bahari-green" variants={itemVariants}>
             <div className="w-12 h-12 bg-bahari-green/10 rounded-full flex items-center justify-center mb-6">
              <HeartIcon className="text-bahari-green w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif text-bahari-brown mb-3">Inhaberin geführt</h4>
            <p className="text-gray-600 mb-4">
              Persönlichkeit steht bei uns an erster Stelle. Inhaberin {CONTACT_INFO.owner.replace('Inh. ', '')} und ihr Team kümmern sich individuell um Ihre Wünsche.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-3xl font-serif text-bahari-brown mb-12">Unser Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 (Owner) */}
            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-gray-200">
                 {/* Placeholder for owner image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <UserIcon size={64} />
                 </div>
                 <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif text-bahari-dark">{CONTACT_INFO.owner.replace('Inh. ', '')}</h4>
              <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">Inhaberin</p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-gray-200">
                 {/* Placeholder for employee image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <UserIcon size={64} />
                 </div>
                 <div className="absolute inset-0 bg-bahari-brown/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h4 className="text-xl font-serif text-bahari-dark">Mitarbeiterin</h4>
              <p className="text-bahari-orange font-medium text-sm uppercase tracking-wider">Kosmetikerin</p>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div className="group" variants={itemVariants}>
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-gray-200">
                 {/* Placeholder for employee image */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                    <UserIcon size={64} />
                 </div>
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