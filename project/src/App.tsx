import React from 'react';
import { BookOpen, Code, CodeSquare, Server, Layout } from 'lucide-react';

interface Discipline {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const disciplines: Discipline[] = [
  {
    title: "Design Responsivo",
    description: "Estudo de técnicas e princípios para criar interfaces web que se adaptam a diferentes dispositivos e tamanhos de tela, garantindo uma experiência consistente para todos os usuários.",
    icon: <Layout className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "JavaScript",
    description: "Linguagem de programação essencial para desenvolvimento web, permitindo criar interações dinâmicas, manipular o DOM e construir aplicações web modernas.",
    icon: <Code className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "TypeScript",
    description: "Superset do JavaScript que adiciona tipagem estática, interfaces e outros recursos avançados, melhorando a qualidade e manutenibilidade do código.",
    icon: <CodeSquare className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Node.js",
    description: "Ambiente de execução JavaScript server-side que permite construir aplicações backend escaláveis e eficientes usando JavaScript.",
    icon: <Server className="w-8 h-8 text-green-500" />,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-indigo-600" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Minhas Disciplinas</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((discipline, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 rounded-lg mb-4">
                  {discipline.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {discipline.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {discipline.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2025 Desenvolvido por João Pedro. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;