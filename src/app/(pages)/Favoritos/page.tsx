"use client";
import React, { useEffect, useState } from "react";
import { Lolipop } from "../../models/lolipop";
import Post from "../../components/Post";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Lolipop[]>([]);

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.lolipops) {
      setFavorites(user.lolipops);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Você ainda não favoritou nenhum pirulito.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {favorites.map((lolipop) => (
            <Post key={lolipop.id} lolipop={lolipop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
