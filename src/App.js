import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans p-6">
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">Descubra como usar Inteligência Artificial para escalar seu pequeno negócio</h1>
        <p className="text-lg mb-6">Sem precisar saber nada de tecnologia. Sem contratar equipe. Sem gastar rios de dinheiro.</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="font-semibold">Oferta por tempo limitado:</p>
          <p>De <span className="line-through">R$97</span> por apenas <span className="font-bold text-green-700 text-xl">R$27</span></p>
          <p className="text-sm text-gray-700 mt-1">Válido apenas para os 100 primeiros downloads.</p>
        </div>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Automatize atendimento, marketing e vendas</li>
          <li>Use IA para economizar tempo e aumentar lucro</li>
          <li>Mais de 240 páginas práticas com ferramentas testadas</li>
          <li>Ideal para quem tem loja online, física ou infoproduto</li>
        </ul>
        <a href="#checkout" className="inline-block bg-black text-white text-lg px-6 py-3 rounded-xl hover:bg-gray-800 transition">
          QUERO ACESSAR O GUIA AGORA
        </a>
        <p className="text-sm text-gray-600 mt-4">Garantia incondicional: não gostou, é só pedir reembolso em até 7 dias.</p>
      </section>
    </div>
  );
}
