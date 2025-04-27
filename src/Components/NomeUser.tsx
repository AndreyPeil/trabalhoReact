import { useState } from "react";
import { useNavigate } from "react-router-dom";

//paga o valor do input e mostra na tela
//o use state nome é usado para mudar o valor do nome, que começa em ""


function Nomeuser() {
    const navigate = useNavigate();

    const [nome, setNome] = useState<string>("")
    function mostrar() {
        setNome((document.getElementById("teste") as HTMLInputElement)?.value)
    }
    return (
        <>
        <div>
            <input id="teste" type="text" />
            <button onClick={mostrar}>Enviar</button>
            <p>ola: {nome}</p>
        </div>
        <button onClick={() => navigate("/")}>Voltar</button>
        </>
        
    )

}

export default Nomeuser;
