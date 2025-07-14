import React from "react";

export default function App() {
  return (
    <main className="max-w-4xl mx-auto p-6 md:p-10 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">IA PARA PEQUENOS NEGÓCIOS</h1>
        <p className="text-xl text-gray-700">Como automatizar seu marketing, atendimento e vendas com inteligência artificial — mesmo sem saber nada de tecnologia.</p>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow space-y-4">
        <p className="text-lg">😤 “Eu faço tudo sozinho. Não tenho tempo. Não tenho equipe. E ainda preciso vender.”</p>
        <p className="text-lg">Responder cliente, criar post, cuidar de entrega, tentar vender… Enquanto os grandes estão automatizando tudo com IA.</p>
        <p className="text-lg font-semibold">Parece injusto. Mas não precisa mais ser.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">🚀 O que você vai encontrar dentro do guia:</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Ferramentas de IA gratuitas para marketing, vendas e atendimento</li>
          <li>Como usar ChatGPT, MidJourney, IA de voz e mais</li>
          <li>Criação de conteúdo, atendimento automático, vendas no piloto</li>
          <li>242 páginas com tutoriais, prints, links e guias práticos</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-bold">🧱 Você vai aprender a:</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Criar descrições de produtos com IA</li>
          <li>Responder clientes no automático</li>
          <li>Postar conteúdo em 3 minutos</li>
          <li>Economizar tempo e aumentar lucro</li>
        </ul>
      </section>

      <section className="bg-yellow-100 p-6 rounded-xl border-l-4 border-yellow-500 space-y-2">
        <p><strong>Oferta especial:</strong> De <span className="line-through">R$97</span> por <span className="text-xl font-bold text-green-700">R$27</span></p>
        <p className="text-sm text-gray-700">Válido apenas para os 100 primeiros. Depois, volta ao preço original.</p>
      </section>

      <section className="space-y-1">
        <h2 className="text-xl font-semibold">❤️ Depoimentos:</h2>
        <p>“Automatizei meu atendimento e dobrei as vendas.” – <strong>Juliana M.</strong></p>
        <p>“Uso pra criar conteúdo, responder inbox e gerar campanhas.” – <strong>Felipe T.</strong></p>
        <p>“Consegui organizar tudo sozinha, finalmente.” – <strong>Mariana C.</strong></p>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600 space-y-2">
        <h3 className="text-xl font-bold">🛡️ Garantia total:</h3>
        <p>7 dias pra testar. Não gostou? Devolvemos seu dinheiro. Sem perguntas.</p>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 space-y-2">
        <h3 className="text-xl font-bold">🎁 Bônus:</h3>
        <p>PDF com 15 prompts prontos para ChatGPT, aplicados a negócios reais.</p>
      </section>

      <section className="space-y-2">
        <a href="#checkout" className="block bg-black text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition">
          QUERO ACESSAR O GUIA AGORA
        </a>
        <p className="text-center text-sm text-gray-600">Garantia de 7 dias. Compra 100% segura.</p>
      </section>
    </main>
  );
}
