import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage';
import Header from './components/header';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';
import ProjetoDetalhe from './pages/ProjetosDetalhe';

function App() {
  return (
    <Router basename="/dante-portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;