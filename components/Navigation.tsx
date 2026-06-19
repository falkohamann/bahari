import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { EASE_OUT_EXPO } from '../motion';
import { MenuIcon, XIcon, WhatsAppIcon } from './icons';

const NAV_LINKS = [
  { name: 'Leistungen', href: '#leistungen' },
  { name: 'Schatzkammer', href: '#schatzkammer' },
  { name: 'Über Uns', href: '#ueber-uns' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'Kontakt', href: '#kontakt' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsAppNumber = CONTACT_INFO.phone.replace(/\D/g, '').replace(/^0/, '49');
  const whatsAppLink = `https://wa.me/${whatsAppNumber}`;

  return (
    <motion.nav
      layout
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      className="fixed w-full z-50 transition-all duration-300 bg-[#F5F1EB] py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-script text-2xl sm:text-3xl text-bahari-brown">
              Bahari Kosmetikstudio
            </a>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm uppercase tracking-widest text-bahari-brown hover:text-bahari-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-[#20bd5a] transition-colors text-sm font-medium shadow-sm"
            >
              <WhatsAppIcon size={20} className="flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-bahari-brown focus:outline-none focus:ring-2 focus:ring-bahari-orange focus:ring-offset-2"
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isOpen}
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
            className="lg:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-center text-base font-medium text-bahari-dark hover:text-bahari-orange hover:bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 mx-3 py-3 text-center bg-[#25D366] text-white rounded-full font-medium"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT_EXPO, delay: 0.05 }}
              >
                <span className="flex justify-center items-center gap-2">
                  <WhatsAppIcon size={20} />
                  WhatsApp
                </span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;