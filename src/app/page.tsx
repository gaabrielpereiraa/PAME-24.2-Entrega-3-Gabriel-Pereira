"use client";
import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import { useUser } from './context/UserContext';
import { lolipops } from './models/lolipops_list'

interface PostData {
  id: number;
  username: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const { user } = useUser();

  useEffect(() => {
    // Load posts from localStorage when component mounts
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);


  return (
    <div className="max-w-lg mx-auto w-[30vw] h-[100%] flex flex-col">
      <div className='mt-[8vh] flex flex-col overflow-y-auto gap-5'>
        {lolipops.map((lolipop) => (
          <Post lolipop={lolipop} key={lolipop.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
