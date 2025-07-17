import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from "react-router-dom";

function App() {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    let nsc = [2007, 1, 5]
    let idadeAtual = dia >= nsc[2] && mes >= nsc[1] ? ano - nsc[0] : ano - nsc[0] - 1
    return (
        <div className="App" id='topo'>
            <header className="App-header">
                <div className="text-white py-3">
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
                                        <Link className="nav-link" to="/contato">Contato</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                    <div class="container">
                        <h1 class="mb-0">Sobre Mim</h1>
                        <p class="mb-0">Técnico em Analise e Desenvolvimento de Sistemas</p>
                    </div>
                </div>
            </header>

            <main className="App-main">
                {/* Modal */}
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
                                <h2 className="modal-title">Perfil</h2>
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
                                        src="eu.jpeg"
                                        alt="Foto de perfil"
                                        className="rounded-circle"
                                        width="180px"
                                        height="180px"
                                    />
                                </div>
                                <br />
                                <div className="text">
                                    <p>Carlos Gabriel dos Santos Araújo</p>
                                    <p>Idade: {idadeAtual}</p>
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

                <div className="Curriculo">
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
                                    <li><a className="dropdown-item" onClick={() => document.getElementById("peril").scrollIntoView()}>Perfil</a></li>
                                    <li><a className="dropdown-item" onClick={() => document.getElementById("formacao").scrollIntoView()}>Formação</a></li>
                                    <li><a className="dropdown-item" onClick={() => document.getElementById("experiencia").scrollIntoView()}>Experiência</a></li>
                                    <li><a className="dropdown-item" onClick={() => document.getElementById("projetos").scrollIntoView()}>Projetos</a></li>
                                    <li><a className="dropdown-item" onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav><br />
                    <a className="topo" onClick={() => document.getElementById("topo").scrollIntoView()}><img src={process.env.PUBLIC_URL + '/topo.svg'} style={{ width: '40px', height: '40px' }} alt="^" /></a>
                    <div className="nav-item dropdown-end" id='menu2'>
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
                            <li><a className="dropdown-item" onClick={() => document.getElementById("peril").scrollIntoView()}>Perfil</a></li>
                            <li><a className="dropdown-item" onClick={() => document.getElementById("formacao").scrollIntoView()}>Formação</a></li>
                            <li><a className="dropdown-item" onClick={() => document.getElementById("experiencia").scrollIntoView()}>Experiência</a></li>
                            <li><a className="dropdown-item" onClick={() => document.getElementById("projetos").scrollIntoView()}>Projetos</a></li>
                            <li><a className="dropdown-item" onClick={() => document.getElementById("contato").scrollIntoView()}>Contato</a></li>
                        </ul>
                    </div>

                    <section id="perfil" className="bg-light-gray">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="card text-center shadow">

                                        <div className="card-body">
                                            <p className="card-text">
                                                - Estudante de desenvolvimento de sistemas.
                                                <br />
                                                - Focado em aprender e dominar tecnologias atuais.
                                                <br />
                                                - Interesse em aprofundar conhecimentos em Ciência de Dados.
                                            </p>
                                            <h6 className="card-title">Minhas Skills</h6>
                                            <div>
                                                <span className="badge bg-success me-1">Excel</span>
                                                <span className="badge bg-danger me-1">Bootstrap</span>
                                                <span className="badge bg-dark me-1">Expo</span>
                                                <span className="badge bg-primary me-1">React</span>
                                                <span className="badge bg-info me-1">Python</span>
                                                <span className="badge bg-warning me-1">JavaScript</span>
                                                <span className="badge bg-dark me-1">Git</span>
                                                <span className="badge bg-danger">HTML/CSS</span>
                                                <span className="badge bg-secondary">MySQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <button
                        type="button"
                        className="btn btn-primary m-3"
                        data-bs-toggle="modal"
                        data-bs-target="#myModal"
                    >
                        Abrir Peril
                    </button>
                    <section id="formacao" className="bg-light">
                        <div className="container">
                            <h2 className="text-center mb-4">Formação Acadêmica</h2>
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Ensino médio <span className="badge bg-warning">Cursando</span></h5>
                                            <p className="card-text">
                                                <strong>Instituição:</strong> SESI - Botucatu<br />
                                                <strong>Ano de Conclusão:</strong> 2025
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Curso Técnico - A. Des. de Sistemas <span className="badge bg-warning">Cursando</span></h5>
                                            <p className="card-text">
                                                <strong>Instituição:</strong> SENAI - Botucatu<br />
                                                <strong>Ano de Conclusão:</strong> 2025
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section id="complementares" className="bg-light">
                        <div className="container">
                            <h5 className="text-center m-4">Cursos Complementares</h5>
                            <div className="row row-cols-1 row-cols-md-2 g-4">
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">Excel Básico ao Intermediário <span className="badge bg-success">Concluído</span></h5>
                                            <p className="card-text">
                                                <strong>Instituição:</strong>Fundação Bradesco - Escola Virtual<br />
                                                <strong>Ano de Conclusão:</strong> 2021
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">

                                    <div className="accordion" id="accordionExperiencia2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo2">
                                                <button className="accordion-button collapsed shadow" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                                                    <h5 className="card-title">EAD SENAI – ead.sp.senai.br <span className="badge bg-success">Concluído</span></h5>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo2" className="accordion-collapse collapse" data-bs-parent="#accordionExperiencia2">
                                                <div className="accordion-body2">
                                                    <ul>
                                                        <li>Desvendando a Indústria 4.0 – 08/04/2025</li>
                                                        <li>Empreender SENAI – 08/04/2025</li>
                                                        <li>WEB 3.0 – 08/04/2025</li>
                                                        <li>Desvendando o ESG – 08/04/2025</li>
                                                        <li>Fluência: Fundamentos da Inteligência Artificial – 08/04/2025</li>
                                                        <li>Economia Circular – 15/11/2024</li>
                                                        <li>Privacidade e Proteção de Dados (LGPD) – 16/11/2024</li>
                                                        <li>Desvendando o 5G – 16/11/2024</li>
                                                        <li>Competência Transversal: Segurança no Trabalho – 31/10/2024</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>

                    <section id="experiencia" className="bg-light-gray">
                        <div className="container">
                            <h2 className="text-center m-4">Experiência Profissional</h2>
                            <div className="accordion" id="accordionExperiencia">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            SagaSenai.<span className="badge bg-secondary me-1">freelancer</span> - LostFaund
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExperiencia">
                                        <div className="accordion-body">
                                            <strong>Cargo:</strong>Desenvolvedor Full Stack<br />
                                            <strong>Período:</strong> Dezembro 2024 - Presente<br />
                                            <strong>Descrição:</strong>Desenvolvimento de interfaces web usando mediaquery, integração com APIs REST, e otimização de performance de aplicações.<br />
                                            <strong>Tecnologias:</strong>
                                            <span className="badge bg-info me-1">JavaScript</span>
                                            <span className="badge bg-info me-1">HTML</span>
                                            <span className="badge bg-info me-1">CSS</span>
                                            <span className="badge bg-info me-1">Python</span>
                                            <span className="badge bg-info me-1">MySQL</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            BirdGameJam.<span className="badge bg-secondary me-1">Game Jams</span> - Toca da coruja
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExperiencia">
                                        <div className="accordion-body">
                                            <strong>Cargo:</strong> Autor e Desenvolvedor Full Stack<br />
                                            <strong>Período:</strong> Março 2025<br />
                                            <strong>Descrição:</strong> Desenvolvimento de jogo 2D para navegador utilizando Construct 3, com foco em mecânicas interativas, design de níveis e integração com a plataforma itch.io.<br />
                                            <strong>Tecnologias:</strong>
                                            <span className="badge bg-info me-1">Construct 3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Projetos */}
                    <section id="projetos" className="bg-light">
                        <div className="container">
                            <h2 className="text-center m-4">Projetos</h2>
                            <div id="projetosCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#projetosCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#projetosCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#projetosCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                                            <img src={process.env.PUBLIC_URL + "/image.png"} class="d-block w-30" alt="" />
                                        </div>
                                        <div className="carousel-caption d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            <h5>Projeto 1: Calculadora <span className="badge bg-warning">Concluído</span></h5>
                                            <p>Aplicativo web com modo escuro e modo claro.</p>
                                            <span className="badge bg-info me-1">HTML</span>
                                            <span className="badge bg-info me-1">CSS</span>
                                            <span className="badge bg-info me-1">JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                                            <img src="https://picsum.photos/id/1015/500/300" class="d-block w-30" alt="" />
                                        </div>
                                        <div className="carousel-caption d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            <h5>---</h5>
                                            <p></p>
                                            <span className="badge bg-info me-1"></span>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div style={{ display: 'flex', justifyContent: 'center', height: '90vh' }}>
                                            <img src="https://picsum.photos/id/1015/500/300" class="d-block w-30" alt="" />
                                        </div>
                                        <div className="carousel-caption d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                                            <h5>---</h5>
                                            <p></p>
                                            <span className="badge bg-info me-1"></span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-control btn-prev" type="button" data-bs-target="#projetosCarousel" data-bs-slide="prev">❮</button>
                                <button className="btn-control btn-next" type="button" data-bs-target="#projetosCarousel" data-bs-slide="next">❯</button>
                            </div>
                        </div>
                    </section><br /><br />
                    <div className="bg-dark text-white text-center py-3">
                        {/* Contato */}
                        <img src={logo} className="App-logo" alt="logo" />
                        <section id="contato" className="bg-light-gray">
                            <div className="container">
                                <h2 className="text-center mb-4">Contato</h2>
                                <div className="row justify-content-center">
                                    <div className="col-md-6">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bg-dark text-white">
                                                <strong>E-mail:</strong> <a href="mailto:carlos.gabriel561btu@gmail.com">carlos.gabriel561btu@gmail.com</a> <span className="badge bg-secondary">Principal</span>
                                            </li>
                                            <li className="list-group-item bg-dark text-white">
                                                <strong>Telefone:</strong> (+55) 14 98802-9965
                                            </li>
                                            {/*
                      <li className="list-group-item bg-dark text-white">
                        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/joaosilva" target="_blank" rel="noopener noreferrer">linkedin.com/in/joaosilva</a>
                      </li>
                      */}
                                            <li className="list-group-item bg-dark text-white">
                                                <strong>GitHub:</strong> <a href="https://github.com/L3l4ck561" target="_blank" rel="noopener noreferrer">github.com/L3l4ck561</a>
                                            </li>
                                            <li className="list-group-item bg-dark text-white">
                                                <a
                                                    href="https://wa.me/5514988029965?text=Olá,%20tenho%20interesse%20no%20serviço"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Fale no WhatsApp
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
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
