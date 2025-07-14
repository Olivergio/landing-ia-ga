import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      <div className="max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Pequeno, mas quer vender como os grandes?
        </h1>
        <p className="text-gray-600 mb-6">
          Descubra como automatizar marketing, atendimento e vendas usando inteligência artificial — sem precisar entender nada de tecnologia.
        </p>
        <a
          href="#checkout"
          className="block w-full text-center bg-black text-white py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
        >
          QUERO ACESSAR O GUIA AGORA
        </a>
      </div>
    </div>
  );
}
