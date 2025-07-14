import React from "react";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans p-6">
      <section className="max-w-3xl mx-auto py-12 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold">IA PARA PEQUENOS NEGÓCIOS</h1>
        <h2 className="text-xl text-gray-700">Como automatizar seu marketing, atendimento e vendas usando inteligência artificial — sem depender de ninguém, nem entender de tecnologia.</h2>

        <div className="space-y-2 text-lg">
          <p>😤 Cansado de perder tempo com tarefas repetitivas?</p>
          <p>😓 Atende cliente, responde DM, tenta vender e ainda sobra coisa pra fazer?</p>
          <p>😣 Sente que tá sempre correndo atrás enquanto os grandes dominam o jogo?</p>
          <p>Respira. Eu vou te mostrar como mudar isso.</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Esse guia é pra você que...</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Tem um negócio pequeno e quer jogar grande</li>
            <li>Já ouviu falar de IA... mas não sabe por onde começar</li>
            <li>Quer colocar a tecnologia pra trabalhar por você</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">O que você vai encontrar dentro do guia:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Ferramentas práticas com passo a passo (ChatGPT, MidJourney, automações, etc.)</li>
            <li>Criação de conteúdo, atendimento automatizado, aumento de vendas</li>
            <li>Sem enrolação, sem termos técnicos, direto ao ponto</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Você vai aprender a...</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Criar descrições de produto automaticamente</li>
            <li>Responder clientes e leads com IA</li>
            <li>Postar conteúdo e até vídeos com IA</li>
            <li>Economizar tempo e aumentar vendas</li>
          </ul>
        </div>

        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600">
          <p><strong>Oferta relâmpago:</strong> De <span className="line-through">R$97</span> por <span className="font-bold text-xl text-green-700">R$27</span></p>
          <p className="text-sm text-gray-700">Apenas para os 100 primeiros. Depois o valor volta.</p>
        </div>

        <div>
          <a href="#checkout" className="inline-block bg-black text-white px-8 py-3 rounded-xl text-lg hover:bg-gray-800 transition">
            QUERO ACESSAR O GUIA AGORA
          </a>
          <p className="text-sm text-gray-600 mt-2">Garantia total: 7 dias. Se não gostar, devolvemos o dinheiro. Simples assim.</p>
        </div>
      </section>
    </div>
  );
}
