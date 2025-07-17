import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App" id='topo'>
            <header className="App-header">
                <div className="text-white py-3">

                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            <Link className="navbar-brand" to="/contato">Contato</Link>
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
                                        <Link className="nav-link" to="/portifolio">Portfólio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/contato">Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                    <div class="container">
                        <p class="mb-0">Entre em contato para mais inormações</p>
                    </div>
                </div>
            </header>

            <main className="App-main">
                <section id="contato" className="bg-light-gray mt-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="card text-center my-auto shadow">

                                    <div className="card-body">
                                        <div className="tela">
                                            <div className="fim" style={{ top: "0" }}></div>
                                            <img className="bola1" src={process.env.PUBLIC_URL +"/rochas.png"} />
                                            <img className="bola2" src={process.env.PUBLIC_URL +"/rochas.png"} />
                                            <img className="nave" src={process.env.PUBLIC_URL +"/voo.png"} />
                                        </div>
                                        <ul className="list-group list-group-flush mb-5">
                                            <li className="list-group-item ">
                                                <strong>E-mail:</strong> <a href="mailto:carlos.gabriel561btu@gmail.com">carlos.gabriel561btu@gmail.com</a> <span className="badge bg-secondary">Principal</span>
                                            </li>
                                            <li className="list-group-item ">
                                                <strong>Telefone:</strong> (+55) 14 98802-9965
                                            </li>
                                            {/*
                      <li className="list-group-item">
                        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer">linkedin.com/in/joaosilva</a>
                      </li>
                      */}
                                            <li className="list-group-item ">
                                                <strong>GitHub:</strong> <a href="https://github.com/L3l4ck561" target="_blank" rel="noopener noreferrer">github.com/L3l4ck561</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
