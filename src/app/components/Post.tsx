"use client"
import React from 'react';
import { Lolipop } from '../models/lolipop';
import Link from 'next/link';

interface PostProps {
  lolipop: Lolipop;
}



const Post: React.FC<PostProps> = ({ lolipop }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-300">
      {/* Product Image */}
      <div className="flex justify-center">
        <img className="h-48 w-48 object-cover rounded-lg shadow-md" src={lolipop.images} alt={lolipop.name} />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-800">{lolipop.name}</h2>
        <p className="text-gray-600 text-md mt-2">{lolipop.brief_desc}</p>
        <p className="text-gray-700 font-semibold mt-2">Ingredientes: <span className="font-normal">{lolipop.ingredients}</span></p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
          <a className="flex-1 bg-pink-logo hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-lg transition text-center" href={`Lolipop/${lolipop.id}`}>
            Ver mais detalhes
          </a>
        <a className="flex-1 bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-lg transition text-center">
          Favoritar
        </a>
      </div>
    </div>
  );
};

export default Post;
