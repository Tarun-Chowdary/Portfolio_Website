import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 px-6">
      <h1 className="text-6xl font-gothic mb-10">About Me</h1>
      <p className="text-xl max-w-2xl font-light text-gray-400">
        I’m Tarun Chowdary Yegi, a MERN stack developer and machine learning enthusiast focused on building scalable, real-world systems. I enjoy working on problems that involve data, system design, and making intelligent models more reliable and practical.
      </p>
    </div>
  );
};

export default About;
