import React from 'react'

const JsxExamples = () => {

    const userName = "Carlos";
    const user = {
        name: "Ana",
        lastName: "Souza"
    };

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = false;

    const userRole = "admin";

    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Pedro"}
    ]

  return (
    <div>
        {/* BÁSIO */}

        <h2>Conteúdo que o usuário vai ver</h2>

        {/* Listando dados do usuário */}
        <p>
            O nome do usuário é: {userName}
        </p>

        <p>
            Usuário: {user.name} {user.lastName}
        </p>

        <p>{2 + 2}</p>

        <p>{getGreeting(userName)} </p>
        <p>{getGreeting(`Cássio`)} </p>

        {/* DIFERENÇAS DO HTML */}
        <div className="alguma-coisa">Este cara</div>

        <button onClick={() => alert("teste")}>Clique aqui</button>

        <input type="text" placeholder='Digite algo'/>

        {/* RENDERIZAÇÃO CONDICIONAL */}
        {userIsLoggedIn ? (
            <p>Caso: está logado</p>
        ) : (
            <p>Caso: Não está logado</p>
        )}

        <p>{userRole === "admin" && "Você é um admin"}</p>

        {/* RENDERIZAÇÃO DE LISTAS */}
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.id} - {user.name}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default JsxExamples