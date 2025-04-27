import { useEffect, useState } from "react";
//busca os usuarios e mostra na tela, taca um h2 e um h3 com o nome e id do usuario
// O fetch é feito na API do jsonplaceholder, e o resultado é mostrado na tela
export default function Users() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);


    return (
    <div>
    <h2>usuários</h2>
    {users.map((user: any) => (
        <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            
        </div>
    ))}
    </div>
    )


}