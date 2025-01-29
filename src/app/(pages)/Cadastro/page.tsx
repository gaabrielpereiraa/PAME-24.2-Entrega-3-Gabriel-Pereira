"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../../context/UserContext';

const Cadastro: React.FC = () => {
    const router = useRouter();
    const { register } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        register(email, password, username, '', 0, 0, []);
        router.push('/Login');
    };
  return (
    <div className="p-8 rounded-lg shadow-md w-[30vw] items-center ml-[23vw] content-center">
    <h1 className="text-2xl font-semibold mb-4 text-zinc-700 text-center">Cadastro</h1>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Usuário</label>
            <input required type="text" id="username" name="username" className="h-14 mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-zinc-700" placeholder="Escreva seu usuário" value={username} onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input required type="email" id="email" name="email" className="h-14 mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-zinc-700" placeholder="Escreva seu email"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 font-medium">Senha</label>
            <input required type="password" id="password" name="password" className="h-14 mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-zinc-700" placeholder="Escreva sua senha" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button type="submit" className="h-14 w-full bg-pink-logo text-white py-2 px-4 rounded-md hover:bg-pink-900 focus:outline-none focus:bg-pink-800 text-lg" onClick={handleSubmit}>Cadastrar</button>
    </form>
    <p className="text-gray-600 text-sm mt-4">Já possui uma conta? <a href="/Login" className="text-pink-logo hover:underline">Login</a></p>
    </div>
  );
}

export default Cadastro;
