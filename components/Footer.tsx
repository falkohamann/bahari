import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenImpressum, onOpenDatenschutz }) => {
  return (
    <motion.footer
      className="bg-black text-gray-500 py-8 border-t border-gray-800"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="mb-4 md:mb-0">
          <span className="font-script text-xl text-white mr-2">Bahari</span>
          &copy; {new Date().getFullYear()} {CONTACT_INFO.owner}. Alle Rechte vorbehalten.
        </div>
        <div className="flex gap-6">
          <button 
            onClick={onOpenImpressum} 
            className="hover:text-white transition-colors focus:outline-none focus:text-white"
          >
            Impressum
          </button>
          <button 
            onClick={onOpenDatenschutz} 
            className="hover:text-white transition-colors focus:outline-none focus:text-white"
          >
            Datenschutz
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;