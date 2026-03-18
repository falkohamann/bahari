import React, { useState } from 'react';
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
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Dresdner+Straße+149+Dippoldiswalde"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2 text-sm text-bahari-orange hover:underline"
                        >
                          Route planen →
                        </a>
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
                        <SendIcon size={20} className="text-bahari-orange" />
                        </div>
                        <div>
                        <h5 className="font-semibold text-bahari-dark">E-Mail</h5>
                        <a
                          href={`mailto:${CONTACT_INFO.email}`}
                          className="text-gray-600 font-sans hover:text-bahari-orange transition-colors"
                        >
                          {CONTACT_INFO.email}
                        </a>
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

            {/* Address card replacing map placeholder */}
            <div className="bg-bahari-stone rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="text-bahari-orange w-5 h-5 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-bahari-dark">{CONTACT_INFO.address}</p>
                  <p className="text-gray-600 text-sm">{CONTACT_INFO.zipCity}</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dresdner+Straße+149+Dippoldiswalde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-bahari-brown text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-bahari-orange transition-colors self-start"
              >
                <MapPinIcon className="w-4 h-4" />
                In Google Maps öffnen →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-bahari-brown" variants={panelVariants}>
            <h4 className="text-2xl font-serif text-bahari-brown mb-2">Schreiben Sie uns</h4>
            <p className="text-gray-600 mb-8">Haben Sie Fragen oder möchten Sie einen Termin anfragen? Nutzen Sie gerne unser Formular.</p>

            {!formspreeId ? (
              <div className="py-8 text-center text-gray-600">
                <p>Bitte kontaktieren Sie uns per Telefon:</p>
                <p className="font-semibold text-bahari-brown mt-2">{CONTACT_INFO.phone}</p>
              </div>
            ) : status === 'success' ? (
              <div className="py-8 text-center">
                <p className="text-2xl mb-2">✓</p>
                <p className="text-bahari-brown font-serif text-xl mb-2">Vielen Dank!</p>
                <p className="text-gray-600">Wir melden uns bald.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                setStatus('loading');
                try {
                  const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
                    method: 'POST',
                    body: new FormData(e.currentTarget as HTMLFormElement),
                    headers: { Accept: 'application/json' },
                    signal: AbortSignal.timeout(15000),
                  });
                  setStatus(res.ok ? 'success' : 'error');
                } catch {
                  setStatus('error');
                }
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Ihr Name" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Ihre Nummer" />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="ihre.email@beispiel.de" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-bahari-orange focus:ring-1 focus:ring-bahari-orange outline-none transition-colors" placeholder="Wie können wir Ihnen helfen?"></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">Etwas ist schiefgelaufen. Bitte rufen Sie uns an.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-bahari-brown text-white py-3 rounded-lg font-medium hover:bg-bahari-orange transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <SendIcon size={18} />
                  {status === 'loading' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
