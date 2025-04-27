import { useParams } from "react-router-dom";
//traz os detalhes do produto que acessou por meio da url
function Detalhes() {
    const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Detalhes</h1>
      <p>Detalhes do produto de id:{id}</p>
    </div>
  );
}

export default Detalhes;