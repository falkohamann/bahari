import React from 'react';
import { motion } from 'framer-motion';

const SparklesIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 9h4"/><path d="M3 5h4"/></svg>
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
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const TreasureChamber: React.FC = () => {
  return (
        <motion.section
            id="schatzkammer"
            className="py-20 bg-bahari-stone relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
       {/* Background pattern - subtle texture for light background */}
       <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="md:w-1/2" variants={itemVariants}>
                <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Boutique</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown mb-6">Unsere Schatzkammer</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    Entdecken Sie in unserer kleinen, feinen Schatzkammer ausgewählte Accessoires, die Ihr Herz höher schlagen lassen. 
                    Wir legen großen Wert auf Qualität und Herkunft.
                </p>
                
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-bahari-orange">
                            <SparklesIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-bahari-dark mb-1">Ausgewählte Accessoires</h4>
                            <p className="text-gray-500 text-sm">Schmuckstücke, Tücher und kleine Geschenke für Sie und Ihre Liebsten.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-bahari-green">
                            <LeafIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-serif text-bahari-dark mb-1">Fair Trade</h4>
                            <p className="text-gray-500 text-sm">Ein Teil unseres Sortiments stammt aus fairem Handel. Schön für Sie, gut für die Welt.</p>
                        </div>
                    </li>
                </ul>
            </motion.div>
            
            <motion.div className="md:w-1/2 relative" variants={itemVariants}>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://picsum.photos/400/500?random=10" alt="Accessoires" className="rounded-lg shadow-lg transform translate-y-8" />
                    <img src="https://picsum.photos/400/500?random=11" alt="Schmuck" className="rounded-lg shadow-lg transform -translate-y-8" />
                </div>
                {/* Decorative circle - adjusted color for light background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-bahari-orange/20 rounded-full"></div>
            </motion.div>
        </div>
       </div>
    </motion.section>
  );
};

export default TreasureChamber;