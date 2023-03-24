import '../Cadastro/cadastro.css'
import API from '../../api/Api'
import { useState } from 'react'

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

    async function Send(event: any) {
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
            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container align-self-center p-3 bg-gray">
            <h5 className="m-3">Cadastro de Pessoas</h5>
            <form className="row g-3 m-3 p-3 bg-white" onSubmit={Send}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">CPF ou CNPJ</label>
                    <input type="text" className="form-control" id="inputEmail4" onChange={e => { setDoc(e.target.value) }} required />
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
                    <input type="text" className="form-control" id="inputPassword4" onChange={e => { setTelefoneContato(e.target.value) }} required />
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
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={e => { setEndereco(e.target.value) }} required />
                </div>
                <div className="col-6">
                    <label htmlFor="inputAddress2" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={e => { setBairro(e.target.value) }} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">Cidade</label>
                    <input type="text" className="form-control" id="inputCity" onChange={e => { setCidade(e.target.value) }} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">UF</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">CEP</label>
                    <input type="text" className="form-control" id="inputZip" onChange={e => { setCep(e.target.value) }} required />
                </div>
                <div className='d-flex justify-content-end'>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Cancelar</button>
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}