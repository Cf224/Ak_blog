import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900/90 backdrop-blur-md text-white py-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <p className="text-sm">
        © 2025 Arun Kumar. All rights reserved.
      </p>
      <motion.div
        className="mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="mailto:arun@example.com" className="hover:text-indigo-400">
          arun@example.com
        </a>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;