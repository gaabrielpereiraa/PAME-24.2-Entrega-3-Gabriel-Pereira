"use client";

import React, { useState, useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { useRouter } from 'next/navigation';
import FilteredPostsComponent from '../../components/FilteredPostsComponent';

const Perfil: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const { logout } = useUser();

  if (!user) {
    router.push('/Login');
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-pink-logo p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <img className="w-24 h-24 bg-gray-300 rounded-full mr-6" src='https://i.postimg.cc/4yZfP6gf/logo.jpg' alt='Foto de perfil'/>
          <div>
            <h2 className="text-2xl font-bold">{user.username}</h2>
          </div>
        </div>
        <div className="mt-4 flex justify-between ml-[68vw]">
          <button type="submit" className="bg-red-500 hover:bg-red-950 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={logout}>
          Desconectar
        </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
