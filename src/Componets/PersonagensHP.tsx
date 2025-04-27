import { useState } from "react";
// Faz o fetch dos personagens do Harry Potter e mostra na tela, taca um h2 e um h3 com o nome e id do personagem
// O fetch é feito na API do hp-api, e o resultado é mostrado na tela
// O botão "Mostrar todos os personagens" chama a função todos, que faz o fetch e mostra todos os personagens
// O botão "Mostrar Apenas da Grifinória" chama a função filtrarGrifinoria, que filtra os personagens da casa Grifinória e mostra na tela
function PersonagensHP() {
    const [personagens, setPersonagens] = useState<any[]>([]);
    const [filteredPersonagens, setFilteredPersonagens] = useState<any[]>([]);

    function todos() {
        fetch("https://hp-api.onrender.com/api/characters")
            .then((response) => response.json())
            .then((data) => {
                setPersonagens(data);
                setFilteredPersonagens(data); // Display all characters initially
            });
    }

    function filtrarGrifinoria() {
        const grifinoria = personagens.filter(personagem => personagem.house === "Gryffindor");
        setFilteredPersonagens(grifinoria);
    }

    return (
        <div>
            <button onClick={todos}>Mostrar todos os personagens</button>
            <button onClick={filtrarGrifinoria}>Mostrar Apenas da Grifinória</button>
            <div>
                {filteredPersonagens.map((personagem, index) => (
                    <div key={index}>
                        <h3>{personagem.name}</h3>
                        <p>{personagem.house}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonagensHP;
