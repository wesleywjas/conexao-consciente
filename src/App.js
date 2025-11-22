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
    sobre: <SobreScreen setScreen={setCurrentScreen} />,
    'o-que-e-di': <OQueEDIScreen setScreen={setCurrentScreen} /> ,
    'como-identificar': <ComoIdentificarScreen setScreen={setCurrentScreen} />
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
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email && senha) {
      setLoggedIn(true);
    } else {
      alert('Por favor, preencha email e senha');
    }
  };

  // Renderiza dashboard se estiver logado
  if (loggedIn) {
    return <DashboardInstitucional setScreen={setScreen} setLoggedIn={setLoggedIn} email={email} />;
  }

  // Renderiza formulário de login se não estiver logado
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
        
        <div className="space-y-6 mb-8">
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
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardInstitucional = ({ setScreen, setLoggedIn, email }) => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = [
    { label: 'Total de Relatos', value: '1,234', icon: FileText, color: 'blue' },
    { label: 'Novos (últimos 7 dias)', value: '89', icon: TrendingUp, color: 'green' },
    { label: 'Publicações Ativas', value: '23', icon: BookOpen, color: 'purple' },
    { label: 'Visualizações', value: '5,678', icon: BarChart3, color: 'orange' }
  ];

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-purple-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Building2 className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">Painel Institucional</h1>
                <p className="text-purple-200 text-sm">{email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setScreen('home')}
                className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Início
              </button>
              <button 
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-all"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600'
            };
            return (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${colors[stat.color]} rounded-full flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {[
                { id: 'overview', label: 'Visão Geral', icon: BarChart3 },
                { id: 'relatos', label: 'Banco de Relatos', icon: FileText },
                { id: 'publicar', label: 'Publicar Conteúdo', icon: Upload },
                { id: 'relatorios', label: 'Relatórios', icon: TrendingUp }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 font-semibold border-b-2 transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-purple-600 text-purple-600 bg-purple-50'
                        : 'border-transparent text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'relatos' && <RelatosTab />}
            {activeTab === 'publicar' && <PublicarTab />}
            {activeTab === 'relatorios' && <RelatoriosTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewTab = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Bem-vindo ao Painel</h3>
      <p className="text-gray-600 mb-6">
        Acesse os dados coletados, gere relatórios estatísticos e publique materiais educativos para a comunidade.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-2">📊 Dados em Tempo Real</h4>
        <p className="text-blue-800 text-sm">
          Todos os relatos são anonimizados e agregados para preservar a privacidade dos usuários.
        </p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
        <h4 className="font-bold text-green-900 mb-2">✅ Conformidade LGPD</h4>
        <p className="text-green-800 text-sm">
          Todos os acessos são registrados e auditados conforme a legislação brasileira.
        </p>
      </div>
    </div>

    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8">
      <h4 className="text-2xl font-bold mb-3">🎯 Próximos Passos</h4>
      <ul className="space-y-2">
        <li>• Explore o banco de relatos na aba "Banco de Relatos"</li>
        <li>• Gere relatórios personalizados na aba "Relatórios"</li>
        <li>• Publique artigos e materiais na aba "Publicar Conteúdo"</li>
      </ul>
    </div>
  </div>
);

const RelatosTab = () => {
  const relatos = [
    { id: 1, data: '2025-11-20', sentimento: 'negativo', preview: 'A convivência tem sido muito difícil...' },
    { id: 2, data: '2025-11-19', sentimento: 'neutro', preview: 'Percebo mudanças no comportamento...' },
    { id: 3, data: '2025-11-18', sentimento: 'negativo', preview: 'O vício está afetando toda a família...' },
    { id: 4, data: '2025-11-17', sentimento: 'positivo', preview: 'Estamos conseguindo estabelecer limites...' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-gray-900">Banco de Relatos</h3>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
          Exportar CSV
        </button>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
        <p className="text-yellow-800 text-sm">
          ⚠️ <strong>Lembrete:</strong> Todos os dados são anônimos. Não é possível identificar indivíduos.
        </p>
      </div>

      <div className="space-y-4">
        {relatos.map(relato => (
          <div key={relato.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  relato.sentimento === 'negativo' ? 'bg-red-100 text-red-700' :
                  relato.sentimento === 'positivo' ? 'bg-green-100 text-green-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {relato.sentimento === 'negativo' ? '😟 Negativo' :
                   relato.sentimento === 'positivo' ? '😊 Positivo' :
                   '😐 Neutro'}
                </span>
              </div>
              <span className="text-sm text-gray-500">{relato.data}</span>
            </div>
            <p className="text-gray-700 mb-4">{relato.preview}</p>
            <button className="text-purple-600 hover:text-purple-800 font-semibold text-sm">
              Ver relato completo →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const PublicarTab = () => {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [conteudo, setConteudo] = useState('');

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Publicar Material Educativo</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
            placeholder="Ex: Como identificar sinais de dependência digital"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Categoria</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none"
          >
            <option value="">Selecione uma categoria</option>
            <option value="pesquisa">Pesquisa</option>
            <option value="evento">Evento</option>
            <option value="estudo">Estudo</option>
            <option value="campanha">Campanha</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Conteúdo</label>
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none min-h-64 resize-y"
            placeholder="Escreva o conteúdo do artigo..."
          />
        </div>

        <div className="flex gap-4">
          <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 px-6 rounded-xl font-semibold transition-all">
            Salvar Rascunho
          </button>
          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg">
            Publicar Agora
          </button>
        </div>
      </div>
    </div>
  );
};

const RelatoriosTab = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Gerar Relatórios</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-600 transition-all cursor-pointer">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Relatório Mensal</h4>
          <p className="text-gray-600 mb-4">Análise completa dos dados do último mês</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
            Gerar Relatório
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-600 transition-all cursor-pointer">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Análise de Tendências</h4>
          <p className="text-gray-600 mb-4">Evolução temporal dos relatos</p>
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all">
            Gerar Análise
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-600 transition-all cursor-pointer">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Relatório Personalizado</h4>
          <p className="text-gray-600 mb-4">Configure filtros e métricas customizadas</p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
            Personalizar
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-purple-600 transition-all cursor-pointer">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Relatório Anual</h4>
          <p className="text-gray-600 mb-4">Consolidado completo do ano</p>
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all">
            Gerar Consolidado
          </button>
        </div>
      </div>
    </div>
  );
};

const ConteudoScreen = ({ setScreen }) => {
  const conteudos = [
    { icon: Info, titulo: 'O que é Dependência de Internet ?', cor: 'bg-blue-500', rota: 'o-que-e-di' },
    { icon: Users, titulo: 'Como identificar alguém com Dependência de Internet ?', cor: 'bg-green-500', rota: 'como-identificar' },
    { icon: Heart, titulo: 'Como ajudar alguém com Dependência de Internet ?', cor: 'bg-red-500', rota: null },
    { icon: TrendingUp, titulo: 'Dados e estatísticas', cor: 'bg-purple-500', rota: null },
    { icon: Calendar, titulo: 'Notícias e eventos', cor: 'bg-orange-500', rota: 'noticias' }
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
                 onClick={() => item.rota && setScreen(item.rota)}
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

const OQueEDIScreen = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => setScreen('conteudo')}
          className="text-blue-600 hover:text-blue-800 mb-6 flex items-center gap-2 font-semibold"
        >
          ← Voltar aos Conteúdos
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Info className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                O que é Dependência de Internet ?
              </h1>
            </div>
            <p className="text-blue-100 text-lg">
              Entenda o conceito, sintomas e impactos do uso problemático da internet
            </p>
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Definição */}
            <section>
              <p className="text-gray-700 text-lg leading-relaxed">
                A <strong>Dependência de Internet</strong> — também conhecida como vício em internet ou uso problemático da internet — é um comportamento caracterizado pelo uso excessivo e descontrolado de recursos online, a ponto de causar prejuízos na vida pessoal, social, acadêmica ou profissional do indivíduo.
              </p>
            </section>

            <section>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ela ocorre quando a pessoa sente uma necessidade constante de estar conectada, experimenta dificuldade em controlar o tempo que passa online e, muitas vezes, utiliza a internet como forma de aliviar emoções negativas, como ansiedade, tédio ou solidão.
              </p>
            </section>

            <section>
              <p className="text-gray-700 text-lg leading-relaxed">
                Embora não seja oficialmente classificada como um transtorno clínico em todos os manuais diagnósticos, muitos especialistas reconhecem que o uso compulsivo da internet apresenta sintomas semelhantes aos de outros tipos de dependência comportamental.
              </p>
            </section>

            {/* Principais sinais */}
            <section className="bg-blue-50 rounded-2xl p-6 md:p-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🔍</span>
                Principais sinais de dependência de internet
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Uso da internet por longos períodos, mesmo quando há intenção de parar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Irritabilidade, ansiedade ou inquietação quando não é possível se conectar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Negligência de responsabilidades pessoais, familiares, escolares ou profissionais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Dificuldade em controlar ou limitar o tempo online.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Isolamento social e preferência por interações virtuais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700 text-lg">Alterações no sono devido ao uso constante de dispositivos.</span>
                </li>
              </ul>
            </section>

            {/* Por que acontece */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                Por que isso acontece?
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                A internet foi projetada para ser envolvente e oferecer estímulos constantes — notificações, vídeos curtos, redes sociais, jogos e infinitos conteúdos. Esses estímulos ativam áreas do cérebro relacionadas a prazer e recompensa, reforçando o uso repetitivo e dificultando o controle.
              </p>
            </section>

            {/* Impactos na vida */}
            <section className="bg-orange-50 rounded-2xl p-6 md:p-8 border-l-4 border-orange-600">
              <h2 className="text-2xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">⚠️</span>
                Impactos na vida
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Se não houver equilíbrio, a dependência de internet pode afetar:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700 text-lg"><strong>Saúde mental</strong> (ansiedade, estresse, depressão)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700 text-lg"><strong>Relações interpessoais</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700 text-lg"><strong>Desempenho acadêmico ou profissional</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                  <span className="text-gray-700 text-lg"><strong>Rotina de sono e bem-estar físico</strong></span>
                </li>
              </ul>
            </section>

            {/* Esperança e tratamento */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">✨</span>
                É possível prevenir e tratar
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Com limites saudáveis, acompanhamento psicológico quando necessário e equilíbrio entre atividades online e offline, é possível retomar o controle e criar uma relação mais saudável com a tecnologia.
              </p>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Precisa de ajuda ou conhece alguém que precisa?
              </h3>
              <p className="text-gray-700 mb-6">
                Compartilhe sua experiência ou explore mais recursos educativos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setScreen('familiar')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
                >
                  Compartilhar Experiência
                </button>
                <button 
                  onClick={() => setScreen('conteudo')}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Ver Mais Conteúdos
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComoIdentificarScreen = ({ setScreen }) => {
  const [respostas, setRespostas] = useState({});
  
  const perguntasAutoavaliacao = [
    "Perco a noção do tempo quando estou online?",
    "Sinto desconforto quando fico sem acesso à internet?",
    "Minhas responsabilidades estão sendo afetadas pelo tempo que passo conectado?",
    "Evito interações reais para permanecer online?",
    "Dependo da internet para me sentir bem ou relaxar?"
  ];

  const handleResposta = (index, valor) => {
    setRespostas(prev => ({ ...prev, [index]: valor }));
  };

  const calcularResultado = () => {
    const total = Object.values(respostas).filter(r => r === 'sim').length;
    if (total === 0) return null;
    if (total <= 1) return { cor: 'green', texto: 'Uso aparentemente saudável', emoji: '✅' };
    if (total <= 3) return { cor: 'yellow', texto: 'Atenção recomendada', emoji: '⚠️' };
    return { cor: 'red', texto: 'Procure ajuda profissional', emoji: '🚨' };
  };

  const resultado = calcularResultado();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => setScreen('conteudo')}
          className="text-green-600 hover:text-green-800 mb-6 flex items-center gap-2 font-semibold"
        >
          ← Voltar aos Conteúdos
        </button>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Como Identificar a Dependência de Internet
              </h1>
            </div>
            <p className="text-green-100 text-lg">
              Reconheça os sinais e saiba quando buscar ajuda
            </p>
          </div>

          {/* Conteúdo */}
          <div className="p-8 md:p-12 space-y-8">
            {/* Introdução */}
            <section>
              <p className="text-gray-700 text-lg leading-relaxed">
                Reconhecer a dependência de internet é importante para agir precocemente e evitar que o problema afete diferentes áreas da vida. A identificação envolve observar comportamentos, emoções e impactos na rotina.
              </p>
            </section>

            {/* Sinais Comportamentais */}
            <section className="bg-blue-50 rounded-2xl p-6 md:p-8 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">👁️</span>
                Sinais Comportamentais
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Alguns comportamentos podem indicar uso problemático:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Aumento constante do tempo online, mesmo sem necessidade.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Tentativas repetidas e frustradas de reduzir o uso.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Checar dispositivos de forma compulsiva, mesmo sem notificações.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">O hábito de esconder ou mentir sobre o tempo gasto na internet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Priorizar atividades online em vez de compromissos importantes, estudos ou convívio familiar.</span>
                </li>
              </ul>
            </section>

            {/* Sinais Emocionais */}
            <section className="bg-purple-50 rounded-2xl p-6 md:p-8 border-l-4 border-purple-600">
              <h2 className="text-2xl font-bold text-purple-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">💭</span>
                Sinais Emocionais
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Alterações emocionais também são um indicativo relevante:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Irritação ou impaciência quando não é possível acessar a internet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Sensação de ansiedade ou inquietação durante períodos offline.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Alívio, satisfação ou tranquilidade apenas ao retornar ao ambiente digital.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Uso da internet como forma de fuga para evitar problemas, emoções difíceis ou tédio.</span>
                </li>
              </ul>
            </section>

            {/* Prejuízos na Vida Diária */}
            <section className="bg-red-50 rounded-2xl p-6 md:p-8 border-l-4 border-red-600">
              <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">⚠️</span>
                Prejuízos na Vida Diária
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                Quando o uso começa a gerar impactos negativos, é um sinal de alerta:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Queda no desempenho escolar ou acadêmico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Dificuldade de foco e produtividade no trabalho.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Isolamento social e redução da interação presencial.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Alterações no sono, como dormir muito tarde devido ao uso excessivo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">•</span>
                  <span className="text-gray-700">Perda do senso de tempo durante o uso ("apenas mais alguns minutos").</span>
                </li>
              </ul>
            </section>

            {/* Autoavaliação Interativa */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 border-2 border-green-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Critérios de Autoavaliação
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Algumas perguntas podem ajudar a identificar o problema. Responda com honestidade:
              </p>

              <div className="space-y-4 mb-6">
                {perguntasAutoavaliacao.map((pergunta, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-gray-800 font-medium mb-3">{index + 1}. {pergunta}</p>
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleResposta(index, 'sim')}
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                          respostas[index] === 'sim'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Sim
                      </button>
                      <button
                        onClick={() => handleResposta(index, 'nao')}
                        className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${
                          respostas[index] === 'nao'
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Não
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {resultado && (
                <div className={`bg-${resultado.cor}-100 border-l-4 border-${resultado.cor}-600 p-6 rounded-lg`}>
                  <p className="text-xl font-bold text-gray-900 mb-2">
                    {resultado.emoji} Resultado: {resultado.texto}
                  </p>
                  <p className="text-gray-700">
                    {resultado.cor === 'red' && 'Responder "sim" a várias dessas perguntas pode indicar dependência. Considere buscar ajuda profissional.'}
                    {resultado.cor === 'yellow' && 'Alguns sinais de alerta identificados. Reflita sobre seus hábitos digitais e considere ajustes.'}
                    {resultado.cor === 'green' && 'Seu uso parece estar sob controle, mas continue monitorando seus hábitos.'}
                  </p>
                </div>
              )}
            </section>

            {/* Quando buscar ajuda */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="text-3xl">🆘</span>
                Quando buscar ajuda?
              </h2>
              <p className="text-white text-lg mb-4">
                É recomendável procurar orientação profissional quando:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <span>Há prejuízos claros na rotina, no desempenho ou nos relacionamentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <span>A pessoa não consegue reduzir o uso por conta própria.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">•</span>
                  <span>O excesso interfere no sono, no humor e no bem-estar geral.</span>
                </li>
              </ul>
            </section>

            {/* Call to Action */}
            <section className="bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Identificou sinais em você ou em alguém próximo?
              </h3>
              <p className="text-gray-700 mb-6">
                Compartilhe sua experiência ou busque mais informações
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setScreen('familiar')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg"
                >
                  Compartilhar Experiência
                </button>
                <button 
                  onClick={() => setScreen('conteudo')}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  Ver Mais Conteúdos
                </button>
              </div>
            </section>
          </div>
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
