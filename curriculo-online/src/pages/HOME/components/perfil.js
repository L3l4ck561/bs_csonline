import { tecnologias, skills } from '../data';
import { topicos } from '../../../components/infoPerfil/data';

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
                                    {topicos.map((item, idx) => (
                                        <>
                                            {item}
                                            <br />
                                        </>
                                    ))}
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
                                                                <h5 className={`text-${Array.isArray(cor) ? cor[0] : cor}`}>
                                                                    {titulo}
                                                                </h5>

                                                                <div className="d-flex flex-wrap gap-3">
                                                                    {nomes?.map((item, i) => {
                                                                        if (typeof item === "object" && item.Icon) {
                                                                            return (
                                                                                <div key={i} className={`badge bg-${Array.isArray(cor) ? cor[1] : cor} text-center gap-2 fs-6 px-1 py-1`} style={{ 'display': 'flex' }}>
                                                                                    <div style={{ 'background': '#fff','padding': 2, 'borderRadius':3 }}>
                                                                                        <item.Icon size={18} color={item.cor || "#6c757d"} />
                                                                                    </div>
                                                                                    <p className="small mt-1 mb-0" style={{'flex':3,'paddingRight':6}}>{item.nome}</p>
                                                                                </div>
                                                                            );
                                                                        }

                                                                        return (
                                                                            <span
                                                                                key={i}
                                                                                className={`badge bg-${Array.isArray(cor) ? cor[1] : cor} fs-6 px-3 py-2`}
                                                                                style={{ 'height': 30, 'margin': 'auto 0' }}
                                                                            >
                                                                                {item}
                                                                            </span>
                                                                        );
                                                                    })}
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