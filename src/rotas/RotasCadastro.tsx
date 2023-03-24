import { Cadastro } from "../paginas/Cadastro/Cadastro";
import { Routes, Route } from "react-router-dom";

export function RotasCadastro() {
    return (
        <Routes>
            <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
    )
}