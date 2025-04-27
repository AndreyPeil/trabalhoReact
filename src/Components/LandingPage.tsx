import { BrowserRouter, Routes, Route } from "react-router-dom";
import Botao from "./Botao";
import Nomeuser from "./NomeUser";
import Modo from "./Modo";
import Count from "./Count";
import MainApp from "../App"; 
import ListaCompras from "./ListaCompras";

//rotas e coisarada

function LandingPage() {
  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/Botao" element={<Botao />} />
        <Route path="/Nomeuser" element={<Nomeuser />} />
        <Route path="/Modo" element={<Modo />} />
        <Route path="/Count" element={<Count />} />
        <Route path="/Shopping" element={<ListaCompras/>}/>
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default LandingPage;
