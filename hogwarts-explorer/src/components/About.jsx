import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden"
    >
      {/* Black and Purple Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
      {/* Dark overlay with spotlight following cursor - matching Hero */}
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

      {/* Additional Purple Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 via-transparent to-purple-800/10"></div>

      {/* Content */}
      <div
        className="relative z-10 max-w-3xl px-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-widest drop-shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          ABOUT HOGWARTS
        </h2>

        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Step into a world where magic thrives, where every spell whispers history, and
          every shadow hides a story untold. Hogwarts isn't just a school — it's a
          living legacy built on courage, friendship, and the pursuit of knowledge.
        </p>

        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Within its ancient stone walls, portraits move, staircases shift, and mysteries
          awaken with every sunrise. From enchanted classrooms to secret passageways,
          every corner holds a lesson that shapes not just wizards, but heroes.
        </p>

        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Here, curiosity is power, and the magic you discover is only the beginning of your
          own story.
        </p>

        {/* Optional: Add a button to match Hero section styling */}
        <button
          className="mt-8 px-8 py-3 border border-white text-white rounded-[20px] uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-white hover:text-black shadow-[0_0_15px_#ffffff40] hover:shadow-[0_0_25px_#ffffff80]"
          data-aos="zoom-in"
          data-aos-delay="1000"
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default About;