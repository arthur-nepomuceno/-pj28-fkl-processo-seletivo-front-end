import { Routes, Route } from "react-router-dom";
import { Lista } from "../paginas/Lista/Lista";
import { Cadastro } from "../paginas/Cadastro/Cadastro";
import { EditarCadastro } from "../paginas/EditarCadastro/EditarCadastro";

export function Rotas() {
    return (
        <Routes>
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/lista-de-cadastros' element={<Lista />} />
            <Route path='/editar/:id' element={<EditarCadastro />} />
        </Routes>
    )
}