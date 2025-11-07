import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBackground from "./AnimatedBackground";

function About() {
  const [hogwartsData, setHogwartsData] = useState({
    characterCount: 0,
    spellCount: 0,
    houses: []
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    
    // Fetch Hogwarts data
    const fetchHogwartsData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const characters = await response.json();
        
        setHogwartsData({
          characterCount: characters.length,
          spellCount: 150, // Approximate number of spells
          houses: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
        });
      } catch (error) {
        console.log('Error fetching Hogwarts data:', error);
        setHogwartsData({
          characterCount: 200,
          spellCount: 150,
          houses: ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']
        });
      }
    };

    fetchHogwartsData();
  }, []);

  return (
    <AnimatedBackground id="about">
      <div
        className="max-w-3xl px-6 py-12"
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

        {/* Dynamic Stats from API */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-400">{hogwartsData.characterCount}+</div>
            <div className="text-sm text-gray-400">Characters</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-400">{hogwartsData.spellCount}+</div>
            <div className="text-sm text-gray-400">Spells</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-400">4</div>
            <div className="text-sm text-gray-400">Houses</div>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-bold text-purple-400">7</div>
            <div className="text-sm text-gray-400">Books</div>
          </div>
        </div>

        <p
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Within its ancient stone walls, portraits move, staircases shift, and mysteries
          awaken with every sunrise. From enchanted classrooms to secret passageways,
          every corner holds a lesson that shapes not just wizards, but heroes.
        </p>
      </div>
    </AnimatedBackground>
  );
}

export default About;