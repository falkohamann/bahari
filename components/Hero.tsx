import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const scaleOnScroll = useTransform(scrollYProgress, [0, 1], [1.03, 0.98]);
  const yOnScroll = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const smoothScale = useSpring(scaleOnScroll, { stiffness: 90, damping: 22, mass: 0.6 });
  const smoothY = useSpring(yOnScroll, { stiffness: 90, damping: 22, mass: 0.6 });

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bahari-stone"
    >
      {/* Kinetic title image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{
            scale: shouldReduceMotion ? 1 : smoothScale,
            y: shouldReduceMotion ? 0 : smoothY,
          }}
        >
          <div
            className="absolute inset-0 bg-[#f4f1eb] bg-[url('/images/title.png')] bg-contain bg-no-repeat bg-center"
            style={{ opacity: 0.9, filter: 'blur(0px)', transform: 'none' }}
          />
        </motion.div>
      </div>

      <div className="absolute top-32 left-6 sm:top-36 sm:left-10 z-10 text-left max-w-xl">
        <div>
          <h2 className="text-bahari-brown/80 text-lg sm:text-xl font-sans tracking-[0.2em] uppercase mb-4">
            Kosmetikstudio
          </h2>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-script text-bahari-brown mb-6">
            Bahari
          </h1>
          <div className="flex items-center justify-start gap-4 mb-8">
            <span className="h-[1px] w-12 bg-bahari-brown/40"></span>
            <span className="text-bahari-brown/80 font-serif italic text-xl sm:text-2xl">
              Äußerlich strahlen, innerlich leuchten
            </span>
            <span className="h-[1px] w-12 bg-bahari-brown/40"></span>
          </div>
          
          <p className="text-bahari-dark/80 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            "Schenke dir selbst jeden Tag die schönsten Momente und bade Körper, Seele und Geist in innerer Harmonie."
          </p>
        </div>

      </div>

    </div>
  );
};

export default Hero;