"use client";
import { Lolipop } from "../../../models/lolipop";
import { lolipops } from "../../../models/lolipops_list";

interface Props {
  params: { id: string };
}

export default function LolipopDetails({ params }: Props) {
  const loli = lolipops.find((l) => l.id === params.id);

  if (!loli) {
    return <div className="text-center text-red-500 text-xl mt-10">Produto não encontrado</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-10">
      {/* Product Image */}
      <div className="w-[83vw] lg:w-1/2 flex justify-center">
        <img
          src={loli.images}
          alt={loli.name}
          className="rounded-lg shadow-md w-[500px] h-[500px] object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="w-[83vw] lg:w-1/2 p-10">
        <h1 className="text-5xl font-bold text-gray-800">{loli.name}</h1>
        <p className="text-gray-500 text-2xl mt-4">{loli.comp_desc}</p>
        <p className="text-4xl font-semibold text-green-600 mt-6">R$ {loli.price}</p>

        {/* Action Buttons */}
        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition">
            Comprar Agora
          </button>
          
          {/* Availability Text (Below Button) */}
          <p className={`mt-4 text-xl font-bold ${loli.available ? "text-green-600" : "text-red-600"}`}>
            {loli.available ? "Disponível" : "Não disponível"}
          </p>
        </div>
      </div>
    </div>
  );
}
