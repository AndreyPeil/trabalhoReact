import { useEffect, useState, useRef } from "react";

//temporizador que conta o tempo em segundos e atualiza a cada segundo
// o temporizador é iniciado quando o componente é montado e é limpo quando o componente é desmontado (reload)

function Temporizador() {
  const [contador, setContador] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Temporizador: {contador}</h2>
    </div>
  );
}

export default Temporizador;
