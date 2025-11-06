import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hero from "../assets/cover.jpg"; // your cover image path

const Hero = () => {
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
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      {/* Dark overlay with spotlight following cursor */}
      <div
        className="absolute inset-0 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(
            400px circle at ${position.x}px ${position.y}px,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.8) 80%
          )`,
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6" data-aos="fade-up">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-4 drop-shadow-lg">
          WELCOME TO HOGWARTS
        </h1>
        <p
          className="text-lg md:text-xl mb-6 text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Discover the world of magic, spells, and adventures in the wizarding universe.
        </p>
        <button
          className="mt-2 px-8 py-3 border-1 border-white text-white rounded-[20px] uppercase tracking-wider font-semibold transition-all duration-3000 hover:bg-white hover:text-black shadow-[0_0_15px_#ffffff80] hover:shadow-[0_0_25px_#ffffffcc]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
