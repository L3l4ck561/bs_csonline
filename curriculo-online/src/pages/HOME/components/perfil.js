import { tecnologias, skills } from '../data';

export default function Perfil() {
    return (
        <section id="perfil" className="bg-light-gray">
            <div style={{ height: '40px' }} />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="card text-center shadow">
                            <div className="card-body">
                                <p className="card-text">
                                    - Focado em aprender e dominar tecnologias atuais.
                                    <br />
                                    - Interesse em aprofundar conhecimentos em Ciência de Dados.
                                </p>

                                <h5 className="card-title">Minhas Skills</h5>
                                <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">

                                    {tecnologias.map(({ nome, Icon, cor }) => (
                                        <div key={nome} className="text-center tech-icon">
                                            <Icon size={40} color={cor} />
                                            <p className="small mt-1 mb-0">{nome}</p>
                                        </div>
                                    ))}

                                </div>

                                <br />

                                <div className="accordion" id="accordionCompetencia">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
                                                Mais detalhes das skills
                                            </button>
                                        </h2>

                                        <div id="collapseSkills" className="accordion-collapse collapse" data-bs-parent="#accordionCompetencia">
                                            <div className="accordion-body">

                                                <section id="skills">
                                                    <div className="container">
                                                        {skills.map(({ cor, titulo, nomes }, index) => (
                                                            <div className="mb-3" key={index}>
                                                                <h5 className={`text-${Array.isArray(cor) ? cor[0] : cor}`}>{titulo}</h5>

                                                                <div className="d-flex flex-wrap gap-2">
                                                                    {nomes?.map((e, i) => (
                                                                        <span
                                                                            key={i}
                                                                            className={`badge bg-${Array.isArray(cor) ? cor[1] : cor} fs-6 px-3 py-2`}
                                                                        >
                                                                            {e}
                                                                        </span>
                                                                    ))}
                                                                </div>

                                                            </div>
                                                        ))}

                                                    </div>
                                                </section>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}