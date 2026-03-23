import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scaleOnScroll = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);
  const yOnScroll = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const smoothScale = useSpring(scaleOnScroll, { stiffness: 90, damping: 22, mass: 0.6 });
  const smoothY = useSpring(yOnScroll, { stiffness: 90, damping: 22, mass: 0.6 });

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
    >
      {/* Full-bleed parallax background */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          scale: shouldReduceMotion ? 1 : smoothScale,
          y: shouldReduceMotion ? 0 : smoothY,
          backgroundImage: `url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=85)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Directional gradient overlay — bottom-left weighted, creates depth */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(44,34,28,0.78) 0%, rgba(44,34,28,0.50) 50%, rgba(44,34,28,0.12) 100%)',
        }}
      />

      {/* Content — bottom-left, hero budget: brand + headline + tagline + CTAs */}
      <div className="relative z-20 px-6 sm:px-10 lg:px-16 pb-16 sm:pb-20 max-w-2xl">
        <motion.p
          className="text-white/65 font-sans text-xs sm:text-sm uppercase tracking-[0.28em] mb-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.15 }}
        >
          Kosmetikstudio · Dippoldiswalde
        </motion.p>

        <motion.h1
          className="font-script text-7xl sm:text-8xl md:text-9xl text-white leading-none mb-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease, delay: 0.05 }}
        >
          Bahari
        </motion.h1>

        <motion.p
          className="text-white/80 font-serif italic text-xl sm:text-2xl mb-9 leading-snug"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
        >
          Äußerlich strahlen, innerlich leuchten.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        >
          <a
            href="#leistungen"
            className="bg-bahari-orange text-white px-7 py-3 font-sans font-semibold text-sm uppercase tracking-wider rounded-lg hover:bg-bahari-brown transition-colors"
          >
            Unsere Behandlungen
          </a>
          <a
            href="#kontakt"
            className="border border-white/55 text-white px-7 py-3 font-sans font-semibold text-sm uppercase tracking-wider rounded-lg hover:border-white hover:bg-white/10 transition-colors"
          >
            Termin anfragen
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
