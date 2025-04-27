import { useState } from "react";

//contador que tem um if que verifica se o valor é 5, se for, ele mostra um alert com a mensagem "Você clicou 5 vezes!"

function BotaoCondicional() {
  const [valor, setValor] = useState<number>(0);

  const clique = (): void => {
    setValor((prevValor) => {
      const novoValor = prevValor + 1;
      if (novoValor === 5) {
        alert("Você clicou 5 vezes!");
      }
      return novoValor;
    });
  };

  return (
    <div>
      <button onClick={clique}>Clique aqui</button>
      <p>Você clicou {valor} vezes</p>
    </div>
  );
}

export default BotaoCondicional;
