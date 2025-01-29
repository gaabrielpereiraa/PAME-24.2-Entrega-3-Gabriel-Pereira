import React, { useState } from 'react';
import { Lolipop } from '../models/lolipop'
import LikeButton from './LikeButton';


interface PostProps {
  lolipop: Lolipop
  username: string
}

const Post: React.FC<PostProps> = ({ lolipop, username }) => {
  return (
    <div className="flex flex-col w-[100%] justify-around gap-4 p-4 bg-gray-400 shadow-md rounded-lg border-zinc-700">
            <div className="flex items-center space-x-4">
              <p className="font-bold">{lolipop.name}</p>
            </div>
            <img className="h-48 bg-orange-300 rounded-lg" src={lolipop.images}/>
            <p>Descrição: {lolipop.brief_desc}</p>
            <p>Ingredientes: {lolipop.ingredients}</p>
            <div className="flex space-x-4">
              <LikeButton postId={lolipop.id} username={username} />
              <a className='mt-2'>Ver mais</a>
            </div>
          </div>
  );
};

export default Post;
