import { useState } from "react";
import { useNavigate } from "react-router-dom";

//aqui é o componente ListaCompras, que tem uma lista de compras que pode ser adicionada ou removida
//o use state item é usado para mudar o valor do item, que começa em ""
//o use state lista é usado para mudar o valor da lista, que começa em []
//quando o botão Adicionar é clicado, o item é adicionado a lista, quando o botão Apagar tudo é clicado, a lista é apagada

function ListaCompras() {
    const navigate = useNavigate();

  const [item, setItem] = useState<string>("");
  const [lista, setLista] = useState<string[]>([]);

  function add() {
    if (item.trim() !== "") {
      setLista([...lista, item]);
      setItem(""); 
    }
  }

  function remove() {
    setLista([]); 
  }

  return (
    <>
      <input
        type="text"
        placeholder="Escreva o item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={add}>Adicionar</button>
      <button onClick={remove}>apagar tudo</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => navigate("/")}>Voltar</button>

    </>
  );
  

}

export default ListaCompras;
