import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

const XIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

interface LegalModalProps {
  isOpen: boolean;
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && type && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          ></motion.div>

          {/* Modal Content */}
          <motion.div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10 rounded-t-xl">
              <h2 className="text-2xl font-serif text-bahari-brown">
                {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
              </h2>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-bahari-dark"
                aria-label="Schließen"
              >
                <XIcon size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-gray-600 font-sans leading-relaxed text-sm md:text-base">
              {type === 'impressum' ? (
                <>
                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Angaben gemäß § 5 TMG</h3>
                    <p>
                      {CONTACT_INFO.name}<br />
                      {CONTACT_INFO.owner}<br />
                      {CONTACT_INFO.address}<br />
                      {CONTACT_INFO.zipCity}
                    </p>
                  </section>
                  
                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Kontakt</h3>
                    <p>
                      Telefon: {CONTACT_INFO.phone}<br />
                      E-Mail: info@bahari-kosmetik.de
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Streitschlichtung</h3>
                    <p>
                      Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br/>
                      Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                    <p className="mt-2">
                      Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                  </section>
                </>
              ) : (
                <>
                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">1. Datenschutz auf einen Blick</h3>
                    <h4 className="font-bold text-gray-800 mb-1">Allgemeine Hinweise</h4>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">2. Hosting</h3>
                    <p>
                      Wir hosten die Inhalte unserer Website bei einem externen Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                    </p>
                  </section>

                  <section>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
                    <h4 className="font-bold text-gray-800 mb-1">Datenschutz</h4>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <h4 className="font-bold text-gray-800 mt-4 mb-1">Hinweis zur verantwortlichen Stelle</h4>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br/><br/>
                      {CONTACT_INFO.name}<br/>
                      {CONTACT_INFO.owner}<br/>
                      {CONTACT_INFO.address}<br/>
                      {CONTACT_INFO.zipCity}<br/><br/>
                      Telefon: {CONTACT_INFO.phone}
                    </p>
                  </section>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LegalModal;