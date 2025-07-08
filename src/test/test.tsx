import React, { useState } from 'react';
import { FileText, Send, ArrowLeft, User, Calendar, Eye } from 'lucide-react';

const BlogProject = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Dados de exemplo para os posts
  const posts = [
    {
      id: 1,
      title: "Bem-vindo ao meu blog",
      content: "Este é o primeiro post do meu blog. Aqui compartilho ideias, experiências e conhecimentos sobre diversos temas.",
      date: "2025-07-01",
      author: "Blog Author",
      views: 127
    },
    {
      id: 2,
      title: "Desenvolvendo com React",
      content: "React é uma biblioteca JavaScript incrível para criar interfaces de usuário. Neste post, vou compartilhar algumas dicas e truques.",
      date: "2025-06-28",
      author: "Blog Author",
      views: 89
    },
    {
      id: 3,
      title: "Design e UX",
      content: "A experiência do usuário é fundamental em qualquer aplicação. Vamos explorar alguns princípios básicos de design.",
      date: "2025-06-25",
      author: "Blog Author",
      views: 156
    }
  ];

  const handleApiCall = async () => {
    setIsLoading(true);
    try {
      // Simulando uma chamada à API
      await new Promise(resolve => setTimeout(resolve, 2000));
      setApiResponse('Sucesso! Dados recebidos da API: { status: "ok", timestamp: "' + new Date().toLocaleString('pt-BR') + '" }');
    } catch (error) {
      setApiResponse('Erro ao chamar a API: ' + error.message);
    }
    setIsLoading(false);
  };

  const WelcomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 animate-pulse">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Meu Blog
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Bem-vindo ao meu espaço digital onde compartilho ideias, experiências e conhecimentos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => setCurrentPage('posts')}
            className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
          >
            <div className="flex items-center justify-center gap-3">
              <FileText className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Ver Posts</span>
            </div>
          </button>
          
          <button
            onClick={handleApiCall}
            disabled={isLoading}
            className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center gap-3">
              <Send className={`w-6 h-6 transition-transform duration-300 ${isLoading ? 'animate-spin' : 'group-hover:translate-x-1'}`} />
              <span className="text-lg">
                {isLoading ? 'Carregando...' : 'Chamar API'}
              </span>
            </div>
          </button>
        </div>
        
        {apiResponse && (
          <div className="mt-8 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">Resposta da API:</h3>
            <p className="text-green-400 font-mono text-sm break-all">{apiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );

  const PostsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Posts do Blog</h1>
            <button
              onClick={() => setCurrentPage('welcome')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
                  Ler mais
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
            Carregar mais posts
          </button>
        </div>
      </main>
    </div>
  );

  return (
    <div>
      {currentPage === 'welcome' && <WelcomePage />}
      {currentPage === 'posts' && <PostsPage />}
    </div>
  );
};

export default BlogProject;