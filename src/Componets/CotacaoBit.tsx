import { use, useEffect, useState } from "react";
//faz a fetch da cotacao do bitcoin e mostra na tela, taca um h2 e um h3 com o preco do bitcoin
//faz o fetch a cada 10 segundos com o setInterval, e limpa o intervalo com o clearInterval
function CotacaoBit() {

    const [cotacao, setCotacao] = useState<number>(0);

    const fetchData = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl');
        const data = await res.json();
        setCotacao(data.bitcoin.brl);
    }

    useEffect(() => {
        fetchData(); 
    
        const intervalId = setInterval(() => {
          fetchData(); 
        }, 10000); 
    
    
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div>
      <h3>Preço bit</h3>
      <p>Preco: {cotacao}</p>
      
    </div>
  );
}

export default CotacaoBit;