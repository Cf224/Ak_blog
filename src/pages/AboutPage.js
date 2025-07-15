import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
    hidden: { opacity: 0, x: -50, rotateX: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-6 text-white"
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

      <motion.div
        className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-10 border border-white/20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ transformPerspective: 1200 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 tracking-wide neon-glow"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          variants={textVariants}
          whileHover={{ scale: 1.03, rotateY: 5, transition: { duration: 0.3 } }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-200 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm Arun from Kovilpatti, Tamil Nadu. With over 2 years of hands-on experience as a software engineer, I've developed full-scale CRMs, dashboards, and mobile-first delivery apps. My work involves clean UI design, efficient backend integration, and performance-optimized features that serve real user needs.
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I'm also passionate about <span className="font-semibold text-teal-400 neon-glow">Data Engineering</span>. I work with structured and semi-structured data using tools like <span className="font-semibold text-blue-400 neon-glow">Python, SQL, Pandas, Apache Airflow, and FastAPI</span>. I design robust pipelines for data ingestion, transformation, and storage, ensuring that analytics and insights are always built on clean, reliable foundations.
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl leading-relaxed text-gray-200 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I enjoy solving real-world problems with technology—whether it's streamlining workflows, automating systems, or unlocking business intelligence through data. My goal is to build scalable, impactful digital products that are not only functional but also intuitive and elegant.
        </motion.p>

        <motion.p
          className="mt-6 text-lg md:text-xl italic text-gray-300 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1 }}
        >
          “Code is my craft, data is my fuel, and impact is my compass.”
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition-all duration-300"
          variants={textVariants}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default AboutPage;