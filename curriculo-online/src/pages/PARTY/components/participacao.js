import { cartaz } from '../data';

export default function Participacao() {
    return (
        <section className="bg-light" id='participacao'>
            <div style={{ height: '60px' }} />
            <div className="container">
                <h3 className="mb-5">Participações</h3>
                {cartaz.map(({ coluna, foto }, index) => (
                    <div className={`row row-cols-1 row-cols-md-${coluna} g-4`}>
                        {foto.map(({ img, url }, index) => (
                            <div className="col">
                                <a
                                    href={url}
                                    target="_blank"

                                    rel="noopener noreferrer"
                                >
                                    <div className="card h-100 shadow">
                                        <div className="card-body">

                                            <img
                                                src={img}
                                                width="100%"
                                                alt="Foto"
                                                style={{ cursor: 'pointer' }}
                                            />

                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                ))}
            </div>

        </section>
    )
}