"use client";
import React, { useEffect, useState } from "react";
import { Lolipop } from "../../models/lolipop";
import Post from "../../components/Post";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Lolipop[]>([]);

  useEffect(() => {
    // Retrieve the current user data from localStorage
    const email = localStorage.getItem("email");
    if (!email) return;

    let user = JSON.parse(localStorage.getItem(email) || "{}");

    // Check if the user has any favorited lolipops
    if (user && user.lolipops) {
      setFavorites(user.lolipops);  // Set the favorites from the current user
    }
  }, []); // Empty dependency array ensures this runs only once on mount

    
  return (
    <div className="w-full max-w-4xl mx-auto p-6 overflow-x-hidden">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Meus Favoritos</h1>

      {/* If no favorites exist */}
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">
          Você ainda não favoritou nenhum pirulito.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {favorites.map((lolipop) => (
            <Post key={lolipop.id} lolipop={lolipop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
