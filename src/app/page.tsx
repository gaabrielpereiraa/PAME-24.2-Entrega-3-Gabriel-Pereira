"use client";
import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { Lolipop } from '../models/lolipop'
import Post from '../components/Post'
import { useRouter } from 'next/navigation';


const Home: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();

  const lolipops = [
    new Lolipop('1', 'Pirulito de Cereja', 'Cereja', '5', 'Pirulito de cereja', 'Pirulito de cereja muito foda', 'https://m.media-amazon.com/images/I/51chR9jy2VS.jpg', 'Cereja', true),
    new Lolipop('2', 'Pirulito de Cereja', 'Cereja', '5', 'Pirulito de cereja', 'Pirulito de cereja muito foda', 'https://m.media-amazon.com/images/I/51chR9jy2VS.jpg', 'Cereja', true),
    new Lolipop('3', 'Pirulito de Cereja', 'Cereja', '5', 'Pirulito de cereja', 'Pirulito de cereja muito foda', 'https://m.media-amazon.com/images/I/51chR9jy2VS.jpg', 'Cereja', true),
    new Lolipop('4', 'Pirulito de Cereja', 'Cereja', '5', 'Pirulito de cereja', 'Pirulito de cereja muito foda', 'https://m.media-amazon.com/images/I/51chR9jy2VS.jpg', 'Cereja', true)
  ]
  useEffect(() => {
    if (!user) {
      router.push("/Login");
    }
  }, [user, router]); // ✅ Runs only when `user` changes

  if (!user) return null;
  return (
    <div className="max-w-lg mx-auto w-[30vw] h-30">
      <div className='mt-[8vh] flex flex-col gap-5'>
        {lolipops.map((lolipop) => (
          <Post lolipop={lolipop} username={user.username} key={lolipop.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
