import { Lista } from "../paginas/Lista/Lista";
import { Routes, Route } from "react-router-dom";

export function RotasLista() {
    return (
        <Routes>
            <Route path="/lista-de-cadastros" element={<Lista />} />
        </Routes>
    )
}