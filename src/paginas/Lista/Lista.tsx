import API from "../../api/Api";
import "../Lista/lista.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cadastro } from "../../tipos/cadastroTypes";

export function Lista() {

    const [cadastros, setCadastros] = useState([]);
    const [listagem, setListagem] = useState([])
    const [filtro, setFiltro] = useState('')
    const navigate = useNavigate();

    async function buscarCadastros() {

        try {
            const lista = await API.get('/lista-de-cadastros');
            setCadastros(lista.data);
            setListagem(lista.data);
        } catch (error) {
            console.log(error)
        }
    }

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

    async function incluirCadastro() {
        navigate('/cadastro')
    }

    async function deletarCadastro(id: number) {
        //alert(`Deletar cadastro de id ${id}?`)

        try {
            await API.delete(`/deletar/${id}`);
            const lista = await API.get('/lista-de-cadastros');
            setCadastros(lista.data);
            setListagem(lista.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function editarCadastro(id: number) {
        navigate(`/editar/${id}`);
    }

    useEffect(() => { buscarCadastros() }, [])

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
                        <button type="button" className="btn btn-primary rounded-pill" onClick={incluirCadastro}>
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
                                                <td>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square m-1 hover" viewBox="0 0 16 16" onClick={() => editarCadastro(item.id)}>
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill m-1 hover" viewBox="0 0 16 16" onClick={() => deletarCadastro(item.id)}>
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                    </svg>
                                                </td>
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