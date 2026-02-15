import { expeProf,tecnologias } from '../data';
export default function Experiencia() {
    return (
        <section className="bg-light-gray" id="experiencia">
            <div style={{ height: '40px' }} />
            <div className="container">
                <h2 className="text-center m-4">Experiência Profissional</h2>

                <div className="container py-4">
                    <div className="accordion shadow-sm" id="accordionExperiencia">
                        {expeProf.map((item, index) => (
                            <div
                                className="accordion-item border-0 mb-3 rounded overflow-hidden shadow-sm"
                                key={index}
                            >
                                <h2 className="accordion-header" id={`heading${index}`}>
                                    <button
                                        className={`accordion-button fw-bold d-flex align-items-center ${index !== 0 ? "collapsed" : ""
                                            }`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index}`}
                                        aria-expanded={index === 0 ? "true" : "false"}
                                        aria-controls={`collapse${index}`}
                                        style={{ backgroundColor: '#f8f9fa', transition: 'all 0.3s' }}
                                    >
                                        {item.icon}
                                        <div className="d-flex align-items-center flex-grow-1">
                                            <span className="me-2">{item.titulo}</span>
                                        </div>
                                        <span className={`badge ${item.corTipo} ms-auto px-3 py-2`}>
                                            {item.tipo}
                                        </span>
                                    </button>
                                </h2>

                                <div
                                    id={`collapse${index}`}
                                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                    data-bs-parent="#accordionExperiencia"
                                >
                                    <div className="accordion-body bg-white">
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <strong className="text-primary">Cargo:</strong>
                                                <p className="mb-1">{item.texto.cargo}</p>
                                            </div>
                                            <div className="col-md-6">
                                                <strong className="text-primary">Período:</strong>
                                                <p className="mb-1">{item.texto.periodo}</p>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <strong className="text-primary">Descrição:</strong>
                                            <p className="mb-0 text-muted">{item.texto.desc}</p>
                                        </div>

                                        {item.texto.tech && item.texto.tech.length > 0 && (
                                            <div>
                                                <strong className="text-primary d-block mb-2">Tecnologias:</strong>
                                                <div className="d-flex flex-wrap gap-2">
                                                    {item.texto.tech.map((techIndex, i) => {
                                                        const Icon = tecnologias[techIndex].Icon; // Pega o componente
                                                        const cor = tecnologias[techIndex].cor;       // Pega a cor
                                                        const nome = tecnologias[techIndex].nome;     // Pega o nome

                                                        return (
                                                            <span
                                                                key={i}
                                                                className="badge text-dark px-3 py-2 shadow-sm d-flex align-items-center gap-1"
                                                            >
                                                                <Icon size={20} color={cor} /> {nome}
                                                            </span>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {
                                            !item.certificado.length ? '' :
                                                <a
                                                    href={`${process.env.PUBLIC_URL}/certificado_premios/${item.certificado[1]}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-outline-primary btn-sm"
                                                >
                                                    {item.certificado[0]}
                                                </a>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}