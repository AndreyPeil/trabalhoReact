import { useNavigate } from "react-router-dom";

//aqui é o componente Modo, que tem dois botões que mudam o tema da página para claro ou escuro
//o primeiro botão muda o tema para escuro, o segundo botão muda o tema para claro
//o useNavigate é usado para navegar entre as páginas, o botão Voltar leva para a página inicial

function Modo() {
    const navigate = useNavigate();


    const changeToDark = (): void => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    };

    const ChangeToLight = () : void => {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    };
  return (
    <>
    <div className="modo">
      <button onClick={changeToDark}>Escuro</button>
      <button onClick={ChangeToLight}>Claro</button>
    </div>
    <button onClick={() => navigate("/")}>Voltar</button>
    </>
    
    
     );
}


export default Modo;    