import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrado from "paginas/NaoEncontrado";


function AppRoutes() {
    return (

        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<PaginaPadrao/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="/sobremim" element={<SobreMim/>}/>
                </Route>

                <Route path="/post/:id/*" element={<Post/>}/> 
                <Route path="*" element={<NaoEncontrado/>}/>
            </Routes>
            <Rodape/>
        </BrowserRouter>
    );
}

export default AppRoutes;