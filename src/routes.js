import PaginaPadrao from "componetes/PaginaPadrao";
import Rodape from "componetes/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componetes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Post from "./paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";


function AppRoutes() {
  return (
  <BrowserRouter>
    <Menu />

    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="posts/:id" element={<Post />} />
      </Route>
      
          
      <Route path="*" element={<NaoEncontrada/>} />
    </Routes>
   
    <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;
