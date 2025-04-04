import React, { useState } from 'react';
import Projetos from './screens/projetos';
import Membros from './screens/membros';
import Tarefas from './screens/tarefas';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './screens/Home'; // Importa o novo componente Home

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <Router>
       <div>
        <header className="header">
          <h1>TeamTrack</h1>
          <button
            className={`menu-button ${isMenuOpen ? 'toggle' : ''}`}
            onClick={toggleMenu}
          >
            <span className="menu-icon"></span>
          </button>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projetos">Projetos</Link></li>
              <li><Link to="/membros">Membros</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
            </ul>
          </nav>
        </header>

      </div>
 
      <Routes>
        <Route path="/" element={<Home />} /> {/* Nova Rota Home */}
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
