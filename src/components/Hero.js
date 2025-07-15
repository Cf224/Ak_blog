import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <section className="bg-blue-500 h-screen flex items-center justify-center">
      <div className="opacity-0" ref={heroRef}>
        <h2 className="text-5xl text-white">Welcome to Spag</h2>
      </div>
    </section>
  );
}

export default Hero;
