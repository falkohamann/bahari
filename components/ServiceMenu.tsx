import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServiceMenu: React.FC = () => {
  // Separate Asian special (Fernost) from the rest for special layout
  const asianServices = SERVICES.find(s => s.theme === 'asian');
  const otherServices = SERVICES.filter(s => s.theme !== 'asian');

  return (
    <motion.section
      id="leistungen"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={cardVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Unser Angebot</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-bahari-brown">Behandlungen & Preise</h3>
        </motion.div>

        {/* Special Feature: Asian Balance */}
        {asianServices && (
          <motion.div className="mb-24 relative rounded-3xl overflow-hidden bg-bahari-green/5 border border-bahari-green/10 p-8 md:p-12 lg:flex lg:gap-12 items-center" variants={cardVariants}>
            <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
               <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                 <img src="https://picsum.photos/800/600?grayscale&blur=2" alt="Zen Stone Atmosphere" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-bahari-green/20 mix-blend-multiply"></div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                 {/* Inline Leaf SVG */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-bahari-green">
                   <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                   <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                 </svg>
               </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-bahari-green font-script text-4xl mb-3 block">{asianServices.subtitle}</span>
              <h4 className="text-4xl font-serif text-bahari-brown mb-8">{asianServices.title}</h4>
              <div className="space-y-8">
                {asianServices.items.map((item, idx) => (
                  <div key={idx} className="border-b border-bahari-green/20 pb-6 last:border-0">
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-xl font-semibold text-bahari-dark">{item.name}</h5>
                      <span className="text-2xl font-bold text-bahari-green whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    {item.description && <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {otherServices.map((category, idx) => (
            <motion.div key={idx} className="bg-bahari-stone/30 p-8 rounded-xl hover:bg-bahari-stone/60 transition-colors" variants={cardVariants}>
              <div className="mb-8 flex items-center gap-3">
                {category.theme === 'african' ? 
                  /* Inline Sparkles SVG */
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bahari-orange">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                    <path d="M5 3v4"/>
                    <path d="M9 3v4"/>
                    <path d="M3 9h4"/>
                    <path d="M3 5h4"/>
                  </svg>
                  : 
                  <div className="w-6 h-6 rounded-full border-2 border-bahari-brown/20"></div>
                }
                <div>
                  <h4 className="text-3xl font-serif text-bahari-brown">{category.title}</h4>
                  {category.subtitle && <p className="text-bahari-orange font-script text-2xl">{category.subtitle}</p>}
                </div>
              </div>

              <ul className="space-y-7">
                {category.items.map((item, i) => (
                  <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-dashed border-bahari-brown/10 pb-4 last:border-0">
                    <div className="pr-4">
                      <span className="font-semibold text-lg text-bahari-dark block">{item.name}</span>
                      {item.description && <p className="text-sm text-gray-600 mt-1 max-w-sm leading-relaxed">{item.description}</p>}
                      {item.duration && <span className="text-sm text-bahari-orange font-medium mt-1 inline-block bg-bahari-orange/10 px-2 py-0.5 rounded">{item.duration}</span>}
                    </div>
                    <span className="font-bold text-xl text-bahari-brown mt-2 sm:mt-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceMenu;