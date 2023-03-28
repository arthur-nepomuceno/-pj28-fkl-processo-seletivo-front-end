import "../Cadastro/cadastro.css";
import API from "../../api/Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Cadastro() {

    const [doc, setDoc] = useState('');
    const [contato, setContato] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [telefoneContato, setTelefoneContato] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [emailContato, setEmailContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('RJ');
    const [cep, setCep] = useState('');
    const navigate = useNavigate();

    async function enviarCadastro(event: any) {
        event.preventDefault();

        const body = {
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
            const response = await API.post('/cadastro', body);
            alert('Cadastro feito com sucesso.');
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

    return (
        <div className="container align-self-center p-3" style={{background: "#E3E7EA"}}>
            <h5 className="m-3">Cadastro de Pessoas</h5>
            <form className="row g-3 m-3 p-3 bg-white" onSubmit={enviarCadastro}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">CPF ou CNPJ</label>
                    <input type="number" className="form-control" id="inputEmail4" onChange={e => { setDoc(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Contato</label>
                    <input type="text" className="form-control" id="inputPassword4" onChange={e => { setContato(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Nome Fantasia</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={e => { setNomeFantasia(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Telefone do Contato</label>
                    <input type="number" className="form-control" id="inputPassword4" onChange={e => { setTelefoneContato(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Razão Social</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={e => { setRazaoSocial(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">E-mail do Contato</label>
                    <input type="email" className="form-control" id="inputPassword4" onChange={e => { setEmailContato(e.target.value) }} required />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress" className="form-label">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" onChange={e => { setEndereco(e.target.value) }} required />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="inputAddress2" onChange={e => { setBairro(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" onChange={e => { setCidade(e.target.value) }} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">UF</label>
                    <select id="inputState" className="form-select" onChange={e => { setUf(e.target.value) }}>
                        <option selected>AC</option>
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
                    <input type="number" className="form-control" id="inputZip" onChange={e => { setCep(e.target.value) }} required />
                </div>
                <div className='d-flex justify-content-end'>
                    <div className="col-1">
                        <button type="button" style={{color: "white"}} className="btn btn-sweet-red" onClick={cancelarEnvio}>Cancelar</button>
                    </div>
                    <div className="col-1">
                        <button type="submit" style={{color: "white"}} className="btn btn-sky-blue">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}