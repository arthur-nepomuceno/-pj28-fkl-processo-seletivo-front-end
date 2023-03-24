export function Lista() {
    return (
        <div className="container align-self-center p-3 bg-gray">
            <h5 className="m-3">Listagem de Pessoas</h5>
            <form className="row g-3 m-3 p-3 bg-white">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Código</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Nome Fantasia</label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputEmail4" className="form-label">Razão Social</label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-2 border">
                    <div className="col d-flex border">
                        <button type="submit" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search me-1" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                            Filtrar
                        </button>
                    </div>
                </div>
                <div className="d-flex justify-content-start">
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary rounded-pill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill m-1" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>
                            </svg>
                            Incluir
                        </button>
                    </div>
                </div>

                <div className="col m-3 p-3 border-top border-bottom border-secondary">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-secondary">
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">UF</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00001</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>SC</td>
                                </tr>
                                <tr>
                                    <td>00002</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>RJ</td>
                                </tr>
                                <tr>
                                    <td>00003</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>MG</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </div>
    )   
}