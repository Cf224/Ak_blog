import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Animation variants for navigation items
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20"
      style={{
        background: 'linear-gradient(45deg, #0f172a, #1e3a8a, #701a75, #0f172a)',
        backgroundSize: '400%',
        animation: 'holographic 10s ease infinite',
      }}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particles" />
      </div>
      {/* CSS Styles */}
      <style>
        {`
          @keyframes holographic {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .particles {
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.3)"/></svg>') repeat;
            background-size: 20px 20px;
            animation: particles 25s linear infinite;
            opacity: 0.2;
          }
          @keyframes particles {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100px); }
          }
          .neon-glow {
            text-shadow: 0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.6), 0 0 15px rgba(0, 255, 255, 0.4);
          }
          .neon-underline {
            position: relative;
          }
          .neon-underline::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(to right, #00f7ff, #ff00ff);
            transition: width 0.3s ease;
          }
          .neon-underline:hover::after {
            width: 100%;
          }
        `}
      </style>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl md:text-3xl font-bold tracking-widest text-yellow-400 neon-glow"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          AK
        </motion.h1>
        <motion.nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
            {['home', 'about', 'services', 'contact'].map((section, index) => (
              <motion.li
                key={section}
                variants={navItemVariants}
              >
                <a
                  href={`#${section}`}
                  className="relative text-gray-200 neon-underline hover:text-yellow-400 transition duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;