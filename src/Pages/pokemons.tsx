import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//20 primeiros pokemons
//traz eles com o botao de detalhes
//ao clicar no botao leva pra pagina de detalhes do pokemon (mesmo esquema que no de pesquisar por nome ksksks)
function Pokemons() {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]); 
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPokemons = async (): Promise<void> => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=20');
        const data = await response.json();
        setPokemons(data.results); 
      } catch (error) {
        console.error("Erro ao buscar os Pokémons:", error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <><li key={index}>{pokemon.name}</li><button onClick={() => navigate(`/pokemons/${pokemon.name}`)}>Mais detalhes</button></>

        ))}
      </ul>
    </div>
  );
}

export default Pokemons;