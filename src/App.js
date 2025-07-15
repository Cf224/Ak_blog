import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './styles/tailwind.css';

function App() {
  return (
    <div className="font-sans scroll-smooth bg-gray-900 text-white">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Home />
        <AboutPage />
        <ServicesPage />
        <ContactPage />
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;