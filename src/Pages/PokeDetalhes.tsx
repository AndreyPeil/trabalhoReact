import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//faz requisição para a api do pokemon e pega os detalhes do pokemon
//o nome do pokemon e usado para fazer a requisição na api
//traz infos de nome, altura, peso e habilidades. Pega do MAP 

function PokemonDetails() {
  const { name } = useParams<{ name: string }>(); 
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async (): Promise<void> => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError("Erro ao buscar os detalhes do Pokémon.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <h3>Habilidades:</h3>
          <ul>
            {pokemon.abilities.map((ability: any) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default PokemonDetails;