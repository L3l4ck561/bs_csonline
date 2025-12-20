import styles from './projetos.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import StackedCarousel from '../components/StackedCarousel';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App" id='topo'>
      <header className="App-header">
        <div className="text-white py-3">

          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <Link className="navbar-brand" to="/portifolio">Portfólio</Link>
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
          <div className="container">
            <h1 className="mb-0">Meus Trabalhos</h1>
          </div>
        </div>
      </header>
      <div className={styles.alert}>Acesse os projetos clicando nos cards</div>

      <main className="App-main"><br />
        <h2>Projetos em destaque</h2>
        <StackedCarousel />
        <section className="bg-light">
          <div className="container"><hr />
            <h2 className="text-center mb-4">Outros projetos</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">

              <div className="col">
                <div className="card h-100 shadow">
                  <a className='tagA' href='https://l3l4ck561.github.io/CalculadoraTest2/'>
                    <div className="card-body">
                      <h5 className="card-title">Calculadora <span className="badge bg-success">Concluído</span></h5>
                      <p className="card-text">
                        Aplicativo web com modo escuro e modo claro.<br />
                        <span className='badge bg-warning'>HTML/CSS</span> <span className='badge bg-warning'>JavaScript</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section><br />
      </main>

      <footer className="App-footer">
        <div className="container">
          <p className="mb-0">Desenvolvido em 2025 © Carlos Gabriel.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;
