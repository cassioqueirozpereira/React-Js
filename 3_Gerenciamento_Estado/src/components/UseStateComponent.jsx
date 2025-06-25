import React, { useState } from 'react'

// useState = hooks

// Sempre que vamos alterar o valor de algo => useState
// Se é somente leitura => var, state

const UseStateComponent = () => {
    // Criando a variável de consulta (count), e uma de alteração (setCount)
    const [count, setCount] = useState(0)

    const increment = () => {
        // setCount (count + 1)
        setCount((prevCount) => prevCount + 1)
        console.log(count);
    }

    const [user, setUser] = useState({
        name: "Cássio",
        age: 33,
        hobbies: ["Fámilia", " Programação"]
    })

    const updateUserAge = () => {
        setUser((prevUser) => ({
                ...prevUser,
                age: prevUser.age + 1,
            }))
    }

  return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>
            Nome: {user.name}, Idade: {user.age} e Hobbies: {user.hobbies}
        </p>

        <button onClick={updateUserAge}>Incrementar Idade</button>
    </div>

  )
}

export default UseStateComponent