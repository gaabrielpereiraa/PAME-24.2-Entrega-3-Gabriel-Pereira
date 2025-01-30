"use client";
import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import { useUser } from "./context/UserContext";
import { lolipops } from "./models/lolipops_list";

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Store search input
  const { user } = useUser();

  // Filtered lolipops based on search query
  const filteredLolipops = lolipops.filter((lolipop) =>
    lolipop.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto w-[30vw] h-[100%] flex flex-col">
      {/* Search Bar */}
      <div className="relative w-full max-w-m flex items-center mt-[5vh]">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Buscar"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-logo focus:ring-1 focus:ring-pink-logo bg-zinc-700 text-zinc-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search state
        />
      </div>

      {/* Filtered Lolipops List */}
      <div className="mt-[8vh] flex flex-col overflow-y-auto gap-5">
        {filteredLolipops.length > 0 ? (
          filteredLolipops.map((lolipop) => (
            <Post lolipop={lolipop} key={lolipop.id} />
          ))
        ) : (
          <p className="text-gray-400 text-center mt-4">Nenhum resultado encontrado</p>
        )}
      </div>
    </div>
  );
};

export default Home;
