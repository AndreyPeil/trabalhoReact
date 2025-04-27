import { useState } from 'react'
import { useNavigate } from "react-router-dom";

//aqui é o componente Count, que tem um contador que pode ser incrementado ou decrementado
//o use state count é usado para mudar o valor do contador, que começa em 0
//o use state setCount é usado para mudar o valor do contador, que começa em 0
//quando o botão + é clicado, o contador é incrementado em 1, quando o botão - é clicado, o contador é decrementado em 1
function count() {
    const navigate = useNavigate();

  const [count, setCount] = useState<number>(0)

  return (
    <>
      
      <h1>contador</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <p>
          
          {count}
          </p>        
        
      </div>
      
    <button onClick={() => navigate("/")}>Voltar</button>
    </>
  )
}

export default count
