import { useEffect, useState } from "react";

// Faz o fetch dos livros e mostra na tela, taca um h2 e um h3 com o nome e autor do livro
// O fetch é feito na API do Google Books, e o resultado é mostrado na tela
// O input é usado para buscar os livros, e o botão chama a função de buscar livros
// O useEffect é usado para fazer o fetch dos livros quando o componente é montado

function BuscarLivros() {
  const [livros, setLivros] = useState<{ id: string; volumeInfo: { title: string; authors?: string[] } }[]>([]);
  const [query, setQuery] = useState<string>("");

  const buscarLivros = async () : Promise<void>=> {
    if (!query.trim()) return; 

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    if (data.items) {
      setLivros(data.items);
    } else {
      setLivros([]);
    }
  };

  useEffect(() => {
    buscarLivros();
  }, []);

  return (
    <div>
      <h1>Buscar Livros</h1>
      <input
        type="text"
        placeholder="Digite o nome do livro"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={buscarLivros}>Buscar</button>

      <div>
        {livros.length > 0 ? (
          livros.map((livro) => (
            <div key={livro.id}>
              <h3>{livro.volumeInfo.title}</h3>
              {livro.volumeInfo.authors && (
                <p>Autor: {livro.volumeInfo.authors.join(", ")}</p>
              )}
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado</p>
        )}
      </div>
    </div>
  );
}

export default BuscarLivros;
