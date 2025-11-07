import React from 'react'
import { useEffect, useState } from "react";
import './Characters.css';
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedBackground from "./AnimatedBackground";

function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    
    const fetchData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }                             
    };

    fetchData();
  }, []);

  if (loading) return (
    <AnimatedBackground>
      <div className="loading flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Loading characters...</div>
      </div>
    </AnimatedBackground>
  );
  
  if (error) return (
    <AnimatedBackground>
      <div className="error flex justify-center items-center min-h-screen">
        <div className="text-white text-xl">Error loading characters</div>
      </div>
    </AnimatedBackground>
  );

  return (
    <AnimatedBackground>
      <div 
        className="characters-container w-full py-12"
        data-aos="fade-up"
      >
        <h2
          className="text-4xl text-center md:text-5xl font-bold my-12 tracking-widest drop-shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          HOGWARTS CHARACTERS
        </h2>
        <div className="characters-grid max-w-7xl mx-auto px-6">
          {data?.slice(0, 10).map((character, index) => (
            <CharacterCard key={character.id || index} character={character} />
          ))}
        </div>
      </div>
    </AnimatedBackground>
  );
}

function CharacterCard({ character }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="character-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="character-image-container">
        <img 
          src={character.image || '/placeholder-wizard.png'} 
          alt={character.name}
          className={`character-image ${isHovered ? 'hovered' : ''}`}
          onError={(e) => {
            e.target.src = '/placeholder-wizard.png';
          }}
        />
        {isHovered && (
          <div className="character-details">
            <h3>{character.name}</h3>
            <p><strong>House:</strong> {character.house || 'Unknown'}</p>
            <p><strong>Ancestry:</strong> {character.ancestry || 'Unknown'}</p>
            <p><strong>Patronus:</strong> {character.patronus || 'Unknown'}</p>
            <p><strong>Actor:</strong> {character.actor}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Characters() {
  return <DataFetchingComponent />;
}

export default Characters;