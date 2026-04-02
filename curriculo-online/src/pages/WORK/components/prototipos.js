import { prototipos } from '../data'; // ajuste o caminho do seu arquivo de dados

export default function Prototipos() {
    return (
        <section id="prototipos" className="py-5">
            <div style={{ height: '60px' }} />
            <div className="container">
                <div className="mx-auto" style={{ maxWidth: '680px' }}>
                    
                    <h2 className="text-center mb-5 fw-bold text-primary">
                        <i className="bi bi-lightning-charge-fill me-3"></i>
                        Protótipos
                    </h2>

                    <ul className="list-group custom-prototipos-list">
                        {prototipos.map((item, index) => (
                            <li 
                                key={index}
                                className="list-group-item border-0 mb-3 p-0 overflow-hidden"
                            >
                                <a 
                                    href={item.url} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none"
                                >
                                    <div className="prototipo-card d-flex align-items-center gap-4 p-3">
                                        {/* Imagem */}
                                        <img
                                            src={process.env.PUBLIC_URL + item.img}
                                            alt={item.nome}
                                            className="prototipo-img"
                                        />

                                        {/* Informações */}

                                            <h5 className="flex-grow-1 mb-2 fw-semibold text-dark">
                                                {item.nome}
                                            </h5>
                                            <p className="flex-grow-1 mb-0 text-muted small">
                                                {item.tech}
                                            </p>


                                        {/* Ícone de acesso */}
                                        <div className="arrow-icon">
                                            <i className="bi bi-arrow-right fs-3"></i>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}