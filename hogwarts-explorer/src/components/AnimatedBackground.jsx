import React, { useEffect, useState } from 'react';

function AnimatedBackground({ children, className = "" }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden ${className}`}>
      {/* Black and Purple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-950/30"></div>

      {/* Dark overlay with spotlight following cursor */}
      <div
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(
            600px circle at ${position.x}px ${position.y}px,
            rgba(255,255,255,0.1) 0%,
            rgba(0,0,0,0.95) 70%
          )`,
        }}
      ></div>

      {/* Subtle magical glow effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}

export default AnimatedBackground;