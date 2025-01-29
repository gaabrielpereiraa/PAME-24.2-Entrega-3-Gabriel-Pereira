"use client";

import React, { useState, useEffect} from 'react';
import { useUser } from '../../../context/UserContext';
import { useRouter } from 'next/navigation';


const Perfil: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { logout } = useUser();
  
  useEffect(() => {
      if (!user) {
        router.push("/Login");
      }
    }, [user, router]); // ✅ Runs only when `user` changes
  
    if (!user) return null;

  return (
    <div className="container mx-auto p-8">
      <div className="bg-pink-logo p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
          </div>
        </div>
        <p className="mt-4">{user.bio}</p>
        <div className="mt-4 flex justify-between ml-[68vw]">
          <button type="submit" className="bg-red-500 hover:bg-red-950 text-zinc-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={logout}>
          Desconectar
        </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4 text-gray-200">Posts</h3>
      </div>
    </div>
  );
};

export default Perfil;
