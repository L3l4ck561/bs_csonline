import { perfil, desc } from './data';

export default function Modal() {
    return (
        <div
            className="modal fade"
            id="myModal"
            data-bs-backdrop="static"
            tabIndex="-1"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h2 className="modal-title">Perfil </h2>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Fechar"
                        ></button>
                    </div>

                    {/* Modal Body */}
                    <div className="modal-body">
                        <div className="img text-center mt-2">
                            <img
                                src={perfil.img}
                                alt="Foto de perfil"
                                className="rounded-circle"
                                width="180px"
                                height="180px"
                            />
                        </div>
                        <br />
                        <div className="text">
                            <p>{perfil.nome}</p>
                            <p>Idade: {perfil.idade}</p>
                            <p>{perfil.cidade}</p>
                            <hr />
                            <p style={{ textAlign: "justify" }}>{desc}</p>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

