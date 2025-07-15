import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
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
    hidden: { opacity: 0, x: 50, rotateX: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="services"
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
          My Services
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-200 typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I provide end-to-end digital solutions that combine frontend craftsmanship, backend logic, and data-driven engineering. My services are designed to help businesses turn ideas into scalable, maintainable products.
        </motion.p>

        <motion.ul
          className="mt-6 list-none space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Full-Stack Web & Mobile Development',
              description: 'React, Angular, Flutter & FastAPI to deliver modern, high-performance apps.',
            },
            {
              title: 'API Design & Integration',
              description: 'Secure, scalable REST APIs with auth systems, third-party services, and custom endpoints.',
            },
            {
              title: 'Data Engineering Solutions',
              description: 'Data pipelines using Python, Pandas, SQL, and automation with Airflow or custom scripts.',
            },
            {
              title: 'Dashboards & Reporting Tools',
              description: 'Interactive admin panels and dashboards for real-time analytics, CRM, and delivery platforms.',
            },
            {
              title: 'UI/UX Design',
              description: 'Clean, responsive interfaces using Tailwind CSS, motion effects, and accessibility-first principles.',
            },
          ].map((service, index) => (
            <motion.li
              key={index}
              className="flex items-start space-x-4 typewriter"
              variants={listItemVariants}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              <span className="text-teal-400 neon-glow text-2xl">•</span>
              <div>
                <span className="font-semibold text-teal-300 neon-glow">{service.title}</span>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          className="mt-6 text-gray-300 italic text-lg md:text-xl typewriter"
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          From building the foundation of your product to polishing the final user interaction—I bring both creativity and system-level thinking to every project I work on.
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-cyan-600 hover:to-indigo-700 transition-all duration-300"
          variants={textVariants}
          whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0, 255, 255, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default ServicesPage;