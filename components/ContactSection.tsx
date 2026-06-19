import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { sectionVariants, itemVariants, leftSlideVariants, rightSlideVariants } from '../motion';
import { MapPinIcon, PhoneIcon, ClockIcon, SendIcon } from './icons';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const INPUT_CLASSES = 'w-full px-4 py-3 bg-white border border-bahari-sand rounded-lg focus:border-bahari-orange focus:ring-2 focus:ring-bahari-orange outline-none transition-colors font-sans';

const ContactSection: React.FC = () => {
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(15000),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => setStatus('idle');

  return (
    <motion.section
      id="kontakt"
      className="bg-bahari-stone py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-bahari-orange font-sans text-sm font-bold uppercase tracking-widest mb-2">Erreichbarkeit</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-bahari-brown">Kontaktieren Sie uns</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Info */}
          <motion.div className="space-y-8" variants={leftSlideVariants}>
            <h4 className="text-2xl font-serif text-bahari-brown">Kontaktdaten</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPinIcon className="text-bahari-orange w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h5 className="font-semibold text-bahari-dark">Adresse</h5>
                  <p className="text-bahari-dark/65 font-sans">{CONTACT_INFO.address}<br />{CONTACT_INFO.zipCity}</p>
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
                <PhoneIcon className="text-bahari-orange w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h5 className="font-semibold text-bahari-dark">Telefon</h5>
                  <p className="text-bahari-dark/65 font-sans">{CONTACT_INFO.phone}</p>
                  <p className="text-xs text-bahari-dark/40 mt-1">Bitte immer Vorwahl mitwählen</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <SendIcon size={20} className="text-bahari-orange mt-1 shrink-0" />
                <div>
                  <h5 className="font-semibold text-bahari-dark">E-Mail</h5>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-bahari-dark/65 font-sans hover:text-bahari-orange transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <ClockIcon className="text-bahari-orange w-5 h-5 mt-1 shrink-0" />
                <div>
                  <h5 className="font-semibold text-bahari-dark">Öffnungszeiten</h5>
                  <p className="text-bahari-dark/65 font-sans">{CONTACT_INFO.note}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div className="bg-bahari-sand/60 p-8 md:p-10 rounded-xl" variants={rightSlideVariants}>
            <h4 className="text-2xl font-serif text-bahari-brown mb-2">Schreiben Sie uns</h4>
            <p className="text-bahari-dark/60 font-sans mb-8">Haben Sie Fragen oder möchten Sie einen Termin anfragen? Nutzen Sie gerne unser Formular.</p>

            {!formspreeId ? (
              <div className="py-8 text-center text-bahari-dark/60 font-sans">
                <p>Bitte kontaktieren Sie uns per Telefon:</p>
                <p className="font-semibold text-bahari-brown mt-2">{CONTACT_INFO.phone}</p>
              </div>
            ) : status === 'success' ? (
              <div className="py-8 text-center" role="status" aria-live="polite">
                <p className="text-2xl mb-2">✓</p>
                <p className="text-bahari-brown font-serif text-xl mb-2">Vielen Dank!</p>
                <p className="text-bahari-dark/60 font-sans mb-4">Wir melden uns bald.</p>
                <button
                  onClick={handleReset}
                  className="text-sm text-bahari-orange hover:underline font-sans"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bahari-dark mb-1">Name</label>
                    <input type="text" id="name" name="name" required aria-required="true" className={INPUT_CLASSES} placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-bahari-dark mb-1">Telefon</label>
                    <input type="tel" id="phone" name="phone" className={INPUT_CLASSES} placeholder="Ihre Nummer" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bahari-dark mb-1">E-Mail</label>
                  <input type="email" id="email" name="email" required aria-required="true" className={INPUT_CLASSES} placeholder="ihre.email@beispiel.de" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-bahari-dark mb-1">Nachricht</label>
                  <textarea id="message" name="message" rows={4} required aria-required="true" className={INPUT_CLASSES} placeholder="Wie können wir Ihnen helfen?"></textarea>
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-red-600 text-sm font-sans">Etwas ist schiefgelaufen. Bitte rufen Sie uns an.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-bahari-brown text-white py-3 font-sans font-medium rounded-lg hover:bg-bahari-orange transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
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