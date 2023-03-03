import Rodape from "componetes/Rodape";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componetes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";


function AppRoutes() {
  return (
  <BrowserRouter>
    <Menu />

    
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobremim" element={<SobreMim />} />
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>

    <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;
