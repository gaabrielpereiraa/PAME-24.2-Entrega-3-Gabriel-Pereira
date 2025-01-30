import React from "react";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh] border-2 border-red-500">
      <nav className="flex w-[20vw] h-[60vh] border-2 border-green-500">
        Oi, eu estou fixa
      </nav>
      <div className="flex flex-col w-[80vw] h-[100%] border-2 border-yellow-500 overflow-y-auto">
        <p className="mb-20 border-2 border-black"> Conteudo 1</p>
        <p className="mb-20 border-2 border-black"> Conteudo 2</p>
        <p className="mb-20 border-2 border-black"> Conteudo 3</p>
        <p className="mb-20 border-2 border-black"> Conteudo 4</p>
        <p className="mb-20 border-2 border-black"> Conteudo 5</p>
        <p className="mb-20 border-2 border-black"> Conteudo 6</p>
        <p className="mb-20 border-2 border-black"> Conteudo 7</p>
        <p className="mb-20 border-2 border-black"> Conteudo 8</p>
        <p className="mb-20 border-2 border-black"> Conteudo 9</p>
      </div>
    </div>
  );
}