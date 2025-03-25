import React, { useEffect, useRef } from 'react';
import { Star, ArrowRight, CheckCircle2, Timer, TrendingUp, Dumbbell } from 'lucide-react';

function App() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStar = () => {
      if (!starfieldRef.current) return;
      
      const star = document.createElement('div');
      const duration = 5 + Math.random() * 8; // Random duration between 5-13 seconds
      const isLeftToRight = Math.random() > 0.5;
      const size = 0.5 + Math.random() * 0.5; // Random size between 50% and 100%
      
      star.className = 'star';
      star.style.cssText = `
        position: absolute;
        top: ${Math.random() * 100}%;
        transform: scale(${size});
        animation: ${isLeftToRight ? 'starAnimationLTR' : 'starAnimationRTL'} ${duration}s linear;
      `;
      
      starfieldRef.current.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create initial stars with staggered timing
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createStar(), i * 200);
    }

    // Create new stars at random intervals
    const createStarWithRandomInterval = () => {
      createStar();
      const nextInterval = 300 + Math.random() * 700; // Random interval between 300-1000ms
      setTimeout(createStarWithRandomInterval, nextInterval);
    };

    const timeout = setTimeout(createStarWithRandomInterval, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div ref={starfieldRef} className="starfield" />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-blue-950 to-gray-900 py-20 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Altura Máxima</h1>
          <p className="text-2xl mb-8">Ganhe até 6 centímetros de altura em apenas 2 meses com métodos 100% naturais</p>
          <div className="flex justify-center gap-4 mb-8">
            <div className="flex items-center">
              <Star className="text-blue-400" />
              <span className="ml-2">4.8/5 (937 avaliações)</span>
            </div>
            <div className="flex items-center">
              <Timer className="text-blue-400" />
              <span className="ml-2">Resultados em 60 dias</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Product Image Placeholder */}
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <div className="aspect-[3/4] bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-400">Imagem do E-book</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-gray-400 line-through">R$ 30,00</span>
              <span className="text-3xl font-bold text-blue-400">R$ 21,99</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center w-full">
              Quero Crescer Agora <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <TrendingUp className="text-blue-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">Resultados Comprovados</h3>
            <p>Método testado e aprovado por centenas de pessoas que conquistaram altura extra de forma natural.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <Dumbbell className="text-blue-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">Exercícios Simples</h3>
            <p>Rotina de exercícios fáceis de fazer em casa, sem necessidade de equipamentos especiais.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <CheckCircle2 className="text-blue-400 mb-4 h-8 w-8" />
            <h3 className="text-xl font-bold mb-2">100% Natural</h3>
            <p>Técnicas naturais que estimulam seu corpo a atingir seu potencial máximo de crescimento.</p>
          </div>
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">O Que Dizem Nossos Clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Pedro Silva",
                age: "19 anos",
                text: "Cresci 5.5cm em 2 meses seguindo o método. Nunca pensei que seria possível!",
                rating: 5
              },
              {
                name: "Lucas Santos",
                age: "22 anos",
                text: "Os exercícios são realmente simples de fazer e os resultados começaram a aparecer já no primeiro mês.",
                rating: 5
              },
              {
                name: "Gabriel Oliveira",
                age: "20 anos",
                text: "Método incrível! Consegui ganhar altura de forma natural e saudável.",
                rating: 5
              },
              {
                name: "João Costa",
                age: "21 anos",
                text: "As dicas de alimentação e exercícios fizeram toda diferença. Recomendo!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="text-blue-400 h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mb-4">"{testimonial.text}"</p>
                <div className="text-sm text-gray-400">
                  <strong>{testimonial.name}</strong> • {testimonial.age}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-blue-900 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Comece Sua Transformação Hoje</h2>
          <p className="text-xl mb-8">Não perca mais tempo - conquiste a altura que você sempre sonhou!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
            Garantir Minha Vaga por R$ 21,99
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-20 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Altura Máxima. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;