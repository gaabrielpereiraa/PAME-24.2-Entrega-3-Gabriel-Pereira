'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '../context/UserContext';

const Sidebar: React.FC = () => {
    const router = useRouter();
    const { user } = useUser();

    return (
        <div className="flex flex-col">
        <div className="w-[17vw] bg-white h-[100vh] p-5 border-r border-gray-200 content-center overflow-auto">
            <img src="https://i.postimg.cc/4yZfP6gf/logo.jpg" alt="Logo" className="h-36 w-36 ml-14 mb-24"></img>
            <nav className="space-y-36">
                <a href="/" className="flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                    <div className="ml-5 text-lg">Página Inicial</div>
                </a>
                <a href="/Favoritos" className="flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-300">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className='w-10 h-10'>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div className="ml-5 text-lg">Favoritos</div>
                </a>
                <a href="/Perfil" className="flex items-center p-2 text-gray-500 rounded-full hover:bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.333 0-10 1.667-10 5v3h20v-3c0-3.333-6.667-5-10-5z"/>
                </svg>
                    <div className="ml-5 text-lg">Perfil</div>
                </a>
            </nav>
            
        </div>
        
    </div>

    
    )   ;
}

export default Sidebar