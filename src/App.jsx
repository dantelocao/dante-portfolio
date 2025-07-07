import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjetoDetalhePage from './pages/ProjetoDetalhePage';

function App() {
  return (
    <Router basename="/dante-portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:slug" element={<ProjetoDetalhePage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;