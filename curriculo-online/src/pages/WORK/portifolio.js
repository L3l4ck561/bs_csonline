import '../../App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contato from '../../components/infoContato/contato';
import React from 'react';
import { Link } from "react-router-dom";

import StackedCarousel from './components/StackedCarousel';
import ProjetoWeb from './components/projetoWeb';
import Prototipos from './components/prototipos';

import ModalPerfil from '../../components/infoPerfil/modal';
import { cargo } from '../../components/infoPerfil/data';

function Portifolio() {
    return (
        <div className="App" id='topo'>

            <header className="App-header">
                <div className="text-white py-3">

                    {/* Navegação entre as paginas */}
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
                                        <Link className="nav-link" aria-current="page" to="/">Início</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/portifolio">Portfólio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/outros-certificados">Participações | Premiações</Link>
                                    </li>
                                    <li>
                                        <a className="nav-link btn btn-primary " onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Titulo da pagina */}
                    <div className="container">
                        <h1 className="mb-0">Meus Trabalhos</h1>
                        <p className="mb-0">{cargo}</p>
                    </div>

                </div>
            </header>
            <main className="App-main">
                <ModalPerfil />
                {/* Botão que leva para o topo dá pagina */}
                <a className="topo" onClick={() => document.getElementById("topo").scrollIntoView()}><img src={process.env.PUBLIC_URL + '/topo.svg'} style={{ width: '40px', height: '40px', cursor: 'pointer' }} alt="^" /></a>

                {/* navegação da pagina e menu*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container d-flex justify-content-center">
                        <a className="navbar-brand center" href="#topo"
                            data-bs-toggle="modal" data-bs-target="#myModal">Carlos Gabriel</a>
                        <div className="nav-item dropdown-end" id='menu'>
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Menu
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" onClick={() => document.getElementById("projetoweb").scrollIntoView()}>Projetos Web</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("github").scrollIntoView()}>Statisticas do GitHub</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("aplicacoes").scrollIntoView()}>Aplicações</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("prototipos").scrollIntoView()}>Protótipos</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </nav><br />

                <div className='trabalhos'>
                    {/* conteudo */}
                    <div className="tela" style={{ transform: "rotate(45deg)" }}>
                        <div className="fim" style={{ top: "0" }} />
                        <img className="bola1" src={process.env.PUBLIC_URL + "/rochas.png"} />
                        <img className="bola2" src={process.env.PUBLIC_URL + "/rochas.png"} />
                        <img className="nave" src={process.env.PUBLIC_URL + "/voo.png"} />
                    </div>

                    <section id="perfil" className="bg-light-gray">
                        <div style={{ height: "40px" }} />

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <div className="card text-center shadow">
                                        <div className="card-body">
                                            <h5>Introdução</h5>
                                            <p>Nesta página apresento meus projetos, estudos e aplicações desenvolvidas ao longo da minha trajetória como desenvolvedor.</p>
                                            <p>Aqui você poderá acompanhar estatísticas do meu perfil no GitHub, explorar projetos interativos e visualizar aplicações completas com seus respectivos repositórios e descrições.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <ProjetoWeb />

                    <div id='github'/>
                    <br/>
                    <div style={{ height: "30px" }} />
                    <img
                        src="https://raw.githubusercontent.com/L3l4ck561/L3l4ck561/e2f97031987f1650fff1fa2891ba36d27e377f82/github-metrics.svg"
                        alt="github"
                        class="img-fluid"
                    />
                    
                    <StackedCarousel />
                    <Prototipos />

                </div>

                <div style={{ height: 100 }} />
            </main>

            < Contato />
            <footer className="App-footer">
                <div className="container">
                    <p className="mb-0">Desenvolvido com React + Bootstrap em 2025 © Carlos Gabriel.</p>
                </div>

            </footer>
        </div>
    );
}

export default Portifolio;