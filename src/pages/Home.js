import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import myImage from '../assets/IMG_20211211_175716.jpg'; // Adjust path relative to src

const Home = () => {
  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 text-white"
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
          .pulse-border {
            animation: pulseBorder 2s infinite;
          }
          @keyframes pulseBorder {
            0%, 100% { border-color: rgba(0, 255, 255, 0.3); }
            50% { border-color: rgba(0, 255, 255, 0.8); }
          }
          .typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typing 3s steps(40, end) 1;
          }
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
      </style>

      <div className="flex w-full max-w-6xl mx-auto px-4 flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <motion.div
          className="lg:w-7/12 w-full text-center backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-10 border border-white/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ transformPerspective: 1200 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 tracking-wide neon-glow"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            variants={textVariants}
            whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
          >
            Hi, I'm ArunKumar
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200 typewriter"
            variants={textVariants}
          >
            Associate Software Engineer specializing in React, Angular, Flutter & full-stack development. Passionate about building professional solutions.
          </motion.p>
          <motion.a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition-all duration-300"
            variants={textVariants}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="lg:w-5/12 w-full flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        >
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={2000}
            className="w-full max-w-sm pulse-border border-2 rounded-2xl"
          >
            <img
              src={myImage}
              alt="ArunKumar Profile"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.4))' }}
            />
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;