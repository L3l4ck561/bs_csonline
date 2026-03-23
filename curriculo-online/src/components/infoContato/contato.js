import {
    SiGmail,
    SiWhatsapp,
    SiGithub,
    SiLinkedin
} from 'react-icons/si';

import { MdEmail, MdPhone } from 'react-icons/md';

import { contatos } from './data';

import logo from '../../logo.svg';
export default function Contato() {
    return (
        <>
            <div style={{ height: '20px' }} />
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
                                       <MdEmail size={22} className="me-2" /><a href={`mailto:carlos.${contatos[0]}`}>{contatos[0]}</a>
                                    </li>
                                    <li className="list-group-item bg-dark text-white">
                                        <MdPhone size={22} className="me-2" /> {contatos[1][1]}
                                    </li>

                                    <li className="list-group-item bg-dark text-white">
                                         <SiLinkedin size={22} color="#0A66C2" className="me-2" /> <a href={`https://www.${contatos[2]}`} target="_blank" rel="noopener noreferrer">{contatos[2]}</a>
                                    </li>

                                    <li className="list-group-item bg-dark text-white">
                                        <SiGithub size={22} className="me-2" /> <a href={`https://${contatos[3]}`} target="_blank" rel="noopener noreferrer">{contatos[3]}</a>
                                    </li>
                                    <li className="list-group-item bg-dark text-white">
                                        <a
                                            href={`https://wa.me/${contatos[1][0]}?text=${contatos[1][2]}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiWhatsapp size={22} color="#25D366" className="me-2" /> Fale no WhatsApp
                                        </a> <span className="badge bg-secondary">Principal</span>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}