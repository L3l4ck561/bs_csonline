import { FormAcademico } from '../data';

export default function Formacao() {
    return (
        <section className="bg-light" id="formacao">
            <div style={{ height: '60px' }} />
            <div className="container">
                <h2 className="text-center mb-4">Formação Acadêmica</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {FormAcademico.map(({ nome, status, instituicao, ano, certificado, cor }) => (
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
            </div>
        </section>
    )
}