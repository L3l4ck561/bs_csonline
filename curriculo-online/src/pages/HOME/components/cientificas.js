import { icp, tecnologias } from '../data';
export default function Cientificas() {
    return (
        <section className="bg-light-gray py-5" id="cientificas">
            <div style={{ height: '20px' }} />
            <div className="container">
                <h2 className="text-center fw-bold mb-5">Iniciação Científica & Apresentações</h2>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {icp.map(({ titulo, desc, tech, etapas, arquivo, status, cor }, cardIndex) => (
                        <div className="col" key={cardIndex}>
                            <div
                                className="card h-100 shadow border-0 overflow-hidden transition-all hover-shadow"
                                style={{
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    borderRadius: '12px'
                                }}
                            >
                                {/* Cabeçalho do card com título + status */}
                                <div
                                    className="card-header text-white d-flex justify-content-between align-items-center"
                                    style={{
                                        background: cor === 'success'
                                            ? 'linear-gradient(135deg, #28a745, #198754)'
                                            : cor === 'warning'
                                                ? 'linear-gradient(135deg, #ffc107, #fd7e14)'
                                                : 'linear-gradient(135deg, #0d6efd, #0b5ed7)'
                                    }}
                                >

                                    <h5 className="mb-0 fw-bold">{titulo}</h5>
                                    <span className={`badge bg-white text-${cor} px-3 py-2 fw-semibold`}>
                                        {status}
                                    </span>
                                </div>




                                <div className="card-body d-flex flex-column">
                                    {/* Descrição */}
                                    <p className="card-text text-muted mb-4 flex-grow-1">
                                        {desc}
                                    </p>

                                    {/* Tecnologias usadas (ícones coloridos) */}
                                    {tech && tech.length > 0 && (
                                        <div className="mb-4">
                                            <strong className="d-block mb-2 text-primary">Tecnologias:</strong>
                                            <div className="d-flex flex-wrap gap-3">
                                                {tech.map((idx) => {
                                                    const t = tecnologias[idx];
                                                    if (!t) return null;
                                                    return (
                                                        <div key={idx} className="text-center">
                                                            <t.Icon size={32} color={t.cor} />
                                                            <p className="small mt-1 mb-0">{t.nome}</p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    <div className="accordion" id={`accordionICP${cardIndex}`}>
                                        {etapas.map(({ titulo, subtitulo, texto }, etapaIndex) => {
                                            const collapseId = `collapseICP${cardIndex}-${etapaIndex}`;
                                            const headingId = `headingICP${cardIndex}-${etapaIndex}`;

                                            return (
                                                <div className="accordion-item" key={etapaIndex}>
                                                    <h2 className="accordion-header" id={headingId}>
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-expanded="false"
                                                            aria-controls={collapseId}
                                                        >
                                                            {titulo}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={collapseId}
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby={headingId}
                                                        data-bs-parent={`#accordionICP${cardIndex}`}
                                                    >
                                                        <div className="accordion-body">
                                                            <h6>{subtitulo}</h6>
                                                            <p>{texto}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Arquivos / Certificados / Relatórios (múltiplos) */}
                                    {arquivo && arquivo.length > 0 && (
                                        <div className="mt-2">
                                            <strong className="d-block mb-2 text-primary">Materiais:</strong>
                                            <div className="d-flex flex-wrap gap-2">
                                                {arquivo.map(([label, fileName], i) => (
                                                    <a
                                                        key={i}
                                                        href={`${process.env.PUBLIC_URL}/certificado_premios/${fileName}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2"
                                                    >
                                                        {label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}