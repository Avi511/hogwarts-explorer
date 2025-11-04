import React, { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://hp-api.onrender.com/api/characters")
      .then(res => setCharacters(res.data.slice(0, 20))) // limit to 20
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Hogwarts Characters</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {characters.map((char, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform">
            <img 
              src={char.image || "https://via.placeholder.com/150"} 
              alt={char.name} 
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold">{char.name}</h2>
            <p className="text-sm text-gray-400">{char.house || "Unknown House"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
