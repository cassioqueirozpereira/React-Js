import React from 'react'
import { useState } from 'react'

const EventHandlingExamples = () => {

    const handleClick = () => {
        alert("Testando")
    }

    const handleGreat = (name) => {
        alert(`Olá ${name}`)
    }

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`Enviado! ${name}`)
    }

  return (
    <div>
        <button onClick={() => alert("Oi")}>Clique aqui</button>

        <button onClick={handleClick}>Clique aqui 2</button>
        <br />
        <button onClick={() => handleGreat("Cássio")}>Dizer olá Cássio</button>

        <button onClick={() => handleGreat("Dilnara")}>Dizer olá Dilnara</button>
        <br />
        <form onSubmit={handleSubmit}>
            <input
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Digite seu nome' />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default EventHandlingExamples