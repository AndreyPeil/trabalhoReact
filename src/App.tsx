import { useNavigate } from "react-router-dom";

import './App.css'

function App() {
  const navigate = useNavigate();

  return(
   <>
   <h1>Exercicios do modulo 1</h1>
   <button onClick={() => navigate("/Count")}>Count</button>
   <button onClick={() => navigate("/Modo")}>Modo</button>
   <button onClick={() => navigate("/Botao")}>Botao que some</button>
   <button onClick={() => navigate("/NomeUser")}>Nome do user</button>
   <button onClick={() => navigate("/Shopping")}>lista compra</button>
   </>
  
  )
}

export default App
