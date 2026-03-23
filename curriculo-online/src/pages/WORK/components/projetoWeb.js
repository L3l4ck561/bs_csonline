import { projetoweb } from '../data';

export default function ProjetoWeb() {
    return (
        <section id="projetoweb" className="py-5">
            <div className="container text-center">
                <h3 className="mb-5">Projetos Web</h3>

                <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center">
                    {projetoweb.map(({ url, nome, tech, img }, index) => (

                        <div className="col" key={index}>
                            <a className='tagA' href={url} >
                                <div className="app-card p-3 rounded">
                                    <img
                                        src={process.env.PUBLIC_URL + img}
                                        className="img-fluid mb-2"
                                        style={{ width: "64px", borderRadius: 15 }}
                                        alt="Calculadora"
                                    />
                                    <h6 className="mb-1">{nome}</h6>
                                    <small className="text-lingth">{tech}</small>
                                </div>
                            </a>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}