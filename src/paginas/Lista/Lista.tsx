import API from "../../api/Api";
import { useEffect, useState } from "react";
import { Cadastro } from "../../types/cadastroTypes";

export function Lista() {

    const [cadastros, setCadastros] = useState([]);
    const [listagem, setListagem] = useState([])
    const [filtro, setFiltro] = useState('')

    async function buscarCadastros() {

        try {
            const lista = await API.get('/lista-de-cadastros');
            setCadastros(lista.data);
            setListagem(lista.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { buscarCadastros() }, [])

    async function filtrarCadastros(event: any) {
        event.preventDefault();

        if (filtro === '') {
            setListagem(cadastros);
        } else {
            const lista = cadastros.filter(
                (cad: Cadastro | any) => cad.id === +filtro || cad.nomeFantasia === filtro || cad.razaoSocial === filtro
            );

            setListagem(lista);
        }

        return;
    }

    return (
        <div className="container align-self-center p-3 bg-gray">
            <h5 className="m-3">Listagem de Pessoas</h5>
            <form className="row g-3 m-3 p-3 bg-white" onSubmit={filtrarCadastros}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Código</label>
                    <input type="number" className="form-control" id="inputNumber4" onChange={e => { setFiltro(e.target.value) }} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Nome Fantasia</label>
                    <input type="text" className="form-control" id="inputText4" onChange={e => { setFiltro(e.target.value) }} />
                </div>
                <div className="col-md-9">
                    <label htmlFor="inputEmail4" className="form-label">Razão Social</label>
                    <input type="text" className="form-control" id="inputText4" onChange={e => { setFiltro(e.target.value) }} />
                </div>
                <div className="col-md-2">
                    <div className="col d-flex">
                        <button type="submit" className="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search me-1" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
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
            </form>

            <div className="col m-3 p-3 border-top border-bottom border-secondary bg-white">
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
                            {
                                listagem
                                    .map((item: Cadastro | any, index) =>
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.contato}</td>
                                                <td>{item.cidade}</td>
                                                <td>{item.uf}</td>
                                                <td>editar/deletar</td>
                                            </tr>
                                        </>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}