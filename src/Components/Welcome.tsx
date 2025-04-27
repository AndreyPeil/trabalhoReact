import { useEffect } from "react";
//execcuta o console so uma vez quando o componente é montado
function Welcome() {
  useEffect(() => {
    console.log("Bem-vindo(a)!");
  }, []); 

  return (
    <div>
      <h1>Boas Vindas</h1>
      <p>Abra o console para ver a mensagem.</p>
    </div>
  );
}

export default Welcome;
