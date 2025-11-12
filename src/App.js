import React, { useState } from 'react';
import { Heart, Users, Building2, BookOpen, TrendingUp, Calendar, Home, Newspaper, Info, Send, BarChart3, FileText, Upload, Menu, X } from 'lucide-react';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    convivencia: '',
    mudancas: '',
    ajuda: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const screens = {
    home: <HomeScreen setScreen={setCurrentScreen} />,
    familiar: <FamiliarScreen formData={formData} setFormData={setFormData} submitted={submitted} setSubmitted={setSubmitted} setScreen={setCurrentScreen} />,
    instituicao: <InstituicaoScreen setScreen={setCurrentScreen} />,
    conteudo: <ConteudoScreen setScreen={setCurrentScreen} />,
    noticias: <NoticiasScreen setScreen={setCurrentScreen} />,
    sobre: <SobreScreen setScreen={setCurrentScreen} />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setScreen={setCurrentScreen} />
      {screens[currentScreen]}
      <Footer setScreen={setCurrentScreen} />
    </div>
  );
};

const MobileMenu = ({ menuOpen, setMenuOpen, setScreen }) => {
  if (!menuOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setMenuOpen(false)}>
      <div className="bg-white w-64 h-full shadow-xl p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-blue-900">Menu</h3>
          <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => { setScreen('home'); setMenuOpen(false); }} className="text-left p-2 hover:bg-blue-50 rounded">Início</button>
          <button onClick={() => { setScreen('conteudo'); setMenuOpen(false); }} className="text-left p-2 hover:bg-blue-50 rounded">Conteúdos</button>
          <button onClick={() => { setScreen('noticias'); setMenuOpen(false); }} className="text-left p-2 hover:bg-blue-50 rounded">Notícias</button>
          <button onClick={() => { setScreen('sobre'); setMenuOpen(false); }} className="text-left p-2 hover:bg-blue-50 rounded">Sobre</button>
        </nav>
      </div>
    </div>
  );
};

const HomeScreen = ({ setScreen }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Heart className="w-20 h-20 text-blue-600 animate-pulse" fill="#3066BE" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-70"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-4">
          Conexão Consciente
        </h1>
        
        <p className="text-center text-gray-600 text-lg mb-8 leading-relaxed">
          Unindo pessoas para compreender e transformar a relação com a internet
        </p>
        
        <div className="space-y-4 mb-6">
          <button 
            onClick={() => setScreen('familiar')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <Users className="w-5 h-5" />
            Entrar como Familiar/Amigo
          </button>
          
          <button 
            onClick={() => setScreen('instituicao')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <Building2 className="w-5 h-5" />
            Entrar como Instituição
          </button>
          
          <button 
            onClick={() => setScreen('conteudo')}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <BookOpen className="w-5 h-5" />
            Explorar Conteúdos Públicos
          </button>
        </div>
        
        <button 
          onClick={() => setScreen('sobre')}
          className="w-full text-blue-600 hover:text-blue-800 py-2 text-sm underline transition-colors"
        >
          Saiba mais sobre o projeto →
        </button>
      </div>
    </div>
  );
};

const FamiliarScreen = ({ formData, setFormData, submitted, setSubmitted, setScreen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ convivencia: '', mudancas: '', ajuda: '' });
    }, 4000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-green-600" fill="#16a34a" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Obrigado por contribuir!</h2>
          <p className="text-gray-600 text-lg mb-8">
            Sua experiência ajuda a compreender e combater a dependência digital.
          </p>
          <button 
            onClick={() => setScreen('home')}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl font-semibold transition-all"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 py-12">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <button 
          onClick={() => setScreen('home')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Voltar
        </button>
        
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Compartilhe sua experiência
        </h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-8 rounded">
          <p className="text-gray-700">
            ℹ️ As informações são anônimas e usadas apenas para fins de pesquisa.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Como é a convivência com o dependente?
            </label>
            <textarea 
              value={formData.convivencia}
              onChange={(e) => setFormData({...formData, convivencia: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none min-h-32 resize-y"
              placeholder="Descreva sua experiência..."
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              O que mudou no comportamento dele?
            </label>
            <textarea 
              value={formData.mudancas}
              onChange={(e) => setFormData({...formData, mudancas: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none min-h-32 resize-y"
              placeholder="Mudanças observadas..."
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              O que ajuda ou atrapalha no convívio?
            </label>
            <textarea 
              value={formData.ajuda}
              onChange={(e) => setFormData({...formData, ajuda: e.target.value})}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none min-h-32 resize-y"
              placeholder="Fatores que influenciam..."
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
          >
            <Send className="w-5 h-5" />
            Enviar Relato
          </button>
        </form>
      </div>
    </div>
  );
};

const InstituicaoScreen = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <button 
          onClick={() => setScreen('home')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Voltar
        </button>
        
        <div className="flex justify-center mb-6">
          <Building2 className="w-16 h-16 text-purple-600" />
        </div>
        
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-8">
          Painel de Instituições
        </h2>
        
        <form className="space-y-6 mb-8">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              E-mail institucional
            </label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
              placeholder="instituicao@email.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Senha
            </label>
            <input 
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg"
          >
            Entrar
          </button>
        </form>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-700 mb-4">Acesso rápido:</h3>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-medium transition-all flex items-center gap-3">
            <FileText className="w-5 h-5" />
            Acessar banco de relatos
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-medium transition-all flex items-center gap-3">
            <BarChart3 className="w-5 h-5" />
            Gerar relatório estatístico
          </button>
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-medium transition-all flex items-center gap-3">
            <Upload className="w-5 h-5" />
            Publicar material educativo
          </button>
        </div>
      </div>
    </div>
  );
};

const ConteudoScreen = ({ setScreen }) => {
  const conteudos = [
    { icon: Info, titulo: 'O que é Dependência de Internet', cor: 'bg-blue-500' },
    { icon: Users, titulo: 'Como identificar', cor: 'bg-green-500' },
    { icon: Heart, titulo: 'Como ajudar', cor: 'bg-red-500' },
    { icon: TrendingUp, titulo: 'Dados e estatísticas', cor: 'bg-purple-500' },
    { icon: Calendar, titulo: 'Notícias e eventos', cor: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen p-6 py-12">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => setScreen('home')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Voltar
        </button>
        
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Aprenda e compartilhe conhecimento
        </h2>
        
        <p className="text-center text-gray-600 mb-12 text-lg">
          Explore nossos materiais educativos e informativos
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conteudos.map((item, index) => {
            const Icon = item.icon;
            return (
              <button 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className={`${item.cor} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center">
                  {item.titulo}
                </h3>
              </button>
            );
          })}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <p className="text-xl font-semibold italic">
            "A empatia e o conhecimento são os primeiros passos para uma conexão mais saudável."
          </p>
        </div>
      </div>
    </div>
  );
};

const NoticiasScreen = ({ setScreen }) => {
  const noticias = [
    {
      icone: '🧩',
      titulo: 'Pesquisa: dependência digital entre jovens cresceu 30%',
      data: '05 Nov 2025',
      categoria: 'Pesquisa'
    },
    {
      icone: '💬',
      titulo: 'Oficina sobre uso consciente das redes — participe!',
      data: '10 Nov 2025',
      categoria: 'Evento'
    },
    {
      icone: '📊',
      titulo: 'Relatório anual mostra impacto das redes sociais na saúde mental',
      data: '01 Nov 2025',
      categoria: 'Estudo'
    },
    {
      icone: '🎯',
      titulo: 'Nova campanha de conscientização sobre limites digitais',
      data: '28 Out 2025',
      categoria: 'Campanha'
    }
  ];

  return (
    <div className="min-h-screen p-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setScreen('home')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Voltar
        </button>
        
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Publicações recentes
        </h2>
        
        <div className="space-y-6">
          {noticias.map((noticia, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{noticia.icone}</div>
                <div className="flex-1">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {noticia.categoria}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-500 text-sm">{noticia.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold transition-all">
          Ver mais publicações
        </button>
      </div>
    </div>
  );
};

const SobreScreen = ({ setScreen }) => {
  return (
    <div className="min-h-screen p-6 py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <button 
          onClick={() => setScreen('home')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2"
        >
          ← Voltar
        </button>
        
        <div className="flex justify-center mb-6">
          <Heart className="w-20 h-20 text-blue-600" fill="#3066BE" />
        </div>
        
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Sobre o Conexão Consciente
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            O <strong>Conexão Consciente</strong> é uma plataforma colaborativa que une familiares, amigos e instituições para compreender e combater a dependência de internet.
          </p>
          
          <p>
            As vítimas são beneficiadas de forma indireta, com base no avanço do conhecimento e nas ações sociais geradas a partir das informações compartilhadas anonimamente por aqueles que convivem com dependentes digitais.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded my-8">
            <h3 className="font-bold text-blue-900 mb-2">Nossa Missão</h3>
            <p className="mb-0">
              Promover o uso consciente da internet através da união entre experiências pessoais e conhecimento científico, criando uma rede de apoio e transformação social.
            </p>
          </div>
          
          <h3 className="font-bold text-gray-900 text-xl mt-8">Como funciona?</h3>
          <ul className="space-y-2">
            <li>✅ Familiares compartilham suas experiências de forma anônima</li>
            <li>✅ Instituições analisam os dados para pesquisas científicas</li>
            <li>✅ Publicamos conteúdos educativos para a população</li>
            <li>✅ Geramos conscientização e ações de apoio</li>
          </ul>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4 text-center">Entre em contato</h3>
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all">
              <span className="text-white text-xl">📧</span>
            </button>
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all">
              <span className="text-white text-xl">📱</span>
            </button>
            <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all">
              <span className="text-white text-xl">🌐</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ setScreen }) => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <button 
            onClick={() => setScreen('home')}
            className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <Home className="w-6 h-6" />
            <span className="text-sm">Início</span>
          </button>
          <button 
            onClick={() => setScreen('conteudo')}
            className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-sm">Conteúdo</span>
          </button>
          <button 
            onClick={() => setScreen('noticias')}
            className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <Newspaper className="w-6 h-6" />
            <span className="text-sm">Notícias</span>
          </button>
          <button 
            onClick={() => setScreen('sobre')}
            className="flex flex-col items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <Info className="w-6 h-6" />
            <span className="text-sm">Sobre</span>
          </button>
        </div>
        <div className="text-center text-sm text-blue-200">
          © 2025 Conexão Consciente - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default App;
