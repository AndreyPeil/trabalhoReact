import { useEffect, useState } from "react";
//paga o valor do input no título da página
// o valor do input é salvo no estado e o título da página é atualizado com o valor do input
function TrocarTitulo() {
  const [titulo, setTitulo] = useState<string>("");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

  return (
    <>
      <input
        type="text"
        value={titulo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitulo(e.target.value)}
        placeholder="Digite o título"
      />
    </>
  );
}

export default TrocarTitulo;
