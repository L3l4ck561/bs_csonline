import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import StackedCarousel from './StackedCarousel';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" id='topo'>
      <header className="App-header">
        <div className="text-white py-3">

          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand" to="/portifolio">Projetos</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Início</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/portifolio">Portfólio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contato">Contato</Link>
                  </li>
                </ul>
              </div>
            </div>

          </nav>
          <div class="container">
            <h1 class="mb-0">Meus Trabalhos</h1>
          </div>
        </div>
      </header>

      <main className="App-main">
        <h2 style={{ textAlign: 'center' }}>Clique em uma das imagens para abrir o projeto correspondente.</h2>
        <StackedCarousel />
      </main>

      <footer className="App-footer">
        <div className="container">
          <p className="mb-0">© 2025 Carlos Gabriel. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
