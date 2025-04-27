import { useState, useEffect } from "react";
//faz o fetch do clima e mostra na tela, taca um h2 e um h3 com a temperatura e velocidade do vento

function ClimaCidade() {
  const [cidade, setCidade] = useState({
    temperature: null,
    windspeed: null,
    winddirection: null,
  });

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true')
      .then((response) => response.json())
      .then((data) => {
        setCidade(data.current_weather); 
      });
  }, []); 

  return (
    <div>
      <h3>Clima Atual</h3>
      <p>Temperatura: {cidade.temperature}°C</p>
      <p>Velocidade do Vento: {cidade.windspeed} km/h</p>
      <p>Direção do Vento: {cidade.winddirection}°</p>
    </div>
  );
}
export default ClimaCidade;