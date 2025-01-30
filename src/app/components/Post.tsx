import React, { useState, useEffect } from "react";
import { Lolipop } from "../models/lolipop";
import Link from "next/link";

interface PostProps {
  lolipop: Lolipop;
}

const Post: React.FC<PostProps> = ({ lolipop }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      const storedUser = JSON.parse(localStorage.getItem(email) || "{}");
      if (storedUser.lolipops && storedUser.lolipops.some((item: Lolipop) => item.id === lolipop.id)) {
        setIsFavorited(true);
      }
    }
  }, [lolipop.id]);

  const handleFavorite = () => {
    const email = localStorage.getItem("email");
    if (!email) return;

    let user = JSON.parse(localStorage.getItem(email) || "{}");

    if (!user.lolipops) {
      user.lolipops = [];
    }

    if (!user.lolipops.some((item: Lolipop) => item.id === lolipop.id)) {
      user.lolipops.push(lolipop);
      setIsFavorited(true);
    } else {
      user.lolipops = user.lolipops.filter((item: Lolipop) => item.id !== lolipop.id);
      setIsFavorited(false);
    }

    // Save the updated user object back to localStorage
    localStorage.setItem(email, JSON.stringify(user));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-300">
      {/* Product Image */}
      <div className="flex justify-center">
        <img className="h-48 w-48 object-cover rounded-lg shadow-md" src={lolipop.images} alt={lolipop.name} />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">{lolipop.name}</h2>
        
        {/* Display Price */}
        <p className="text-xl font-bold text-green-600 mt-2">R$ {lolipop.price}</p>

        <p className="text-gray-600 text-md mt-2">{lolipop.brief_desc}</p>
        <p className="text-gray-700 font-semibold mt-2">
          Ingredientes: <span className="font-normal">{lolipop.ingredients}</span>
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          className="flex-1 bg-pink-logo hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-lg transition text-center"
          href={`Lolipop/${lolipop.id}`}
        >
          Ver mais detalhes
        </a>
        <button
          onClick={handleFavorite}
          className={`flex-1 ${isFavorited ? "bg-red-700" : "bg-red-600"} hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition`}
        >
          {isFavorited ? "Favoritado" : "Favoritar"}
        </button>
      </div>
    </div>
  );
};

export default Post;
