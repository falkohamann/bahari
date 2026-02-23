import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Gallery: React.FC = () => {
  // Placeholder images
  const images = [
    "https://picsum.photos/600/400?random=20",
    "https://picsum.photos/600/800?random=21",
    "https://picsum.photos/600/600?random=22",
    "https://picsum.photos/600/400?random=23",
    "https://picsum.photos/600/800?random=24",
    "https://picsum.photos/600/600?random=25"
  ];

  return (
    <motion.section
      id="galerie"
      className="py-20 bg-bahari-stone"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Einblicke</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Galerie</h3>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((src, idx) => (
                <motion.div key={idx} className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" variants={itemVariants}>
                    <img src={src} alt={`Galerie Bild ${idx + 1}`} className="w-full h-auto hover:scale-105 transition-transform duration-500" />
                </motion.div>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;