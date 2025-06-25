import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectExamples = () => {

    // Sem dependências
    useEffect(() => {
        console.log("Rodou UseEffect1")
    })

    // Com dependências vazias / Array dependência vazio
    useEffect(() => {
        console.log("Rodou UseEffect2")
    }, [])

    // Com dependências
    useEffect(() => {

    }, [count])

    // useState ativa a re-renderização
    const [count, setCount] = useState(0)

  return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Aumentar contagem</button>
    </div>
  )
}

export default UseEffectExamples