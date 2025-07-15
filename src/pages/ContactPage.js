import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
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
      id="contact"
      className="min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-6 text-white"
      style={{
        background: 'linear-gradient(45deg, #1e3a8a, #4b0082, #1e3a8a)',
        backgroundSize: '200%',
        animation: 'techGradient 15s ease infinite',
      }}
    >
      <div className="absolute inset-0 pointer-events-none circuit-bg" />
      <style>
        {`
          @keyframes techGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .circuit-bg {
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" opacity="0.1"><path d="M10 10h80v80H10zM20 20h60m-60 20h60m-60 20h60M30 10v80M50 10v80M70 10v80" stroke="rgba(0, 255, 255, 0.3)" stroke-width="2"/></svg>') repeat;
            background-size: 50px 50px;
            animation: circuitFlow 30s linear infinite;
          }
          @keyframes circuitFlow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(-50px, -50px); }
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
          Contact Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-200 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm always open to new challenges, collaborations, or freelance opportunities. Whether you're a startup, a company, or an individual with a big idea—I’d love to hear from you.
        </motion.p>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          📧 Email me at: <a href="mailto:arun@example.com" className="underline text-teal-400 neon-glow">arun@example.com</a>
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              href: 'mailto:arun@example.com',
              text: '📤 Send Email',
              bg: 'bg-gradient-to-r from-cyan-500 to-indigo-600',
              hoverBg: 'hover:from-cyan-600 hover:to-indigo-700',
            },
            {
              href: 'https://www.linkedin.com/in/your-profile',
              text: '💼 LinkedIn',
              bg: 'bg-gradient-to-r from-blue-500 to-blue-700',
              hoverBg: 'hover:from-blue-600 hover:to-blue-800',
            },
            {
              href: 'https://github.com/your-username',
              text: '🖥️ GitHub',
              bg: 'bg-gradient-to-r from-gray-700 to-gray-900',
              hoverBg: 'hover:from-gray-800 hover:to-black',
            },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`text-white px-6 py-3 rounded-lg ${link.bg} ${link.hoverBg} transition-all duration-300 font-semibold`}
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
            >
              {link.text}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;