"use client";
import { ArrowLeft, Calendar, Clock, Eye, FileText, Search, Send, Tag, TrendingUp, User } from 'lucide-react';
import { useState } from 'react';
// import WhatsAppComponent from './WhatsAppComponent'; //mudar nome

const [currentPage, setCurrentPage] = useState('welcome');
// import { ArrowLeft, Calendar, Clock, Eye, FileText, Search, Send, Tag, TrendingUp, User, MessageCircle } from 'lucide-react';

<button
  onClick={() => setCurrentPage('whatsapp')}
  className="group bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
>
  <div className="flex items-center justify-center gap-3">
    <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
    <span className="text-lg">WhatsApp API</span>
  </div>
</button>



const BlogProject = () => {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numero: ''
  });

  // Dados expandidos para os posts
  const posts = [
    {
      id: 1,
      title: "Bem-vindo ao meu blog",
      content: "Este é o primeiro post do meu blog. Aqui compartilho ideias, experiências e conhecimentos sobre diversos temas.",
      date: "2025-07-01",
      author: "Blog Author",
      views: 127,
      category: "Geral",
      readTime: "2 min"
    },
    {
      id: 2,
      title: "Desenvolvendo com React",
      content: "React é uma biblioteca JavaScript incrível para criar interfaces de usuário. Neste post, vou compartilhar algumas dicas e truques.",
      date: "2025-06-28",
      author: "Blog Author",
      views: 89,
      category: "Tecnologia",
      readTime: "5 min"
    },
    {
      id: 3,
      title: "Design e UX",
      content: "A experiência do usuário é fundamental em qualquer aplicação. Vamos explorar alguns princípios básicos de design.",
      date: "2025-06-25",
      author: "Blog Author",
      views: 156,
      category: "Design",
      readTime: "4 min"
    },
    {
      id: 4,
      title: "JavaScript Moderno: ES6+ Features",
      content: "Descubra as funcionalidades mais importantes do JavaScript moderno que todo desenvolvedor deveria conhecer.",
      date: "2025-06-22",
      author: "Blog Author",
      views: 203,
      category: "Tecnologia",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Produtividade no Trabalho Remoto",
      content: "Dicas práticas para manter a produtividade e o bem-estar trabalhando de casa.",
      date: "2025-06-20",
      author: "Blog Author",
      views: 142,
      category: "Produtividade",
      readTime: "6 min"
    },
    {
      id: 6,
      title: "Tendências de Design 2025",
      content: "Explore as principais tendências de design que estão moldando a experiência digital em 2025.",
      date: "2025-06-18",
      author: "Blog Author",
      views: 178,
      category: "Design",
      readTime: "8 min"
    }
  ];

  // Dados para a sidebar
  const categories = [
    { name: "Todos", count: 6 },
    { name: "Tecnologia", count: 2 },
    { name: "Design", count: 2 },
    { name: "Geral", count: 1 },
    { name: "Produtividade", count: 1 }
  ];

  const recentPosts = posts.slice(0, 3);
  const popularPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 3);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulando envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      setApiResponse(`Formulário enviado com sucesso! Dados: Nome: ${formData.nome}, Email: ${formData.email}, Número: ${formData.numero}`);
      setFormData({ nome: '', email: '', numero: '' });
    } catch (error) {
      setApiResponse('Erro ao enviar formulário: ' + error.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const WhatsAppPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 flex items-center justify-center p-4">
    <div className="max-w-4xl w-full">
      {/* Botão Voltar */}
      <button
        onClick={() => setCurrentPage('welcome')}
        className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-200 text-white hover:text-gray-100 border border-white/20"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para Início
      </button>

      {/* Componente WhatsApp */}
      <WhatsAppComponent />
    </div>
  </div>
);

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
            onClick={() => setCurrentPage('form')}
            disabled={isLoading}
            className="group bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center gap-3">
              <Send className={`w-6 h-6 transition-transform duration-300 ${isLoading ? 'animate-spin' : 'group-hover:translate-x-1'}`} />
              <span className="text-lg">Formulário</span>
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

  const FormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Botão Voltar */}
        <button
          onClick={() => setCurrentPage('welcome')}
          className="flex items-center gap-2 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-lg transition-all duration-200 text-white hover:text-gray-100 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para Início
        </button>

        {/* Formulário */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Contato</h1>
            <p className="text-gray-300">Preencha seus dados para entrar em contato</p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Digite seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="numero" className="block text-sm font-medium text-gray-200 mb-2">
                Número de Telefone
              </label>
              <input
                type="tel"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="(11) 99999-9999"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center justify-center gap-3">
                <Send className={`w-5 h-5 transition-transform duration-300 ${isLoading ? 'animate-spin' : ''}`} />
                <span>{isLoading ? 'Enviando...' : 'Enviar Formulário'}</span>
              </div>
            </button>
          </form>

          {apiResponse && (
            <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-400/30">
              <p className="text-green-200 text-sm">{apiResponse}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const PostsPage = () => (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
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
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Conteúdo Principal */}
          <div className="flex-1">
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
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
          </div>

          {/* Barra Lateral */}
          <aside className="w-80 space-y-6">
            {/* Buscar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Buscar
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Categorias */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5" />
                Categorias
              </h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <span className="text-gray-700">{category.name}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Posts Recentes */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Posts Recentes
              </h3>
              <ul className="space-y-3">
                {recentPosts.map((post) => (
                  <li key={post.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <button className="text-left group">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Posts Populares */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Mais Populares
              </h3>
              <ul className="space-y-3">
                {popularPosts.map((post) => (
                  <li key={post.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <button className="text-left group">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Eye className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{post.views} visualizações</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );

  return (
    <div>
      {currentPage === 'welcome' && <WelcomePage />}
      {currentPage === 'posts' && <PostsPage />}
      {currentPage === 'form' && <FormPage />}
      {currentPage === 'whatsapp' && <WhatsAppPage />}
    </div>
  );
};

export default BlogProject;