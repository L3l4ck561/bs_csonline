import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contato from '../../components/infoContato/contato';
import React from 'react';
import { Link } from "react-router-dom";

import Participacao from './components/participacao';
import Conquistas from './components/conquistas';
import Apresentacao from './components/apresentacao';

import ModalPerfil from '../../components/infoPerfil/modal';
import { cargo} from '../../components/infoPerfil/data';

function Certificado() {
    return (
        <div className="App" id='topo'>

            <header className="App-header">
                <div className="text-white py-3">

                    {/* Navegação entre as paginas */}
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            <Link className="navbar-brand" to="/outros-certificados">Certificados</Link>
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
                                        <Link className="nav-link" to="/portifolio">Portfólio</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/outros-certificados">Participações | Premiações</Link>
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
                        <h1 className="mb-0">Participações & Premiações</h1>
                        <p className="mb-0">{cargo}</p>
                    </div>

                </div>
            </header>
            <main className="App-main">
                <ModalPerfil/>
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
                                <li><a className="dropdown-item" onClick={() => document.getElementById("topo").scrollIntoView()}>parede de conquistas</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("apresentacao").scrollIntoView()}>Apresentações</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("participacao").scrollIntoView()}>Participações</a></li>
                                <li><a className="dropdown-item" onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </nav><br />

                <div className='certificado'>
                    <Conquistas />
                    <div style={{height:70}} />
                    <Apresentacao />
                    <div style={{height:70}} />
                    <Participacao />
                    <div style={{height:70}} />
                </div>

            </main>

            <Contato/>
            <footer className="App-footer">
                <div className="container">
                    <p className="mb-0">Desenvolvido com React + Bootstrap em 2025 © Carlos Gabriel.</p>
                </div>

            </footer>
        </div>
    );
}

export default Certificado;