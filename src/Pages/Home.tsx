import { useNavigate } from "react-router-dom";
//pagina inicial com dois botoes, um para ver os pokemons e outro para pesquisar por nome
function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <p>Pokemons</p>
      <button onClick={() => navigate("/pokemons")}>Ver Pokémons (20)</button>
      <button onClick={() => navigate("/pesquisarPorNome/")}>Pesquisar por nome</button>
    </div>
  );
}

export default Home;