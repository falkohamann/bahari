import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const MapPinIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const PhoneIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const ClockIcon = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

const SendIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
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

const panelVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ContactSection: React.FC = () => {
  return (
    <motion.section
      id="kontakt"
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={panelVariants}>
            <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Erreichbarkeit</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Kontaktieren Sie uns</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Info */}
          <motion.div className="space-y-10" variants={panelVariants}>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h4 className="text-2xl font-serif text-bahari-brown mb-6">Kontaktdaten</h4>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-bahari-orange/10 rounded-full shrink-0">
                        <MapPinIcon className="text-bahari-orange w-5 h-5" />
                        </div>
                        <div>
                        <h5 className="font-semibold text-bahari-dark">Adresse</h5>
                        <p className="text-gray-600 font-sans">{CONTACT_INFO.address}<br/>{CONTACT_INFO.zipCity}</p>
                        <span className="inline-block mt-2 text-sm text-bahari-orange">Route planen &rarr;</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-bahari-orange/10 rounded-full shrink-0">
                        <PhoneIcon className="text-bahari-orange w-5 h-5" />
                        </div>
                        <div>
                        <h5 className="font-semibold text-bahari-dark">Telefon</h5>
                        <p className="text-gray-600 font-sans">{CONTACT_INFO.phone}</p>
                        <p className="text-xs text-gray-400 mt-1">Bitte immer Vorwahl mitwählen</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-bahari-orange/10 rounded-full shrink-0">
                        <ClockIcon className="text-bahari-orange w-5 h-5" />
                        </div>
                        <div>
                        <h5 className="font-semibold text-bahari-dark">Öffnungszeiten</h5>
                        <p className="text-gray-600 font-sans">{CONTACT_INFO.note}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Small map preview */}
            <div className="h-64 rounded-2xl overflow-hidden shadow-sm relative bg-gray-200">
                 {/* Decorative placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center bg-bahari-brown/5">
                    <span className="text-bahari-brown/40 font-serif text-xl">Karte wird geladen...</span>
                 </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-bahari-brown" variants={panelVariants}>
            <h4 className="text-2xl font-serif text-bahari-brown mb-2">Schreiben Sie uns</h4>
            <p className="text-gray-600 mb-8">Haben Sie Fragen oder möchten Sie einen Termin anfragen? Nutzen Sie gerne unser Formular.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Ihr Name" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Ihre Nummer" />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="ihre.email@beispiel.de" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Wie können wir Ihnen helfen?"></textarea>
                </div>

                <button type="submit" className="w-full bg-bahari-brown text-white py-3 rounded-lg font-medium hover:bg-bahari-orange transition-colors flex items-center justify-center gap-2">
                    <SendIcon size={18} />
                    Nachricht senden
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;