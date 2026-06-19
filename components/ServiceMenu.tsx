import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { sectionVariants, itemVariants } from '../motion';
import { SparklesIcon } from './icons';
import { IMAGES } from '../images';

const ServiceMenu: React.FC = () => {
  const asianServices = SERVICES.find(s => s.theme === 'asian');
  const otherServices = SERVICES.filter(s => s.theme !== 'asian');

  return (
    <motion.section
      id="leistungen"
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Unser Angebot</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-bahari-brown">Behandlungen & Preise</h3>
        </motion.div>

        {/* Special Feature: Asian Balance */}
        {asianServices && (
          <motion.div className="mb-24 lg:flex lg:gap-16 items-start" variants={itemVariants}>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={IMAGES.serviceAsian}
                  alt="Zen Atmosphäre für asiatische Balance Massage"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
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
                    {item.description && <p className="text-bahari-dark/60 font-sans text-base leading-relaxed">{item.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
          {otherServices.map((category, idx) => (
            <motion.div
              key={idx}
              className="pb-12 pt-12 border-t border-bahari-sand first:pt-0 first:border-t-0 [&:nth-child(2)]:pt-0 [&:nth-child(2)]:border-t-0"
              variants={itemVariants}
            >
              <div className="mb-8 flex items-center gap-3">
                <SparklesIcon className="text-bahari-orange shrink-0" size={20} />
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
                      {item.description && <p className="text-sm text-bahari-dark/55 font-sans mt-1 max-w-sm leading-relaxed">{item.description}</p>}
                      {item.duration && <span className="text-sm text-bahari-orange font-medium mt-1 inline-block">{item.duration}</span>}
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