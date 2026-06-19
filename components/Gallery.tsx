import React from 'react';
import { motion } from 'framer-motion';
import { sectionVariants, itemVariants } from '../motion';
import { IMAGES } from '../images';

const Gallery: React.FC = () => {
  return (
    <motion.section
      id="galerie"
      className="py-20 bg-bahari-stone"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Einblicke</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Galerie</h3>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.gallery.map((image, idx) => (
            <motion.div
              key={idx}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;