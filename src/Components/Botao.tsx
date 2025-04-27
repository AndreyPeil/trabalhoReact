import { useState } from "react";
import { useNavigate } from "react-router-dom";


//aqui é o componente Botao, que tem um botão que mostra ou oculta o texto "Ola Mundo"
//se o use state monstrando for true, o texto é mostrado, se for false, o texto é oculto
//o use state nome é usado para mudar o texto do botão de "Ola Mundo" para " " quando o botão é clicado
function Botao(){
    const navigate = useNavigate();

    const [monstrando, setMostrando] = useState<boolean>(false)    
    const [nome, setNome] = useState<string>("Ola Mundo")

    function matar(){

        if(monstrando === true) {
            setMostrando(false);
            setNome("Ola Mundo")
        } else {
            setMostrando(true);
            setNome(" ")
        }
    }
    return(<>
    
    <div>
        <p>{nome}</p>

        <button onClick={matar}>Mostrar/Ocultar</button>
    </div>

    <button onClick={() => navigate("/")}>Voltar</button>

    </>)
}


export default Botao;