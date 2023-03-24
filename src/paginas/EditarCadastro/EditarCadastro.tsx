import "../Cadastro/cadastro.css";
import API from "../../api/Api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Cadastro } from "../../tipos/cadastroTypes";

export function EditarCadastro() {

    const { id } = useParams();

    const [doc, setDoc] = useState('');
    const [contato, setContato] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [telefoneContato, setTelefoneContato] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [emailContato, setEmailContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const navigate = useNavigate();

    async function buscarCadastroPorId(id: number | any) {

        try {
            const lista = await API.get('/lista-de-cadastros');
            const filtragem = lista.data.filter((cad: Cadastro) => cad.id === +id);
            const cadastro = filtragem[0];
            setDoc(cadastro.doc)
            setContato(cadastro.contato)
            setNomeFantasia(cadastro.nomeFantasia)
            setTelefoneContato(cadastro.telefoneContato)
            setRazaoSocial(cadastro.razaoSocial)
            setEmailContato(cadastro.emailContato)
            setEndereco(cadastro.endereco)
            setBairro(cadastro.bairro)
            setCidade(cadastro.cidade)
            setUf(cadastro.uf)
            setCep(cadastro.cep)
        } catch (error) {
            console.log(error)
        }
    }

    async function editarCadastro(event: any) {
        event.preventDefault();

        const body = {
            id: Number(id),
            doc,
            contato,
            nomeFantasia,
            telefoneContato,
            razaoSocial,
            emailContato,
            endereco,
            bairro,
            cidade,
            uf,
            cep
        }

        try {
            const response = await API.post('/editar', body);
            navigate('/lista-de-cadastros')
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function cancelarEnvio() {
        
        setDoc('');
        setContato('');
        setNomeFantasia('');
        setTelefoneContato('');
        setRazaoSocial('');
        setEmailContato('');
        setEndereco('');
        setBairro('');
        setCidade('');
        setUf('RJ');
        setCep('');

        navigate('/lista-de-cadastros')
    }


    useEffect(() => { buscarCadastroPorId(id) }, [])

    return (
        <div className="container align-self-center p-3 bg-gray">
            <h5 className="m-3">Editar Cadastro</h5>
            <form className="row g-3 m-3 p-3 bg-white" onSubmit={editarCadastro}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">CPF ou CNPJ</label>
                    <input type="number" className="form-control" id="inputEmail4" value={doc} onChange={e => { setDoc(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Contato</label>
                    <input type="text" className="form-control" id="inputPassword4" value={contato} onChange={e => { setContato(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Nome Fantasia</label>
                    <input type="text" className="form-control" id="inputEmail4" value={nomeFantasia} onChange={e => { setNomeFantasia(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Telefone do Contato</label>
                    <input type="text" className="form-control" id="inputPassword4" value={telefoneContato} onChange={e => { setTelefoneContato(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Razão Social</label>
                    <input type="text" className="form-control" id="inputEmail4" value={razaoSocial} onChange={e => { setRazaoSocial(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">E-mail do Contato</label>
                    <input type="email" className="form-control" id="inputPassword4" value={emailContato} onChange={e => { setEmailContato(e.target.value) }} required />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" value={endereco} placeholder="1234 Main St" onChange={e => { setEndereco(e.target.value) }} required />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="inputAddress2" value={bairro} placeholder="Apartment, studio, or floor" onChange={e => { setBairro(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" value={cidade} onChange={e => { setCidade(e.target.value) }} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">UF</label>
                    <select id="inputState" className="form-select" onChange={e => { setUf(e.target.value) }}>
                        <option selected>{uf}</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AM</option>
                        <option>AP</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MG</option>
                        <option>MS</option>
                        <option>MT</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>PR</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>RS</option>
                        <option>SC</option>
                        <option>SE</option>
                        <option>SP</option>
                        <option>TO</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">CEP</label>
                    <input type="text" className="form-control" id="inputZip" value={cep} onChange={e => { setCep(e.target.value) }} required />
                </div>
                <div className='d-flex justify-content-end'>
                    <div className="col-1">
                        <button type="button" className="btn btn-primary" onClick={cancelarEnvio}>Cancelar</button>
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Editar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}