import { useState } from "react";
import { useNavigate } from "react-router-dom";
//pesquisa por nome especifico
//o usuario digita o nome do pokemon e clica no botao para ver os detalhes
//leva pra paguina de detalhes do pokemon
//o nome do pokemon e passado como parametro na url
function PesquisarNome() {
  const [pokemonName, setPokemonName] = useState(""); 
  const navigate = useNavigate();

  return (
    <div>
      <h1>Pesquisar Nome</h1>
      <input
        type="text"
        name="poke"
        id="poke"
        placeholder="pesquisar o nome do poke"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)}
        
      />
      <button onClick={() => navigate(`/pokemons/${pokemonName}`)}>Mais detalhes</button>
    </div>
  );
}

export default PesquisarNome;