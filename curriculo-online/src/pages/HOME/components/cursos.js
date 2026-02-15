import { cursos, eadCurso } from '../data';

export default function Cursos() {
    return (
        <section id="complementares" className="bg-light pb-4">
            <div className="container">
                <h5 className="text-center m-4">Cursos Complementares e EAD</h5>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {cursos.map(({ nome, status, instituicao, ano, certificado, cor }) => (
                        <div className="col">
                            <div className="card h-100 shadow">
                                <div className="card-body">
                                    <h5 className="card-title">{nome} <span className={`badge bg-${cor}`}>{status}</span></h5>
                                    <p className="card-text">
                                        <strong>Instituição:</strong> {instituicao}<br />
                                        <strong>Ano de Conclusão:</strong> {ano}
                                        {
                                            certificado == '' ? '' :
                                                <a
                                                    href={`${process.env.PUBLIC_URL}/certificado_premios/${certificado}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-outline-primary btn-sm"
                                                    style={{ position: 'absolute', right: 12 }}
                                                >
                                                    📄 Certificado
                                                </a>
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="row row-cols-1 row-cols-md-1 g-4 mt-2">

                    <div className="col">
                        <div className="accordion" id="accordionCursos">
                            {eadCurso.map(({ titulo, cursos }, index) => (
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target={`#collapseead${index}`} aria-expanded="false" aria-controls={`collapseead${index}`}>
                                            <h5 className="card-title text-center">{titulo}</h5>
                                        </button>
                                    </h2>
                                    <div id={`collapseead${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionCursos">
                                        <div className="accordion-body">
                                            <ul className="list-group list-group-flush shadow rounded">

                                                {cursos.map(({ nome, dt, certificado }) => (
                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <h6 className="mb-1 fw-semibold">{nome}</h6>
                                                            <small className="text-muted">{dt}</small>
                                                        </div>
                                                        {
                                                            certificado == '' ? '' :
                                                                <a
                                                                    href={`${process.env.PUBLIC_URL}/certificado_premios/${certificado}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="btn btn-outline-primary btn-sm"
                                                                    style={{ position: 'absolute', right: 12 }}
                                                                >
                                                                    📄 Certificado
                                                                </a>
                                                        }
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}