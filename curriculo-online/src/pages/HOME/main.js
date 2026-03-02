import Perfil from './components/perfil';
import Formacao from './components/formacao';
import Cursos from './components/cursos';
import Experiencia from './components/experiencia';
import Cientificas from './components/cientificas';
import Contato from '../../components/contato';
import DownloadButton from "./components/DownloadButton";

import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from "react";
import { Link } from "react-router-dom";

const calcularIdade = (ano, mes, dia) => {
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const aniversario =
        hoje.getMonth() + 1 > mes ||
        (hoje.getMonth() + 1 === mes && hoje.getDate() >= dia);

    if (!aniversario) idade--;
    return idade;
};

function Home() {

    return (
        <div className="App" id='topo' >

            <header className="App-header">
                <div className="text-white py-3">

                    {/* Navegação entre as paginas */}
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            <Link className="navbar-brand" to="/">Home</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Início</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/portifolio">Portfólio</Link>
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
                        <h1 className="mb-0">Sobre Mim</h1>
                        <p className="mb-0">Desenvolvedor Full Stack | QA | Automação</p>
                    </div>

                </div>
            </header>



            <main className="App-main">
                <div
                    className="modal fade"
                    id="myModal"
                    data-bs-backdrop="static"
                    tabIndex="-1"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h2 className="modal-title">Perfil </h2>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Fechar"
                                ></button>
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body">
                                <div className="img text-center mt-2">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/eu.jpeg`}
                                        alt="Foto de perfil"
                                        className="rounded-circle"
                                        width="180px"
                                        height="180px"
                                    />
                                </div>
                                <br />
                                <div className="text">
                                    <p>Carlos Gabriel dos Santos Araújo</p>
                                    <p>Idade: {calcularIdade(2007, 1, 5)}</p>
                                    <p>Botucatu-SP</p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
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
                                <li><a className="dropdown-item" onClick={() => document.getElementById("topo").scrollIntoView()}>Perfil</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("formacao").scrollIntoView()}>Formação</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("experiencia").scrollIntoView()}>Experiência</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("cientificas").scrollIntoView()}>Iniciação Científica</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </nav><br />

                <div className="Curriculo">
                    
                    <Perfil />
                    <button
                        type="button"
                        className="btn btn-primary m-5"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Abrir Perfil
                    </button>

                    <Formacao />
                    <Cursos />
                    <Experiencia />
                    <Cientificas />
                    <DownloadButton />
                    <Contato />

                </div>

            </main>

            <footer className="App-footer">
                <div className="container">
                    <p className="mb-0">Desenvolvido com React + Bootstrap em 2025 © Carlos Gabriel.</p>
                </div>

            </footer>
        </div>
    );
}

export default Home;